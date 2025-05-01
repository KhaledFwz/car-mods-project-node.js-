const CarBrand = require("../models/CarBrand")


exports.getAllBrands = async (req,res) => {
    const brands= await CarBrand.find();
    res.render('carBrands/list', {brands})
};

exports.showAddForm = (req,res) => {
    res.render('carBrands/add')
};


exports.addBrand = async (req,res) => {
    const { brand , info } = req.body;
    await CarBrand.create({ brand, info});
    res.redirect('/brands')
};