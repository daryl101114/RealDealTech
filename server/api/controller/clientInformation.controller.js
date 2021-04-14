const db = require("../../models/db.connect");
const Client = db.clientInfo;
const Op = db.Sequelize.Op

//GET ALL CLIENTS
exports.getAll = (req, res) => {
    Client.findAll().then(clients =>{
        console.log(JSON.stringify(clients));
        res.status(200).send({error: false, message:` Succesfully grab all records`,data: clients});
    }).catch(err => {
        res.status(500).send(err);
    });
}

//GET ONE DOG USING DOG ID
exports.getOne = (req, res) => {
    const id = req.params.id; 
   
    Client.findOne(
        {
            where:{id: {[Op.eq]: id }},
            include:[{model: db.blacklists}]
        }).then(client =>{
            console.log(JSON.stringify(client));
            res.status(200).send({error: false, message:` Succesfully grab all records`,data: client});
        }).catch(err => {
        res.status(500).send(err);
    });
}

//CREATE A DOG
exports.create = (req, res) => {
    const client = {
       fname: req.body.fname,
        lname: req.body.lname,
        phone: req.body.phone,
        email: req.body.email,
        notes: req.body.notes,
        blacklistId: req.body.blacklistId,
      };
      Client.create(client).then(data => {
        res.send(data);
      }).catch(err => {
        res.status(500).send({message: err.message || "Some error occured"})
      })
}

//UPDATE A RECORD
exports.update = (req,res) => {
    const id = req.params.id;
    console.log(id)
    const updateClient = {
        fname: req.body.fname,
         lname: req.body.lname,
         phone: req.body.phone,
         email: req.body.email,
         notes: req.body.notes,
         blacklistId: req.body.blacklistId,
       };
    // console.log(updateDog);
//find record in db
Client.findOne(
    {where: {id: {[Op.eq]: id }},
    include:[
      {model: db.blacklists}
    ]})
.then(record => {
  
  //CHECKS IF THE RECORD EXISTS
  if (!record) {
    throw new Error('No record found')
  }

  console.log(`retrieved record ${JSON.stringify(record,null,2)}`) 
  
  //update a record
  record.update(updateClient).then( updatedRecord => {
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

//DELETE A DOG
//Works But needs a response from the server "res.send(status)"
exports.delete = (req,res) => {
    const id = req.params.id
    Client.destroy({where: {id: {[Op.eq]: id }}})
    .then(
      res.status(200).send("It worked!")
    )
    .catch(error => res.status(500).send(error))
}

//TODO: 
    //Create an API that shows all of the dog within a client