/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kalnia: ["Kalnia Glaze", "sans-serif"],
        sofadi: ['"Sofadi One"', "cursive"],
        macondo: ["Macondo","cursive"],
        jacques: ["Jacques Francois Shadow", "serif"]
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".hide-scrollbar": {
            "overflow-x": "scroll",
            "-ms-overflow-style": "none" /* IE and Edge */,
            "scrollbar-width": "none" /* Firefox */,
          },
          ".hide-scrollbar::-webkit-scrollbar": {
            display: "none" /* WebKit browsers */,
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
