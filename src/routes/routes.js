const express = require("express")
const router = express.Router()
const passport = require('../auth/auth')
const loginController = require("../controllers/login")
const cocheController = require('../controllers/index')
const registerController = require("../controllers/register")

router.post("/login", loginController.signup)
router.post("/login", loginController.login)
router.get("/login", passport.auth, loginController.userDetail)
router.post("register", registerController.getlogin)


// router.post("/login",loginController.getlogin)
// router.post("/coche",cocheController.saveCoche)
// router.get("/marcas",marcaController.getMarcas)
// router.get("/marca/:id",marcaController.getMarca)
// router.put("/marca/:id",marcaController.updateMarca)
// router.delete("/marca/:id",marcaController.deleteMarca)


module.exports = router