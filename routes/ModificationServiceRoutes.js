const express = require("express")
const routes = express.Router()
const contoller = require("../controllers/ModificationServiceController")

routes.get("/", contoller.getAll)
routes.get("/add", contoller.showAddForm)
routes.post("/add", contoller.Addnew)

module.exports = routes;