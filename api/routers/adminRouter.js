const router = require('express').Router()
const controllers = require("../controllers")

const adminController = controllers.adminController

const { getAll, getByID, create, signin } = adminController

router.get("/", getAll)
router.get("/:adminID", getByID)
router.post("/create", create)
router.post("/signin", signin)

module.exports = router
