const dbConfig = require("../config/db.config")
const Sequelize = require('sequelize');
const mysql = require('mysql');
const { Model } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
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

  //--------------------------------------------------------------------------------


  module.exports = db;