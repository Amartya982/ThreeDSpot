const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, lowercase: true },
    lastName: { type: String, required: true, lowercase: true },
    gender: { type: String, lowercase: true, enum: ["male", "female"], required: true, },
    maritalStatus: { type: String, lowercase: true, enum: ["single", "married"], required: true },
    emailAddress: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, lowercase: true, default: "user" },
    homeAddress: { type: String, default: "N/A" },
    isDisabled: { type: Boolean, default: false },
    createdAt: { type: Date, default: () => new Date().getTime() },
    lastSeen: { type: Date, default: () => new Date().getTime() }
  },
  {
    collection: "Users"
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User