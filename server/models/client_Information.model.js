const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const clientInfo = sequelize.define("Client_Information", {
        ClientID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Name:{
            type: DataTypes.STRING
        },
        Phone:{
            type: DataTypes.STRING
        },
        Email:{
            type: DataTypes.STRING
        },
        Notes:{
            type: DataTypes.TEXT
        }
    });
  
    return clientInfo;
  };

  //TODO: Needs to make Association for DogID and BlacklistID fields **REFER TO DESIGN DOCUMENT**