const controller = {}
const User = require("../models/user")
const authJWT = require("../auth/jwt")
const userValidator = require("../validators/user")

controller.login = async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  console.log("entra al login del back");
  if (!email || !password) {
      console.log("datos obligatorios")
      res.status(401).send("Credenciales incorrectas")
      return
  }

  try {
      const user = await User.findOne({ email: email })

      if (!user) {
          console.log("usuario no existe")
          res.status(401).send("Credenciales incorrectas")
          return
      }

      const validate = await user.isValidPassword(password)
      if (!validate) {
          console.log("contraseña incorrecta")
          res.status(401).send("Credenciales incorrectas")
          return
      }

      const dataToken = authJWT.createToken(user)
      console.log("Login Succesfully");
      console.log(user._id)
      console.log(user.name)
      console.log(user.email)
      console.log(user.phone)
      return res.send({
          access_token: dataToken[0],
          expires_in: dataToken[1],
          id: user._id,
          userName: user.name,
          userEmail: user.email,
          userPhone: user.phone
      })

  } catch (err) {
      console.log(err)
      res.status(500).send("Error")
  }
}

controller.signup = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const phone = req.body.phone;
  
    const validation = userValidator.validate(req.body);
  
    if (validation.error) {
      const error = validation.error.details[0].message;
      console.log(validation.error);
      res.status(400).send(error);
      return;
    }
  
    try {
      const exists = await User.findOne({ email: email });
      if (exists) {
        console.log("usuario ya existe");
        res.status(400).send("usuario ya existe");
        return;
      }
      const user = new User({
        email: email,
        password: password,
        name: name,
        phone: phone,
      });
      await user.save();
      const data = await User.findOne({ email: email });
      res.send({ status: "ok", data: data });
      console.log(user);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error");
    }
  };
  controller.position = (req, res) => {
    const position = req.query.position;
    console.log("position");
  
    if (position === "" || isNaN(position) || position < 1) {
      res.send("<p style='color: red;'>Introduce una posición válida</p>");
      return;
    }
    let user =
      position <= users.length ? users[position - 1] : users[users.length - 1];
    res.send(
      "<p> Has seleccionado el usuario: <span style='color: #1bd;'>" +
        user.email +
        "</span></p>"
    );
  };

controller.getUserJobs = async (req, res) => {
    const user = req.user
    const jobs = []


    try {
        /*const application = await Application.aggregate([
            { $match: { applicant: user._id } }
        ])*/


        const application = await Application.find({ applicant: user._id })

        for (const item of application) {
            let job = await Job.findById(item.job)
            jobs.push(job)
        }

        res.json(jobs)
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: "Error" })
    }
}
controller.apply = async (req, res) => {
    /*
    Crear Application
    
        Campos de applicant y job que sean objects
        Al crear una oferta que guarde la empresa tambien
    
    */

    const user = req.user

    if (user.role == 'company') {
        res.status(400).send('Solo un usuario puede apuntarse a ofertas de trabajo')
        return
    }
    try {
        const job = await Job.findById(req.body.job)

        if (!job) {
            res.status(400).send("El trabajo no existe")
            return
        }
        const application = new Application(
            {
                applicant: user,
                job: job,
                cv: req.body.cv
            }
        )
        await application.save()
        res.status(201).send()
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }

}

module.exports = controller