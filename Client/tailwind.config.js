/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      'monsterat': ['Monsterat'],
    },
    colors:{
      primary: "#ffffff", 
      secondary: "#FFFFFF",
      "green-500": "rgb(34 197 94)",
      "green-600": "rgb(22 163 74)",
      "white": "#ffffff",
      "login_button": "#FFFFFF",
      "button_hover": "#6B911B",
      "black": "#000000",
    },
    extend: {
      colors: {
        button_hover: "#6B911B",
        primary: "#ffffff", 
        secondary: "#FFFFFF",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #013220",
      },
      screens: {
        xs: "450px",
      },
      fontSize: {
        '10xl': '150px',
      },
      keyframes: {
        'brightness-50-to-100': {
          '0%': {
            filter: 'brightness(50%)',
          },
          '100%': {
            filter: 'brightness(100%)',
          },
        },
      },
      animation: {
        'brightness-50-to-100': 'brightness-50-to-100 1s ease-in forwards',
      },
    },
  },
  // plugins: [],
  plugins: [require("daisyui")],
  // daisyui: {
    // styled:false,
    // base:false,
    // prefix: "pre",
    // themes: [
    //     {
    //       mytheme: {
    //         // primary: "#ffffff",
    //         // secondary: "#ffffff",
    //         // accent: "#ffffff",
    //         // neutral: "#ffffff",
    //         // "base-100": "#ffffff",
    //         "green-500": "#6B911B",
    //       },
    //     },
    // ],
  // },

};