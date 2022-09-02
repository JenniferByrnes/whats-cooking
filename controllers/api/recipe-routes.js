const router = require("express").Router();
const { Recipe } = require("../../models");

// GET /api/recipes
router.get("/", (req, res) => {
  Recipe.findAll()
    .then((dbRecipeData) => res.json(dbRecipeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/recipe/1
router.get("/:id", (req, res) => {
  // find a single recipe by its `id`
  Recipe.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRecipeData) => {
      if (!dbRecipeData) {
        res.status(404).json({ message: "No recipe found with this id" });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// find a route based on its cuisine
router.get("/:cuisine", (req, res) => {
  // find a single recipe by its `cuisine`
  Recipe.findOne({
    where: {
      cuisine: req.params.cuisine,
    },
  })
    .then((dbRecipeData) => {
      if (!dbRecipeData) {
        res.status(404).json({ message: "No recipe found with this cuisine" });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/recipes
router.post("/", (req, res) => {
  // create recipe and its necessary data to be created
  Recipe.create({
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    cuisines: req.body.cuisines,
    serving: req.body.serving,
  })
    .then((dbRecipeData) => res.json(dbRecipeData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/recipe/1
router.put("/:id", (req, res) => {
  // update recipe by its id
  Recipe.update(
    {
      ingredients: req.body.ingredients,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbRecipeData) => {
      if (!dbRecipeData) {
        res.status(404).json({ message: "No recipe found with this id" });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/recipe/1
router.delete("/:id", (req, res) => {
  // delete a recipe by its `id` value
  Recipe.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRecipeData) => {
      if (!dbRecipeData) {
        res.status(404).json({ message: "No recipe found with this id" });
        return;
      }
      res.json(dbRecipeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
