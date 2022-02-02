const express = require('express'); /* Importamos modulo express */
const router = express.Router(); /* Definimos el método Router de express a la variable router para exportarla */
const path = require('path')
const multer =require('multer')
const productosController = require('../controllers/productosController');

router.get('/', productosController.home)

module.exports = router