const express = require('express') //import express
const controllers = require('../controllers') //import the controllers

const router = express.Router() //initialize the express Router() method
const { cartController } = controllers //destructure the controllers object 

router.get('/', cartController.getAllCarts)
router.get('/:cartID', cartController.getCartByID)
router.get('/user/:userID', cartController.getCartByUserID)

module.exports = router