const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const clientInfo = sequelize.define("Client_Information", {
      
        name:{
            type: DataTypes.STRING
        },
        phone:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        notes:{
            type: DataTypes.TEXT
        }
    });
  
    return clientInfo;
  };

  //TODO: Needs to make Association for DogID and BlacklistID fields **REFER TO DESIGN DOCUMENT**