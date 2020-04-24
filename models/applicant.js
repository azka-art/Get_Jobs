'use strict';
module.exports = (sequelize, DataTypes) => {
  class Applicant extends sequelize.Sequelize.Model 
  {}
  
  Applicant.init
  (
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      departement: DataTypes.STRING,
      position: DataTypes.STRING,
      requested_salary: DataTypes.INTEGER,
      email : DataTypes.STRING
    },
  {
    sequelize, 
    modelName : "Applicant"
  })
  Applicant.associate = function(models) {
    // associations can be defined here
    Applicant.belongsToMany(models.Interviewer, {through : "Interviews"})

  };
  return Applicant;
};