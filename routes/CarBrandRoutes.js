const express = require("express")
const router = express.Router()
const CarBrandController = require("../controllers/CarBrandController")


router.get('/', CarBrandController.getAllBrands)


router.get('/add', CarBrandController.showAddForm)

router.post('/add', CarBrandController.addBrand)


module.exports = router;