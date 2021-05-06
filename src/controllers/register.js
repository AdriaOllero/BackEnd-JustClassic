const controller ={}

const users = [

  {nombre:"", email:"parrelgp5@widmore.com",password:"pass123"},
  
  {email:"email@prueba.com",password:"pass123"},
  
  {email:"fullstack@pro.com",password:"pass123"}
  
  ]

    controller.getlogin = (req, res)=>{
      
        let correo = req.body.email
        let contrasena = req.body.password
        console.log(correo +"  "+contrasena)

       

        if (req.body.email && req.body.password){
            let user = users.find((user) => user.email == req.body.email)
             if(user && user.password == req.body.password){
               res.send("OK") 
                
             }else{
                res.send("Error de Autentificación")
             }

        } else{
          res.send("Error no registrado")
        }
     }
        controller.position = (req, res) => {  
           const position = req.query.position
           console.log("position")
           
           if(position==="" || isNaN(position) || position < 1){
             res.send("<p style='color: red;'>Introduce una posición válida</p>")
             return
      }
      let user = position <= users.length ? users[position-1] : users[users.length-1]
      res.send("<p> Has seleccionado el usuario: <span style='color: #1bd;'>" + user.email + "</span></p>")
    }
     
        

     




module.exports = controller