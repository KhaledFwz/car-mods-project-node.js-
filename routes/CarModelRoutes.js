const express = require("express")
const routes = express.Router()
const CarModelController = require("../controllers/CarModelController")


routes.get("/", CarModelController.getAllModels)
routes.get("/add", CarModelController.showAddForm)
routes.post("/add", CarModelController.addNew)

module.exports = routes;
