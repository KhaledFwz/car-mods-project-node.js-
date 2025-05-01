const mongoose = require("mongoose")

const ModificationServiceShema = new mongoose.Schema({
    name: {type: String, required: true}
});

module.exports = mongoose.model("ModificationService", ModificationServiceShema)