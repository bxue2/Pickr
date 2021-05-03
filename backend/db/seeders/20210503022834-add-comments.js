'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        comment: 'Nice picture! ;)',
        picture_id: 1,
        user_id: 2
      },
      {
        comment: 'This picture sucks. >:(',
        picture_id: 1,
        user_id: 3
      },
      {
        comment: 'No you suck. >:(',
        picture_id: 1,
        user_id: 1
      },
      {
        comment: 'Hi.',
        picture_id: 2,
        user_id: 4
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {truncate: true, restartIdentity: true});
  }
};
