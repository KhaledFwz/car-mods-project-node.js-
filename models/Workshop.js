const mongoose = require('mongoose')

const WorkshopSchema = new  mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String},
    contact_info: {type: String}
});

module.exports = mongoose.model("Workshop", WorkshopSchema)