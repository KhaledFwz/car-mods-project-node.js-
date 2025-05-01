const express = require('express')
const routes = express.Router()
const WorkshopController = require("../controllers/WorkshopController")


routes.get('/', WorkshopController.getAllWorkshops)
routes.get('/add', WorkshopController.showAddForm)
routes.post('/add', WorkshopController.addWorkshop)

module.exports = routes;