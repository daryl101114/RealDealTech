module.exports = app =>{
    const stay = require("../controller/stay.controller")
    var router = require("express").Router();

    router.get('/', stay.getAll)
    router.get("/:id", stay.getOne)
    router.post('/newStay', stay.create)
    router.put('/updateStay/:id',stay.update)
    router.delete('/delete/:id',stay.delete)

    app.use("/api/stay", router)
}
