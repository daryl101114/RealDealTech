const db = require("../../models/db.connect");
const Stay = db.stays;
const Op = db.Sequelize.Op

//GET ALL THE STAY RECORDS
exports.getAll = (req,res) => {
     Stay.findAll().then(records =>{
         console.log(JSON.stringify(records));
         res.status(200).send(records);
     }).catch(err =>{
        res.status(500).send({message: err.message});
     })
}

//CREATE A STAY
exports.create = (req, res) => {

    const startDate = new Date(req.body.start)
    const endDate = new Date(req.body.end)

    console.log(startDate)
    console.log(endDate)

    const stay = {
        start_date: startDate,
        end_date: endDate,
        note: req.body.note,
        instructions: req.body.instructions,
        ClientInformationId: req.body.clientId,
        DogInformationId: req.body.dogId
      };

      Stay.create(stay).then(data => {
        res.send(data);
      }).catch(err => {
        res.status(500).send({message: err.message || "Some error occured"})
      })
}

//UPDATE A RECORD IN THE DB
exports.update = (req, res) => {

    const startDate = new Date(req.body.start)
    const endDate = new Date(req.body.end)
    console.log(startDate)
    console.log(endDate)
    const updateStay = {
        start_date: startDate,
        end_date: endDate,
        note: req.body.note,
        instructions: req.body.instructions,
        ClientInformationId: req.body.clientId,
        DogInformationId: req.body.dogId
      };

     const id = req.params.id 
//find record in db
    Stay.findOne({where: {id: {[Op.eq]: id }},})
    .then(record => {

//CHECKS IF THE RECORD EXISTS
  if (!record) {
    throw new Error('No record found')
  }

  console.log(`retrieved record ${JSON.stringify(record,null,2)}`) 

//update a record
    record.update(updateStay).then( updatedRecord => {
    console.log(`updated record ${JSON.stringify(updatedRecord,null,2)}`)
// login into your DB and confirm update
    res.status(200).send(updatedRecord);
  })

})
  .catch((error) => {
// do seomthing with the error
  throw new Error(error)
})
}


//GET ONE OF THE STAY RECORD BASED ON ID
exports.getOne = (req,res) => {
  const id = req.params.id
  console.log(id)

  Stay.findOne({where: {stayID: {[Op.eq]: id}}}).then(records =>{
      console.log(JSON.stringify(records));
      res.status(200).send(records);
  }).catch(err =>{
     res.status(500).send({message: err.message});
  })
}


//DELETE A RECORD FROM STAY
exports.delete = (req,res) => {
  const id = req.params.id
  console.log(id)
  Stay.destroy({where: {stayID: {[Op.eq]: id }}})
  .then(res.status(200).send({message: "RECORD DELETED"}))
  .catch(err =>{
    res.status(500).send(err)
  })
}