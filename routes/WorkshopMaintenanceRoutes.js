const express = require("express")
const routes = express.Router();
const contoller = require("../controllers/WorkshopMaintenanceController");


routes.get('/', contoller.getAll)
routes.get("/add", contoller.showAddForm)
routes.post("/add", contoller.addNew)

module.exports = routes;