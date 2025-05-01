const express = require('express')
const router = express.Router()
const carPart = require("../../models/CarPart");



router.get('/', async (req,res)=>{
    try {
        const parts= await carPart.find().populate("modification");
        res.status(201).json(parts)
    } catch (err) {
        res.status(500).json({error: "حدث خطأ اثناء جلب القطع"})
    }
})


router.post('/add', async (req,res)=>{
    try {
        const {modification, part_image} = req.body();
        const newPart = await carPart.create({modification,part_image});
        res.status(201).json(newPart)
    } catch (err) {
        res.status(500).json({error: "حدث خطأ في انشاء القطعة"})
    }
})


module.exports = router;