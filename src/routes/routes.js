const express = require("express")
const router = express.Router()
const userController = require("../controllers/user")
const carController = require("../controllers/car")
const passport = require('../auth/auth')


//USER
router.post("/registerUser", userController.signup)
router.post("/login", userController.login)
router.get("/user/:id",passport.auth, userController.getUser)
router.get("/user/:id",passport.auth, userController.updateUser)


//CARS
router.get("/cars", carController.getCars)


//CAR
router.post("/car", carController.saveCar)
router.get("/car/:id",passport.auth, carController.getCar)
router.put("/car/:id",passport.auth, carController.updateCar)
router.delete("/car/:id", passport.auth,carController.deleteCar)


module.exports = router