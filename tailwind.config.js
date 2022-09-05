/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/stylesheets/style.css",
    "./views/layouts/main.handlebars",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../images/bg-image.avif')",
      },
    },
  },
  plugins: [],
};
