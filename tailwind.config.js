/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1769aa",
      },
      screens: {
        mobile: {
          max: "768px",
        },
      },
      fontFamily: {
        primary: ["Playfair"],
      },
    },
  },
  plugins: [],
};
