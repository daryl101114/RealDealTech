const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const DogInfo = sequelize.define("Dog_Information", {
        dog_name:{
            type: DataTypes.STRING
        },
        age:{
            type: DataTypes.INTEGER
        },
        gender:{
            type: DataTypes.STRING
        },
        breed:{
            type: DataTypes.STRING
        },
        notes:{
            type: DataTypes.TEXT
        },
        instructions:{
            type: DataTypes.TEXT
        },
        rating:{
            type: DataTypes.STRING(1)
        },
    });


  
    return DogInfo;
  };

  

  