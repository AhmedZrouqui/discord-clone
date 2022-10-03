/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#404EED",
        offBlack: "#23272a",
        blackTransparent: 'rgb(0 0 0 / 20%)'
      },
      fontFamily: {
        interTight: ['Inter Tight', 'sans-serif']
      },
      boxShadow: {
        custom: "0 8px 15px rgb(0 0 0 / 20%)"
      },
      margin: {
        '150px': '150px',
        '120px': '120px',
        '100px': '100px',
        '75px' : '75px'
      },
      keyframes: {
        openMenu: {
          'from' : { width: '0px' },
          'to' : { width: '300px' }
        }
      },
      animation: {
        openMenu: 'openMenu 500ms normal forwards ease-in-out'
      }
    },
  },
  plugins: [],
}
