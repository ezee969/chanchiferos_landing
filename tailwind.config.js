/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        floating: 'floating 3s ease-in-out infinite',
        floatingExcited: 'floating 0.05s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        slideDown: 'slideDown 1s ease-in-out',
      },
      keyframes: {
        floating: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatingExcited: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': { transform: 'translateY(-0.5px)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(15px)', filter: 'blur(1px)' },
          '100%': { opacity: 1 },
        },
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-15px)' },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
