const models = require('../models')

exports.getAllProducts = async function (req, res) {
  res.send('get all products')
}

exports.getProductByID = async function (req, res) {
  const productID = req.params.productID
  res.send(productID)
}