const express = require('express') //import express
const controllers = require('../controllers') //import the controllers

const router = express.Router() //initialize the express Router() method
const { productController } = controllers

router.get("/", productController.getAllProducts)
router.get("/:productID", productController.getProductByID)

module.exports = router