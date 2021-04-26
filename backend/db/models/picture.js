'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image_url: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Picture.associate = function(models) {
    Picture.belongsTo(models.User, {foreignKey:'user_id'});
    Picture.hasMany(models.Comment, {foreignKey:'picture_id'});

    const albumPictureMapping = {
      through: 'AlbumPicture',
      otherKey: 'album_id',
      foreignKey: 'picture_id'
    }
    Picture.belongsToMany(models.Album, albumPictureMapping);

    const pictureTagMapping = {
      through: 'PictureTag',
      otherKey: 'tag_id',
      foreignKey: 'picture_id'
    }
    Picture.belongsToMany(models.Tag, pictureTagMapping);
  };

  Picture.uploadImage = async function ( name, description, imageUrl, userId ) {
    const image = await Picture.create({
      name,
      description,
      image_url: imageUrl,
      user_id: userId
    });
    return image;
  };

  return Picture;
};
