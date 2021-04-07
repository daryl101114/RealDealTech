const dbConfig = require("../config/db.config")
const {Sequelize,DataTypes} = require('sequelize');
const mysql = require('mysql');
const { Model } = require("sequelize");
const { dialectOptions } = require("../config/db.config");

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: 3306,
    dialect: dbConfig.dialect,
    dialectOptions: {
      ssl:'Amazon RDS'
  },
    pool: dbConfig.pool
  });
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
  const db = {};
  
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  
  //MODELS
  db.users = require("./user.model")(sequelize, Sequelize);
  db.stays = require("./stay.model")(sequelize, Sequelize);
  db.report_cards = require("./report_card")(sequelize, Sequelize);
  db.blacklists = require("./blacklist")(sequelize, Sequelize);
  db.dogInfo = require("./dogInofrmation.model")(sequelize, Sequelize);
  db.clientInfo = require("./client_Information.model")(sequelize,Sequelize);
  db.vaccRec = require("./vaccineRecord.model")(sequelize,Sequelize);
  //--------------------------------------------------------------------------------


  module.exports = db;
