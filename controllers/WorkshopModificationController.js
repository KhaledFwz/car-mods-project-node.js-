const Workshop = require("../models/Workshop")
const ModificationService = require("../models/MaintenanceService")
const WorkshopModification = require("../models/WorkshopModification")

exports.getAll = async (req,res) => {
    const data = await WorkshopModification.find()
    .populate("workshop")
    .populate("modificationService");
    res.render("workshopModification/list", {data})
}
// "/add" -> add.ejs
exports.showAddFrom = async (req,res) => {
    const workshops = await Workshop.find();
    const services = await ModificationService.find();

    res.render("workshopModification/add", { workshops, services })
};
exports.addNew = async (req,res) => {
    const { workshop, modificationService } = res.body;
    await WorkshopModification.create({ workshop , modificationService })
    res.redirect("/workshop-modifications")
}