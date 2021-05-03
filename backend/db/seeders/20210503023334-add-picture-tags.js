'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PictureTags', [
      {
        picture_id: 1,
        tag_id: 2
      },
      {
        picture_id: 1,
        tag_id: 4
      },
      {
        picture_id: 2,
        tag_id: 3
      },
      {
        picture_id: 3,
        tag_id: 1
      },
      {
        picture_id: 3,
        tag_id: 2
      },
      {
        picture_id: 2,
        tag_id: 5
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PictureTags', null, {});
  }
};
