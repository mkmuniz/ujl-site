/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'header': "url('/img/header-1.png')",
      'logo': "url('/img/logo.svg')",
      'logo-completo': "url('/img/ujl.png)",
    },
    screens: {
      'mobile-3': '330px',
      'mobile-2': '400px',
      'mobile-footer': '460px',
      'mobile': '530px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
      'league': ['League Spartan'],
      'josefin': ['Josefin Slab'],
    },
    colors: {
      'standard': '#FFC700',
      'black': '#000000',
      'white': '#FFFFFF',
      'gray': '#F5F5F5',
    },
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}