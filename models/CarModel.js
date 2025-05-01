const mongoose = require("mongoose")

const CarModelSchema = new mongoose.Schema({
    model: {type: String, required: true},
    info: {type: String},
    brand: {type: mongoose.Schema.Types.ObjectId, ref: "CarBrand", required: true} // forgin key
});


module.exports = mongoose.model("CarModel", CarModelSchema);