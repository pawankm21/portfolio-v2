module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Noto: ["Noto Serif", "serif"],
        Atma: ["Atma", "cursive"],
        OpenSans: ["Open Sans", "san-serif"],
      },
    },
  },
  plugins: [],
};
