const { Recipe } = require("../models");

const recipeData = [
  {
    title: "Classic Waffles",
    ingredients:
      "2 cups all-purpose flour, 1 tbsp salt, 4tbsp baking powder, 2tbsp white sugar, 2 eggs, 1 1/2 cups of warm milk, 1/3 cup melted butter, 1tbsp vanilla extract",
    instructions:
      "In a large bowl, mix together flour, salt, baking powder and sugar; set aside. Preheat waffle iron to desired temperature.In a separate bowl, beat the eggs. Stir in the milk, butter and vanilla. Pour the milk mixture into the flour mixture; beat until blended.Ladle the batter into a preheated waffle iron. Cook the waffles until golden and crisp. Serve immediately.",
    summary: "A delicious morning treat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg",
    type: "Breakfast",
    cuisines: "French",
    serving: 5,
    user_id: 1,
  },
  {
    title: "Quick and Easy Home Fries",
    ingredients:
      "3 medium russet cubed potatoes, 3tbsp of butter or margarine, salt and ground black pepper to taste.",
    instructions:
      "Rinse potato cubes with cold water and drain well.Melt butter in a large skillet over medium heat. Place potatoes in the skillet and season with salt and pepper; mix well. Cover and cook for 10 minutes.Remove the lid and cook, turning frequently, until brown and crisp on all sides, about 10 more minutes.",
    summary: "Just like mom used to make",
    image:
      "https://www.spendwithpennies.com/wp-content/uploads/2019/02/Home-Fries-SpendWithPennies_-3.jpg",
    type: "Side",
    cuisines: "American",
    serving: 4,
    user_id: 1,
  },
  {
    title: "Classic Hash Browns",
    ingredients:
      "2 russet peeled potatoes, 3 tbsp of clarified butter, salt and ground black pepper to taste, 1 pinch of cayenne pepper, 1 pinch of paprika.",
    instructions:
      "Shred potatoes into a large bowl filled with cold water. Stir until water is cloudy, drain, and cover potatoes again with fresh cold water. Stir again to dissolve excess starch. Drain potatoes well, pat dry with paper towels, and squeeze out any excess moisture.Heat clarified butter in a large non-stick pan over medium heat. Sprinkle shredded potatoes into the hot butter and the seasoning.Cook potatoes until a brown crust forms on the bottom, about 5 minutes. Continue to cook and stir until potatoes are browned all over, about 5 more minutes.",
    summary: "A hearty morning treat",
    image: "https://webknox.com/recipeImages/745225-556x370.jpg",
    type: "Breakfast",
    cuisines: "American",
    serving: 2,
    user_id: 1,
  },
  {
    title: "Good Old Fashioned Pancakes",
    ingredients:
      "1 1/2 cups of all-purpose flour, 3 1/2 tbsp of baking powder, 1/4 tbsp of salt, 1tbsp of white sugar, 1 1/4 cups of milk, 1 egg, 3tbsp of butter.",
    instructions:
      "In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.",
    summary: "A classic breakfast favorite",
    image: "https://webknox.com/recipeImages/839787-556x370.jpg",
    type: "Breakfast",
    cuisines: "French",
    serving: 8,
    user_id: 1,
  },
  {
    title: "Authentic French Meringues",
    ingredients: "4 eggs whites, 2 1/4 cups confectioners' sugar.",
    instructions:
      "Preheat the oven to 200 degrees F (95 degrees C). Butter and flour a baking sheet. In a glass or metal bowl, whip egg whites until foamy using an electric mixer. Sprinkle in sugar a little at a time, while continuing to whip at medium speed. When the mixture becomes stiff and shiny like satin, stop mixing, and transfer the mixture to a large pastry bag. Pipe the meringue out onto the prepared baking sheet using a large round tip or star tip.Place the meringues in the oven and place a wooden spoon handle in the door to keep it from closing all the way. Bake for 3 hours, or until the meringues are dry, and can easily be removed from the pan. Allow cookies to cool completely before storing in an airtight container at room temperature.",
    summary: "A delicate colorful French cookies",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/df/Tarte_au_citron_%281%29.jpg",
    type: "Dessert",
    cuisines: "French",
    serving: 12,
    user_id: 1,
  },
  {
    title: "Chapati",
    ingredients:
      "2 cups all-purpose sifted flour, 1tbsp of salt, 3/4 cup of warm water, 2tbsp of vegetable oil, 2tbsp all-purpose flour.",
    instructions:
      "Mix 2 cups flour and salt together in a bowl. Slowly mix in enough water to make a thick dough. Mix in oil until combined.Knead dough on a cool surface for a few minutes, adding a few spoonfuls of flour. Return dough to the bowl, cover with a clean cloth, and let rest for 30 minutes.Preheat the oven to 200 degrees F (95 degrees C).Heat a skillet or griddle over medium heat.Divide dough into orange-sized balls. Flatten into 6-inch circles.Fry in batches in the hot skillet, turning once, until golden brown and spotted, 6 to 8 minutes. Repeat with remaining dough. Keep chapatis warm in the oven.",
    summary: "A flatbread used to scoop up food",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fe/2_Chapati_warm_and_ready_to_be_eaten.jpg",
    type: "Side",
    cuisines: "African",
    serving: 6,
    user_id: 1,
  },
  {
    title: "Brazilian Grilled Pineapple",
    ingredients:
      "1 cup of brown sugar, 2tbsp of ground cinnamon, 1 pineapple peeled, cored and cut into 6 wedges.",
    instructions:
      "Preheat an outdoor grill for medium-high heat and lightly oil the grate.Whisk brown sugar and cinnamon together in a bowl; transfer into a large resealable plastic bag. Add pineapple wedges to the bag; shake well to coat each wedge.Grill pineapple wedges on the preheated grill until heated through, 3 to 5 minutes per side.",
    summary: "A healthy sweet treat",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/5/0/BX0501H_grilled-pineapple_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371599867318.jpeg",
    type: "Dessert",
    cuisines: "Brazilian",
    serving: 6,
    user_id: 1,
  },
  {
    title: "Brazilian Lemonade",
    ingredients:
      "2 limes, 3 cups of water, 1/2 cup of sugar, 3tbsp of sweetened condensed milk and ice cubes.",
    instructions:
      "Wash limes thoroughly. Cut off the ends and slice into eight wedges.Place limes in a blender with water, sugar, sweetened condensed milk, and ice; pulse 5 times, or until smooth. Strain through a fine mesh strainer to remove rinds. Serve over ice.",
    summary: "A sweety milky drink",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Limonada_su%C3%AD%C3%A7a.jpg",
    type: "Beverage",
    cuisines: "Brazilian",
    serving: 4,
    user_id: 1,
  },
  {
    title: "Brazilian Cheese Rolls (Pao de Queijo)",
    ingredients:
      "2 cups of tapioca starch, 1tbsp of salt, 1/2 cup of vegetable oil, 1/3 cup of water, 1/3 cup of milk, 2 eggs and 6 ounces of shredded Parmesan cheese",
    instructions:
      "Preheat oven to 375 degrees F (190 degrees C). Lightly grease a baking sheet.Place tapioca starch and salt in a large bowl.Bring vegetable oil, water, and milk to a boil over medium heat until a white foam appears. Pour milk mixture over tapioca starch and stir until well mixed; allow dough to rest for 15 minutes. Mix eggs and Parmesan cheese into dough. Shape dough into 1 1/2-inch balls and place on prepared baking sheet.Bake in preheated oven until rolls are browned, 15 to 20 minutes.",
    summary: "A delicious addition to dinner",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/P%C3%A3o_de_Queijo_-_cheese_bread.jpg",
    type: "Side",
    cuisines: "Brazilian",
    serving: 14,
    user_id: 1,
  },
  {
    title: "Simple Macaroni and Cheese",
    ingredients:
      "1 (8 ounce) box elbow macaroni, 1/4 cup of butter, 1/4 cup of all-purpose flour, 1/2tbsp of salt, ground black pepper to taste, 2 cups of milk and 2 cups of shredded Cheddar cheese.",
    instructions:
      "Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes.At the same time, melt butter in a saucepan over medium heat. Add flour, salt, and pepper and stir until smooth, about 5 minutes. Pour in milk slowly, while stirring continuously. Continue to cook and stir until mixture is smooth and bubbling, about 5 minutes, making sure the milk doesn't burn. Add Cheddar cheese and stir until melted, 2 to 4 minutes. Drain macaroni and fold into cheese sauce until coated.",
    summary: "Every kid's favorite dish",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c6/Macaroni_and_Cheese_%284999893839%29.jpg",
    type: "Side",
    cuisines: "American",
    serving: 4,
    user_id: 1,
  },
  {
    title: "French Toast",
    ingredients:
      "2/3 cup of milk, 2 large eggs, 1tbsp of vanilla extract, 1/4tbsp of ground cinnamon, salt to taste, 6 thick slices of bread and 1tbsp of unsalted butter.",
    instructions:
      "Whisk milk, eggs, vanilla, cinnamon, and salt together in a shallow bowl. Lightly butter a griddle and heat over medium-high heat. Dunk bread in the egg mixture, soaking both sides. Transfer to the hot skillet and cook until golden, 3 to 4 minutes per side. Serve hot.",
    summary: "A delicious morning treat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/French_Toast_%286766484799%29.jpg",
    type: "Breakfast",
    cuisines: "French",
    serving: 3,
    user_id: 1,
  },
  {
    title: "Shortbread",
    ingredients:
      "1/4 cup of white sugar, 1/2 cup of unsalted butter, 1 cup of all-purpose flour, 1/3 cup of white rice flour.",
    instructions:
      "Preheat oven to 325 degrees F (165 degrees C). Line a baking sheet with greaseproof (parchment) paper. Sift the flour and rice flour into a medium mixing bowl. Add the sugar and mix. Cut butter into pieces and rub into the flour with your fingertips until the mixture begins to bind together. Knead into soft dough. Roll the dough into an 8 inch round (or for exact round, mold it in an 8 inch cake pan). Place on baking sheet. Using a fork, prick top and make tine marks along edge. Using a table knife, score top with wedge marks. (This is where it will break when cooled). Bake 45 minutes or until pale golden in color. Sprinkle a little superfine sugar over top and cool on baking sheet. Cut into wedges. Keeps for weeks in airtight tin.",
    summary: "A favorite cookie",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Shortbread_fingers.jpg",
    type: "Dessert",
    cuisines: "British",
    serving: 6,
    user_id: 1,
  },
  {
    title: "Cinder Toffee",
    ingredients:
      "Butter, 2 1/2 cups of white sugar, 3/4 cup of golden syrup, 6tbsp of water, 2tbsp of vanilla extract, 1tbsp of baking soda.",
    instructions:
      "Grease a rimmed 8x12-inch baking pan and line bottom and sides with parchment paper, making sure the parchment sides reach at least 2 inches above the sides of the baking sheet. Grease parchment with butter.Combine sugar, golden syrup, water, and vanilla extract in a deep, heavy-bottomed saucepan. Bring to a boil, but do not stir. Heat to 310 degrees F (155 degrees C) or until a small amount of syrup dropped into cold water forms hard, brittle threads, about 10 minutes. Brush the sides of the pan with a clean pastry brush dipped in water if any sugar crystals form on the sides of the pan. Remove from heat and carefully add baking soda; stir quickly until foaming subsides and mixture turns golden. Pour into the prepared baking pan immediately. Cool until set, about 15 minutes. Break into bite-size chunks to serve.",
    summary: "A caffinated evening treat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Making_cinder_toffee_%2811279416155%29.jpg",
    type: "Dessert",
    cuisines: "British",
    serving: 15,
    user_id: 1,
  },
  {
    title: "Cheesy Salmon Pasta",
    ingredients:
      "1 (8 ounce) package of uncooked spaghetti, 1 1/2tbsp of olive oil, 1 cup of chopped sweet onions, 3 chopped green onions, 2tbsp of prepared basil pesto, 2 (6 ounce) cans of drained flaked salmon and 1/2 cup of Parmesan Cheese",
    instructions:
      "Bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain. Heat olive oil in a skillet over medium heat. Stir in the onions, green onions, and pesto. Cook until tender. Mix in salmon, and cook until heated through. Stir in 1/2 the Parmesan cheese, and continue cooking 5 minutes. Toss with the cooked pasta, and sprinkle with remaining Parmesan cheese to serve.",
    summary: "A classic hearty dinner",
    image: "https://webknox.com/recipeImages/660382-556x370.jpg",
    type: "Dinner",
    cuisines: "Italian",
    serving: 4,
    user_id: 1,
  },
  {
    title: "Mexican Natillas",
    ingredients:
      "4 cups of milk, 1/4 cup of all-purpose flour, 4 large white eggs, 3/4 cup of white sugar, 1 pinch of salt and 1 pinch of ground cinnamon.",
    instructions:
      "Mix 1 cup milk, flour, and egg whites in a large bowl. Pour remaining milk into a saucepan. Add sugar and salt and bring to a boil over medium heat. Add egg white mixture. Cook, stirring constantly, until a frothy custard has formed, about 10 minutes. Remove from the heat and let cool. Serve in a large dish or in individual cups with cinnamon sprinkled on top.",
    summary: "A delicious sweet",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_xy_center,h_1283,q_75,w_1920,x_1695,y_2305/v1/clients/newmexico/60_JosiesMerriam38_277e7bc5-fea9-44ab-bb49-ccc565567dbb.jpg",
    type: "Dessert",
    cuisines: "Mexican",
    serving: 6,
    user_id: 1,
  },
  {
    title: "Easy Italian Chicken",
    ingredients:
      "1 (16 ounce) bottle Italian-style salad dressing and 6 skinless, boneless chicken breast halves.",
    instructions:
      "Pour salad dressing into a large resealable plastic bag. Add chicken breasts, seal bag, and shake to coat. Marinate in the refrigerator for at least 1 hour or overnight (the longer you marinate, the more flavor the chicken will absorb). Preheat the oven to 350 degrees F (175 degrees C). Remove chicken from marinade and place in a lightly greased 9x13-inch baking dish; discard remaining marinade. Bake in the preheated oven, turning chicken occasionally, until cooked through and juices run clear, about 1 hour. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C).",
    summary: "A hearty and quick chicken dinner",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Chicken_breast_on_Spinach.jpg",
    type: "Dinner",
    cuisines: "Italian",
    serving: 6,
    user_id: 1,
  },
  {
    title: "Chinese Pork Rib Tips",
    ingredients:
      "½ tbsp of vegetable oil, 4 slices of fresh ginger, 2 pounds of pork loin rib tips, boiling water as needed, 2tbsp of rock sugar, 1 1/2tbsp of white vinegar and 1tbsp soy sauce ",
    instructions:
      "Heat a cast iron pan over medium-high heat. Add oil, ginger and pork rib tips, in that order, to the hot pan. Stir-fry ribs until the surface of the ribs turns golden on all sides, about 5 minutes.Pour enough boiling water on top of the ribs so the ribs are just covered with water. Cover with a lid and cook for 10 minutes. Remove lid and keep cooking until the water is almost absorbed, 5 to 20 minutes more. Be careful not to burn the ribs. Add rock sugar, vinegar, and soy sauce. Stir until well combined and cook until sauce thickens, 1 to 2 minutes.",
    summary: "A wonderful meat dish",
    image:
      "https://thewoksoflife.com/wp-content/uploads/2018/05/chinese-rib-tips-2.jpg",
    type: "Dinner",
    cuisines: "Chinese",
    serving: 4,
    user_id: 1,
  },
  {
    title: "Lithuanian Saltibarsciai (Cold Beet Soup)",
    ingredients:
      "4 eggs, 1 quart of buttermilk, 1 pound of peeled and shredded beets, 1 large English peeled and slice cucumber, 1/4 cup of minced chives and 1 bunch of fresh minced dill.",
    instructions:
      "Place the eggs into a saucepan in a single layer and cover the eggs with water by 1 inch. Cover the saucepan and bring the water to a boil. Remove from the heat and let the eggs stand in the hot water for 15 minutes; drain. Cool the eggs under cold running water in the sink. Peel and chop the eggs. Pour the buttermilk into a large bowl; add the eggs, beets, cucumber, chives, and dill. Stir gently to combine. Chill in refrigerator for 1 full day before serving.",
    summary: "A delicious morning treat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/%C5%A0altibar%C5%A1%C4%8Diai_Lithuanian_Cold_Beet_Soup.jpg",
    type: "Breakfast",
    cuisines: "Lithuanian",
    serving: 8,
    user_id: 1,
  },
  {
    title: "Ginger Salad Dressing",
    ingredients:
      "1 cup of olive oil, 1/4 cup of soy sauce, 1 lemon juice, 3 gloves of minced garlic, 3tbsp of minced fresh ginger root, 1tbsp of prepared Dijon-style mustard, 2tbsp of honey and ground black pepper to taste.",
    instructions:
      "In a small bowl, whisk together the soy sauce, lemon juice, garlic, ginger, mustard, honey and pepper. Once these are thoroughly combined, add the oil in a steady stream, whisking constantly. When all of the oil is incorporated into the dressing, pour into a glass jar and chill until serving.",
    summary: "A delicious morning treat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/71/Chinese_Seitan_Salad_with_Ginger_Miso_Dressing_%284585441961%29.jpg",
    type: "Breakfast",
    cuisines: "Japanese",
    serving: 12,
    user_id: 1,
  },
  {
    title: "Cucumber Salad",
    ingredients:
      "2 medium cucumbers, 6tbsp of rice wine vinegar, 6tbsp of white sugar, 2tbsp of soy sauce and 1/2tbsp of sesame seeds.",
    instructions:
      "Peel cucumbers. Halve lengthwise and remove seeds. Slice into 1/4-inch thick half moons. Mix vinegar, sugar, and soy sauce together in a bowl until sugar is completely dissolved. Add cucumbers and stir until coated. Cover and refrigerate for at least 2 hours before serving. Sprinkle with sesame seeds and serve cold.",
    summary: "A delicious morning treat",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/78/Cucumber_salad_green_onions_dill.jpg",
    type: "Breakfast",
    cuisines: "Japanese",
    serving: 4,
    user_id: 1,
  },
  {
    title: "Honey Cayenne Pulled Pork",
    ingredients:
      "8-10 lb Boston butt, 2 Tbsp butter, 1 white onion-sliced, 1 Tbsp of BBQ rub, 1 cup ketchup, 1/2 cup hot sauce, 1 cup honey, 2 Tbsp cayenne pepper flakes, 1 3/4 cup apple cider vinegar, wood chunks for smoking",
    instructions:
      "Preheat your smoker to 250 degrees.  Season the butt with your favorite BBQ rub.  Place on smoker and cook until the internal temperature reaches 205 degrees (8-10 hours).  In a preheated pan, saute' onions with 2 Tbsp of butter until golden brown then add all the remaining ingredients and simmer for 15 minutes.  When pork is done, remove from the smoker and let rest for 1 hour.  Shred the pork and mix with the Honey Cayenne BBQ Sauce.",
    summary: "Delicious main dish that will be a hit at any BBQ!",
    image:
      "https://betterbegrilled.com/wp-content/uploads/2017/01/20161231_194650-5-520x520.jpg",
    type: "Dinner",
    cuisines: "American",
    serving: 10,
    user_id: 1,
  },
  {
    title: "Slow Cooker Pollo in Potachio",
    ingredients:
      "2 tsp olive oil, 8 bone-in drumsticks (skin removed), 1 tsp kosher salt, Freshly ground black pepper, 1 large yellow onion (finely chopped), 1 celery stalk chopped, 1 carrot chopped, 4 garlic cloves chopped, pinch of crushed red pepper, 1/4 cup dry white wine, 1(28-ounce) can crushed tomatoes, 1/2 cup reduced-sodium chicken broth, 3 sprigs of fresh rosemary, 1/4 tsp marjoram",
    instructions:
      "Season chicken with salt and pepper.  Brown chicken in a hot skillet with 1 tsp oil.  After all sides are browned, transfer to a slow cooker.  Add the remaining tsp of oil to the skilleet and add the onion, celery, carrot, garlic, and pepper flakes.  Cook until soft, 8-10 minutes.  Add the wine and cook for 3-4 minutes to reduce slightly.  Transfer to the slow cooker and add the tomatoes, broth, rosemary, majoram, remaining salt and pepper to taste.  Cover and cook on low for 8 hours.",
    summary: "This chicken is fall apart tender.",
    image:
      "https://www.skinnytaste.com/wp-content/uploads/2011/10/pollo-in-potacchio-1-5.jpg",
    type: "Dinner",
    cuisines: "Italian",
    serving: 4,
    user_id: 1,
  },
  {
    title: "Ahi Tuna Poke Jicama Tacos",
    ingredients:
      "1 lb sushi-grade ahi tuna (cut into 1/2 inch cubes, 1/4 cup reduced-sodium soy sauce, 1 tsp toasted sesame oil, 1 tsp grated fresh ginger, 1 garlic clove (crushed), 1 medium jicama (4 inches in diameter), 1 1/2 cups shredded romain lettuce, 1 medium Hass avocado (cut into 24 thin strips), 2 Tbsp sliced scallions, 1 tsp black and white sesame seeds, Sriracha sauce",
    instructions:
      "Combine the tuna, soy, sesame oil, ginger, and garlic.  Refrigerate for 20 minutes.  Peel the jicama and slice off the ends.  Cut the hicama into twelve 1/8 inch-thick slices to create your tortillas.  To assemble the tacos, put 3 jicama slices on each of 4 plates.  Top each jicama slice with 2 Tbps shredded lettuce, 3 Tbsp tuna, 2 slices avocado, scallions, seasame seeds, and Sriracha.",
    summary: "The jicama adds a nice crunch to these tacos.",
    image:
      "https://jamiegeller.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTY1NTI0Nzk4NzY3NzY4NjAz/fish-tacos.png",
    type: "Dinner",
    cuisines: "Hawaiian",
    serving: 4,
    user_id: 1,
  },
  {
    title: "Prosciutto-Wrapped Pesto Chicken Pasta",
    ingredients:
      "4 Tbsp butter (divided), 1 crown broccoli (chopped), 1 lb boneless and skinless chicken breast, 8 slices of prosciutto, 1/2 cup basil pesto, 1/4 cup coconut milk, 2 zucchini squash (noodled)",
    instructions:
      "Melt butter in a warm skillet and saute' broccoli for 5 minutes.  Remove and set aside.  Slice chicken in half and then in half again, creating 8 strips.  Tightly wrap each piece in prosciutto.  Melt the remaining butter and sear chicken for two minutes, flipping half way.  Reduce the heat to low.  Stir in the pesto, coconut milk and broccoli, coving the chicken in the sauce.  Place lid on the skillet and simmer for 15-20 minutes.  Serve over zucchini noodles.",
    summary: "Healthy and tasty!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Chicken_wrapped_in_prosciutto._%28335163752%29.jpg",
    type: "Dinner",
    cuisines: "Italian",
    serving: 2,
    user_id: 1,
  },
  {
    title: "Lemon Tarragon Herb Butter",
    ingredients:
      "1 stick salted butter (softened), 2 Tbsp fresh tarragon (chopped), Zest of 1 lemon, 1/4 tsp sea salt (if using unsalted butter)",
    instructions:
      "Mix ingredients in a medium bowl and then place on parchment paper.  Fold the parchment paper over the butter mixture and using your hands roll the mixture into a log.  Twist either end of the parchemnt paper to seal.  Store in the freezer and use as needed.",
    summary: "This compound butter is a great way to flavor any dish.",
    image: "https://webknox.com/recipeImages/221275-556x370.jpg",
    type: "Side",
    cuisines: "American",
    serving: 1,
    user_id: 1,
  },
  {
    title: "Whiskey Chicken",
    ingredients:
      "2-2.5 lb chicken, 1/2 stick butter (softened), salt and pepper, 1 lemon, 3 Tbsp whiskey, 1/2 cup heavy cream",
    instructions:
      "Preheat the oven to 400 degrees F.  Rub the chicken all over with the softened butter and squeeze the lemon over it.  Put the lemon inside the chicken cavity and season with salt and pepper.  Roast chicken until brown and crisp, about an hour or until an internal reading of 180 degrees F.  Carve the chicken and set aside.  In a skillet pour in the whiskey and set a match to burn off the alcohol.  Pour in the cream and heat through.  Pour the sauce over the chicken and serve.",
    summary: "A great new flavorful way to enjoy a roasted chicken.",
    image: "https://webknox.com/recipeImages/545087-556x370.jpg",
    type: "Dinner",
    cuisines: "Irish",
    serving: 4,
    user_id: 1,
  },
  {
    title: "Pest-Stuffed Pork Chops",
    ingredients:
      "3 Tbsp crumbled feta cheese, 2 Tbsp basil pesto, 1 Tbsp toasted pine nuts, 4 pork loin chops (1 1/2 inch thick), 1 tsp black pepper, 1 tsn dried oregano, 1 tsp minced garlic, 1/4 tsp crushed red pepper, 1/4 tsp thyme, 1 Tbsp balsamic vinegar",
    instructions:
      "Stir together the cheese, pesto and nuts.  Cut a pocket into each chop and divide the filling into each.  If needed, use a toothpick to secure each opening.  Combine the remaining ingredients except the vinegar and rub onto each side of pork chops.  Place chops in a roasting pan and roast at 375 degrees for 35-45 minutes.  Brush vinegar onto chops during the last 5 minutes of baking.",
    summary: "Salty and creamy filling inside perfectly cooked pork chops.",
    image: "https://images.media-allrecipes.com/userphotos/1439987.jpg",
    type: "Dinner",
    cuisines: "American",
    serving: 4,
    user_id: 1,
  },
  {
    title: "Pork Chops with Black Bean Salsa",
    ingredients:
      "4 pork loin chops (1 1/2 inch thick, 1 teaspoon Jamaican jerk or Cajun seasoning, 2/3 cup corn relish, 8 oz canned black beans (rinsed and drained), 1 1/2 tsp lime juice, 1/4 tsp cumin",
    instructions:
      "Trim the fat from the meat and preheat the broiler.  Rub seasoning and black pepper onto both sides of the pork chops.  Place pork chops on the unheated rack of a broiler pan.  Broil 3 to 4 inches from the heat for 16 to 20 minutes or until done, turning meat over after half the broiling time.  Meanwhile, for salsa, combine corn relish, beans, lime joice, and cumin.  Serve chops with salsa and, if desired, dairy sour cream.",
    summary:
      "The black bean salsa brings a nice cool flavor to these pork chops.",
    image:
      "https://easyfamilyrecipes.com/wp-content/uploads/2022/04/Pan-Seared-Pork-Chops-Recipe.jpg",
    type: "Dinner",
    cuisines: "Caribbean",
    serving: 4,
    user_id: 1,
  },
  {
    title: "Grilled Peaches",
    ingredients:
      "3 ripe peaches (halved and pits removed), 3 Tbsp light brown sugar, 1/2 Tbsp ground cinnamon, 1 Tbsp unsalted butter (melted)",
    instructions:
      "Preheat your grill or grill pan.  Mix together the brown sugar and the cinnamon.  Lightly brush the cut side of the peaches with melted butter.  Place peaches, cut side down onto the grill for about 3 minutes or until it begins to soften.  Flip the peaches over and sprinkly the tops with the cinnamon sugar mixture.  Grill for an additional 3-4 minutes and serve with ice cream.",
    summary: "Grilled peaches with ice cream cannot be beat!",
    image:
      "https://www.breakfastfordinner.net/wp-content/uploads/2016/08/Grilled-Peach-Halves-with-Yogurt-and-Granola-3-of-19-600x900.jpg",
    type: "Dessert",
    cuisines: "American",
    serving: 6,
    user_id: 1,
  },
  {
    title: "Garlic Bread Grilled Cheese",
    ingredients:
      "2 Tbsp softened butter, 1/2 Tbsp garlic powder, 1/2 tsp parsley, 4 slices bread, 1 cup shredded mozzarella and cheddar cheese blend",
    instructions:
      "Mix the butter, garlic powder, and parsley together.  Spread the butter mixture on the four slices of bread.  Flip the bread over and divide the shredded cheese evenly between two slices of bread.  Place the remaining two slices of bread, butter side up, on top of the cheese to form two sandwiches.  Place the sandwiches in a large saute pan over low heat.  Cook until the bottoms are golden brown and flip over.  Continue cooking until golden brown and melted cheese.",
    summary:
      "Garlic bread grilled cheese is an easy lunch or dinner recipe with garlic buttered bread filled with gooey cheese!",
    image:
      "https://www.thespruceeats.com/thmb/T0TabB01BdYNP3TythA4GMdUZBQ=/2725x2725/smart/filters:no_upscale()/garlic-bread-grilled-cheese-4687223-finalb-31e62c1264e04213b07434ef58e9e93a.jpg",
    type: "Dinner",
    cuisines: "American",
    serving: 2,
    user_id: 1,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

seedRecipes();

module.exports = seedRecipes;
