module.exports = app => {
    var router = require('express').Router()
    const vaccRec = require("../controller/vaccineRec.controller")
    const multer = require('multer')
    
    //STORAGE STRATEGY
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb( null, './uploads/')
        },
        filename: function(req, file, cb){
            const ext = file.mimetype.split("/")[1];
            cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
        }
    })
    const upload = multer({storage: storage})
    //-----------------------------------------------------------

    router.get('/record/:id', vaccRec.getOne);//Get One Vaccination Record Based on ID
    router.post('/post', upload.single('vaccine_file') ,vaccRec.create);//Stores Vaccination File in DB
    router.get('/vaccinePerDog/:id',vaccRec.getAllVaccinePerDog)//GET ALL VACCINE PER DEOG
    router.delete('/delete/:id', vaccRec.delete)//DELETE A RECORD

    app.use("/api/vaccine", router)
}