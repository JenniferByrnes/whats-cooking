const { Recipe } = require("../models");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b514a7f09cmshc5305f8a4a0bce0p166cc9jsnb8d44158628e",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

fetch(
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=2",
  options
)
  .then((response) => response.json())
  .then((res) => {
    const recipeSeeds = res.recipes.map((recipe) => ({
      title: recipe.title,
      summary: recipe.summary,
      cuisine: recipe.cuisine ? JSON.stringify(recipe.cuisine) : "",
      extendedIngredients: JSON.stringify(recipe.extendedIngredients),
      instructions: JSON.stringify(recipe.instructions),
    }));

    Recipe.bulkCreate(recipeSeeds);
  })

  .catch((err) => console.error(err));
