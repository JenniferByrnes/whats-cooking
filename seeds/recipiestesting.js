// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "b514a7f09cmshc5305f8a4a0bce0p166cc9jsnb8d44158628e",
//     "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=100",
//   options
// )
//   .then((response) => response.json())
//   .then(res=>{
//     const cleanedData=[]
//     for{
//       let entry = {}
//       cleanedData.push(entry)
//       bulkCreate(cleanedData)
//     }
//   })
//  // .then((response) => console.log((response) => {}))
//   .catch((err) => console.error(err));

import SpoonacularApi from 'spoonacular_api';
let defaultClient = SpoonacularApi.ApiClient.instance;
// Configure API key authorization: apiKeyScheme
let apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyScheme.apiKeyPrefix = 'Token';

let apiInstance = new SpoonacularApi.RecipesApi();
let opts = {
  'query': burger, // String | The (natural language) search query.
  'cuisine': italian, // String | The cuisine(s) of the recipes. One or more, comma separated (will be interpreted as 'OR'). See a full list of supported cuisines.
  'excludeCuisine': greek, // String | The cuisine(s) the recipes must not match. One or more, comma separated (will be interpreted as 'AND'). See a full list of supported cuisines.
  'diet': vegetarian, // String | The diet for which the recipes must be suitable. See a full list of supported diets.
  'intolerances': gluten, // String | A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances.
  'equipment': pan, // String | The equipment required. Multiple values will be interpreted as 'or'. For example, value could be \"blender, frying pan, bowl\".
  'includeIngredients': tomato,cheese, // String | A comma-separated list of ingredients that should/must be used in the recipes.
  'excludeIngredients': eggs, // String | A comma-separated list of ingredients or ingredient types that the recipes must not contain.
  'type': main course, // String | The type of recipe. See a full list of supported meal types.
  'instructionsRequired': true, // Boolean | Whether the recipes must have instructions.
  'fillIngredients': false, // Boolean | Add information about the ingredients and whether they are used or missing in relation to the query.
  'addRecipeInformation': false, // Boolean | If set to true, you get more information about the recipes returned.
  'addRecipeNutrition': false, // Boolean | If set to true, you get nutritional information about each recipes returned.
  'author': coffeebean, // String | The username of the recipe author.
  'tags': "tags_example", // String | The tags (can be diets, meal types, cuisines, or intolerances) that the recipe must have.
  'recipeBoxId': 2468, // Number | The id of the recipe box to which the search should be limited to.
  'titleMatch': Crock Pot, // String | Enter text that must be found in the title of the recipes.
  'maxReadyTime': 20, // Number | The maximum time in minutes it should take to prepare and cook the recipe.
  'ignorePantry': false, // Boolean | Whether to ignore typical pantry items, such as water, salt, flour, etc.
  'sort': calories, // String | The strategy to sort recipes by. See a full list of supported sorting options.
  'sortDirection': asc, // String | The direction in which to sort. Must be either 'asc' (ascending) or 'desc' (descending).
  'minCarbs': 10, // Number | The minimum amount of carbohydrates in grams the recipe must have.
  'maxCarbs': 100, // Number | The maximum amount of carbohydrates in grams the recipe can have.
  'minProtein': 10, // Number | The minimum amount of protein in grams the recipe must have.
  'maxProtein': 100, // Number | The maximum amount of protein in grams the recipe can have.
  'minCalories': 50, // Number | The minimum amount of calories the recipe must have.
  'maxCalories': 800, // Number | The maximum amount of calories the recipe can have.
  'minFat': 1, // Number | The minimum amount of fat in grams the recipe must have.
  'maxFat': 100, // Number | The maximum amount of fat in grams the recipe can have.
  'minAlcohol': 0, // Number | The minimum amount of alcohol in grams the recipe must have.
  'maxAlcohol': 100, // Number | The maximum amount of alcohol in grams the recipe can have.
  'minCaffeine': 0, // Number | The minimum amount of caffeine in milligrams the recipe must have.
  'maxCaffeine': 100, // Number | The maximum amount of caffeine in milligrams the recipe can have.
  'minCopper': 0, // Number | The minimum amount of copper in milligrams the recipe must have.
  'maxCopper': 100, // Number | The maximum amount of copper in milligrams the recipe can have.
  'minCalcium': 0, // Number | The minimum amount of calcium in milligrams the recipe must have.
  'maxCalcium': 100, // Number | The maximum amount of calcium in milligrams the recipe can have.
  'minCholine': 0, // Number | The minimum amount of choline in milligrams the recipe must have.
  'maxCholine': 100, // Number | The maximum amount of choline in milligrams the recipe can have.
  'minCholesterol': 0, // Number | The minimum amount of cholesterol in milligrams the recipe must have.
  'maxCholesterol': 100, // Number | The maximum amount of cholesterol in milligrams the recipe can have.
  'minFluoride': 0, // Number | The minimum amount of fluoride in milligrams the recipe must have.
  'maxFluoride': 100, // Number | The maximum amount of fluoride in milligrams the recipe can have.
  'minSaturatedFat': 0, // Number | The minimum amount of saturated fat in grams the recipe must have.
  'maxSaturatedFat': 100, // Number | The maximum amount of saturated fat in grams the recipe can have.
  'minVitaminA': 0, // Number | The minimum amount of Vitamin A in IU the recipe must have.
  'maxVitaminA': 100, // Number | The maximum amount of Vitamin A in IU the recipe can have.
  'minVitaminC': 0, // Number | The minimum amount of Vitamin C milligrams the recipe must have.
  'maxVitaminC': 100, // Number | The maximum amount of Vitamin C in milligrams the recipe can have.
  'minVitaminD': 0, // Number | The minimum amount of Vitamin D in micrograms the recipe must have.
  'maxVitaminD': 100, // Number | The maximum amount of Vitamin D in micrograms the recipe can have.
  'minVitaminE': 0, // Number | The minimum amount of Vitamin E in milligrams the recipe must have.
  'maxVitaminE': 100, // Number | The maximum amount of Vitamin E in milligrams the recipe can have.
  'minVitaminK': 0, // Number | The minimum amount of Vitamin K in micrograms the recipe must have.
  'maxVitaminK': 100, // Number | The maximum amount of Vitamin K in micrograms the recipe can have.
  'minVitaminB1': 0, // Number | The minimum amount of Vitamin B1 in milligrams the recipe must have.
  'maxVitaminB1': 100, // Number | The maximum amount of Vitamin B1 in milligrams the recipe can have.
  'minVitaminB2': 0, // Number | The minimum amount of Vitamin B2 in milligrams the recipe must have.
  'maxVitaminB2': 100, // Number | The maximum amount of Vitamin B2 in milligrams the recipe can have.
  'minVitaminB5': 0, // Number | The minimum amount of Vitamin B5 in milligrams the recipe must have.
  'maxVitaminB5': 100, // Number | The maximum amount of Vitamin B5 in milligrams the recipe can have.
  'minVitaminB3': 0, // Number | The minimum amount of Vitamin B3 in milligrams the recipe must have.
  'maxVitaminB3': 100, // Number | The maximum amount of Vitamin B3 in milligrams the recipe can have.
  'minVitaminB6': 0, // Number | The minimum amount of Vitamin B6 in milligrams the recipe must have.
  'maxVitaminB6': 100, // Number | The maximum amount of Vitamin B6 in milligrams the recipe can have.
  'minVitaminB12': 0, // Number | The minimum amount of Vitamin B12 in micrograms the recipe must have.
  'maxVitaminB12': 100, // Number | The maximum amount of Vitamin B12 in micrograms the recipe can have.
  'minFiber': 0, // Number | The minimum amount of fiber in grams the recipe must have.
  'maxFiber': 100, // Number | The maximum amount of fiber in grams the recipe can have.
  'minFolate': 0, // Number | The minimum amount of folate in micrograms the recipe must have.
  'maxFolate': 100, // Number | The maximum amount of folate in micrograms the recipe can have.
  'minFolicAcid': 0, // Number | The minimum amount of folic acid in micrograms the recipe must have.
  'maxFolicAcid': 100, // Number | The maximum amount of folic acid in micrograms the recipe can have.
  'minIodine': 0, // Number | The minimum amount of iodine in micrograms the recipe must have.
  'maxIodine': 100, // Number | The maximum amount of iodine in micrograms the recipe can have.
  'minIron': 0, // Number | The minimum amount of iron in milligrams the recipe must have.
  'maxIron': 100, // Number | The maximum amount of iron in milligrams the recipe can have.
  'minMagnesium': 0, // Number | The minimum amount of magnesium in milligrams the recipe must have.
  'maxMagnesium': 100, // Number | The maximum amount of magnesium in milligrams the recipe can have.
  'minManganese': 0, // Number | The minimum amount of manganese in milligrams the recipe must have.
  'maxManganese': 100, // Number | The maximum amount of manganese in milligrams the recipe can have.
  'minPhosphorus': 0, // Number | The minimum amount of phosphorus in milligrams the recipe must have.
  'maxPhosphorus': 100, // Number | The maximum amount of phosphorus in milligrams the recipe can have.
  'minPotassium': 0, // Number | The minimum amount of potassium in milligrams the recipe must have.
  'maxPotassium': 100, // Number | The maximum amount of potassium in milligrams the recipe can have.
  'minSelenium': 0, // Number | The minimum amount of selenium in micrograms the recipe must have.
  'maxSelenium': 100, // Number | The maximum amount of selenium in micrograms the recipe can have.
  'minSodium': 0, // Number | The minimum amount of sodium in milligrams the recipe must have.
  'maxSodium': 100, // Number | The maximum amount of sodium in milligrams the recipe can have.
  'minSugar': 0, // Number | The minimum amount of sugar in grams the recipe must have.
  'maxSugar': 100, // Number | The maximum amount of sugar in grams the recipe can have.
  'minZinc': 0, // Number | The minimum amount of zinc in milligrams the recipe must have.
  'maxZinc': 100, // Number | The maximum amount of zinc in milligrams the recipe can have.
  'offset': 56, // Number | The number of results to skip (between 0 and 900).
  '_number': 10, // Number | The maximum number of items to return (between 1 and 100). Defaults to 10.
  'limitLicense': true // Boolean | Whether the recipes should have an open license that allows display with proper attribution.
};
apiInstance.searchRecipes(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```