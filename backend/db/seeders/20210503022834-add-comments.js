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
      {
        comment: 'What is it even doing there.',
        picture_id: 3,
        user_id: 4
      },
      {
        comment: 'Can you fish here?',
        picture_id: 4,
        user_id: 1
      },
      {
        comment: 'No',
        picture_id: 4,
        user_id: 3
      },
      {
        comment: 'We suck at naming things.',
        picture_id: 5,
        user_id: 3
      },
      {
        comment: 'Accurate title.',
        picture_id: 6,
        user_id: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {truncate: true, restartIdentity: true});
  }
};
