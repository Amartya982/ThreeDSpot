const router = require('express').Router()
const controllers = require("../controllers")

const {adminController} = controllers

router.get("/", adminController.getAllAdmins)
router.get("/:adminID", adminController.getAdminByID)
// router.post("/addAdmin", addAdmin)
// router.post("/signin", login)

module.exports = router