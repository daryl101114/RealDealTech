const db = require("../../models/db.connect");
const Vaccine = db.vaccRec;
const Op = db.Sequelize.Op
const multer = require('multer')

exports.getOne = (req, res) => {
    const id = req.params.id 

    Vaccine.findOne({where: {vaccine_recordID: {[Op.eq]: id }},
        include:[
            {model: db.dogInfo}
          ],}).then(records =>{
        console.log(JSON.stringify(records));
        res.status(200).send(records);
    }).catch(err =>{
       res.status(500).send({message: err.message});
    })
}

exports.create = (req, res) => {
    console.log(req.file)
    const vaccine = {
        vaccine_name: req.body.vaccine_name,
        DogInformationId: req.body.DogInformationId,
        vaccine_file: req.file.path
    }
    Vaccine.create(vaccine).then(data => {
         res.send(data);
      }).catch(err => {
        return res.status(500).send({message: err.message || "Some error occured"})
      })
}

//ALL VACCINE PER DOG
exports.getAllVaccinePerDog = (req, res) => {
  const dogId = req.params.id 

  Vaccine.findAll({where: {DogInformationId: {[Op.eq]: dogId }},
      include:[
          {model: db.dogInfo}
        ],}).then(records =>{
      console.log(JSON.stringify(records));
      res.status(200).send(records);
  }).catch(err =>{
     res.status(500).send({message: err.message});
  })
}