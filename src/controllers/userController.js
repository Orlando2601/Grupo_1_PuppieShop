const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '../data/user.json');
const usuarios = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs');



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

        const errors = validationResult(req)
        const errores = errors.mapped();
        console.log("Mensaje body")
        console.log(req.body.correo)
        console.log("Mensaje body")

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
                console.log('Usuario registrado')
            }
        }else{ 
            console.log(errores)
            res.render('users/registro',{
            
                errors: errores,
                old: req.body
            })
        }
  },

    logged:(req, res)=>{
            
            if(req.body.recordame!=undefined){
            let user = usuarios.find(user => user.correo == req.body.correo);
        
            if(user){
            res.cookie('correo',req.body.correo,{maxAge:30000});
            req.session.correo=req.body.correo;
            
              }
            }
            
        res.render("products/home");

    }
}



module.exports =userController;
