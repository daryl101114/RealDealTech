

module.exports = app => {
    const clientInfo = require("../controller//clientInformation.controller")
    var router = require("express").Router();
    
    router.get("/",  clientInfo.getAll) //GET ALL RECORDS
    router.post("/create", clientInfo.create)
    router.put("/updateClient/:id", clientInfo.update)
    router.get("/client/:id", clientInfo.getOne)
    router.delete("/delete/:id",clientInfo.delete)

    app.use("/api/clients", router)
}

