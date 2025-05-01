const mongoose = require("mongoose")

const MaintenanceServiceSchema = new mongoose.Schema({
    name: {type: String, required: true},
});

module.exports = mongoose.model("MaintenanceService", MaintenanceServiceSchema)