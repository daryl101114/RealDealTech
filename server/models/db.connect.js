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
  db.dogInfo = require("./dogInofrmation.model")(sequelize, Sequelize);
  db.blacklists = require("./blacklist")(sequelize, Sequelize);
  db.clientInfo = require("./client_Information.model")(sequelize,Sequelize);
  db.vaccRec = require("./vaccineRecord.model")(sequelize,Sequelize);
  //--------------------------------------------------------------------------------

//DOG INFORMATION ASSOCIATION --------------------------------------------------------------------
  //BlackListID (FK)
db.blacklists.hasMany(db.dogInfo,{
  foreignKey:{allowNull:false},
  onDelete: 'CASCADE',
  onUpdate:'CASCADE'
});
db.dogInfo.belongsTo(db.blacklists);

  //Client (FK)
  db.clientInfo.hasMany(db.dogInfo,{
    foreignKey:{allowNull:false},
    onDelete: 'CASCADE',
    onUpdate:'CASCADE'
  });
  db.dogInfo.belongsTo(db.clientInfo);

//CLIENT INFORMATION ASSOCIATION
  //BlackListID (FK)
db.blacklists.hasMany(db.clientInfo,{
  foreignKey:{allowNull:false},
  onDelete: 'CASCADE',
  onUpdate:'CASCADE'
});
db.clientInfo.belongsTo(db.blacklists);

//VACCINE RECORD ASOCIATION
  //DogID (FK)
db.dogInfo.hasMany(db.vaccRec,{ 
  foreignKey:{allowNull:false},
  onDelete: 'CASCADE',
  onUpdate:'CASCADE'
});
db.vaccRec.belongsTo(db.dogInfo);

//STAY ASSOCIATION
  //ClientID(FK)
db.clientInfo.hasMany(db.stays,{
  foreignKey:{allowNull:false},
  onDelete: 'CASCADE',
  onUpdate:'CASCADE'
});
db.stays.belongsTo(db.clientInfo);
  //DogID(FK)
db.dogInfo.hasMany(db.stays,{
  foreignKey:{allowNull:false},
  onDelete: 'CASCADE',
  onUpdate:'CASCADE'
});
db.stays.belongsTo(db.dogInfo);

//REPORT CARD ASSOCIATION
  //DogID(FK)
db.dogInfo.hasMany(db.report_cards,{
  foreignKey:{allowNull:false},
  onDelete: 'CASCADE',
  onUpdate:'CASCADE'
});
db.report_cards.belongsTo(db.dogInfo);

  module.exports = db;
