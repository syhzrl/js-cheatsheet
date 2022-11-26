/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                bgPrimary: '#323031',
                jsYellow: '#F7DF1E',
            },
        },
        fontFamily: {
            primary: ['SF-Pro'],
        },
    },
    plugins: [],
};
