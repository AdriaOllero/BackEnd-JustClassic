const controller = {}
const User = require("../models/user")
const authJWT = require("../auth/jwt")


controller.signup = async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  if (!email || !password) {
    res.status(400).send()
    return
  }
  try {
    const user = new User({ email: email, password: password })
    await user.save()
    const data = await User.findOne({ email: email })
    res.send({ status: "ok", data: data })
  } catch (err) {
    console.log(err)
    res.status(500).send(err.message)
  }
}

controller.login = async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  if (!email || !password) {
    res.status(401).send("Credenciales incorrectas")
    return
  }
  try {
    const user = await User.findOne({ email: email })

    if (!user) {
      res.status(401).send("Credenciales incorrectas")
      return
    }
    const validate = await user.isValidPassword(password)
    if (!validate) {
      res.status(401).send("Credenciales incorrectas")
      return
    }

    const dataToken = authJWT.createToken(user)

    return res.send({
      access_token: dataToken[0],
      expires_in: dataToken[1]
    })
  } catch (err) {
    console.log(err)
    res.status(401).send("Credenciales incorrectas")
    return
  }
}

controller.userDetail = async (req, res) => {
  res.send({ status: "ok", data: req.user })
}

// const users = [

//   {email:"parrelgp5@widmore.com",password:"Ah6828aha"},

//   {email:"email@prueba.com",password:"pass123"},

//   {email:"fullstack@pro.com",password:"pass123"}

//   ]

//     controller.getlogin = (req, res)=>{

//         let correo = req.body.email
//         let contrasena = req.body.password
//         console.log(correo +"  "+ contrasena)



//         if (req.body.email && req.body.password){
//             let user = users.find((user) => user.email == req.body.email)
//              if(user && user.password == req.body.password){
//                res.send("OK") 
//                console.log(res)

//              }else{
//                 res.send("Error de Autentificación")
//              }

//         } else{
//           res.send("Error no registrado")
//         }
//      }
//         controller.position = (req, res) => {  
//            const position = req.query.position
//            console.log(position)

//            if(position==="" || isNaN(position) || position < 1){
//              res.send("<p style='color: red;'>Introduce una posición válida</p>")
//              return
//       }
//       let user = position <= users.length ? users[position-1] : users[users.length-1]
//       res.send("<p> Has seleccionado el usuario: <span style='color: #1bd;'>" + user.email + "</span></p>")
//     }








module.exports = controller