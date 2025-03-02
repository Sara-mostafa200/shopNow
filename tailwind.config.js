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
    extend: {
      colors:{
        mainColor:'#DB4444',
        lineColor:"#ECECEC",
        Secondary:'#F5F5F5',
        textGray:'#808080',
        btnGreen:'#00FF66',
  
        
  
      },

    },
  },
  important: true, 
  plugins: [],
}

