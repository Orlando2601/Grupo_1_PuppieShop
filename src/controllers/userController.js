const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '../data/user.json');
const usuarios = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs');
const { render } = require('express/lib/response');


const userController ={
    
    login: (req,res)=>{

        if(req.session.correo!=undefined){
            let a=2;
            let usercookie = usuarios.find(user => user.correo == req.session.correo);
            res.render('users/login',{usercookie,a});
              
        } else{
            let a=1;
        let usercookie=[];
        res.render('users/login',{usercookie,a});

        }  
    },

    registro:(req,res)=>{
        res.render('users/registro')
    },
    users:(req, res)=>{
      /* console.log("no hay archivo imagen" + req.file); */
      const errors = validationResult(req)
      console.log(errors)
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
          
              errors: errors.mapped(),
              old: req.body
          })
      }
  },

    logged:(req, res)=>{
            
            if(req.body.recordame!=undefined){
            res.cookie('correo',req.body.correo,{maxAge:30000});
            req.session.correo=req.body.correo;
    
            }
            
        res.render("products/home");

    }
}



module.exports =userController;
