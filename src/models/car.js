const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CarSchema = new Schema({
   
    name:String,
    bio: String,
    year: String,
    // photo: String,
    km: String,
    model: String,
    brand: String,
    fuel: String,
    doors: String,
    seats: String,
    location: String,
    price: String,

    savedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const CarModel = mongoose.model("car", CarSchema)

module.exports = CarModel