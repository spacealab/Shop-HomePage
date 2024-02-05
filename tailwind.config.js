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
        'Brand-color-1': '#3BB77E',
        'Text-heading': '#253D4E',
        'Text-body': '#7E7E7E',
        'Brand-color-2': '#FDC040',
        'Scale-1': '#81B13D',
        'Scale-2': '#3A882B',
        'Scale-3': '#227226',
        'Scale-4': '#1A5D2C',
        'Primary-color': '#46BCF2',
        'Success-color': '#16C79A',
        'Danger-color': '#EF4F4F',
        'Warning-color': '#F6C065',
        'Info-color': '#008891',
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