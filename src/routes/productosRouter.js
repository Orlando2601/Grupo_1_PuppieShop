const express = require('express'); /* Importamos modulo express */
const router = express.Router(); /* Definimos el método Router de express a la variable router para exportarla */
const path = require('path')
const multer =require('multer')
const productosController = require('../controllers/productosController');
const req = require('express/lib/request');
const notLogMiddleware =require('../middleware/notLogMiddleware');
const { editarProducto } = require('../controllers/mainController');


/*//////////////////////////////////////////////////////////////////*/

router.get('/', productosController.home)
router.get('/user/home', productosController.userhome)

router.get('/comida', productosController.comida)
router.get('/detalle/:referencia', productosController.detalle)

router.get('/carrito',notLogMiddleware, productosController.carritodecompra)
router.post('/carrito/:referencia',notLogMiddleware, productosController.listacarrito)
router.get('/Editcarrito/:referencia',editarCarrito)
router.delete('/borrar-carrito/:id',notLogMiddleware, productosController.destroy)



module.exports = router