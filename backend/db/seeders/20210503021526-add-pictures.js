'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pictures', [
      {
        name: 'Demo pic 1',
        description: 'Demo description 1',
        image_url: 'https://pickrdb.s3.amazonaws.com/1619632320431.JPG',
        user_id: 1
      },
      {
        name: 'Random Seals',
        description: 'Sleeping seals',
        image_url: 'https://pickrdb.s3.amazonaws.com/1619714179853.JPG',
        user_id: 1
      },
      {
        name: 'Demo pic 3',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image_url: 'https://pickrdb.s3.amazonaws.com/1619714179820.JPG',
        user_id: 1
      },], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pictures', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
