const { restart } = require("nodemon");
const blacklist = require("../../models/blacklist");
const db = require("../../models/db.connect");
const Op = db.Sequelize.Op
const Blacklist = db.blacklists;

//GET ALL BLACKLIST RECORDS
exports.getAll = (req, res) => {
    Blacklist.findAll().then(blacklists =>{
        console.log(JSON.stringify(blacklists));
        res.status(200).send({error: false, message:` Succesfully grab all records`,data: blacklists});
    }).catch(err => {
        res.status(500).send(err);
    });
}
//------------------------------------------------------------------------------------------

//GET ALL BLACKLIST WHERE BLACKLIST_DESC = TRUE
exports.getTrue = (req, res) => {
    Blacklist.findOne({where:{id: {[Op.eq]: 1}}}).then(blacklist =>{
        console.log(JSON.stringify(blacklist));
        res.status(200).send({error: false, message:` Succesfully grab True record`,data: blacklist}); //NOTE TO RES.SEND JSON
    }).catch(err => {
        res.status(500).send(err);
    });
}


//GET ALL BLACKLIST WHERE BLACKLIST_DESC = FALSE
exports.getFalse = (req, res) => {
    Blacklist.findOne({where:{id: {[Op.eq]: 2}}}).then(blacklist =>{
        console.log(JSON.stringify(blacklist));
        res.status(200).send({error: false, message:` Succesfully grab True record`,data: blacklist});
    }).catch(err => {
        res.status(500).send(err);
    });
}

//CREATE BLACKLIST
exports.create = (req, res) => {
    const dog = {
        // notes: req.body.notes,
        blacklist_desc: req.body.description
      };

      Blacklist.create(dog).then(data => {
        res.send(data);
      }).catch(err => {
        res.status(500).send({message: err.message || "Some error occured"})
      })
}