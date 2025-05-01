const express = require("express")
const routes = express.Router()
const controller = require("../controllers/WorkshopModificationController")


routes.get("/", controller.getAll)
routes.get('/add', controller.showAddFrom)
routes.get('/add', controller.addNew)


module.exports = routes;