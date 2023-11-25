/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*",  'node_modules/preline/dist/*.js'],
  theme: {
    
    extend: {
       blur: {
        sm: '150px',
      },
      colors: {
        primary: '#000000',
        secondary: '#e4b00e',
        box : '#0a0a0a',
        primaryBorder: '#272727'
      }
    }
    
  },
  
  plugins: [     require('preline/plugin'),
], 
}

