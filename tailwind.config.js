/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./*.html'],
  theme: {
     screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        deepBlue: 'background: #0D0D2B',
        lightBlue: 'background: #3671E9',
        deepPurple: '#2B076E',
        lightPurple: '#491F98',
      }
    },
  },
  plugins: [],
}
