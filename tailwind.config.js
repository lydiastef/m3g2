/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'creme': '#FEFAE0',
      'lightgreen': '#98AB5C',
      'darkgreen': '#283618',
      'lightorange': '#DDA15E',
      'darkorange': '#BC6C25'
    },
    extend: {
      
    },
  },
  plugins: [],
}
