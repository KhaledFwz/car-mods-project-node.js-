const express = require("express")
const router = express.Router()
const carModification = require("../../models/CarModification")


// get all Modification
router.get("/", async (req,res) => {
    try {
        const modification = await carModification.find().populate("model")
        res.status(201).json(modification)
    } catch (err) {
        res.status(400).json({error: "حدث خطأ اثناء تلقي التعديلات"})
    }
})

// Add New Modification
router.get("/", async (req,res) => {
    try {
        const { model, before_image, after_image} = req.body();
        const newModification = await carModification.create({model,before_image,after_image})
        res.status(201).json(newModification)
    } catch (err) {
        res.status(500).json({error: "حدث خطأ اثناء اضافة التعديل"})
    }
})

module.exports = router;