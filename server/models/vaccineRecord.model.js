const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const vaccineRec = sequelize.define("vaccine_record", {
        vaccine_recordID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        vaccine_name:{
            type: DataTypes.TEXT
        },
        vaccine_file: {
            type: DataTypes.BLOB
        }
    });
  
    return vaccineRec;
  };

  //TODO: Create an association for following Foreign Keys: DOGID  **REFER TO ThE DESIGN DOCUMENT**