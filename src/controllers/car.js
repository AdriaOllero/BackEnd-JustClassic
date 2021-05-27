const controller = {};
const Car = require("../models/car");
const carValidator = require("../validators/car");

controller.saveCar = async (req, res) => {
  const validation = carValidator.validate(req.body);

  if (validation.error) {
    const error = validation.error.details[0].message;
    console.log(validation.error);
    res.status(400).send(error);
    return;
  }

  try {
    console.log(req.body.type);
    const car = new Car({
      name: req.body.name,
      bio: req.body.bio,
      year: req.body.year,
      photo: req.body.photo,
      km: req.body.km,
      model: req.body.model,
      brand: req.body.brand,
      fuel: req.body.fuel,
      doors: req.body.doors,
      seats: req.body.seats,
      location: req.body.location,
      price: req.body.price,
    });

    await car.save();
    res.status(201).send();
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
controller.getCar = async (req, res) => {
  const id = req.params.id;
  try {
    const car = await Car.findById(id);
    console.log(car)
    res.json(car);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "El trabajo no existe" });
  }
};

controller.getCars = async (req, res) => {
  try {
    const car = await Car.find();
    res.json(car);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Error" });
  }
};

controller.updateCar = async (req, res) => {
  const validation = carValidator.validate(req.body);

  if (validation.error) {
    const error = validation.error.details[0].message;
    console.log(validation.error);
    res.status(400).send(error);
    return;
  }

  try {
    await Car.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      bio: req.body.bio,
      year: req.body.year,
      photo: req.body.photo,
      km: req.body.km,
      model: req.body.model,
      brand: req.body.brand,
      fuel: req.body.fuel,
      doors: req.body.doors,
      seats: req.body.seats,
      location: req.body.location,
      price: req.body.price,
    });
    res.status(201).send();
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

controller.deleteCar = async (req, res) => {
  const id = req.params.id;
  const user = req.user;
  try {
    const car = await Car.findById(id);
    if (String(car.name) === String(user.id)) {
      const dcar = await Car.findByIdAndDelete(id);
      res.json(dcar);
    } else {
      res
        .status(403)
        .send({ error: "No estas autorizado a borrar esta oferta" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "El trabajo no existe" });
  }
};
// controller.getCarsQuery = async (req, res) => {
//   try {
//     const search = req.query.search;
//     const location = req.query.location;
//     const type = req.query.type;

//     const query = {
//       $or: [
//         {
//           name: new RegExp(search, "i"),
//         },
//         {
//           description: new RegExp(search, "i"),
//         },
//       ],
//       $and: [
//         {
//           type: type,
//           location: location,
//         },
//       ],
//     };
//     if (type || location) {
//       query.$and = [];
//     }
//     if (type) {
//       query.$and.push({
//         type: type,
//       });
//     }

//     if (location) {
//       query.$and.push({
//         location: location,
//       });
//     }
//     const car = await Car.find().populate("companyId");
//     res.json(car);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send({ error: "Error" });
//   }
// };

// controller.getJobsFilter = async (req, res) => {
//   const companyId = req.body.companyId;

//   /*
//           const user = req.user
//           const filters = []
//           if (user) {
//               filters.push({ applicant: new RegExp(filter, 'i') })
//           }
//           console.log()
//           */

//   try {
//     const job = await Job.find({ companyId: companyId });
//     res.json(job);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send({ error: "Error" });
//   }
// };

module.exports = controller;
