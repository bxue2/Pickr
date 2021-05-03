'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
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
      {
        name: 'animal'
      },
      {
        name: 'water'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Tags', null, {truncate: true, restartIdentity: true});
  }
};
