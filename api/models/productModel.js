const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true
    },
    description: {
      type: String,
      required: false
    },
    price: {
      type: Number,
      required: true,
    }
  }
)

const Product = mongoose.model('Product', productSchema)

module.exports = Product