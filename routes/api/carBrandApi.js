const express = require("express")
const router = express.Router()
const CarBrand = require('../../models/CarBrand')

// get all brands 
router.get('/', async (req,res)=>{
    try {
        const brands = await CarBrand.find();
        res.status(201).json(brands)
    } catch (err) {
        res.status(500).json({error: "حدث خطأ اثناء جلب البيانات"})
    }
})

// Add new Brand
router.post('/', async (req,res)=>{
    try {
        const { brand, info } = req.body;
        const newBrand = await CarBrand.create({brand,info})
        res.status(201).json(newBrand)
    } catch (err) {
        res.status(400).json({error: "فشل في اضافة العلامة التجارية"})
    }
})

module.exports = router;