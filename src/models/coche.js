const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CocheSchema = new Schema({
name: String,
type: String,
savedAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now }
})

const CocheModel = mongoose.model("coche", CocheSchema)

module.exports = CocheModel