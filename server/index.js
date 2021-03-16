const express = require('express')()
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');
const mysql = require('mysql')

const corsOptions = require('../server/config/default.json')

const app = express
const port = process.env.PORT || 3000

//MIDDLEWARES
app.use(bodyParser.json());

app.use(cors(corsOptions))

//DB CONNECT/SYNC
const db = require("./models/db.connect");
db.sequelize.sync();

app.get('/', (req, res) =>{
  res.send("SEPTONE IS THE REAL MVP")
})
//-------------------------------------------------------------------------------

//ROUTERS
require("./api/routes/user.routes")(app)

app.listen(port, ()=>{
    console.log(`This app is listening on port ${port}`)
})


