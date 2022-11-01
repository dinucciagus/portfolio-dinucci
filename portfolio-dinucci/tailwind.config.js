/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Prompt: ["Prompt"],
    },

    colors: {
      transparent: "rgba(0,0,0,0)",
      orange1: "#E29423",
      pink2: "#FC7A92",
      darkblue3: "#003D4F",
      lightblue4: "70E8FC",
      white: "white",
      orange05: "RGBA(226,148,35,0.46)",
      degrade:
        "linear-gradient(74deg, rgba(112,232,252,1) 10%, rgba(0,61,79,1) 100%)",
    },
    extend: {},
  },
  plugins: [],
};
