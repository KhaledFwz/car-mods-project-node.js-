const ModificationService = require("../models/ModificationService")

exports.getAll = async (req,res) => {
    const services = await ModificationService.find();
    res.render("modificationService/list", {services})
}
// "/add" -> add.ejs
exports.showAddForm = async (req,res) => {
    res.render("modificationService/add")
}
exports.Addnew = async (req,res) => {
    const {name} = req.body;
    await ModificationService.create({name})
    res.redirect("/modification-services")
}