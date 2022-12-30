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
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      xl: '1280px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          xs: '1.25rem',
          sm: '1.25rem',
          md: '2.25rem',
          xl: '1.25rem',
        },
      },

      boxShadow: {
        card: '-2px -2px 12px rgba(84, 131, 201, 0.25), 2px 2px 12px rgba(84, 131, 201, 0.25)',
      },

      dropShadow: {
        main: '8px 8px 12px rgba(84, 131, 201, 0.5)',
      },

      colors: {
        redAccent: '#EF4444',
        yellowAccent: '#FFD500',
        blueAccent: '#60A5FA',
        blueDark: '#5483C9',
        blueLight: '#BFDBFE',
        white: '#F8FAFC',
        fontBlueDark: '#4571B1',
        fontGrey: '#475569',
        fontGreyLight: '#93989E',
      },

      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },

      fontSize: {
        small: ['16px', '24px'], // class="text-small"
        middle: ['20px', '24px'], // class='text-middle'
        big: ['24px', '28px'], // class="text-big"
        large: ['34px', '44px'], // class="text-large"
      },
    },
  },

  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
