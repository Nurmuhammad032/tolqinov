/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        font_extraBold: "font-extra-bold",
        font_bold: "font-bold",
        font_semibold: "font-semibold",
        font_medium: "font-medium",
        font_regular: "font-regular",
        font_light: "font-light",
      },
      colors: {
        blue: "#4B4AFB",
        lightBlue: "rgba(75, 74, 251, 0.1)",
        lightWhite: "rgba(255, 255, 255, 0.9)",
      },
    },
  },
  plugins: [],
};
