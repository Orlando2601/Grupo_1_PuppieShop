/* IMPORTACION DE MODULOS */
const express = require('express'); /* Importamos modulo express */
const router = express.Router(); /* Definimos el método Router de express a la variable router para exportarla */
const path = require('path')
const mainController = require('../controllers/mainController');
const multer =require('multer')
/* //////////////////////////////////////////////////////////////////////////////////////////// */

/* ADMINISTRACION DE RUTAS */
//***MULTER**//

let storage = multer.diskStorage({
    destination: (req,file ,cb)=>cb(null,'src/public/images/productsDB'),
    filename:(req,file,cb)=>cb(null,Date.now()+'-'+file.originalname)


});
var upload=multer({storage});

router.post('/',upload.single('imagen'),mainController.tienda)
router.get('/editar-producto', mainController.editarProducto)
router.get('/editar-producto/:referencia', mainController.editarProducto)
router.patch('/editar-producto/:referencia',upload.single('imagen'), mainController.update);
router.get('/crear-producto', mainController.crearProducto)

router.delete('/borrar-producto/:referencia', mainController.destroy)



module.exports = router;