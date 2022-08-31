const Sequelize = require("sequelize");

require("dotenv").config();
console.log(
  "=================================================",
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD
);
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  // "recipe_db",
  // "root",
  // "586491",
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

module.exports = sequelize;
