const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User"
    },
    items: [
      {
        product: { type: mongoose.Types.ObjectId, ref: "Product" },
        count: { type: Number }
      }
    ]
  }
)

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart