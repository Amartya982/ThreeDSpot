exports.getAllCarts = async function (req, res, next) {
  res.send('test')
}

exports.getCartByID = async function (req, res, next) {
  const cartID = req.params.cartID
  res.send(cartID)
}

exports.getCartByUserID = async function (req, res, next) {
  const userID = req.params.userID
  res.send(userID)
}