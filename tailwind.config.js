const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    prefix: 'nb-',
    important: true,
    theme: {
        colors: {
            gray: colors.blueGray,
            green: colors.green,
            blue: colors.blue,
            yellow: colors.yellow,


        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}