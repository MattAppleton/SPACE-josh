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
                '1/12': '8.333333%',
            }
        }
    },
    variants: {
        margin: ['last'],
    },
    plugins: [
        require('tailwindcss-transitions')(),
    ]
}