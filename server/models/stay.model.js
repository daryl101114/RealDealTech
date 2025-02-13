const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Stay = sequelize.define("stay", {
        stayID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }, 
        start_date: {
            type: DataTypes.DATE
        },
        end_date: {
            type: DataTypes.DATE
        },
        note: {
            type: DataTypes.TEXT
        },
        instructions: {
            type: DataTypes.TEXT
        }
    });
  
    return Stay;
  };