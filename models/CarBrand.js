const mongoose = require('mongoose')
const CarBrandSchema = new mongoose.Schema({
    brand: {type: String, required: true},
    info: {type: String}
});

module.exports = mongoose.model("CarBrand", CarBrandSchema)