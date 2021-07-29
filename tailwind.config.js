module.exports = {
  purge: ['index.html',
    '*.html',
    "./dist/*.js",
    "./pages/product.js"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
