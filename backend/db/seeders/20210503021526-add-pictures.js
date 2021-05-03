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
        name: 'Seal pic 2',
        description: 'I swear it\'s not dead...',
        image_url: 'https://pickrdb.s3.amazonaws.com/1619714179820.JPG',
        user_id: 1
      },
      {
        name: 'Lake picture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image_url: 'https://pickrdb.s3.us-west-1.amazonaws.com/1620027874100.JPG',
        user_id: 3
      },
      {
        name: 'More Seals',
        description: 'They never stop sleeping...',
        image_url: 'https://pickrdb.s3.amazonaws.com/1620027572908.JPG',
        user_id: 2
      },
      {
        name: 'More water',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image_url: 'https://pickrdb.s3.us-west-1.amazonaws.com/1620027719015.JPG',
        user_id: 4
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pictures', null, {truncate: true, restartIdentity: true});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
