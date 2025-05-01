const Workshop = require("../models/WorkshopMaintenance")
const MaintenacnceServices = require("../models/MaintenanceService")
const WorkshopMaintenance = require("../models/WorkshopMaintenance")

exports.getAll = async (req,res) =>{
    const records = await WorkshopMaintenance.find()
    .populate("workshop")
    .populate("service");

    res.render("workshopMaintenance/list", {records})
}
// "/add" -> add.ejs
exports.showAddForm = async (req,res) =>{
    const workshops = await Workshop.find();
    const services = await MaintenacnceServices.find();
    res.render("workshopMaintenance/add", { workshops, services })
}
exports.addNew = async (req,res) =>{
    const { workshop,service}= req.body;
    await WorkshopMaintenance.create({workshop,service})
    res.redirect("/workshop-maintenance")
}