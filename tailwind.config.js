module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
        icon: '2px 2px 6px rgba(0,0,0,0.4)',
        iconHover: '2px 2px 11px rgba(0,0,0,0.7)'
      },
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      fontFamily: {
        sans:
          '-apple-system, "Helvetica Neue", "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
        '24px': '24px',
        '11px': '11px'
      },
      height: {
        '3px': '3px',
        '30px': '30px',
        '320px': '320px',
        '340px': '340px',
        '360px': '360px'
      },
      inset: {
        '15px': '15px',
        '30px': '30px',
        'half': '50%'
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      margin: {
        '-20px': '-20px',
        '1px': '1px',
        '30px': '30px',
        '35px': '35px',
        '1.5': '0.375rem'
      },
      padding: {
        '5px': '5px',
        '10px': '10px',
        '20px': '20px',
        '30px': '30px'
      },
      spacing: {
        28: '7rem',
      },
      width: {
        '3px': '3px',
        '30px': '30px'
      },
      transitionDuration: {
        250: '.25s'
      }
    },
    zIndex: {
      '0': 0,
     '10': 10,
     '20': 20,
     '30': 30,
     '40': 40,
     '50': 50,
     '25': 25,
     '50': 50,
     '75': 75,
     '100': 100,
     '200': 200,
      'auto': 'auto',
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  variants: {
    extend: {
      padding: ['even']
    }
  }
};
