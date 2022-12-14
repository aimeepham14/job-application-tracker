'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class job_note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.job_note.belongsTo(models.save_job)
    }
  }
  job_note.init({
    note: DataTypes.TEXT,
    date: DataTypes.DATE,
    saveJobId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'job_note',
  });
  return job_note;
};