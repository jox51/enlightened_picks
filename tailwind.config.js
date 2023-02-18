/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppings, sans-serif"],
        Goudy: ["Goudy-Bookletter-1911", "serif"]
      },
      colors: {
        lightGreen: "#91FAAD",
        darkerGreen: "#B3E3AF",
        middleGreen: "#C3D4C5",
        darkGrayishGreen: "#C7CAD4",
        lightPurple: "#BAC2A3",
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7"
      },
      animation: {
        typing: "typing 5s infinite steps(var(--ch-length))"
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0"
          },
          "80%": {
            width: "47ch"
          },
          "100%": {
            width: "47ch"
          }
        }
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    }
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
  daisyui: {
    styled: true,
    themes: ["corporate", "dark"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark"
  }
}
