'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class save_job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  save_job.init({
    userId: DataTypes.STRING,
    positionName: DataTypes.STRING,
    jobLink: DataTypes.STRING,
    company: DataTypes.STRING,
    location: DataTypes.STRING,
    dateAdded: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'save_job',
  });
  return save_job;
};