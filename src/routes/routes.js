const express = require("express")
const router = express.Router()
const loginController = require("../controllers/login")
const registerController = require("../controllers/register")
// router.post("/login", loginController.signup)
// router.post("/login", loginController.login)
// router.get("/login", passport.auth, loginController.userDetail)
router.post("register", registerController.getlogin)
router.post("/login", loginController.login)

// router.post("/login",loginController.getlogin)
// router.post("/coche",cocheController.saveCoche)
// router.get("/marcas",marcaController.getMarcas)
// router.get("/marca/:id",marcaController.getMarca)
// router.put("/marca/:id",marcaController.updateMarca)
// router.delete("/marca/:id",marcaController.deleteMarca)


module.exports = router