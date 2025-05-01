const express = require("express")
const router = express.Router()
const workshopMaintenance = require("../../models/WorkshopMaintenance")



router.get('/', async (req,res)=>{
    try {
        const workshopmaintenaces = await workshopMaintenance.find()
        res.status(201).json(workshopmaintenaces)
    } catch (err) {
        res.status(500).json({error: "حدث خطأ اثناء جلب البيانات"})
    }
})


router.post('/', async (req,res)=>{
    try {
        const {workshop,service} = req.body();
        const newWorkshopService = await workshopMaintenance.create({workshop,service});
        res.status(201).json(newWorkshopService)
    } catch (err) {
        res.status(500).json({error: "حدث خطأ اثناء اضافة الخدمة"})
    }
})

module.exports = router;