/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        "Dana":"Dana",
        "DanaMedium":"Dana Medium",
        "DanaDemiBold":"Dana DemiBold",
        "Morabba":"Morabba Light",
        "MorabbaMedium":"Morabba Medium",
        "MorabbaBold":"Morabba Bold"
      },
    },
  },
  plugins: [],
};
