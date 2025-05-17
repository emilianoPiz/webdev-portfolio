// digitalRain.js

/**
 * @class DigitalRain
 * @description Creates a "Matrix-style" digital rain effect on an HTML canvas.
 * The effect is theme-aware and can adapt its colors based on whether a 'dark-theme'
 * class is present on the `document.body`.
 */
class DigitalRain {
    /**
     * Initializes the DigitalRain effect.
     * @param {string} canvasId - The ID of the HTML canvas element.
     * @param {object} [options={}] - Configuration options for the rain effect.
     * @param {number} [options.fontSize=16] - Font size of the falling characters.
     * @param {string} [options.fontFamily='VT323, monospace'] - Font family for the characters.
     * @param {string} [options.chars="..."] - String of characters to use for the rain.
     * @param {string} [options.fontColorDark="#00FF00"] - Font color in dark theme.
     * @param {string} [options.trailColorDark="rgba(0, 5, 0, 0.05)"] - Trail color in dark theme.
     * @param {string} [options.glowColorDark="#00FF00"] - Glow color for leading characters in dark theme.
     * @param {string} [options.fontColorLight="#006400"] - Font color in light theme.
     * @param {string} [options.trailColorLight="rgba(230, 245, 230, 0.08)"] - Trail color in light theme.
     * @param {string} [options.glowColorLight="#008F00"] - Glow color for leading characters in light theme.
     */
    constructor(canvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            // console.error(`Canvas with ID "${canvasId}" not found.`);
            // Silently fail if canvas is not present (e.g., if the user removes it from HTML).
            // This prevents errors if the script runs but the corresponding canvas is optional or removed.
            return;
        }
        this.ctx = this.canvas.getContext('2d');

        this.options = options; // Store original options for reference or re-initialization.

        // --- Customizable Properties with Defaults ---
        this.fontSize = options.fontSize || 16;
        this.fontFamily = options.fontFamily || 'VT323, monospace'; // Default to a Matrix-like font.
        this.chars = options.chars || "0123456789ABCDEFﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ"; // Katakana included for classic Matrix feel. plus HEX digits to make it more "hacker-like".

        // Theme-dependent color properties
        this.isDarkTheme = document.body.classList.contains('dark-theme');
        this.updateColorsBasedOnTheme(); // Set initial colors based on current theme.

        // --- Internal State ---
        this.animationId = null; // Stores the ID from requestAnimationFrame.
        this.drops = [];         // Array to store the Y position of each column's leading character.
        this.columns = 0;        // Number of columns, calculated on resize.

        // Bind `this` context for event handlers and animation loop.
        this.resize = this.resize.bind(this);
        this.draw = this.draw.bind(this);
        this.handleThemeChange = this.handleThemeChange.bind(this);

        // --- Event Listeners ---
        window.addEventListener('resize', this.resize);

        // Listen for theme changes if a theme switch element exists.
        const themeSwitch = document.getElementById("theme-switch");
        if (themeSwitch) {
            themeSwitch.addEventListener('change', this.handleThemeChange);
        }

        this.resize(); // Perform initial setup and column calculation.
    }

    /**
     * Updates the color properties based on the current theme (dark/light).
     * Reads theme-specific colors from options or uses predefined defaults.
     */
    updateColorsBasedOnTheme() {
        this.isDarkTheme = document.body.classList.contains('dark-theme');

        // Define default colors for dark and light themes.
        const defaultDarkFont = "#00FF00";                     // Bright green
        const defaultDarkTrail = "rgba(0, 5, 0, 0.05)";        // Very dark, highly transparent trail
        const defaultDarkGlow = "#00FF00";                     // Bright green glow

        const defaultLightFont = "#006400";                    // DarkGreen (for readability on light bg)
        const defaultLightTrail = "rgba(230, 245, 230, 0.08)"; // Very light green, slightly more visible trail
        const defaultLightGlow = "#008F00";                    // Slightly darker green glow for light theme

        // Set colors: Use provided option or fall back to default.
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

    /**
     * Handles theme change events.
     * Updates colors after a short delay to ensure the body class has been updated by the theme switcher.
     */
    handleThemeChange() {
        // A small delay can be helpful if the theme class is updated asynchronously by another script.
        setTimeout(() => {
            this.updateColorsBasedOnTheme();
        }, 50); // 50ms delay
    }

    /**
     * Resizes the canvas to fit the window and recalculates column-dependent properties.
     * Called on window resize and initial setup.
     */
    resize() {
        if (!this.canvas) return; // Safety check if canvas was removed.

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = []; // Reset drops array

        // Initialize the Y position for each column's rain drop.
        // Some drops start off-screen (negative Y) for a staggered entry.
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.random() * this.canvas.height / this.fontSize - 20;
        }
    }

    /**
     * Draws a single frame of the digital rain animation.
     */
    draw() {
        if (!this.ctx) return; // Safety check for rendering context.

        // Draw the fading trail effect: fill canvas with a semi-transparent color.
        this.ctx.fillStyle = this.trailColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Set font for drawing characters.
        this.ctx.font = this.fontSize + "px " + this.fontFamily;

        // Iterate over each column to draw characters.
        for (let i = 0; i < this.drops.length; i++) {
            // Ensure the drop position exists (it might not if columns changed rapidly).
            if (this.drops[i] === undefined) continue;

            // Select a random character from the character set.
            const text = this.chars[Math.floor(Math.random() * this.chars.length)];

            // Highlight the leading character in a stream with a brighter color and glow.
            // Glow is less frequent and intense in light theme for better contrast.
            const isLeadingCharacter = Math.random() > (this.isDarkTheme ? 0.96 : 0.98);
            if (isLeadingCharacter && this.drops[i] > 3) { // Ensure leading character is somewhat visible.
                this.ctx.fillStyle = this.isDarkTheme ? '#CCFFCC' : '#003300'; // Lighter green (dark) / Darker green (light)
                this.ctx.shadowColor = this.glowColor;
                this.ctx.shadowBlur = this.isDarkTheme ? 5 : 3; // Less blur for light theme.
            } else {
                this.ctx.fillStyle = this.fontColor;
                this.ctx.shadowBlur = 0; // No glow for regular trail characters.
            }

            // Draw the character.
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
            this.ctx.shadowBlur = 0; // Reset shadow explicitly for the next character in this loop.

            // Reset drop to the top if it goes off-screen, with a random chance to stagger respawns.
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            // Move the drop down for the next frame.
            this.drops[i]++;
        }
    }

    /**
     * Starts the digital rain animation loop.
     */
    start() {
        if (!this.canvas) return; // Do not start if canvas is not available.
        if (this.animationId) cancelAnimationFrame(this.animationId); // Clear any existing animation frame.

        const animateRain = () => {
            this.draw();
            this.animationId = requestAnimationFrame(animateRain);
        };
        animateRain(); // Begin the loop.
    }

    /**
     * Stops the digital rain animation loop.
     */
    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
}

// --- Instantiate and Start the Rain Effect ---

// Configuration options for the main background digital rain.
const rainOptions = {
    fontSize: 18, // VT323 font generally looks better at slightly larger sizes for background effects.
    // Example of how to override a theme-specific color:
    // trailColorDark: "rgba(0, 0, 0, 0.04)", // A custom, slightly less opaque trail for dark theme.
};

// Create an instance of DigitalRain for the main background canvas.
const mainDigitalRain = new DigitalRain('main-background-canvas', rainOptions);

// Start the animation only if the DigitalRain instance was successfully created (i.e., canvas was found).
if (mainDigitalRain.canvas) {
    mainDigitalRain.start();
}

// Export the class for use in other modules if needed (e.g., in a module bundler setup).
export default DigitalRain;