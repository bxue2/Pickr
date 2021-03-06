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
        picture_id: 1,
        tag_id: 7
      },
      {
        picture_id: 2,
        tag_id: 3
      },
      {
        picture_id: 2,
        tag_id: 6
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
      {
        picture_id: 4,
        tag_id: 7
      },
      {
        picture_id: 5,
        tag_id: 6
      },
      {
        picture_id: 6,
        tag_id: 7
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PictureTags', null, {truncate: true, restartIdentity: true});
  }
};
