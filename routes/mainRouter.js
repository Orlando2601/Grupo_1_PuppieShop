const express = require('express'); /* Importamos modulo express */
const router = express.Router(); /* Definimos el método Router de express a la variable router para exportarla */
const path = require('path')
const mainController = require('../controllers/mainController');



router.get('/', mainController.home)
router.get('/comida', mainController.comida)
router.get('/login', mainController.login)
router.get('/registro', mainController.registro)
router.get('/crear-producto', mainController.crearProducto)
router.post('/crear-producto/', mainController.store)
router.get('/editar-producto', mainController.editarProducto)
router.get('/detalle/:referencia', mainController.detalle)


module.exports = router;