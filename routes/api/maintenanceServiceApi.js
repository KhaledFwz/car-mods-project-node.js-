const express = require("express")
const router = express.Router()
const maintenanceService = require("../../models/MaintenanceService")

router.get('/', async (req,res)=>{
    try {
        const maintenances= await maintenanceService.find();
        res.status(201).json(maintenances)
    } catch (err) {
        res.status(500).json({error: "حدث خطأ اثناء ايجاد الصيانة"})
    }
})


router.post('/add', async (req,res)=>{
    try {
        const { name } = req.body();
        const newMaintenance = await maintenanceService.create({name});
        res.status(201).json(newMaintenance)
    } catch (err) {
        res.status(500).json({error: "حدث خطأ اثناءاضافة عنصر الصيانة"})
    }
})

module.exports = router;