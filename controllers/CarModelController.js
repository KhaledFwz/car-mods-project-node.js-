const CarModel = require('../models/CarModel')
const CarBrand = require("../models/CarBrand")
// "/"
exports.getAllModels = async (req,res) => {
 const model = await CarModel.find().populate('brand')
 res.render('carModel/list' , { model })
}

//   "/add" -> add.ejs
exports.showAddForm = async (req, res) => {
    const brands= await CarBrand.find();
    res.render('carModel/add', {brands})
}
exports.addNew = async (req, res) => {
const { model, info , brand } = req.body;
await CarModel.create({ model , info , brand})
res.redirect('/models')
}