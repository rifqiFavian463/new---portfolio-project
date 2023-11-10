/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Playfair Display", "serif"],
      secondary: ["Mulish", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0E1112",
        grey: "#484B4B",
      },
      backgroundImage: {
        waves: "url('./assets/waves-bg.jpg')",
        waves2: "url('./assets/waves-bg2.jpg')",
      },
    },
  },
  plugins: [],
};
