/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Pages/*.html"],
  theme: {
    extend: {
      width: {
        '128': '32rem',
        '384': '99rem',
        '141.34' : '141.34px;'
      },
      height: {
        '50': '50px',
      },
      colors: {
        'NestMart-Brand-1': '#3BB77E',
        'NestMart-TextHeading': '#253D4E',
      },
      fontFamily: {
        'Quicksand': ['Quicksand', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Lato': ['Lato', 'sans-serif'],
      },
      lineHeight: {
        '12': '3rem',
      },
      letterSpacing: {
        logo: '-0.019px',
      }
      
    },
  },
  plugins: [],
}