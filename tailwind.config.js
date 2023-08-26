// refer https://geekpython.in/merging-tailwindcss-into-flask-apps
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./templates/**/*.{html,htm}"],
  theme: {
    extend: {},
  },
  plugins: [],
}