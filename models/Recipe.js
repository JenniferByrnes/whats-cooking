// Sequelize goes a step further by taking object-oriented JavaScript concepts and applying them to how we set up the SQL tables. This is done by using Sequelize's model class where, essentially, we create our own JavaScript class and define the columns, data types, and any other rules we need the data to adhere to.

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true,
    },
    //recipe name
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // ingredients
    ingredients: {
      type: DataTypes.TEXT,
    },
    // instructions
    instructions: {
      type: DataTypes.TEXT,
    },
    // summary
    summary: {
      type: DataTypes.STRING,
    },
    // image
    image: {
      type: DataTypes.STRING,
    },
    // cuisine
    cuisines: {
      type: DataTypes.STRING,
    },
    // type
    type: {
      type: DataTypes.STRING,
    },
    // serving
    serving: {
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "recipe",
  }
);

module.exports = Recipe;
