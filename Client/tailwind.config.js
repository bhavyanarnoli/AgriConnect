/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      'monsterat': ['Monsterat'],
    },
    extend: {
      colors: {
        button_hover: "#6B911B",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      fontSize: {
        '10xl': '150px',
      },
    },
  },
  plugins: [],
};