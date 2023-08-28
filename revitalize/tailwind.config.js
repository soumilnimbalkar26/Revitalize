/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        98: "24.625rem",
        1134: "70.875rem",
        100: "50rem",
      },
      borderRadius: {
        "6xl": "70px",
      },
    },
  },
  plugins: [],
};
