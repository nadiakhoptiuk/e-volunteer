/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit', // see https://tailwindcss.com/docs/just-in-time-mode

  content: [
    './pages/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './views/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.25rem',
          md: '2.25rem',
          xl: '1.25rem',
        },
      },

      boxShadow: {
        card: '-2px -2px 12px rgba(84, 131, 201, 0.25), 2px 2px 12px rgba(84, 131, 201, 0.25)',
        slugHeader: '0px 4px 12px rgba(141, 172, 222, 0.3)',
      },

      colors: {
        blueDark: '#5483C9',
        blueLight: '#BFDBFE',
        blue2: '#73A9FF',
        white: '#F8FAFC',
        button: '#60A5FA',
        // hero: '#4571B1',
        fontBlue: '#60A5FA',
        fontBlueDark: '#4571B1',
        textForm: '#475569',
        textFormState: '#9498AB',
      },

      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },

      fontSize: {
        small: ['16px', '24px'], // class="text-small"
        middle: ['20px', '24px'], // class='text-middle'
        big: ['24px', '27px'], // class="text-big"
        large: ['34px', '44px'], // class="text-large"
      },

      screens: {
        sm: '480px',
        md: '768px',
        xl: '1280px',
      },
    },
  },

  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
