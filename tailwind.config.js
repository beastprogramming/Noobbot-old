const plugin = require('tailwindcss/plugin')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    prefix: 'nb-',
    important: true,
    theme: {
        extend: {
            colors: {
                primary: {
                    blue: '#0160c1',
                    red: '#ee4d4e',
                    bunty: '#191d4c',
                    green: '#58b36a',
                },
                light: {
                    blue: '#9accfe',
                    red: '#f7abab',
                    bunty: '#8c93d9',
                    green: '#f6ffed'
                },
                variants: {
                    borderWidth: ['last'],
                },
            },
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
            },
        }, // Extends end

        boxShadow: {
            xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
            none: 'none',
            'block-blue': '3px 4px 0px #0160c1',
            'block-red': '3px 4px 0px #ee4d4e',
            'block-bunty': '3px 4px 0px #191d4c',
            'block-green': '3px 4px 0px #58b36a',
        },
        container: {
            center: true,
            padding: {
                default: '1rem',
                sm: '1rem',
                lg: '0rem',
                xl: '0rem',
            },
        },
        fontFamily: {
            'sans': ['Montserrat', 'sans-serif'],
        }

    },
    variants: {},
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