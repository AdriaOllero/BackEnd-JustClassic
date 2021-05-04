const mongoose = require("mongoose")
const password = "Ah6828aha"
const dbname = "multimedia"
const user = "adrianadmin"
const host = "cluster0.aw86z.mongodb.net"

const uri = `mongodb+srv://${user}:${password}@${host}/${dbname}?retryWrites=true&w=majority`
module.exports = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,

    useCreateIndex: true
})
