/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/stylesheets/style.css",
    "./views/layouts/main.handlebars",
    "./views/layouts/partials/dashboard.handlebars",
    "./views/layouts/partials/edit-recipe.handlebars",
    "./views/layouts/partials/homepage.handlebars",
    "./views/layouts/partials/login.handlebars",
    "./views/layouts/partials/single-recipe.handlebars",
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
