/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // screens: {
      //   sm: "640px",
      //   md: "768px",
      //   lg: "1024px",
      //   xl: "1280px",
      // },
      colors: {
        ...colors,
        customRed: "#e84343", //'#004953',//'#0a192f',//'#BC244A',//
        customeGreen: "#5aa393",
        customLightGreen: "#92c5ba",
        customBrown: "#8a765f",
        customLightBrown: "#c3a889",
        customPurple: "rgb(121,119,232)",
        customGray: "rgb(64, 64, 64)",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"], // Overrides the default sans-serif
        bigShoulders: ["Big Shoulders Display", "sans-serif"],
      },
      fontSize: {
        "120px": ["120px", "1"], // 1 here is the line height, you can adjust it as needed
        "200px": ["200px", "1"],
      },
      keyframes: {
        moveLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-200px)" }, // Moves left by 100px
        },
        moveRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(200px)" }, // Moves right by 100px
        },
      },
      animation: {
        moveLeft: "moveLeft 4s ease-in-out infinite alternate", // Adjust duration and easing as needed
        moveRight: "moveRight 4s ease-in-out infinite alternate",
      },
      backgroundImage: {
        customGradient:
          "linear-gradient(180deg, #e84343 0%, rgb(145,197,186) 100%)",
        customGradient2:
          "linear-gradient(180deg,#91c5ba 0%,rgb(195,168,137) 100%)",
        customGradient3:
          "linear-gradient(180deg,#c3a889 0%,rgb(121,119,232) 200%)",
      },
    },
  },
  plugins: [],
};
