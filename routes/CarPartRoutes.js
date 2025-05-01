const express = require("express")
const routes = express.Router()
const CarPartController = require("../controllers/CarPartController")


routes.get("/", CarPartController.getAllParts)
routes.get("/add", CarPartController.showAddForm)
routes.post("/add", CarPartController.addPart)

module.exports = routes;