const {body, check} = require('express-validator');

const logvalidation = [
    body('correo').notEmpty().withMessage('Debes ingresar un correo valido'),
    body('contraseña').notEmpty().withMessage('Debes ingresar una contrasenia')
];

module.exports=logvalidation