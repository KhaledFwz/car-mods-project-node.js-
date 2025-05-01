const MaintenanceService = require("../models/MaintenanceService")


exports.getAllServices = async (req,res) => {
    const services = await MaintenanceService.find();
    res.render("maintenanceServices/list", {services})
}
// "/add" -> add.ejs
exports.showAddForm = async (req,res) => {
    res.render("maintenanceServices/add")
}
exports.addService = async (req,res) => {
    const { name } = req.body;
    await MaintenanceService.create({ name })
    res.redirect('/maintenance-services')
}
