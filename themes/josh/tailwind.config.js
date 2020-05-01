module.exports = {
    theme: {
        fontFamily: {
            'sans': [
                'Akk-light',
                '-apple-system',
                'BlinkMacSystemFont',
                'sans-serif',
            ],
        },
        extend: {
            lineHeight: {
                'tight': '1.15'
            },
            colors: {
                'studios': 'rgb(29, 155, 190)',
                'oppor': 'rgb(201, 187, 161)',
                'whats': 'rgb(238, 119, 102)',
                'community': 'rgb(62, 95, 106)',
            },
            margin: {
                '1/12vw': '8.333333vw',
            },
            spacing: {
                'vh100': '100vh',
                'vw100': '100vw',
                'minusvh100': '-100vh',
                '7': '1.75rem',
                'minus8perc': '-8%',
            },
        }
    },
    variants: {
        margin: ['last'],
    },
    plugins: [
        require('tailwindcss-transitions')(),
    ]
}