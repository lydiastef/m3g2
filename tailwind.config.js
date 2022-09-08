/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    }
    extend: {
      colors: {
        dark-red: #780000,
        red: #c1121f,
        creme: #fdf0d5,
        dark: #003049,
        light-blue: #669bbc

      }
    },
  },
  plugins: [],
}
