/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#161622",
                secondary: {
                    DEFAULT: "#FF9C01",
                    100: "#FF9001",
                    200: "#FF8E01",
                },
                black: {
                    DEFAULT: "#000",
                    100: "#1E1E2D",
                    200: "#232533",
                },
                gray: {
                    100: "#CDCDE0",
                },
            },
            fontFamily: {
                pthin: ["Poppins-Thin", "sans-serif"],
                pthinit: ["Poppins-ThinItalic", "sans-serif"],
                pextralight: ["Poppins-ExtraLight", "sans-serif"],
                pextralightit: ["Poppins-ExtraLightItalic", "sans-serif"],
                plight: ["Poppins-Light", "sans-serif"],
                plightit: ["Poppins-LightItalic", "sans-serif"],
                pregular: ["Poppins-Regular", "sans-serif"],
                pitalic: ["Poppins-Italic", "sans-serif"],
                pmedium: ["Poppins-Medium", "sans-serif"],
                pmediumit: ["Poppins-MediumItalic", "sans-serif"],
                psemibold: ["Poppins-SemiBold", "sans-serif"],
                psemiboldit: ["Poppins-SemiBoldItalic", "sans-serif"],
                pbold: ["Poppins-Bold", "sans-serif"],
                pboldit: ["Poppins-BoldItalic", "sans-serif"],
                pextrabold: ["Poppins-ExtraBold", "sans-serif"],
                pextraboldit: ["Poppins-ExtraBoldItalic", "sans-serif"],
                mregular: ["Montserrat-Regular", "sans-serif"],
            },
        },
    },
    plugins: [],
};
