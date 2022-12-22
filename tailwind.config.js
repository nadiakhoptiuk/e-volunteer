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
        },
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

      screens: {
        sm: '480px',
        md: '768px',
        // lg: '768px',
        xl: '1280px',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
  ],
};
