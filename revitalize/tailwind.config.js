/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
    },
    letterSpacing: {
      extrawide: "0.57rem",
    },
    extend: {
      borderRadius: {
        "6xl": "70px",
      },
    },
  },
  plugins: [],
};
