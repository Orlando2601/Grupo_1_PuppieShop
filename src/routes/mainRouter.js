/* IMPORTACION DE MODULOS */
const express = require('express'); /* Importamos modulo express */
const router = express.Router(); /* Definimos el método Router de express a la variable router para exportarla */
const path = require('path')
const mainController = require('../controllers/mainController');
/* //////////////////////////////////////////////////////////////////////////////////////////// */


/* ADMINISTRACION DE RUTAS */
router.get('/editar-producto', mainController.editarProducto)
router.get('/comida', mainController.comida)
router.get('/editar-producto/:referencia', mainController.editarProducto)
router.patch('/editar-producto/:referencia', mainController.update);
router.get('/detalle/:referencia', mainController.detalle)
router.get('/crear-producto', mainController.crearProducto)
router.post('/',mainController.tienda)
router.delete('/borrar-producto/:referencia', mainController.destroy)

module.exports = router;