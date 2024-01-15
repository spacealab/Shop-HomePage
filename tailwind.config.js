/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Pages/*.html"],
  theme: {
    extend: {
      width: {
        '128': '32rem',
        '384': '99rem',
      },
      
    },
  },
  plugins: [],
}