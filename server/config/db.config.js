module.exports = {
  DB: "main",
  HOST: "realdealtech.cvackxmaul8t.us-east-1.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "Realdealtech1",
  dialect: "mysql",
  dialectOptions:{
    ssl:'Amazon RDS'
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};