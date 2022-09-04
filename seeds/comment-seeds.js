const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Test Comment',
    user_id: 1,
    recipe_id: 1
  },
  {
    comment_text: 'Test Comment',
    user_id: 1,
    recipe_id: 2
  },
  {
    comment_text: 'Test Comment',
    user_id: 1,
    recipe_id: 3
  },
  {
    comment_text: 'Test Comment',
    user_id: 1,
    recipe_id: 4
  },
  {
    comment_text: 'Test Comment',
    user_id: 1,
    recipe_id: 4
  },
  {
    comment_text: 'Test Comment',
    user_id: 1,
    recipe_id: 1
  },
  {
    comment_text: 'Test Comment',
    user_id: 1,
    recipe_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
