const router = require('express').Router()
const controllers = require('../controllers')

const { userController } = controllers

router.get("/", userController.getAllUsers)
router.get("/:id", userController.getUserByID)
router.post("/addUser", userController.addUser)
router.post("/signin", userController.signin)
// router.post("/:teacherID/profile/edit", editProfile)
// router.get("/activate/:teacherID", activate)
// router.get("/deactivate/:teacherID", deactivate)
// router.get("/delete/:teacherID", _delete)

module.exports = router