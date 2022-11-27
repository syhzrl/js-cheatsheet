/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                bgPrimary: '#323031',
                bgSecondary: '#1e1d1d',
                jsYellow: '#F7DF1E',
            },
        },
        fontFamily: {
            primary: ['SF-Pro'],
        },
    },
    plugins: [],
};
