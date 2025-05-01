const mongoose = require("mongoose")

const CarPartSchema = new mongoose.Schema({
    modification: {type: mongoose.Schema.Types.ObjectId, ref: 'CarModification', required: true},
    part_image: {type: String}
});

module.exports = mongoose.model("CarPart", CarPartSchema)