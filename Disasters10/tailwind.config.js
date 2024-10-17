/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'onest': ["Onest", "sans-serif"],
      },
      colors: {
        primary:"#09090B",
        secondary:"#71717A"
      },
      backgroundColor: {
        'orange-primary': "#F26922",
      },
     
    },
  },
  plugins: [],
}

