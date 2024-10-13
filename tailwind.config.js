/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        // primaryAccent: "#e84343",
        // secondaryAccent: "#5aa393",
        // tertiaryAccent: "#8a765f",
        // primaryTextColor: "#ffffff",
        // secondaryTextColor: "#000000",
        //skillsLightAccent: "#c3a889",
        // menuContainerBg: "#ffffff",
        // menuDropdownBg: "#000000",
        // menuItemTextColor: "#ffffff",
        // menuItemHoverColor: "#e84343",
        // menuBorderColor: "rgb(64, 64, 64)",
        primaryAccent: "var(--primary-accent)",
        primaryLightAccent: "var(--primary-light-accent)",
        secondaryAccent: "var(--secondary-accent)",
        tertiaryAccent: "var(--tertiary-accent)",
        primaryTextColor: "var(--primary-text-color)",
        secondaryTextColor: "var(--secondary-text-color)",
        bannerTextColor: "var(--banner-text-color)",
        skillsDarkAccent: "var(--skills-dark-accent)",
        skillsLightAccent: "var(--skills-light-accent)",
        infoCardBg: "var(--info-card-bg)",
        menuContainerBg: "var(--menu-container-bg)",
        menuDropdownBg: "var(--menu-dropdown-bg)",
        menuItemTextColor: "var(--menu-item-text-color)",
        menuItemHoverColor: "var(--menu-item-hover-color)",
        menuBorderColor: "var(--menu-border-color)",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"], // Overrides the default sans-serif
        bigShoulders: ["Big Shoulders Display", "sans-serif"],
      },
      fontSize: {
        "120px": ["120px", "1"], // 1 here is the line height
        "200px": ["200px", "1"],
      },
      keyframes: {
        moveLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-200px)" }, // Moves left by 200px
        },
        moveRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(200px)" }, // Moves right by 200px
        },
      },
      animation: {
        moveLeft: "moveLeft 4s ease-in-out infinite alternate",
        moveRight: "moveRight 4s ease-in-out infinite alternate",
      },
      backgroundImage: (theme) => ({
        mainThemeGradient: "var(--main-theme-gradient)",
        darkThemeGradient: "var(--dark-theme-gradient)",

        bannerSection: "var(--banner-section-bg)",
        aboutSection: "var(--about-section-bg)",
        experienceSection: "var(--experience-section-bg)",
        skillsSection: "var(--skills-section-bg)",
        connectSection: "var(--connect-section-bg)",
      }),
      boxShadow: {
        custom:
          "0 4px 15px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.1)",
      },
      // backgroundImage: {
      //   bannerSection: "linear-gradient(180deg,#e84343 0%,#e84343 100%)",
      //   aboutSection:
      //     "linear-gradient(180deg, #e84343 0%, rgb(145,197,186) 100%)",
      //   experienceSection:
      //     "linear-gradient(180deg,#91c5ba 0%,rgb(195,168,137) 100%)",
      //   skillsSection: "linear-gradient(180deg,#c3a889 0%,#c3a889 100%)",
      //   connectSection:
      //     "linear-gradient(180deg,#c3a889 0%,rgb(121,119,232) 200%)",
      // },
    },
  },
  plugins: [],
};
