/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  theme: {
    extend: {

      container:{
        center:true,
        padding:'2rem'
      },
      colors:{
        gray_500:'#99a1b7',
        iconic_blue:'#1b84ff'
      }
    },
  },
  plugins: [],
}

