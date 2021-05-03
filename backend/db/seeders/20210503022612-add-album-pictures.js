'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('AlbumPictures', [
        {
          album_id: 1,
          picture_id: 1
        },
        {
          album_id: 1,
          picture_id: 2
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('AlbumPictures', null, {});
  }
};
