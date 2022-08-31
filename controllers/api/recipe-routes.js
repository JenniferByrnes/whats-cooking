const router = require("express").Router();
const { Recipe } = require("../../models");

// GET /api/recipes
router.get("/", (req, res) => {
    Recipe.findAll()
    .then(dbrecipeData => res.json(dbrecipeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/recipes/1
router.get("/:id", (req, res) => {
    Recipe.create({
        where: {
            id: req.params.id
          },
      })
        .then(dbrecipeData => res.json(dbrecipeData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
});

// POST /api/recipes
router.post("/", (req, res) => {
    Recipe.create({
        title: req.body.title,
        summary: req.body.summary,
        cuisines: req.body.cuisines,
        extendendIngredients: req.body.extendedIngredients,
        instructions: req.body.instructions
      })
        .then(dbrecipeData => res.json(dbrecipeData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// PUT /api/recipes/1
router.put("/:id", (req, res) => {
    Recipe.update(
        {
          title: req.body.title,
          summary: req.body.summary,
          cuisines: req.body.cuisines,
          extendedIngredients: req.body.extendedIngredients,
          instructions: req.body.instructions
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
        .then(dbrecipeData => {
          if (!dbPostData) {
            res.status(404).json({ message: 'No recipe with this id' });
            return;
          }
          res.json(dbrecipeData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });

});

// DELETE /api/recipes/1
router.delete("/:id", (req, res) => {
    Recipe.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbrecipeData => {
          if (!dbrecipeData) {
            res.status(404).json({ message: 'No recipe found with this id' });
            return;
          }
          res.json(dbrecipeData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;
