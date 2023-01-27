const mongoose = require("mongoose")

let userSchema = mongoose.Schema({
    name: { type: String },
    score: { type: Number },
    difficulty:{type:String}
})

const userModel = mongoose.model("Userlist", userSchema)
module.exports = {userModel}