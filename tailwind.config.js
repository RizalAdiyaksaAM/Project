const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },

    extend: {
      colors: {
        abufont: "#888888",
        abubg: "#F8F8F8",
        primaryhijau: "#62AF2F",
        transparent: "transparent",
        white: "#ffffff",
        black: "#020617",
        red: {
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#ef4444",
          600: "#0891b2",
          700: "#0e7490",
          800: "#7f1d1d",
          900: "#7f1d1d",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
