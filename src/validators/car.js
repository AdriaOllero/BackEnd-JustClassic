const Joi = require('joi');
const schema = Joi.object({
    name: Joi.string().min(5).required(),
    bio: Joi.string().min(10).required(),
    year: Joi.string().required(),
    photo: Joi.string().required(),
    km: Joi.string().required(),
    model: Joi.string().required(),
    brand: Joi.string().required(),
    fuel: Joi.string().required(),
    doors: Joi.string().required(),
    seats: Joi.string().required(),
    location: Joi.string().required(),
    price: Joi.string().required()
   
})

//schema anterior con las validaciones
function validate(body) {

    return schema.validate({
        name: body.name,
        bio: body.bio,
        year: body.year,
        photo: body.photo,
        km: body.km,
        model: body.model,
        brand: body.brand,
        fuel: body.fuel,
        doors: body.doors,
        seats: body.seats,
        location: body.location,
        price: body.price
    }, { abortEarly: false })
}

module.exports = {
    validate
}
