module.exports = app => {
    const dogInfo = require("../controller/dogInfo.controller")
    var router = require("express").Router();
    
    //SIGNUP API
    router.post("/add",  dogInfo.create)
    router.get("/",  dogInfo.getAll)
    router.get("/dog/:id",dogInfo.getOne)
    router.put("/dogUpdate/:id", dogInfo.update)
    router.delete("/dogDelete/:id", dogInfo.delete)



    //API ROUTES
    app.use('/api/dogs', router)
}