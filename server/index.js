const express = require('express')();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const mysql = require('mysql');
const flash = require('connect-flash');
const session = require('express-session');
const corsOptions = require('../server/config/default.json')
const passport = require('passport');

const app = express
const port = process.env.PORT || 3000



//PASSPORT CONFIG
require('./config/passport-config')(passport)

//MIDDLEWARES
app.use(bodyParser.json());
app.use(cors(corsOptions));
//EXPRESS-SESSION MIDDLEWARE
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
}));
//PASSPORT MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());
//CONNECT-FLASH MIDDLEWARE
app.use(flash());



//DB CONNECT/SYNC
const db = require("./models/db.connect");
// db.sequelize.sync
// (
//   {alter: true}
//   );



app.get('/', (req, res) =>{
  res.send("MAIN WEB SITE")
})
//-------------------------------------------------------------------------------

//API ROUTERS
require("./api/routes/user.routes")(app);
require("./api/routes/blacklist.routes")(app);// BLACK LIST API
require("./api/routes/dogInfo.routes")(app);//DogInfo API//
require("./api/routes/stay.routes")(app);//STAY API
require("./api/routes/reportCard.routes")(app);//REPORT CARD API
require("./api/routes/vaccineRec.routes")(app);//VACCINE API
require("./api/routes/clientInformation.routes")(app)//CLIENT API

//START THE SERVER
app.listen(port, ()=>{
    console.log(`This app is listening on port ${port}`)
})


