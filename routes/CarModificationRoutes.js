const express = require("express")
const routes = express.Router()
const CarModificationController = require("../controllers/CarModificationController")
const upload = require("../middleware/upload")


routes.get('/', CarModificationController.getAllModifications)
routes.get('/add', CarModificationController.showAddForm)
routes.post('/add',upload.fields([
    {name: 'before_image',maxCount:1},
    {name: 'after_image', maxCount:1}
]) ,CarModificationController.addModification)

module.exports = routes;