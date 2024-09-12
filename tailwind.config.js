/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kalnia: ['Kalnia Glaze', 'sans-serif'],
        sofadi: ['"Sofadi One"', "cursive"],
      },
    },
  },
  plugins: [],
};
