//const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'Spoonacular',
    email: 'none@spoonacular.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
