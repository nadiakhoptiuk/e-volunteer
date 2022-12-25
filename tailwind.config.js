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
      sm: '480px',
      md: '768px',
      xl: '1440px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2.25rem',
          xl: '5rem',
        },
      },

      boxShadow: {
        card: '-2px -2px 12px rgba(84, 131, 201, 0.25), 2px 2px 12px rgba(84, 131, 201, 0.25)',
        slugHeader: '0px 4px 12px rgba(141, 172, 222, 0.3)',
      },

      dropShadow: {
        card: '8px 15px 12px rgba(84, 131, 201, 0.5)',
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
        //---Hero
        hText: [
          '20px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ], // class="text-hText"
        hmdText: [
          '34px',
          {
            lineHeight: '39px',
            fontWeight: '500',
          },
        ], // class="text-hmdText"
        hxlText: [
          '40px',
          {
            lineHeight: '46px',
            fontWeight: '500',
          },
        ], // class="text-hxlText"
        hTitle: [
          '40px',
          {
            lineHeight: '46px',
            fontWeight: '500',
          },
        ], // class="text-hTitle"
        hmdTitle: [
          '60px',
          {
            lineHeight: '64px',
            fontWeight: '500',
          },
        ], // class="text-hmdTitle"
        hxlTitle: [
          '80px',
          {
            lineHeight: '64px',
            fontWeight: '500',
          },
        ], // class="text-hxlTitle"
      },
    },
  },

  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
