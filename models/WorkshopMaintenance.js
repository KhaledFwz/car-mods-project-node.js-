const mongoose = require("mongoose")

const WorkshopMaintenanceSchema = new mongoose.Schema({
    workshop: {type: mongoose.Schema.Types.ObjectId, ref: "Workshop", required: true},
    service: {type: mongoose.Schema.Types.ObjectId, ref: "MaintenanceService", required: true}
});

module.exports = mongoose.model("WorkshopMaintenance", WorkshopMaintenanceSchema)