'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.Genre,{
        as : "genre"
      })
    }
  };
  Movie.init({
    title: DataTypes.STRING,
    poster: DataTypes.STRING,
    rating: DataTypes.DECIMAL,
    awards: DataTypes.INTEGER,
    release_date: DataTypes.DATE,
    synopsis: DataTypes.STRING,
    length: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};