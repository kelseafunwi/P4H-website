
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'barlow': ['Barlow', 'serif'],
    },
    backgroundColor:  {
      'primary' : '#026BCF',
      'secondary': '#FF9719',
      'white': '#E4E4E4'
    },
    textColor:  {
      'primary' : '#026BCF',
      'secondary': '#FF9719'
    }
  },
  plugins: [],
}
