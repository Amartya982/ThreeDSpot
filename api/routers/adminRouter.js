const router = require('express').Router()
const controllers = require("../controllers")

const adminController = controllers.adminController

const { getAll, getByID, create, signin, _delete } = adminController

router.get("/", getAll)
router.get("/:adminID", getByID)
router.post("/create", create)
router.post("/signin", signin)
router.delete("/:adminID", _delete)

module.exports = router
