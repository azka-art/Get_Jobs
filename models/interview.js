'use strict';
module.exports = (sequelize, DataTypes) => {
  class Interview extends sequelize.Sequelize.Model {}

  Interview.init
  (
   {
     status: DataTypes.STRING,
     InterviewerId: DataTypes.INTEGER,
     ApplicantId: DataTypes.INTEGER,
     createdAt: new Date(),
     updatedAt: new Date(),
     date: DataTypes.DATE
   },
   {
     sequelize,
     modelName: "Interview",
     hooks :
     {
       beforeCreate : (data, option) =>
       {
         data.status = "Pending"
       }
     }
   })
  Interview.associate = function(models) {
    // associations can be defined here
    Interview.belongsTo(models.Applicant);
    Interview.belongsTo(models.Interviewer);
  };
  return Interview;
};