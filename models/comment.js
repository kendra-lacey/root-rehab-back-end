'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Plant, { foreignKey: 'plantId' })
      Comment.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Comment.init({
    content: DataTypes.STRING,
    plantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Plants',
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};