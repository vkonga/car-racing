const { transform } = require('typescript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': {transform: 'translateX(-100%)'},
          '100%': {transform: 'transalteX(100%)'},
        },
      },
      animation: {
        slide: 'slide 1s linear',
      }
    },
  },
  plugins: [],
}
