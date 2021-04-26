'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Album.associate = function(models) {
    Album.belongsTo(models.User, {foreignKey:'user_id'});

    const albumPictureMapping = {
      through: 'AlbumPicture',
      otherKey: 'picture_id',
      foreignKey: 'album_id'
    }
    Album.belongsToMany(models.Picture, albumPictureMapping);
  };
  return Album;
};
