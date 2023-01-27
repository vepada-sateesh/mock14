const mongoose = require("mongoose")
require("dotenv").config()
const connection = mongoose.connect(Process.env.MONGO_URL)

module.exports = {connection}