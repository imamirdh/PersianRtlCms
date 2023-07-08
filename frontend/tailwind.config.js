/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        "Vazir":"Vazir",
        "VazirMedium":"VazirMedium",
        "VazirLight":"VazirLight",
        "VazirBold":"VazirBold"
      },
    },
  },
  plugins: [],
};
