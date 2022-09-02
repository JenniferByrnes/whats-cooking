// import all models
const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");
const Recipe = require("./Recipe");

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Recipe.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// create associations
User.hasMany(Recipe, {
  foreignKey: "user_id",
});

Comment.belongsTo(Recipe, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

Recipe.hasMany(Comment, {
  foreignKey: "recipe_id",
  onDelete: "SET NULL",
});



module.exports = { User, Post, Comment, Recipe };
