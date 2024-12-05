/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#010101",
        beige: "#f2f0ea",
        yellow: "#edcf5d",
        gray: {
          ...require("tailwindcss/colors").gray, // Keeps default grays
          DEFAULT: "#a4a4a4", // Adds custom default gray
        },
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
