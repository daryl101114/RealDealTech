
const db = require("../../models/db.connect")
const User = db.users
const Op = db.Sequelize.Op
const bcrypt = require('bcrypt');

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
//--------------------------------------------------------------------------------
};