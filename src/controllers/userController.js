const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs');
const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const userFilePath = path.join(__dirname, '../data/user.json');
const usuarios = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
   
const login =(req,res)=>{      
            return res.render('users/login')
    
}  
    
const logged = (req, res)=>{
            const userFilePath = path.join(__dirname, '../data/user.json');
            const usuarios = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
            const errores = validationResult(req);
            let user;
            (errores.errors.length > 0) ? res.render('users/login',{errors:errores.mapped(),old:req.body}) : user =  usuarios.find(ele => ele.correo == req.body.correo);              
            let validacionPassword;
            !user ? res.render('users/login',{errors:{correo:{msg:'No se encontro el correo'}}}) : validacionPassword =  bcryptjs.compareSync(req.body.contraseña, user.contraseña);
            !validacionPassword ? res.render('users/login',{errors:{contraseña:{msg:"Tu contrasena no coincide"}}}): delete user.contraseña; req.session.usuarioLogueado = user;               
            req.body.recordame ? res.cookie('correo', req.body.correo,{maxAge:60000*60*12}): res.redirect('/user/adminPerfil');
            return res.redirect('/user/adminPerfil');
}//Guardar usuario en Json, y agregarlo a las cookies

const registro = (req,res)=>{
        res.render('users/registro') 
    }

const users = (req, res)=>{
    const errores = validationResult(req);
    let user
   
    (errores.errors.length > 0) ? res.render('users/registro',{errors:errores.mapped(),old:req.body}) : user =  usuarios.find(ele => ele.correo == req.body.correo);
    user ? res.render('users/registro',{errors:{correo:{msg:"este correo ya se encuentra registrado"}},old:req.body}): user = false;
    if(user === false && req.file && errores.errors.length === 0){
        let newReference = usuarios.length
        
        let nuevoUser = {
            id: newReference + 1,
            ...req.body,
            contraseña: bcryptjs.hashSync(req.body.contraseña, 10),
            imagen:req.file.filename
        }
        delete nuevoUser.repiteContraseña;
        usuarios.push(nuevoUser)
        fs.writeFileSync(userFilePath, JSON.stringify(usuarios, null, ' '))
        res.redirect('/user/login') 
    }
}

  const adminPefil = (req, res)=>{  
        console.log("estas en perfil")
        console.log(req.cookies.correo)

        return     res.render('users/adminPerfil',{
            user: req.session.usuarioLogueado,
            lista: productos
        })
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