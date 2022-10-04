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
        blackTransparent: 'rgb(0 0 0 / 20%)',
        blackish: '#333333'
      },
      fontFamily: {
        interTight: ['Inter Tight', 'sans-serif']
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))'
      },
      gridColumn:{
        'span-9/4': '9/span 4',
        'span-1/4' : '1/span 4',
        'span-6/7': '6/span 7',
        'span-2/10': '2/span 10',
        'span-12': 'span 12'
      },
      boxShadow: {
        custom: "0 8px 15px rgb(0 0 0 / 20%)"
      },
      margin: {
        '1px': '1px',
        '325px': '325px',
        '200px': '200px',
        '180px': '180px',
        '150px': '150px',
        '120px': '120px',
        '100px': '100px',
        '75px' : '75px',
        '-325px' : '-325px'
      },
      keyframes: {
        openMenu: {
          '0%' : { marginLeft: '-325px' },
          '100%' : { marginLeft: '0px' }
        }
      },
      animation: {
        openMenu: 'openMenu 1s normal forwards ease-in-out'
      }
    },
  },
  plugins: [],
}
