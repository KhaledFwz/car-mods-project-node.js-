const express = require("express")
const router = express.Router()
const CarModel = require("../../models/CarModel");


// get all models
router.get("/", async (req,res) => {
    try {
        const models = await CarModel.find().populate('brand');
        res.status(200).json(models)
    } catch (err) {
        res.status(500).json({error: "حدث خطأ اثناء جلب الموديلات"})
    }
})

// Add New Model
router.post("/add", async (req,res) => {
    try {
        const { model,info,brand } = req.body()
        const newModel = await CarModel.create({model,info,brand})
        res.status(201).json(newModel)
    } catch (err) {
        res.status(400).json({error: "فشل في اضافة الموديل"})
    }
})


module.exports = router;