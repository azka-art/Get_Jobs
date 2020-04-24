'use strict';
module.exports = (sequelize, DataTypes) => {
  class Interviewer extends sequelize.Sequelize.Model 
  {}
  
  Interviewer.init
  (
    {
      name: DataTypes.STRING,
      departement: DataTypes.STRING,
      date_available: DataTypes.DATE
    },
  {
    sequelize, 
    modelName : "Interviewer"
  })
  Interviewer.associate = function(models) {
    // associations can be defined here
    Interviewer.belongsToMany(models.Applicant, {through : "Interviews"})
  };
  return Interviewer;
};