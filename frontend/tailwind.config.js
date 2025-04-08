/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scrollText: "scrollText 15s linear infinite",
      },
      fontFamily: {
        passion: ['"Passion One"', "cursive"], // or another fallback
        marcellus: ["Marcellus SC", "serif"],
        lexend: ["Lexend", "sans-serif"],
      },
      textStrokeWidth: {
        DEFAULT: "0.75px",
      },
      keyframes: {
        scrollText: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [
    daisyui,
    function ({ addUtilities }) {
      addUtilities({
        "[text-fill-color:transparent]": {
          "-webkit-text-fill-color": "transparent",
        },
        "[text-stroke-width:0.75px]": {
          "-webkit-text-stroke-width": "0.75px",
        },
        "[text-stroke-color:white]": {
          "-webkit-text-stroke-color": "#FFF",
        },
      });
    },
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
};
