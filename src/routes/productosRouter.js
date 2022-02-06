const express = require('express'); /* Importamos modulo express */
const router = express.Router(); /* Definimos el método Router de express a la variable router para exportarla */
const path = require('path')
const multer =require('multer')
const productosController = require('../controllers/productosController');
const req = require('express/lib/request');


router.get('/', productosController.home)
router.get('/comida', productosController.comida)
router.get('/detalle/:referencia', productosController.detalle)



module.exports = router