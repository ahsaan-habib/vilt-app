const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            screens: {
                "3xl": "1600px",
            },
            colors: {
                primary: {
                    50: colors.cyan[400],
                    100: colors.sky[400],
                    200: colors.cyan[500],
                    300: colors.sky[500],
                    400: colors.sky[600],
                    500: colors.blue[600],
                    600: colors.blue[700],
                    700: colors.blue[800],
                    800: colors.indigo[600],
                    900: colors.indigo[700],
                    1000: colors.blue[900],
                    dark: "#2563eb",
                    default: "#0029ea",
                },
                secondary: {
                    50: colors.violet[600],
                    100: colors.violet[700],
                    200: colors.violet[800],
                    300: colors.purple[600],
                    400: colors.purple[700],
                    500: colors.fuchsia[600],
                    600: colors.fuchsia[700],
                    700: colors.fuchsia[800],
                    800: colors.pink[500],
                    900: colors.pink[600],
                },
                gray: {
                    10: "#f8f9fa",
                    1000: "#202020",
                },
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
