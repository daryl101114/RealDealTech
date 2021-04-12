const db = require("../../models/db.connect");
const Vaccine = db.vaccRec;
const Op = db.Sequelize.Op

exports.getAll = (req, res) => {
    // Vaccine.findAll().then(records =>{
    //     console.log(JSON.stringify(records));
    //     res.status(200).send(records);
    // }).catch(err =>{
    //    res.status(500).send({message: err.message});
    // })
}