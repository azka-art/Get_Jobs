'use strict';
module.exports = (sequelize, DataTypes) => {
  class Admin extends sequelize.Sequelize.Model {}
  Admin.init
  (
    {
      username :
      {
        type: DataTypes.STRING,
        unique : false,
        validate :
        {
          isAlphanumeric: {args : true, msg : "Only Alphanumeric"},
          isExist(value, next)
          {
            Patient.findOne({where : {username : value}})
            .then(data => 
              {
                if(data)
                {
                  const error = new Error("Username already exist");
                  next(error);
                }
                else
                  next();
              })
          }
        }
      },
      name: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      validate:
      {
        notNull() 
        {
          if(this.username == "" || this.name == "" || this.password == "")
            throw new Error("All data must be filled")
        }
      },
      sequelize,
      modelName : "Admin",
    }
  )
  Admin.associate = function(models) {
    // associations can be defined here
  };
  return Admin;
};