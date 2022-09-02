const { Recipe } = require("../models");

const recipeData = [
  {
    title: "Classic Waffles",
    ingredients:
      "2 cups all-purpose flour, 1 tbsp salt, 4tbsp baking powder, 2tbsp white sugar, 2 eggs, 1 1/2 cups of warm milk, 1/3 cup melted butter, 1tbsp vanilla extract",
    instructions:
      "In a large bowl, mix together flour, salt, baking powder and sugar; set aside. Preheat waffle iron to desired temperature.In a separate bowl, beat the eggs. Stir in the milk, butter and vanilla. Pour the milk mixture into the flour mixture; beat until blended.Ladle the batter into a preheated waffle iron. Cook the waffles until golden and crisp. Serve immediately.",
    cuisines: "French",
    serving: 5,
  },
  {
    title: "Quick and Easy Home Fries",
    ingredients:
      "3 medium russet cubed potatoes, 3tbsp of butter or margarine, salt and ground black pepper to taste.",
    instructions:
      "Rinse potato cubes with cold water and drain well.Melt butter in a large skillet over medium heat. Place potatoes in the skillet and season with salt and pepper; mix well. Cover and cook for 10 minutes.Remove the lid and cook, turning frequently, until brown and crisp on all sides, about 10 more minutes.",
    cuisines: "American",
    serving: 4,
  },
  {
    title: "Classic Hash Browns",
    ingredients:
      "2 russet peeled potatoes, 3 tbsp of clarified butter, salt and ground black pepper to taste, 1 pinch of cayenne pepper, 1 pinch of paprika.",
    instructions:
      "Shred potatoes into a large bowl filled with cold water. Stir until water is cloudy, drain, and cover potatoes again with fresh cold water. Stir again to dissolve excess starch. Drain potatoes well, pat dry with paper towels, and squeeze out any excess moisture.Heat clarified butter in a large non-stick pan over medium heat. Sprinkle shredded potatoes into the hot butter and the seasoning.Cook potatoes until a brown crust forms on the bottom, about 5 minutes. Continue to cook and stir until potatoes are browned all over, about 5 more minutes.",
    cuisines: "American",
    serving: 2,
  },
  {
    title: "Good Old Fashioned Pancakes",
    ingredients:
      "1 1/2 cups of all-purpose flour, 3 1/2 tbsp of baking powder, 1/4 tbsp of salt, 1tbsp of white sugar, 1 1/4 cups of milk, 1 egg, 3tbsp of butter.",
    instructions:
      "In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.",
    cuisines: "French",
    serving: 8,
  },
  {
    title: "Authentic French Meringues",
    ingredients: "4 eggs whites, 2 1/4 cups confectioners' sugar.",
    instructions:
      "Preheat the oven to 200 degrees F (95 degrees C). Butter and flour a baking sheet.In a glass or metal bowl, whip egg whites until foamy using an electric mixer. Sprinkle in sugar a little at a time, while continuing to whip at medium speed. When the mixture becomes stiff and shiny like satin, stop mixing, and transfer the mixture to a large pastry bag. Pipe the meringue out onto the prepared baking sheet using a large round tip or star tip.Place the meringues in the oven and place a wooden spoon handle in the door to keep it from closing all the way. Bake for 3 hours, or until the meringues are dry, and can easily be removed from the pan. Allow cookies to cool completely before storing in an airtight container at room temperature.",
    cuisines: "French",
    serving: 36,
  },
  {
    title: "Chapati",
    ingredients:
      "2 cups all-purpose sifted flour, 1tbsp of salt, 3/4 cup of warm water, 2tbsp of vegetable oil, 2tbsp all-purpose flour.",
    instructions:
      "Mix 2 cups flour and salt together in a bowl. Slowly mix in enough water to make a thick dough. Mix in oil until combined.Knead dough on a cool surface for a few minutes, adding a few spoonfuls of flour. Return dough to the bowl, cover with a clean cloth, and let rest for 30 minutes.Preheat the oven to 200 degrees F (95 degrees C).Heat a skillet or griddle over medium heat.Divide dough into orange-sized balls. Flatten into 6-inch circles.Fry in batches in the hot skillet, turning once, until golden brown and spotted, 6 to 8 minutes. Repeat with remaining dough. Keep chapatis warm in the oven.",
    cuisines: "African",
    serving: 6,
  },
  {
    title: "Brazilian Grilled Pineapple",
    ingredients:
      "1 cup of brown sugar, 2tbsp of ground cinnamon, 1 pineapple peeled, cored and cut into 6 wedges.",
    instructions:
      "Preheat an outdoor grill for medium-high heat and lightly oil the grate.Whisk brown sugar and cinnamon together in a bowl; transfer into a large resealable plastic bag. Add pineapple wedges to the bag; shake well to coat each wedge.Grill pineapple wedges on the preheated grill until heated through, 3 to 5 minutes per side.",
    cuisines: "Brazilian",
    serving: 6,
  },
  {
    title: "Brazilian Lemonade",
    ingredients:
      "2 limes, 3 cups of water, 1/2 cup of sugar, 3tbsp of sweetened condensed milk and ice cubes.",
    instructions:
      "Wash limes thoroughly. Cut off the ends and slice into eight wedges.Place limes in a blender with water, sugar, sweetened condensed milk, and ice; pulse 5 times, or until smooth. Strain through a fine mesh strainer to remove rinds. Serve over ice.",
    cuisines: "Brazilian",
    serving: 4,
  },
  {
    title: "Brazilian Cheese Rolls (Pao de Queijo)",
    ingredients:
      "2 cups of tapioca starch, 1tbsp of salt, 1/2 cup of vegetable oil, 1/3 cup of water, 1/3 cup of milk, 2 eggs and 6 ounces of shredded Parmesan cheese",
    instructions:
      "Preheat oven to 375 degrees F (190 degrees C). Lightly grease a baking sheet.Place tapioca starch and salt in a large bowl.Bring vegetable oil, water, and milk to a boil over medium heat until a white foam appears. Pour milk mixture over tapioca starch and stir until well mixed; allow dough to rest for 15 minutes. Mix eggs and Parmesan cheese into dough. Shape dough into 1 1/2-inch balls and place on prepared baking sheet.Bake in preheated oven until rolls are browned, 15 to 20 minutes.",
    cuisines: "Brazilian",
    serving: 14,
  },
  {
    title: "Simple Macaroni and Cheese",
    ingredients:
      "1 (8 ounce) box elbow macaroni, 1/4 cup of butter, 1/4 cup of all-purpose flour, 1/2tbsp of salt, ground black pepper to taste, 2 cups of milk and 2 cups of shredded Cheddar cheese.",
    instructions:
      "Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes.At the same time, melt butter in a saucepan over medium heat. Add flour, salt, and pepper and stir until smooth, about 5 minutes. Pour in milk slowly, while stirring continuously. Continue to cook and stir until mixture is smooth and bubbling, about 5 minutes, making sure the milk doesn't burn. Add Cheddar cheese and stir until melted, 2 to 4 minutes. Drain macaroni and fold into cheese sauce until coated.",
    cuisines: "American",
    serving: 4,
  },
  {
    title: "French Toast",
    ingredients:
      "2/3 cup of milk, 2 large eggs, 1tbsp of vanilla extract, 1/4tbsp of ground cinnamon, salt to taste, 6 thick slices of bread and 1tbsp of unsalted butter.",
    instructions:
      "Whisk milk, eggs, vanilla, cinnamon, and salt together in a shallow bowl. Lightly butter a griddle and heat over medium-high heat. Dunk bread in the egg mixture, soaking both sides. Transfer to the hot skillet and cook until golden, 3 to 4 minutes per side. Serve hot.",
    cuisines: "French",
    serving: 3,
  },
  {
    title: "Shortbread",
    ingredients:
      "1/4 cup of white sugar, 1/2 cup of unsalted butter, 1 cup of all-purpose flour, 1/3 cup of white rice flour.",
    instructions:
      "Preheat oven to 325 degrees F (165 degrees C). Line a baking sheet with greaseproof (parchment) paper. Sift the flour and rice flour into a medium mixing bowl. Add the sugar and mix. Cut butter into pieces and rub into the flour with your fingertips until the mixture begins to bind together. Knead into soft dough. Roll the dough into an 8 inch round (or for exact round, mold it in an 8 inch cake pan). Place on baking sheet. Using a fork, prick top and make tine marks along edge. Using a table knife, score top with wedge marks. (This is where it will break when cooled). Bake 45 minutes or until pale golden in color. Sprinkle a little superfine sugar over top and cool on baking sheet. Cut into wedges. Keeps for weeks in airtight tin.",
    cuisines: "British",
    serving: 6,
  },
  {
    title: "Cinder Toffee",
    ingredients:
      "Butter, 2 1/2 cups of white sugar, 3/4 cup of golden syrup, 6tbsp of water, 2tbsp of vanilla extract, 1tbsp of baking soda.",
    instructions:
      "Grease a rimmed 8x12-inch baking pan and line bottom and sides with parchment paper, making sure the parchment sides reach at least 2 inches above the sides of the baking sheet. Grease parchment with butter.Combine sugar, golden syrup, water, and vanilla extract in a deep, heavy-bottomed saucepan. Bring to a boil, but do not stir. Heat to 310 degrees F (155 degrees C) or until a small amount of syrup dropped into cold water forms hard, brittle threads, about 10 minutes. Brush the sides of the pan with a clean pastry brush dipped in water if any sugar crystals form on the sides of the pan. Remove from heat and carefully add baking soda; stir quickly until foaming subsides and mixture turns golden. Pour into the prepared baking pan immediately. Cool until set, about 15 minutes. Break into bite-size chunks to serve.",
    cuisines: "British",
    serving: 15,
  },
  {
    title: "Cheesy Salmon Pasta",
    ingredients:
      "1 (8 ounce) package of uncooked spaghetti, 1 1/2tbsp of olive oil, 1 cup of chopped sweet onions, 3 chopped green onions, 2tbsp of prepared basil pesto, 2 (6 ounce) cans of drained flaked salmon and 1/2 cup of Parmesan Cheese",
    instructions:
      "Bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain. Heat olive oil in a skillet over medium heat. Stir in the onions, green onions, and pesto. Cook until tender. Mix in salmon, and cook until heated through. Stir in 1/2 the Parmesan cheese, and continue cooking 5 minutes. Toss with the cooked pasta, and sprinkle with remaining Parmesan cheese to serve.",
    cuisines: "Italian",
    serving: 4,
  },
  {
    title: "Mexican Natillas",
    ingredients:
      "4 cups of milk, 1/4 cup of all-purpose flour, 4 large white eggs, 3/4 cup of white sugar, 1 pinch of salt and 1 pinch of ground cinnamon.",
    instructions:
      "Mix 1 cup milk, flour, and egg whites in a large bowl. Pour remaining milk into a saucepan. Add sugar and salt and bring to a boil over medium heat. Add egg white mixture. Cook, stirring constantly, until a frothy custard has formed, about 10 minutes. Remove from the heat and let cool. Serve in a large dish or in individual cups with cinnamon sprinkled on top.",
    cuisines: "Mexican",
    serving: 6,
  },
  {
    title: "Easy Italian Chicken",
    ingredients:
      "1 (16 ounce) bottle Italian-style salad dressing and 6 skinless, boneless chicken breast halves.",
    instructions:
      "Pour salad dressing into a large resealable plastic bag. Add chicken breasts, seal bag, and shake to coat. Marinate in the refrigerator for at least 1 hour or overnight (the longer you marinate, the more flavor the chicken will absorb). Preheat the oven to 350 degrees F (175 degrees C). Remove chicken from marinade and place in a lightly greased 9x13-inch baking dish; discard remaining marinade. Bake in the preheated oven, turning chicken occasionally, until cooked through and juices run clear, about 1 hour. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).",
    cuisines: "Italian",
    serving: 6,
  },
  {
    title: "Chinese Pork Rib Tips",
    ingredients:
      "½ tbsp of vegetable oil, 4 slices of fresh ginger, 2 pounds of pork loin rib tips, boiling water as needed, 2tbsp of rock sugar, 1 1/2tbsp of white vinegar and 1tbsp soy sauce ",
    instructions:
      "Heat a cast iron pan over medium-high heat. Add oil, ginger and pork rib tips, in that order, to the hot pan. Stir-fry ribs until the surface of the ribs turns golden on all sides, about 5 minutes.Pour enough boiling water on top of the ribs so the ribs are just covered with water. Cover with a lid and cook for 10 minutes. Remove lid and keep cooking until the water is almost absorbed, 5 to 20 minutes more. Be careful not to burn the ribs. Add rock sugar, vinegar, and soy sauce. Stir until well combined and cook until sauce thickens, 1 to 2 minutes.",
    cuisines: "Chinese",
    serving: 4,
  },
  {
    title: "Lithuanian Saltibarsciai (Cold Beet Soup)",
    ingredients:
      "4 eggs, 1 quart of buttermilk, 1 pound of peeled and shredded beets, 1 large English peeled and slice cucumber, 1/4 cup of minced chives and 1 bunch of fresh minced dill.",
    instructions:
      "Place the eggs into a saucepan in a single layer and cover the eggs with water by 1 inch. Cover the saucepan and bring the water to a boil. Remove from the heat and let the eggs stand in the hot water for 15 minutes; drain. Cool the eggs under cold running water in the sink. Peel and chop the eggs. Pour the buttermilk into a large bowl; add the eggs, beets, cucumber, chives, and dill. Stir gently to combine. Chill in refrigerator for 1 full day before serving.",
    cuisines: "Lithuanian",
    serving: 8,
  },
  {
    title: "Ginger Salad Dressing",
    ingredients:
      "1 cup of olive oil, 1/4 cup of soy sauce, 1 lemon juice, 3 gloves of minced garlic, 3tbsp of minced fresh ginger root, 1tbsp of prepared Dijon-style mustard, 2tbsp of honey and ground black pepper to taste.",
    instructions:
      "In a small bowl, whisk together the soy sauce, lemon juice, garlic, ginger, mustard, honey and pepper. Once these are thoroughly combined, add the oil in a steady stream, whisking constantly. When all of the oil is incorporated into the dressing, pour into a glass jar and chill until serving.",
    cuisines: "Japanese",
    serving: 12,
  },
  {
    title: "Cucumber Salad",
    ingredients:
      "2 medium cucumbers, 6tbsp of rice wine vinegar, 6tbsp of white sugar, 2tbsp of soy sauce and 1/2tbsp of sesame seeds.",
    instructions:
      "Peel cucumbers. Halve lengthwise and remove seeds. Slice into 1/4-inch thick half moons. Mix vinegar, sugar, and soy sauce together in a bowl until sugar is completely dissolved. Add cucumbers and stir until coated. Cover and refrigerate for at least 2 hours before serving. Sprinkle with sesame seeds and serve cold.",
    cuisines: "Japanese",
    serving: 4,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

seedRecipes();

module.exports = seedRecipes;

  
