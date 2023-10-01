/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
      },
      colors: {
        primary: "#284F60",
        secondary: "#969BA0",
        main: "#284F60",
        grayLight: "#F2F4F5",
        gray100: "#F7F9FD",
        gray200: "#F9F9F9",
        gray500: "#F0F0F0",
        gray800: "#1B114A",
        danger: "#DB5461",
        red: "#C92D17",
        success: "#2AB952",
        warning: "#FBBC05",
        inactive: "#BFBFBF",
        white: "#FFFFFF",
        gray600: "#393B6A",
        linecolor: "#D9D9D9",
        togglecolor: "#D8D8D8",
        grayUpload: "#ECEFF0",
        gray300: "#E4E6F1",
        gray400: "#F4F5F9",
        expense: "#889EA8",
        white60: "rgba(255, 255, 255, 0.6)",
        area: "rgba(58, 95, 110, 0.5)",
        green: "#2BC155",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
