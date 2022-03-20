const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true, lowercase: true, enum: ["male", "female"] },
    maritalStatus: { type: String, lowercase: true, enum: ["single", "married"], required: true },
    emailAddress: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, lowercase: true, default: "admin" },
    homeAddress: { type: String, required: true }
  }
)

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin