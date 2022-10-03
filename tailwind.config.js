/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#404EED",
        offBlack: "#23272a"
      },
      fontFamily: {
        interTight: ['Inter Tight', 'sans-serif']
      },
      boxShadow: {
        custom: "0 8px 15px rgb(0 0 0 / 20%)"
      },
      margin: {
        '150px': '150px'
      }
    },
  },
  plugins: [],
}
