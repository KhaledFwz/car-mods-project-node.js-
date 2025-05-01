const express = require("express")
const router = express.Router()
const workshop = require("../../models/Workshop")



router.get('/', async (req,res)=>{
    try {
        const workshops = await workshop.find();
        res.status(201).json(workshops)
    } catch (err) {
        res.status(500).json({error: "حدث خطأ اثناء جلب البيانات"})
    }
})


router.post('/add', async (req,res)=>{
    try {
        const {name,location,contact_info} = req.body();
        const newWorkshop = await workshop.create({name,location,contact_info})
        res.status(201).json(newWorkshop)
    } catch (err) {
        res.status(500).json({error: "حدث خطأ اثناء اضافة الورشة"})
    }
})

module.exports = router;