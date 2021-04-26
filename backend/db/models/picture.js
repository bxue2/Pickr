'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image_url: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Picture.associate = function(models) {
    // associations can be defined here
  };
  return Picture;
};