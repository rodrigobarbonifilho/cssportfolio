/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutralBase: "#FAFAFA",
        neutralDeep: "#210B0A",
        outlineBtnColor: "#6A5553",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      height: {
        "calc-100vh-48px": "calc(100vh - 48px)",
      },
    },
  },
  plugins: [],
};
