'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PictureTags', [
      {
        name: 'happy',
      },
      {
        name: 'sad',
      },
      {
        name: 'landscape',
      },
      {
        name: 'something',
      },
      {
        name: 'moo',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
