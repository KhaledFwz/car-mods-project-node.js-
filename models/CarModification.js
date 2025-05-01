const mongoose = require('mongoose')

const CarModificationSchema = new mongoose.Schema({
    model: {type: mongoose.Schema.Types.ObjectId, ref: 'CarModel', required: true},
    before_image: {type: String},
    after_image: {type: String}
});


module.exports = mongoose.model("CarModification", CarModificationSchema)