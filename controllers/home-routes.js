const router = require("express").Router();
const { Recipe, User, Comment } = require("../models");
const { Op } = require("sequelize");

// get all recipes for homepage
router.get("/", (req, res) => {
  console.log("======================");
  const queryOptions = {
    attributes: [
      "id",
      "summary",
      "title",
      "image",
      "cuisines",
      "serving",
      "type",
      "created_at",
    ],
    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "comment_text",
          "recipe_id",
          "user_id",
          "created_at",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  };

  // if (req.query.search) {
  //   queryOptions.where = {
  //     title: {
  //       [Op.substring]: req.query.search,
  //     },
  //   };
  // }

  if (req.query.search) {
    queryOptions.where = {
      ingredients: {
        [Op.substring]: req.query.search,
      },
    };
  }

  // if (req.query.search) {
  //   queryOptions.where = {
  //     cuisines: {
  //       [Op.substring]: req.query.search,
  //     },
  //   };
  // }

  // if (req.query.search) {
  //   queryOptions.where = {
  //     type: {
  //       [Op.substring]: req.query.search,
  //     },
  //   };
  // }

  Recipe.findAll(queryOptions)
    .then((dbRecipeData) => {
      const recipes = dbRecipeData.map((recipe) => recipe.get({ plain: true }));

      res.render("homepage", {
        recipes,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single recipe
router.get("/recipe/:id", (req, res) => {
  Recipe.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "summary",
      "title",
      "image",
      "cuisines",
      "serving",
      "type",
      "instructions",
      "ingredients",
      "created_at",
    ],
    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "comment_text",
          "recipe_id",
          "user_id",
          "created_at",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbRecipeData) => {
      if (!dbRecipeData) {
        res.status(404).json({ message: "No Recipe found with this id" });
        return;
      }

      const recipe = dbRecipeData.get({ plain: true });

      res.render("single-recipe", {
        recipe,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
