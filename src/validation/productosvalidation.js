const {body, check} = require('express-validator');

const productosvalidation = [


    body('mascota').notEmpty().withMessage('Elegir tipo de mascota'),
    body('razas').notEmpty().withMessage('Elegir tamaño de mascota'),
    body('nombre',).notEmpty().withMessage('Debes ingresar nombre de producto').isLength({ min: 5 }).withMessage('Nombre muy corto minimo 5 letras'),
    body('tamaño').notEmpty().withMessage('Debes ingresar un tamaño valido'),
    body('cantidad').notEmpty().withMessage('Debes ingresar una cantidad valida'),
    body('precio','Debes ingresar un precio valido').notEmpty().isNumeric().withMessage('Solo numeros'),
   ]

  module.exports=productosvalidation;