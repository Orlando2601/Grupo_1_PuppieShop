

const express = require('express'); /* Importamos modulo express */
const router = express.Router(); /* Definimos el método Router de express a la variable router para exportarla */
const productosApiController = require('../../controllers/api/productApiController');


router.get('/comida', productosApiController.comida)
router.get('/detalle/:id', productosApiController.detalle)

module.exports = router