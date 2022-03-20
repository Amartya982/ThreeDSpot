const express = require('express') //import express
const controllers = require('../controllers') //import the controllers

const router = express.Router() //initialize the express Router() method
const { orderController } = controllers

router.get('/', orderController.getAllOrders)

module.exports = router