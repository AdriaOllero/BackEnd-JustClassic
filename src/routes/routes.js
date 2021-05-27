const express = require("express")
const router = express.Router()
const userController = require("../controllers/user")
const carController = require("../controllers/car")
const passport = require('../auth/auth')

router.post("/registerUser", userController.signup)
router.post("/login", userController.login)
router.post("/car", carController.saveCar)
router.get("/user/:id",passport.auth, userController.getUser)
router.get("/cars", carController.getCars)
router.get("/car/:id",passport.auth, carController.getCar)




module.exports = router