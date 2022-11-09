/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryPurple': 'rgba(160, 118, 176, 0.75)',
        'secondaryPurple':'#7F3E98',
        'primaryGray':'rgba(6, 6, 6, 0.19)',
        'secondaryGray':'#686868',
      },
      screens:{
        'md':'800px'
      }
    },

  },
  plugins: [],
}
