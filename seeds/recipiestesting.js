const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b514a7f09cmshc5305f8a4a0bce0p166cc9jsnb8d44158628e",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

fetch(
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=100",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
