const express = require('express'); /* Importamos modulo express */
const router = express.Router(); /* Definimos el método Router de express a la variable router para exportarla */
const path = require('path');
const {listaUsuarios, detalleUsuario} = require('../../controllers/apis/usersApiController')

router.get('/usuarios', listaUsuarios);
router.get('/usuario/:id', detalleUsuario)

module.exports = router;