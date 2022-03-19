const router = require('express').Router()
const controllers = require('../controllers')

const { userController } = controllers

const { enable, disable, _delete } = userController

router.get("/", userController.getAllUsers)
router.get("/:userID", userController.getUserByID)
router.post("/signup", userController.signup)
router.post("/signin", userController.signin)
// router.post("/:teacherID/profile/edit", editProfile)
router.get("/enable/:userID", enable)
router.get("/disable/:userID", disable)
router.get("/delete/:userID", _delete)

module.exports = router