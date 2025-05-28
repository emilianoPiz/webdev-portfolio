// digitalRain.js

/**
 * @class DigitalRain
 * @description Creates a "Matrix-style" digital rain effect on an HTML canvas.
 * The effect is theme-aware and can adapt its colors based on the body class.
 */
class DigitalRain {
    /**
     * Initializes the DigitalRain effect.
     * @param {string} canvasId - The ID of the HTML canvas element.
     * @param {object} [options={}] - Configuration options for the rain effect.
     */
    constructor(canvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            return;
        }
        this.ctx = this.canvas.getContext('2d');
        this.options = options;

        this.fontSize = options.fontSize || 16;
        this.fontFamily = options.fontFamily || 'VT323, monospace';
        
        // Character sets
        this.matrixChars = options.chars || "0123456789ABCDEFﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ";
        this.punkChars = "01$#%*@&?!<>|{}/\\ABCEFHKLMNPRSTVWXYZサЙЩЭツДЖERRORWARNCRITICAL"; // Aggiunti simboli e lettere più "cyberpunk"
        this.shellChars = "01<>/{}\\|[]()-_=+*&^%$#@!abcdef日月火水木金土"; // Placeholder, da definire meglio per shell

        this.charsToUse = this.matrixChars; // Default
        this.currentThemeName = 'matrix'; // Per tracciare il tema corrente

        this.updateColorsBasedOnTheme();

        this.animationId = null;
        this.drops = [];
        this.columns = 0;

        this.resize = this.resize.bind(this);
        this.draw = this.draw.bind(this);
        this.refreshTheme = this.refreshTheme.bind(this); // Nuovo metodo

        window.addEventListener('resize', this.resize);
        this.resize();
    }

    /**
     * Updates color and character properties based on the current body theme class.
     */
    updateColorsBasedOnTheme() {
        const bodyClasses = document.body.classList;
        let themeChanged = false;

        if (bodyClasses.contains('theme-punk')) {
            if (this.currentThemeName !== 'punk') themeChanged = true;
            this.currentThemeName = 'punk';
            this.fontColor = this.options.fontColorPunk || "#FF003C";       // Neon Red
            this.trailColor = this.options.trailColorPunk || "rgba(30, 0, 10, 0.1)";  // Darker, more aggressive trail
            this.glowColor = this.options.glowColorPunk || "#FCEE0A";        // Yellow glow
            this.leadHighlightColor = this.options.leadHighlightPunk || "#FCEE0A"; // Yellow lead
            this.charsToUse = this.punkChars;
        } else if (bodyClasses.contains('theme-shell')) { // Placeholder per Shell
            if (this.currentThemeName !== 'shell') themeChanged = true;
            this.currentThemeName = 'shell';
            this.fontColor = this.options.fontColorShell || "#00E5FF";      // Cyan
            this.trailColor = this.options.trailColorShell || "rgba(0, 10, 20, 0.07)";
            this.glowColor = this.options.glowColorShell || "#FFFFFF";      // White glow
            this.leadHighlightColor = this.options.leadHighlightShell || "#FFFFFF"; // White lead
            this.charsToUse = this.shellChars;
        } else { // Default Matrix theme (basato su dark-theme o meno)
            if (this.currentThemeName !== 'matrix') themeChanged = true;
            this.currentThemeName = 'matrix';
            this.isDarkTheme = bodyClasses.contains('dark-theme'); // o se non ci sono altri temi, è dark di default

            const defaultDarkFont = "#00FF00";
            const defaultDarkTrail = "rgba(0, 5, 0, 0.05)";
            const defaultDarkGlow = "#00FF00";
            const defaultDarkLead = '#CCFFCC';

            const defaultLightFont = "#006400";
            const defaultLightTrail = "rgba(230, 245, 230, 0.08)";
            const defaultLightGlow = "#008F00";
            const defaultLightLead = '#003300';

            this.fontColor = this.isDarkTheme ? (this.options.fontColorDark || defaultDarkFont) : (this.options.fontColorLight || defaultLightFont);
            this.trailColor = this.isDarkTheme ? (this.options.trailColorDark || defaultDarkTrail) : (this.options.trailColorLight || defaultLightTrail);
            this.glowColor = this.isDarkTheme ? (this.options.glowColorDark || defaultDarkGlow) : (this.options.glowColorLight || defaultLightGlow);
            this.leadHighlightColor = this.isDarkTheme ? (this.options.leadHighlightDark || defaultDarkLead) : (this.options.leadHighlightLight || defaultLightLead);
            this.charsToUse = this.matrixChars;
        }
        if(themeChanged){
             // console.log(`Digital Rain theme switched to: ${this.currentThemeName}`);
             // Forzare un ricalcolo delle gocce se i caratteri o la densità cambiano drasticamente
             // this.resize(); // Potrebbe essere troppo drastico, valutare.
        }
    }

    /**
     * Public method to be called by main.js to refresh theme settings.
     */
    refreshTheme() {
        this.updateColorsBasedOnTheme();
        // Potrebbe essere necessario resettare le gocce se la densità del testo cambia molto con il nuovo set di caratteri
        // this.resize(); // Valuta se questo è necessario o se l'effetto è ok senza.
    }

    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = [];
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.random() * this.canvas.height / this.fontSize - (Math.random() * 200); // Stagger più ampio
        }
    }

    draw() {
        if (!this.ctx) return;

        this.ctx.fillStyle = this.trailColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.font = this.fontSize + "px " + this.fontFamily;

        let dropSpeed = 1;
        let leadingCharChance = 0.96; // Default Matrix
        let shadowBlurAmount = 5;

        if (this.currentThemeName === 'punk') {
            dropSpeed = 1.3; // Leggermente più veloce
            leadingCharChance = 0.92; // Più caratteri luminosi
            shadowBlurAmount = 7;
        } else if (this.currentThemeName === 'shell') {
            dropSpeed = 0.8; // Leggermente più lento
            leadingCharChance = 0.97;
            shadowBlurAmount = 4;
        }


        for (let i = 0; i < this.drops.length; i++) {
            if (this.drops[i] === undefined) continue;

            const text = this.charsToUse[Math.floor(Math.random() * this.charsToUse.length)];
            
            const isLeadingCharacter = Math.random() > leadingCharChance;

            if (isLeadingCharacter && this.drops[i] * this.fontSize > 0) { // Assicurati sia visibile
                this.ctx.fillStyle = this.leadHighlightColor;
                this.ctx.shadowColor = this.glowColor;
                this.ctx.shadowBlur = shadowBlurAmount;
                // Per il tema punk, potremmo fare il carattere principale più grande
                if (this.currentThemeName === 'punk' && Math.random() > 0.7) {
                     this.ctx.font = (this.fontSize + 2) + "px " + this.fontFamily; // Un po' più grande
                     this.ctx.fillText(text, i * this.fontSize -1, this.drops[i] * this.fontSize);
                     this.ctx.font = this.fontSize + "px " + this.fontFamily; // Reset
                } else {
                    this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
                }

            } else {
                this.ctx.fillStyle = this.fontColor;
                this.ctx.shadowBlur = 0;
                this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
            }
            this.ctx.shadowBlur = 0; // Reset esplicito

            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i] += dropSpeed;
        }
    }

    start() {
        if (!this.canvas) return;
        if (this.animationId) cancelAnimationFrame(this.animationId);
        this.updateColorsBasedOnTheme(); // Assicurati che i colori siano aggiornati all'avvio
        const animateRain = () => {
            this.draw();
            this.animationId = requestAnimationFrame(animateRain);
        };
        animateRain();
    }

    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        // Opzionale: pulire il canvas quando si ferma
        // if (this.ctx && this.canvas) {
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // }
    }
}

const rainOptions = {
    fontSize: 18,
};

const mainDigitalRain = new DigitalRain('main-background-canvas', rainOptions);

if (mainDigitalRain.canvas) {
    mainDigitalRain.start();
    window.mainDigitalRain = mainDigitalRain; // Rendi accessibile globalmente
}

export default DigitalRain;