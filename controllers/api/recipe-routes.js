const router = require("express").Router();
const { Recipe, Comment, User, Post } = require("../../models");
const withAuth = require('../../utils/auth');

// GET /api/recipes
router.get("/", (req, res) => {
    Recipe.findAll({
        attributes: [
            'id', 
            'title',   
            'ingredients',
            'serving',
            'cuisines',
            'instructions',
          ],
          include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                model: User,
                attributes: ['username']
              }
            },
            {
              model: User,
              attributes: ['username']
            }
          ]
    })
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
          attributes: [
            'id', 
            'title',   
            'ingredients',
            'serving',
            'cuisines',
            'instructions'
          ],
          include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                model: User,
                attributes: ['username']
              }
            },
            {
              model: User,
              attributes: ['username']
            }
          ]
      })
        .then(dbrecipeData => res.json(dbrecipeData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
});

// POST /api/recipes
router.post("/", withAuth, (req, res) => {
    Recipe.create({
        title: req.body.title,
        ingredients: req.body.ingredients,
        serving: req.body.serving,
        cuisines: req.body.cuisines,
        instructions: req.body.instructions,
        user_id: req.session.user_id
      })
        .then(dbrecipeData => res.json(dbrecipeData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// PUT /api/recipes/1
router.put("/:id", withAuth, (req, res) => {
    Recipe.update(
        {
          title: req.body.title,
          ingredients: req.body.ingredients,
          serving: req.body.serving,
          cuisines: req.body.cuisines,
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
router.delete("/:id", withAuth, (req, res) => {
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
