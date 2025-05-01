const mongoose = require('mongoose')

const WorkshopModificationSchema = new mongoose.Schema({
    workshop: {type: mongoose.Schema.Types.ObjectId, ref: "Workshop", required: true},
    modification: {type: mongoose.Schema.Types.ObjectId, ref: "ModificationService", required: true}
});

module.exports = mongoose.model("WorkshopModification", WorkshopModificationSchema)