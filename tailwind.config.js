module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "my-teal-100": "#0fd1ba",
        "my-teal-200": "#11b8a5",
        "my-orange-100": "#fca172",
        "my-green-100": "#83e85a",
        "my-green-200": "#17b978",
        "my-green-300": "#086972",
        "my-green-400": "#071a52",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
