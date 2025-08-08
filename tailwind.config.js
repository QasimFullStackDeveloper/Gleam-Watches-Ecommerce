/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                lato: ['Lato', 'ui-sans-serif', 'sans-serif','system-ui'],
                montserrat: ['Montserrat' , 'sans-serif'],
                playfair: ['"Playfair Display"', 'serif'],
            },
        },
    },
    plugins: [],
};
