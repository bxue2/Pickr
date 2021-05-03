'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
        name: 'Demo Album',
        description: 'Demo Album Description 1',
        user_id: 1
      },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
      return queryInterface.bulkDelete('Albums', null, {});
  }
};
