const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  picture: String
})

const User = mongoose.model("User", userSchema)

module.exports = User