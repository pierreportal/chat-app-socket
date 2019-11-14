const mongoose = require("mongoose")
const { Schema } = mongoose

const messageSchema = new Schema({
  by: { type: Schema.Types.ObjectId, ref: "User" },
  to: { type: Schema.Types.ObjectId, ref: "User" },
  content: String
}, {
  timestamps: { createdAt: 'created_at' }
})

const Message = mongoose.model("Message", messageSchema)

module.exports = Message