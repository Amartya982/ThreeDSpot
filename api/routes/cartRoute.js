const express = require('express')
const controllers = require('../controllers')

const router = express.Router()
const { cartController } = controllers

router.get('/', cartController.getAllCarts)
router.get('/:cartID', cartController.getCartByID)
router.get('/user/:userID', cartController.getCartByUserID)

module.exports = router