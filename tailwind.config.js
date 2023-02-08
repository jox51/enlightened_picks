/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "#91FAAD",
        darkerGreen: "#B3E3AF",
        middleGreen: "#C3D4C5",
        darkGrayishGreen: "#C7CAD4",
        lightPurple: "#BAC2A3"
      }
    }
  }
}
