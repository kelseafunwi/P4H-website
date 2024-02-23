
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
      'primary2': '#0488DD',
      'primary3': '#2A9AE2',
      'secondary': '#FF9719',
      'secondary2': '#FFF3E3',
      'lightDark': '#E4E4E4',
      'lightGray': '#F6F6F6',
      'white': '#fff',
      'dark' : '#212121',
      'dark1': '#BCBCBC',
      'grey': '#E1F1FB',
    },
    textColor:  {
      'white': '#fff',
      'white2': '#B4DBF5',
      'dark': '#212121',
      'lightGray': '#424242',
      'lightDark': '#646464',
      'black': '#000',
      'black2': '#110F24',
      'primary' : '#026BCF',
      'primary2': '#0488DD',
      'primary3': '#2A9AE2',
      'secondary': '#FF9719',
    },
    borderColor: {
      'white2': '#B4DBF5',
      'primary': '#4FACE7',
      'primary2': '#0488DD',
      'secondary': '#FF9719',
      'dark': '#BCBCBC',
      'dark3': '#E4E4E4',
    },
    boxShadowColor: {
      'primary2': '#0488DD',
    }
  },
  plugins: [],
}
