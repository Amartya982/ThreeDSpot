const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: "Users" },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, default: "N/A" },
    status: { type: String, default: 'Submitted' },
    createdAt: { type: Date, default: () => new Date().getTime() },
    updatedAt: { type: Date, default: () => new Date().getTime() }
  }
)

const Order = mongoose.model('Order', orderSchema)

module.exports = Order