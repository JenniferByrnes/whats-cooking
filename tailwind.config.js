/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/stylesheets/style.css",
    ".views/layouts/main.handlebars",
    "./views/partials/comments.handlebars",
    "./views/partials/recipe-info.handlebars",
    "./views/main.handlebars",
    "./views/dashboard.handlebars",
    "./views/edit-recipe.handlebars",
    "./views/homepage.handlebars",
    "./views/login.handlebars",
    "./views/single-recipe.handlebars",
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
