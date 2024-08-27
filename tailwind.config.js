/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html',],
  theme: {
    extend: {
      colors:{
        'primary':'#ee0181',
        'gargi':"#ffffff"
      },
      fontFamily:{
        'display':['roboto-serif','sans-serif'],
        'body':['roboto-serif','sans-serif']
      }
    },
  },
  plugins: [],
}

