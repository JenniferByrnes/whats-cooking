const router = require("express").Router();
const { Recipe } = require("../../models");

// GET /api/recipes
router.get("/", (req, res) => {});

// GET /api/recipes/1
router.get("/:id", (req, res) => {});

// POST /api/recipes
router.post("/", (req, res) => {});

// PUT /api/recipes/1
router.put("/:id", (req, res) => {});

// DELETE /api/recipes/1
router.delete("/:id", (req, res) => {});

module.exports = router;
