const plugin = require('tailwindcss/plugin')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    prefix: 'nb-',
    important: true,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        plugin(function({ addComponents }) {
            const buttons = {
                '.btn': {
                    padding: '.5rem 1rem',
                    borderRadius: '.25rem',
                    fontWeight: '600',
                },
                '.btn-blue': {
                    backgroundColor: '#1d4ed8',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#2779bd'
                    },
                },
                '.btn-red': {
                    backgroundColor: '#e3342f',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#cc1f1a'
                    },
                },
            }

            addComponents(buttons)
        })
    ],
}