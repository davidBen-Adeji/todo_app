/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // 900.98px
        lappy: "56.31125rem",
      },
      colors: {
        white: "#ffffff",
        jade: {
          50: "#ebfef4",
          100: "#d0fbe3",
          200: "#a4f6cc",
          300: "#6aebb1",
          400: "#2fd891",
          500: "#0abf79",
          600: "#00a86b",
          700: "#007c52",
          800: "#036242",
          900: "#045038",
          950: "#012d21",
        },
      },
    },
  },
  plugins: [],
};
