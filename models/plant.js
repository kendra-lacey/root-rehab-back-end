'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Plant.belongsTo(models.Profile, { foreignKey: 'profileId' })

      Plant.hasMany(models.Comment, {
        as: 'commentsCreated',
        foreignKey: 'plantId',
      })

      Plant.hasMany(models.Health, {
        as: 'healthRecords',
        foreignKey: 'healthId',
      })
    }
  }
  Plant.init({
    name: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    photo: DataTypes.STRING,
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Plant',
  });
  return Plant;
};