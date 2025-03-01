/** @type {import('tailwindcss').Config} */
export default {
  
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  
  theme: {
    fontFamily:{
      inter:["Inter","serif"],
      poppins:["Poppins", "serif" ]
    },
    colors:{
      mainColor:'#DB4444',
      lineColor:"#ECECEC"

      

    },
    extend: {

    },
  },
  important: true, 
  plugins: [],
}

