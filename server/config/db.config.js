module.exports = {
  DB: "main",
  HOST: "database-1.cbeoe3w0dmyz.us-east-1.rds.amazonaws.com",
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