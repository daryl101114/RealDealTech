const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Blacklist = sequelize.define("blacklist", {
        notes:{
            type: DataTypes.TEXT
        },
        blacklisted: {
            type: DataTypes.BOOLEAN
        }
    });
  
    return Blacklist;
  };