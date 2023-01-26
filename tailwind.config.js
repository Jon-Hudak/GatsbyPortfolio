/** @type {import('tailwindcss').Config} */
//const colors= require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    
    extend: {
      fontFamily:{
        title:["'Aldrich', cursive"]
      },
      colors: {
        'dark-gray': '#191919',
        'accent-orange': '#ff872b',
        'accent-blue': '#43B0FF',
        'gunmetal': '#292F36',
        'cardinal': '#D00000',
      
       
      },
      screens:{
        'tall' : {'raw':'(min-height:701px)'}
      },
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