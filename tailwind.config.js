/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        menuAnim: {
          '0%': { transform: 'scaleY(0%)' },
          '80%': {transform: 'scaleY(110%)' },
          '100%': { transform: 'scaleY(100%)' },
        },
      },
      animation: {
        'menuOpen': 'menuAnim 0.3s ease-in-out forwards',
        
      },
    },
  },
  plugins: [],
}