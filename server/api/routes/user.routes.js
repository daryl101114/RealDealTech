module.exports = app => {
    const users = require("../controller/user")
    var router = require("express").Router();
    
    //SIGNUP API
    router.post("/signup", users.create)



    //API ROUTES
    app.use('/api/users', router)
}