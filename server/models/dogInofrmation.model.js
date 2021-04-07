const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const DogInfo = sequelize.define("Dog_Information", {
        DogID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        DogName:{
            type: DataTypes.STRING
        },
        Gender:{
            type: DataTypes.STRING
        },
        Breed:{
            type: DataTypes.STRING
        },
        Notes:{
            type: DataTypes.TEXT
        },
        Instructions:{
            type: DataTypes.TEXT
        },
        Rating:{
            type: DataTypes.STRING(1)
        },
    });
  
    return DogInfo;
  };

  // TODO: Create an association with blacklistID as a foreign key **REFER TO DOCUMENT DESIGN**