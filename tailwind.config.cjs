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
        'dark-gray': '#6d6d6d',
      },
      keyframes: {
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
      },
      animation: {
        slideup: 'slideup 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
