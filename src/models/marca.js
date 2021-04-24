const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MarcaSchema = new Schema({
name: String,
type: String,
savedAt: { type: Date, default: Date.now },
updatedAt: { type: Date, default: Date.now }
})

const MarcaModel = mongoose.model("marca", MarcaSchema)

module.exports = MarcaModel