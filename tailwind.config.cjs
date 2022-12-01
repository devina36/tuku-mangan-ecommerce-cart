/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat,sans-serif'],
      },
      colors: {
        whites: '#f9f9f9',
        grays: '#e8e8e8',
        'yellow-accent': '#fbd560',
      },
    },
  },
  plugins: [],
};
