/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'header': "url('/img/header.png')",
      'logo': "url('/img/logo.svg')",
      'logo-completo': "url('/img/ujl.png)",
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
      'league': ['League Spartan'],
      'josefin': ['Josefin Slab'],
    },
    colors: {
      'standard': '#FFC700',
      'black': '#000000'
    },
    extend: {},
  },
  plugins: [],
}