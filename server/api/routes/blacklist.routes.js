module.exports = app => {
    const blacklists = require("../controller/blacklist.controller")
    var router = require("express").Router();
    
    //SIGNUP API
    router.post("/add",  blacklists.create)

    router.get("/",  blacklists.getAll) //GET ALL RECORDS
    router.get("/true",  blacklists.getTrue)//GET TRUE RECORD
    router.get("/false",  blacklists.getFalse)//GET TRUE RECORD
   



    //API ROUTES
    app.use('/api/blacklists', router)
}