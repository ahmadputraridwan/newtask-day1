'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  projects.init({
    tittle: DataTypes.STRING,
    content: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    technologies: DataTypes.ARRAY(DataTypes.STRING),
    images: DataTypes.STRING,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'projects',
  });
  return projects;
};