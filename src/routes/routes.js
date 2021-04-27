const express = require("express")
const router = express.Router()
const loginController = require("../controllers/login")
const cocheController = require('../controllers/index')


router.post("/login",loginController.getlogin)
router.post("/coche",cocheController.saveCoche)
// router.get("/marcas",marcaController.getMarcas)
// router.get("/marca/:id",marcaController.getMarca)
// router.put("/marca/:id",marcaController.updateMarca)
// router.delete("/marca/:id",marcaController.deleteMarca)


module.exports = router