
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'barlow': ['Barlow'],
    },
    backgroundColor:  {
      'primary' : '#026BCF',
      'secondary': '#E4E4E4'
    }
  },
  plugins: [],
}
