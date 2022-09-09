/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    animationDelay: {
      100: "100ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
    },
    extend: {
      variants: {
        animation: ["motion-safe"],
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        fadeOut: "fadeOut 1s ease-out forwards",
        fadeInFast: "fadeInFast 1s ease-in forwards",
        fadeInDelayed: "fadeIn 4s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeInFast: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
      },
      colors: {
        primary: "#101415",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        eprimary: "#8BF8B8",
        eprimaryVariant: "#00B8A2",
        esecondary: "#9CE483",
        eacent: "#8BF8B8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1160px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  variants: {
    animationDelay: ["responsive", "hover"],
  },
  plugins: [require("tailwindcss-animation-delay")],
};
