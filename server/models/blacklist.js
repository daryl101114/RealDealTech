const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Blacklist = sequelize.define("blacklist", {
        notes:{
            type: DataTypes.TEXT
        },
        blacklist_desc: {
            type: DataTypes.BOOLEAN
        }
    });
  
    return Blacklist;
  };