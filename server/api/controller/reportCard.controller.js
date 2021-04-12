const db = require('../../models/db.connect')
const reportCard = db.report_cards;
const Op = db.Sequelize.Op


//GET ALL REPORT CARDS
exports.getAll = (req,res) => {
    reportCard.findAll().then(records =>{
        console.log(JSON.stringify(records));
        res.status(200).send(records);
    }).catch(err =>{
       res.status(500).send({message: err.message});
    })
}

//CREATE A REPORT CARD
exports.create = (req, res) => {
    const reportDate = new Date(req.body.date)

//creates an object fora report card
    const card = {
        comment: req.body.comment,
        report_rating: req.body.rate,
        Mood: req.body.mood,
        Date: reportDate,
        DogInformationId: req.body.dogId
      };

//create a record in the db
      reportCard.create(card).then(data => {
        res.send(data);
      }).catch(err => {
        res.status(500).send({message: err.message || "Some error occured"})
      })
}

//UPDATE A RECORD
exports.update = (req, res) => {
    const id = req.params.id
    const reportDate = new Date(req.body.Date)

    //creates an object for report card
        const card = {
            comment: req.body.comment,
            report_rating: req.body.report_rating,
            Mood: req.body.Mood,
            Date: reportDate,
            DogInformationId: req.body.DogInformationId
          };

    //find record in db
    reportCard.findOne({where: {report_cardID: {[Op.eq]: id }},})
    .then(record => {

//checks if the record exist
  if (!record) {
    throw new Error('No record found')
  }

  console.log(`retrieved record ${JSON.stringify(record,null,2)}`) 

//update a record
    record.update(card).then( updatedRecord => {
    console.log(`updated record ${JSON.stringify(updatedRecord,null,2)}`)
// login into your DB and confirm update
    res.status(200).send(updatedRecord);
  })

})
  .catch((error) => {
// do seomthing with the error
res.status(500).send({message: ' Error:' + error})
  throw new Error(error)
})

}

//GET ONE OF THE STAY RECORD BASED ON ID
exports.getOne = (req,res) => {
    const id = req.params.id
  
    reportCard.findOne({where: {report_cardID: {[Op.eq]: id}}}).then(records =>{
        if(!records){
            res.status(200).send({message: "NO RECORD FOUND"});
        }
        console.log(JSON.stringify(records));
        res.status(200).send(records);
    }).catch(err =>{
       res.status(500).send({message: err.message});
    })
  }
  

//DELETE A RECORD FROM REPORT CARD
exports.delete = (req,res) => {

    const id = req.params.id

    //deletes the record based on id
    reportCard.destroy({where: {report_cardID: {[Op.eq]: id }}})
    .then(res.status(200).send({message: "RECORD DELETED"}))
    .catch(err =>{
      res.status(500).send(err)
    })
  }
