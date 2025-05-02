require('dotenv').config();
const exp = require("constants")
const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const fileUpload = require("express-fileupload")


const app = express()

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))
app.use('/uploads', express.static('uploads'))

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(fileUpload())



// connect to database
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("✅ Connected to MongoDB"))
.catch((err) => console.log("❌ DB connection error:", err));




app.use('/', (req,res) => {
    res.render("home")
})

// routes
const CarBrandRoutes = require("./routes/CarBrandRoutes")
app.use('/brands', CarBrandRoutes)

//2 
const CarModelRoutes = require("./routes/CarModelRoutes")
app.use("/models", CarModelRoutes)

// 3 
const CarModificationRoutes = require("./routes/CarModificationRoutes")
app.use("/modifications", CarModificationRoutes)

// 4 
const CarPartRoutes = require("./routes/CarPartRoutes")
app.use("/parts", CarPartRoutes)

// 5
const WorkshopRoutes = require("./routes/WorkshopRoutes")
app.use("/workshops", WorkshopRoutes)

// 6
const MaintenanceServiceRoutes = require("./routes/MaintenanceServicesRoutes")
app.use('/maintenance-services', MaintenanceServiceRoutes)

// 7 
const WorkshopMaintenanceRoutes = require("./routes/WorkshopMaintenanceRoutes")
app.use("/workshop-maintenance", WorkshopMaintenanceRoutes)

// 8
const ModificationServiceRoutes = require("./routes/ModificationServiceRoutes")
app.use("/modification-services", ModificationServiceRoutes)

// 9 
const workshopModificationRoutes = require("./routes/WorkshopModificationRoutes")
app.use("/workshop-modifications", workshopModificationRoutes)




// Api's //

// Brand Api
const carBrandApiRoutes = require("./routes/api/carBrandApi")
app.use('/api/v1/brands', carBrandApiRoutes)

// Model Api
const carModelApiRoutes = require("./routes/api/carModelApi")
app.use('/api/v1/models', carModelApiRoutes)

// Modification Api
const carModificationApiRoutes = require("./routes/api/carModificationApi")
app.use('/api/v1/modification', carModificationApiRoutes)

// Part Api
const carPartApiRoutes = require("./routes/api/carPartApi")
app.use('/api/v1/parts', carPartApiRoutes)

// Maintenance Service Api
const maintenanceServiceApiRoutes = require("./routes/api/maintenanceServiceApi")
app.use('/api/v1/maintenance-service', maintenanceServiceApiRoutes)

// Modification Service Api
const modificationServiceApiRoutes = require("./routes/api/modificationServiceApi")
app.use('/api/v1/modification-service', modificationServiceApiRoutes)

// Workshop Api
const WorkshopApiRoutes = require("./routes/api/workshopApi")
app.use('/api/v1/workshops', WorkshopApiRoutes)

// Workshop Maintenance Api
const workshopMaintenanceApiRoutes = require("./routes/api/workshopMaintenanceApi")
app.use('/api/v1/workshop-maintenance', workshopMaintenanceApiRoutes)

// Workshop Modification Api
const workshopModificationApiRoutes = require("./routes/api/workshopModificationApi")
app.use('/api/v1/workshop-modification', workshopModificationApiRoutes)



// router.get('/', async (req,res)=>{
//     try {} catch (err) {}
// })



const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🥳Server running at http://localhost:${PORT}`))