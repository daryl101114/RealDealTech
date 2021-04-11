module.exports = app => {
const report = require('../controller/reportCard.controller')
var router = require('express').Router();

router.get('/', report.getAll)
router.post('/createReport',report.create)
router.post('/update/:id',report.update)
router.get('/Card/:id', report.getOne)
router.delete('/delete/:id', report.delete)

app.use('/api/reportCards', router)
}