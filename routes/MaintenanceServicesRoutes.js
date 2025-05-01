const express = require("express")
const routes = express.Router()
const MaintenanceServiceController = require("../controllers/MaintenanceServiceController")

routes.get('/', MaintenanceServiceController.getAllServices)
routes.get('/add', MaintenanceServiceController.showAddForm)
routes.post("/add", MaintenanceServiceController.addService)


module.exports = routes;