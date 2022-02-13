const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '../data/user.json');
const usuarios = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')

const userController ={
    
    login: (req,res)=>{
        res.render('users/login')
    },

    registro:(req,res)=>{
        res.render('users/registro')
    },
    users:(req, res)=>{
      console.log("no hay archivo imagen" + req.file);
      const errors = validationResult(req)
      let newReference = usuarios.length
      if(errors.isEmpty()){
          let userInDB = usuarios.find(user => user.correo == req.body.correo);
          if(userInDB === undefined && req.file){
              
              let nuevoUser = {
                  id: newReference + 1,
                  ...req.body,
                  contraseña: bcryptjs.hashSync(req.body.contraseña, 10),
                  imagen:req.file.filename
              }
              usuarios.push(nuevoUser)
              fs.writeFileSync(userFilePath, JSON.stringify(usuarios, null, ' '))
              res.redirect('/user/login') 
          }else{
              res.render('users/registro')
              
          }
      }else{ 
          
          res.render('users/registro',{
          
              errors: errors.array(),
              old: req.body
          })
      }

  }
    
}



module.exports =userController;
