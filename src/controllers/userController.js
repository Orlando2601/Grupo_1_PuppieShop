const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs');
const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const userFilePath = path.join(__dirname, '../data/user.json');
const usuarios = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
   
const login = async (req,res)=>{
        try {
           
                return res.render('users/login')
        } catch (error) {
            res.send("Error")
        }
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
            return res.redirect('/user/adminPerfil');

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
        console.log("estas en perfil")
        console.log(req.session)

        return     res.render('users/adminPerfil',{
            user: req.session.usuarioLogueado,
            lista: productos
        })
  }
    
  const cerrarSesion = (req,res)=>{   

        req.session.destroy();    
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