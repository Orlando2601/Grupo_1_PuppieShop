const {body, check} = require('express-validator');

const registrovalidation = [
    body('nombre')
        .notEmpty().withMessage('Debes ingresar tu nombre'),
    body('apellido')
        .notEmpty().withMessage('Debes ingresar tu apellido'),
    body('correo')
        .notEmpty().withMessage('No has ingresado ningun correo')
        .isEmail().withMessage('Debes ingresar un correoo valido'),
    body('contraseña')
        .isLength({min:6, max:12}).withMessage('caracteres')
        .notEmpty().withMessage('Debes ingresar una contrasenia entre 6 y 12 caracteres')
        .isAlphanumeric().withMessage('Ingresaste un caracter no valido'),
    body('repiteContraseña')
        .custom((val, {req})=>{
            if (val !== req.body.contraseña){
                throw new Error('Las contraseñas no coinciden');
            } 
            return true
        })   
];
module.exports=registrovalidation