const LocalStrategy = require('passport-local').Strategy
const db = require("../models/db.connect")
const User = db.users
const Op = db.Sequelize.Op
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize')

module.exports = function(passport){
    //PASSPORT STRATEGY
    const authenticateUser = (username, password, done) => {
        console.log(username) 
        console.log(password)
        //Match user
         User.findOne({where: {username: {[Op.eq]: username}}},{type: Sequelize.QueryTypes.SELECT})
        .then(user =>{
            console.log(user)
            if(!user){
                console.log("username not")
                return done(null,false,{message: 'That username is not registered'})}
            //Match password
              bcrypt.compare(password, user.password,(err, isMatch) =>{
                if (err) { return done(err); }
                if(isMatch){
                    console.log("pasword match")
                    return done(null,user);
                }else{
                    return done(null, false, {message:'Password is incorrect'})
                }
            })
        })
        .catch(err => console.log(err))

    }

    passport.use(new LocalStrategy({username:'username'},authenticateUser))

    passport.serializeUser(function(user, done) {
    done(null, user);
     });
  
    passport.deserializeUser(function(user, done) {
        done(null,user);
  });
}