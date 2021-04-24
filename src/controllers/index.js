const controller = {}
const Marca = require("../models/marca")


controller.saveMarca = async (req, res) => {
    let imagen = req.body.imagen
    let logo = req.body.logo
    let modelo = req.body.modelo
    let combustible = req.body.combustible
    let kilometros = req.body.kilometros
    let año = req.body.año
    let color = req.body.color
    let precio = req.body.precio
    let localidad = req.body.localidad
    let description = req.body.description
    if (imagen && logo && modelo && combustible && kilometros && año && color && precio && localidad && description) {
        try {
            const marca = new Marca({ imagen: imagen, logo: logo, modelo: modelo, combustible: combustible, kilometros: kilometros, año: año, color: color,  precio: precio, localidad: localidad, description: description})
            await marca.save()
            res.status(204).send()
        } catch (err) {
            res.status(500).send(err)
        }
    } else {
        res.status(400).send()
    }
}
module.exports = controller