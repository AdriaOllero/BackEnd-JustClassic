const controller = {}
const coche = require("../models/coche")


controller.saveCoche = async (req, res) => {
   
    
    let imagen = req.body.imagen
    let marca = req.body.marca
    let modelo = req.body.modelo
    let combustible = req.body.combustible
    let kilometros = req.body.kilometros
    let año = req.body.año
    let color = req.body.color
    let precio = req.body.precio
    let localidad = req.body.localidad
    let description = req.body.description
    if (imagen && marca && modelo && combustible && kilometros && año && color && precio && localidad && description) {
        try {
            const coche = new Marca({ imagen: imagen, marca: marca, modelo: modelo, combustible: combustible, kilometros: kilometros, año: año, color: color,  precio: precio, localidad: localidad, description: description})
            await coche.save()
            res.status(204).send()
        } catch (err) {
            res.status(500).send(err)
        }
    } else {
        res.status(400).send()
    }
}
module.exports = controller