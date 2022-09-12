/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        500: "#133C55",
        400: "#386FA4",
        300: "#59A5D8",
        200: "#84D2F6",
        100: "#91E5F6",
        gray: "#999999",
      },
      screens: {
        sm: "120px",
      },
    },
  },
  plugins: [],
};
