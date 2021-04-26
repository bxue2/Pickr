'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: DataTypes.STRING,
    picture_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, {foreignKey:'user_id'});
    Comment.belongsTo(models.Picture, {foreignKey:'picture_id'});
  };
  return Comment;
};
