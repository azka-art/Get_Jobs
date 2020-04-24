'use strict';
const data = require("./interviewer.json")
data.forEach(element => {
  element.createdAt = new Date();
  element.updatedAt = new Date();
});
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Interviewers', data, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Interviewers', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
