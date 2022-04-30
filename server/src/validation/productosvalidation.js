const {body, check} = require('express-validator');

const productosvalidation = [


    body('id_mascota').notEmpty().withMessage('Elegir tipo de mascota'),
    body('raza').notEmpty().withMessage('Elegir tamaño de mascota'),
    body('tamanio').notEmpty().withMessage('Debes ingresar un tamaño valido'),
    body('cantidad').notEmpty().withMessage('Debes ingresar una cantidad valida'),
    body('precio','Debes ingresar un precio valido').notEmpty().isNumeric().withMessage('Solo numeros'),
   ]

  module.exports=productosvalidation;