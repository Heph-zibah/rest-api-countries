/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    colors: {
      darkElements: "hsl(209, 23%, 22%)",
      darkBG: "hsl(207, 26%, 17%)",
      lightText: "hsl(200, 15%, 8%)",
      lightInput: "hsl(0, 0%, 52%)",
      lightBG: "hsl(0, 0%, 98%)",
    },
    extend: {},
  },
  plugins: [],
};

