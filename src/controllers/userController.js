const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs');
const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const userFilePath = path.join(__dirname, '../data/user.json');
const usuarios = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
   
const login = (req,res)=>{
        console.log(req.session.correo)
        if(req.session.correo!=undefined){
            let a=2;
            let usercookie = usuarios.find(user => user.correo == req.session.correo);
            res.render('users/login',{usercookie,a});
              
        }else{
             if(req.session.correo == undefined){
            let a=1;
            let usercookie=[];
            res.render('users/login',{usercookie,a});
            }
        }
    }  
    
const logged =(req, res)=>{
        const errors = validationResult(req);
        const errores = errors.mapped();
        if(req.body.recordame!=undefined){
            let user = usuarios.find(user => user.correo == req.body.correo);
        
            if(user){
            res.cookie('correo',req.body.correo,{maxAge:30000});
            req.session.correo=req.body.correo;
            
            }
  
            if(errors.isEmpty()){
                for (let i=0; i < usuarios.length; i++){
                    if(usuarios[i].correo == req.body.correo){
                        if(bcryptjs.compareSync(req.body.contraseña, usuarios[i].contraseña)){
                            let usuarioAloguearse = usuarios[i];
                           delete usuarioAloguearse.repiteContraseña
                           delete usuarioAloguearse.contraseña 
                           
                           req.session.usuarioLogueado = usuarioAloguearse;
                           
                            
                                }
                           console.log('el usuario es ' + req.session.usuarioLogueado)
                           console.log('Datos de usuario', req.session)
                           return res.redirect('/user/adminPerfil')
                           
                        } else{
                            res.render('users/login', {
                            
                            old:req.body})
                        }                   
                    }
                }
                if(usuarioAloguearse == undefined){
                    console.log('No existe usuario')
                    return res.render('/user/login',{
                        errors:[correo.msg]
                    })                
                }


            }else{
            
                res.render('users/login', {
                    errors:errores,
                    old:req.body
                })
                console.log(errores)
            }



    }

const registro = (req,res)=>{
        res.render('users/registro')
    }

const users = (req, res)=>{
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
                    repiteContraseña: undefined,
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
}

  const adminPefil = (req, res)=>{
        
      res.render('users/adminPerfil',{
        user: req.session.usuarioLogueado,
        lista: productos
    })
  }
    
  const cerrarSesion = (req,res)=>{
    
        req.session.destroy();  
        console.log(req.locals)
      
        return res.render('products/home.ejs')
}




module.exports ={
    login,
    logged,
    registro,
    users,
    adminPefil,
    cerrarSesion
}