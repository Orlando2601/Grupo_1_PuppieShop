const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs');
const {Usuarios,Producto} = require('../database/models');
const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const userFilePath = path.join(__dirname, '../data/user.json');
const usuarios = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
   
const login =(req,res)=>{      
            return res.render('users/login')
    
}  
    
const logged = async(req, res)=>{
            const errores = validationResult(req);
            let user=await Usuarios.findOne({where:{correo:req.body.correo}});
            (errores.errors.length > 0) ? res.render('users/login',{errors:errores.mapped(),old:req.body}) : user =  await Usuarios.findOne({where:{correo:req.body.correo}});              
            let validacionPassword;
            !user ? res.render('users/login',{errors:{correo:{msg:'No se encontro el correo'}}}) : validacionPassword =  bcryptjs.compareSync(req.body.contraseña, user.contraseña);
            !validacionPassword ? res.render('users/login',{errors:{contraseña:{msg:"Tu contrasena no coincide"}}}): delete user.contraseña; req.session.usuarioLogueado = user;               
            req.body.recordame ? res.cookie('correo', req.body.correo,{maxAge:60000*60*12}): res.redirect('/user/adminPerfil');
            return res.redirect('/user/adminPerfil');
}//Guardar usuario en Json, y agregarlo a las cookies

const registro = (req,res)=>{
        res.render('users/registro') 
    }

const users = async(req, res)=>{
    try {
        const errores = validationResult(req);
   
    if (errores.errors.length > 0) {
        res.render('users/registro',{errors:errores.mapped(),old:req.body})
    } else {
        const {nombre,apellido,correo,contrasena}=req.body;
        const imagen=req.file?req.file.filename:"Default.jpg";
        await Usuarios.create({nombre,apellido,correo,contrasena,imagen})
        res.redirect('/') 
       
    }
        
    } catch (error) {
        console.log(error)
        
    }
}

  const adminPefil = async(req, res)=>{  
      try {
          const lista=await Producto.findAll();
        return     res.render('users/adminPerfil',{
            user: req.session.usuarioLogueado,
            lista
        })
          
      } catch (error) {
          res.render(error)
      }

       
  }
    
  const cerrarSesion = (req,res)=>{   
        res.clearCookie('correo')
        req.session.destroy();
        delete res.locals
        
        return res.render('users/login')
}




module.exports ={
    login,
    logged,
    registro,
    users,
    adminPefil,
    cerrarSesion
}