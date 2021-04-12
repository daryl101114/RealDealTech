module.exports = app => {
    var router = require('express').Router()
    const vaccRec = require("../controller/vaccineRec.controller")

    router.get('/', vaccRec.getAll)

    app.use("/api/vaccine", router)
}