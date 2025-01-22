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
        iconic_blue:'#1b84ff',
        gray_badge_bg:'#f1f1f4',
        gray_border_right:'#f1f1f4',
        gray_badge_txt:'#4b5675',
        menu_gray:'#252f4a'
        
      }
    },
  },
  plugins: [],
}

