/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#404040",
        dark1: "#0F0F0F",
        grad1: "#0D230E",
        grad2: "#2E0B0B",
  
        silver: "#707070",
        lightSilver: "#9a9a9a",
        veryLight: "#C5C5C5",
      },
    },
  },
  plugins:[
    require('tailwind-scrollbar-hide')
  ],
};
