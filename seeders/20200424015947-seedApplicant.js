'use strict';
const data = require("./applicant.json")
data.forEach(element => {
  element.createdAt = new Date();
  element.updatedAt = new Date();
});
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Applicants', data, {});
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
    return queryInterface.bulkDelete('Applicants', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
