const CarModification = require("../models/CarModification")
const CarModel = require("../models/CarModel")
const path = require("path")
const fs = require('fs')

exports.getAllModifications = async (req, res) => {
    const modification = await CarModification.find().populate('model')
    res.render('carModification/list', { modification })
};

exports.showAddForm = async (req,res) => {
    const models = await CarModel.find();
    res.render('carModification/add', { models})
};


exports.addModification = async (req,res) => {
    const { model } = req.body
    let before_image = req.files['before_image']?.[0].filename||"";
    let after_image = req.files['after_image']?.[0].filename||"";

    // if (req.files && req.files.before_image) {
    //     const before = req.files.before_image;
    //     before_image = Date.now() + "_before_" + before.name;
    //     await before.mv(path.join(__dirname, '../public/uploads/', before_image))
    // }

    // if (req.files && req.files.after_image) {
    //     const after = req.files.after_image;
    //     after_image = Date.now() + '_after_' + after.name
    //     await after.mv(path.join(__dirname, '../public/uploads', after_image))
    // }
    await CarModification.create({ model, before_image , after_image })
    res.redirect('/modifications')
}