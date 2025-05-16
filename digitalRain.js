// digitalRain.js

class DigitalRain {
    constructor(canvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            // console.error(`Canvas with ID "${canvasId}" not found.`);
            return; // Silently fail if canvas not present (e.g. if user removes it)
        }
        this.ctx = this.canvas.getContext('2d');
        
        this.options = options; // Store original options

        this.fontSize = options.fontSize || 16;
        this.fontFamily = options.fontFamily || 'VT323, monospace'; // Match dark theme font
        
        this.isDarkTheme = document.body.classList.contains('dark-theme');
        this.updateColorsBasedOnTheme(); // Initial color setup

        this.chars = options.chars || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ";
        
        this.animationId = null;
        this.drops = [];
        this.columns = 0; // Initialize

        this.resize = this.resize.bind(this);
        this.draw = this.draw.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);

        window.addEventListener('resize', this.resize);
        
        const themeSwitch = document.getElementById("theme-switch");
        if(themeSwitch) {
            themeSwitch.addEventListener('change', this.handleThemeChange);
        }

        this.resize(); // Initial setup & column calculation
    }

    updateColorsBasedOnTheme() {
        this.isDarkTheme = document.body.classList.contains('dark-theme');
        
        // Define default colors here and override with options if provided
        const defaultDarkFont = "#00FF00";
        const defaultDarkTrail = "rgba(0, 5, 0, 0.05)"; // More transparent for less distraction
        const defaultDarkGlow = "#00FF00";

        const defaultLightFont = "#006400"; // DarkGreen
        const defaultLightTrail = "rgba(230, 245, 230, 0.08)"; // Very light green, slightly more visible
        const defaultLightGlow = "#008F00";

        this.fontColor = this.isDarkTheme 
            ? (this.options.fontColorDark || defaultDarkFont) 
            : (this.options.fontColorLight || defaultLightFont);
        this.trailColor = this.isDarkTheme 
            ? (this.options.trailColorDark || defaultDarkTrail) 
            : (this.options.trailColorLight || defaultLightTrail);
        this.glowColor = this.isDarkTheme 
            ? (this.options.glowColorDark || defaultDarkGlow) 
            : (this.options.glowColorLight || defaultLightGlow);
    }

    handleThemeChange() {
        // A small delay to ensure body class is updated by the theme switcher's own logic
        setTimeout(() => {
            this.updateColorsBasedOnTheme();
        }, 50);
    }

    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = [];
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.random() * this.canvas.height / this.fontSize - 20; // Start some off-screen
        }
    }

    draw() {
        if (!this.ctx) return;
        this.ctx.fillStyle = this.trailColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.font = this.fontSize + "px " + this.fontFamily;

        for (let i = 0; i < this.drops.length; i++) {
            if (!this.drops[i] && this.drops[i] !== 0) continue; // Ensure drop exists

            const text = this.chars[Math.floor(Math.random() * this.chars.length)];
            
            // Highlight the leading character
            const isLeading = Math.random() > (this.isDarkTheme ? 0.96 : 0.98) ; // Less frequent glow for light
            if (isLeading && this.drops[i] > 3) { 
                this.ctx.fillStyle = this.isDarkTheme ? '#CCFFCC' : '#003300'; 
                this.ctx.shadowColor = this.glowColor;
                this.ctx.shadowBlur = this.isDarkTheme ? 5 : 3; // Less blur for light theme
            } else {
                this.ctx.fillStyle = this.fontColor;
                this.ctx.shadowBlur = 0;
            }
            
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
            this.ctx.shadowBlur = 0; // Reset shadow for next char in loop

            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0; 
            }
            this.drops[i]++;
        }
    }

    start() {
        if (!this.canvas) return;
        if (this.animationId) cancelAnimationFrame(this.animationId);
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
    }
}

// Instantiate for the main background
const rainOptions = {
    fontSize: 18, // VT323 looks better a bit larger for background
    // trailColorDark: "rgba(0, 0, 0, 0.04)", // Example custom option
};
const mainDigitalRain = new DigitalRain('main-background-canvas', rainOptions);

if (mainDigitalRain.canvas) {
    mainDigitalRain.start();
}

export default DigitalRain;