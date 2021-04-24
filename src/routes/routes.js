const express = require("express")
const router = express.Router()
const marcaController = require('../controllers/index')


router.post("/marca",marcaController.saveMarca)
// router.get("/marcas",marcaController.getMarcas)
// router.get("/marca/:id",marcaController.getMarca)
// router.put("/marca/:id",marcaController.updateMarca)
// router.delete("/marca/:id",marcaController.deleteMarca)


module.exports = router