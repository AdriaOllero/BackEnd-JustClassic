const express = require("express")
const router = express.Router()
const userController = require("../controllers/user")
const carController = require("../controllers/car")

router.post("/registerUser", userController.signup)
router.post("/login", userController.login)
router.post("/car", carController.saveCar)




module.exports = router