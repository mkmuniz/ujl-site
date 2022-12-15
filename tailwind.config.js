/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'header': "url('/img/header.png')",
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
      'league': ['League Spartan'],
    },
    colors: {
      'standard': '#FFC700',
      'black': '#000000'
    },
    extend: {},
  },
  plugins: [],
}