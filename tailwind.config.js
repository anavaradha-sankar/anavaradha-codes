/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d1320",
        panel: "#141b2a",
        line: "#243049",
        cream: "#f3efe6",
        muted: "#9ba3b4",
        gold: "#d6b46c",
        "gold-deep": "#b8964f",
      },
      fontFamily: {
        sans: ["Barlow", "system-ui", "sans-serif"],
        display: ['"Bebas Neue"', "Impact", "sans-serif"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
