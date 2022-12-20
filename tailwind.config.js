/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit', // see https://tailwindcss.com/docs/just-in-time-mode

  content: [
    './pages/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './views/**/*.{js,ts,jsx,tsx}',
    './layout/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
      },

      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },

      screens: {
        sm: '480px',
        md: '768px',
        lg: '768px',
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
