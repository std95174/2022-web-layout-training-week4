module.exports = {
    content: ["./app/**/*.{html,ejs}"],
    theme: {
        container: {
            center: true,
            padding: "12px",
        },
        fontSize: {
            sm: ['14px', '21px'],
            base: ['16px', '24px'],
            lg: ['20px', '30px'],
            xl: ['24px', '36px'],
            "2xl": ['36px', '54px'],
            "3xl": ['48px', '72px'],
            "4xl": ['64px', '96px'],
        },
        extend: {
            colors: {
                'maroon': {
                    'light': '#FBF2F2',
                    DEFAULT: '#AA0601',
                    'dark': '#650300'
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        function ({addComponents}) {
            addComponents({
                '.container': {
                    maxWidth: '373px',
                    '@screen md': {
                        maxWidth: '720px',
                    },
                    '@screen lg': {
                        maxWidth: '1320px',
                    },
                }
            })
        }
    ],
}
