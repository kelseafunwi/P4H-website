
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'primary' : '#026BCF',
      'secondary': '#FF9719',
    },
    fontFamily: {
      // 'barlow': ['Barlow', 'serif'],
    },
    backgroundColor:  {
      'primary' : '#026BCF',
      'secondary': '#FF9719',
      'lightDark': '#E4E4E4',
      'white': '#fff',
      'dark' : '#212121',
      'grey': '#E1F1FB',
    },
    textColor:  {
      'white': '#fff',
      'dark': '#212121',
      'primary' : '#026BCF',
      'secondary': '#FF9719'
    }
  },
  plugins: [],
}
