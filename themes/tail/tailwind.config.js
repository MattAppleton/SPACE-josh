§module.exports = {
    theme: {
        rotate: {
            '-180': '-180deg',
            '-90': '-90deg',
            '-45': '-45deg',
            '-1': '-1deg',
            '0': '0',
            '45': '45deg',
            '90': '90deg',
            '180': '180deg',
        },
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