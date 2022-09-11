const router = require("express").Router();
const { Recipe } = require("../../models");
const { Op } = require("sequelize");

// GET /api/recipes
router.get("/", (req, res) => {
  // get all recipes
  if (req.query.search) {
    console.log(req.query.search);
    Recipe.findAll({
      where: {
        title: {
          [Op.substring]: req.query.search,
        },
      },
    })
      .then((dbRecipeData) => {
        res.json(dbRecipeData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  } else {
    Recipe.findAll()
      .then((dbRecipeData) => res.json(dbRecipeData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
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

// POST /api/recipes
router.post("/", (req, res) => {
  console.log(req.body);
  // create recipe and its necessary data to be created
  Recipe.create({
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    cuisines: req.body.cValue,
    serving: req.body.serving,
    image: req.body.image,
    summary: req.body.summary,
    type: req.body.tValue,
    user_id: req.session.user_id,
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
      title: req.body.title,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      cuisines: req.body.cuisines,
      serving: req.body.serving,
      image: req.body.image,
      summary: req.body.summary,
      type: req.body.type,
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
