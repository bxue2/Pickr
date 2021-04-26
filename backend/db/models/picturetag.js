'use strict';
module.exports = (sequelize, DataTypes) => {
  const PictureTag = sequelize.define('PictureTag', {
    picture_id: DataTypes.INTEGER,
    tag_id: DataTypes.INTEGER
  }, {});
  PictureTag.associate = function(models) {
    // associations can be defined here
  };
  return PictureTag;
};