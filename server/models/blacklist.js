const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Blacklist = sequelize.define("blacklist", {
        blacklist_desc: {
            type: DataTypes.STRING
        }
    });
  
    return Blacklist;
  };