const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette")
const svgToDataUri = require("mini-svg-data-uri")

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./styles/globals.css",
    ],
    theme: {
        extend: {
            backgroundImage: {
                gradient:
                    "linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)",
            },
            animation: {
                opacity: "opacity 0.25s ease-in-out",
                appearFromRight: "appearFromRight 300ms ease-in-out",
                wiggle: "wiggle 1.5s ease-in-out infinite",
                popup: "popup 0.25s ease-in-out",
                shimmer: "shimmer 3s ease-out infinite alternate",
            },
            keyframes: {
                opacity: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                appearFromRight: {
                    "0%": { opacity: 0.3, transform: "translate(15%, 0px);" },
                    "100%": { opacity: 1, transform: "translate(0);" },
                },
                wiggle: {
                    "0%, 20%, 80%, 100%": {
                        transform: "rotate(0deg)",
                    },
                    "30%, 60%": {
                        transform: "rotate(-2deg)",
                    },
                    "40%, 70%": {
                        transform: "rotate(2deg)",
                    },
                    "45%": {
                        transform: "rotate(-4deg)",
                    },
                    "55%": {
                        transform: "rotate(4deg)",
                    },
                },
                popup: {
                    "0%": { transform: "scale(0.8)", opacity: 0.8 },
                    "50%": { transform: "scale(1.1)", opacity: 1 },
                    "100%": { transform: "scale(1)", opacity: 1 },
                },
                shimmer: {
                    "0%": { backgroundPosition: "0 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
            },
        },
    },
    daisyui: {
        // Light & dark themes are added by default (it switches automatically based on OS settings)
        // You can add another theme among the list of 30+
        // Add "data-theme='theme_name" to any HTML tag to enable the 'theme_name' theme.
        // https://daisyui.com/
        themes: ["light", "dark"],
    },
    plugins: [
        require("daisyui"),
        addVariablesForColors,
        require("tailwindcss-animate"),
        function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "bg-grid": (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    "bg-grid-small": (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    "bg-dot": (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
                        )}")`,
                    }),
                },
                {
                    values: flattenColorPalette(theme("backgroundColor")),
                    type: "color",
                }
            )
        },
    ],
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"))
    let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))
    addBase({
        ":root": newVars,
    })
}
