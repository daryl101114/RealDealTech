
const db = require("../../models/db.connect")
const User = db.users
const Op = db.Sequelize.Op
const bcrypt = require('bcrypt');
const passport = require('passport')

const initializePassport = require('../../config/passport-config')
initializePassport(passport)

//SIGNUP 
exports.create = (req, res) => {
  if (!req.body.username) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  bcrypt.hash(req.body.password, 10).then((hash)=>{
    const user = {
      username: req.body.username,
      password: hash,
    };
    User.create(user).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({message: err.message || "Some error occured"})
    })
  })
};
//--------------------------------------------------------------------------------

//LOGIN
exports.signin = (req, res, next) =>{
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/api/user/signup',
    failureFlash: true
  })(req, res, next)
}