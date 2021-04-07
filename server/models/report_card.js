const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Report_card = sequelize.define("report_card", {
        report_cardID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          }, 
          dogID: {
              type: DataTypes.INTEGER
          },
          comment: {
              type: DataTypes.TEXT
          },
          report_rating: {
              type: DataTypes.STRING
          },
          Mood: {
              type: DataTypes.STRING
          },
          Date: {
              type: DataTypes.DATE
          }
    
    });
  
    return Report_card;
  };