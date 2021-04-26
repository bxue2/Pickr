'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function(models) {
    const pictureTagMapping = {
      through: 'PictureTag',
      otherKey: 'picture_id',
      foreignKey: 'tag_id'
    }
    Tag.belongsToMany(models.Picture, pictureTagMapping);
  };
  return Tag;
};
