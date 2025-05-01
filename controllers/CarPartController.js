const CarPart = require("../models/CarPart")
const CarModification = require("../models/CarModification")

exports.getAllParts = async (req, res ) => {
    const parts = await CarPart.find().populate('modification')
    res.render("carParts/list", { parts })
}


//  "/add" -> add.ejs
exports.showAddForm = async (req,res) => {
    const modifications = await CarModification.find();
    res.render("carParts/add", { modifications })
};

exports.addPart = async (req,res) => {
    const { modifications } = req.body;
    const partImage = req.files?.part_image;
    const imageName = Date.now() + "_" + partImage.name;
    await partImage.mv("public/uploads/"+ imageName)

    await CarPart.create({
        modifications,
        part_image: imageName
    })

    res.redirect("/parts")
}