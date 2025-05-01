const express = require('express')
const router = express.Router()
const modificationService = require("../../models/ModificationService")


router.get('/', async (req,res)=>{
    try {
        const modificationServices = await modificationService.find();
        res.status(201).json(modificationServices)
    } catch (err) {
        res.status(500).json({error: "حدث خطأ اثناء جلب خدمات التعديلات"})
    }
})


router.get('/add', async (req,res)=>{
    try {
        const {name} = req.body();
        const newMod = await modificationService.create({name})
        res.status(201).json(newMod)      
    } catch (err) {
        res.status(500).json({error: "حدث خطأ اثناء اضافة التعديل"})
    }
})

module.exports = router;