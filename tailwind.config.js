/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html'],
  theme: {
    extend: {

      // adding smaller screens
      screens: {
        'xs': '275px',
        'xsm': '340px',
        'xxsm': '500px',
        '3xl': '1700px'
        
      },


      // adding a new utility class to make 7 rows
      gridTemplateRows: {

        '7': 'repeat(7, minmax(0, 1fr))',

      },


      

      

    },
  },
  plugins: [],
}
