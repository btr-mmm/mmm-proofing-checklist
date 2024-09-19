/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mmm: {
          50: "#f2f7fd",
          100: "#e3edfb",
          200: "#c2daf5",
          300: "#8cbced",
          400: "#4e99e2",
          500: "#277bd0",
          600: "#1961b0",
          700: "#154d8f",
          800: "#154377",
          900: "#143155",
          950: "#0f2442",
        },
      },
    },
  },
  plugins: [],
};
