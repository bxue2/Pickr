'use strict';
module.exports = (sequelize, DataTypes) => {
  const AlbumPicture = sequelize.define('AlbumPicture', {
    album_id: DataTypes.INTEGER,
    picture_id: DataTypes.INTEGER
  }, {});
  AlbumPicture.associate = function(models) {
    // associations can be defined here
  };
  return AlbumPicture;
};