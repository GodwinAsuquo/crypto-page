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
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        deepBlue: '#0D0D2B',
        lightBlue: '#3671E9',
        deepPurple: '#2B076E',
        lightPurple: '#491F98',
        lightGrey: '#E0E0E0',
        darkGrey: '#828282',
        lighBg: 'rgba(255, 255, 255, 0.1)',
      },
      animation: {
    fadeIn: "fadeIn 1s ease-in forwards"
  },
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0 },
      "100%": { opacity: 1 }
    },
  },
    },
  },
  plugins: [],
  variants: {
    animation: ["motion-safe"]
}
}
