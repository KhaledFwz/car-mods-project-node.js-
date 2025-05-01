const express = require("express")
const router = express.Router()
const workshopModification = require("../../models/WorkshopModification");


router.get('/', async (req,res)=>{
    try {
        const workshopmodifications = await workshopModification.find();
        res.status(201).json(workshopmodifications)
    } catch (err) {
        res.status(500).json({error: "حدث خطأ اثناء جلب البيانات"})
    }
})


router.post('/add', async (req,res)=>{
    try {
        const {workshop,modification} = req.body();
        const newWorkshopModification = await workshopModification.create({workshop,modification})
        res.status(201).json(newWorkshopModification)
    } catch (err) {
        res.status(500).json({error: "حدث خطأ اثناء اضافة الخدمة"})
    }
})

module.exports = router;