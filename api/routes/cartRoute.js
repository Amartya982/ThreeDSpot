const { Router } = require('express')
const { cartController } = require('../controllers')


Router().get('/', cartController.getAllCarts)
Router().get('/:cartID', cartController.getCartByID)
Router().get('/user/:userID', cartController.getCartByUserID)

module.exports = Router