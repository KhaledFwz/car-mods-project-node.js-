const Workshop = require("../models/Workshop")


exports.getAllWorkshops = async (req,res) => {
    const workshops = await Workshop.find();
    res.render("workshops/list", { workshops})
}
// "/add" -> add.ejs
exports.showAddForm = async (req,res) => {
    res.render("workshops/add")
}
exports.addWorkshop = async (req,res) => {
    const { name, location, contact_info } = req.body;
    await Workshop.create({ name, location,contact_info})
    res.redirect("/workshops")
}