const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Blacklist = sequelize.define("blacklist", {
        blacklistID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        notes:{
            type: DataTypes.TEXT
        },
        blacklisted: {
            type: DataTypes.BOOLEAN
        }
    });
  
    return Blacklist;
  };