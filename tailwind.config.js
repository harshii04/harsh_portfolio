/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    width: {
      mobile: "342px",
    },
    extend: {
      colors: {
        background: "#161616",
        darkGrey1: "#A0A0A0",
        darkGrey2: "#505050",
        darkSecondbg: "#1C1C1C",
        darkStroke: "#232323",
        darkLightStroke: "#2E2E2E",
        darkHover: "#222222",
        lightText: "#212121",
        lightGrey1: "#A3A3A3",
        lightGrey2: "#AAAAAA",
        lightSecondbg: "#F4F4F5",
        lightStroke: "#D6D6D6",
        lightLightStroke: "#F3F3F3",
        lightHover: "#d4d4d4",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      maxWidth: {
        708: "708px",
      },
    },
  },
  plugins: [],
};
