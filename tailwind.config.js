const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        "9/16": "56.25%",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      fontFamily: {
        sans: ["Raleway", "ui-sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        red: "#db3e32",
        black: "#121625",
        gray: {
          light: "#F8F8F9",
          medium: "#E6E6EA",
          dark: "#A5A8B3",
          placeholder: "#8C909C",
        },
        primary: "#32D4A4",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
