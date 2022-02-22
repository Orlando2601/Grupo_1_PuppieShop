/* IMPORTACION DE MODULOS */
const express = require('express'); /* Importamos modulo express */
const router = express.Router(); /* Definimos el método Router de express a la variable router para exportarla */
const path = require('path')
const mainController = require('../controllers/mainController');
const multer =require('multer')
/* MIDDLEWARE//////////////////////////////////////////////////////////////////////////////////////////// */
let recordarmiddleware=require('../middleware/recordarmiddleware');

/* ADMINISTRACION DE RUTAS */
//***MULTER**//

let storage = multer.diskStorage({
    destination: (req,file ,cb)=>cb(null,'src/public/images/productsDB'),
    filename:(req,file,cb)=>cb(null,Date.now()+'-'+file.originalname)


});
var upload=multer({storage});

router.post('/',upload.single('imagen'),mainController.tienda)
router.get('/editar-producto',recordarmiddleware, mainController.editarProducto)
router.get('/editar-producto/:referencia',recordarmiddleware, mainController.editarProducto)
router.get('/crear-producto',recordarmiddleware, mainController.crearProducto)
router.patch('/editar-producto/:referencia',upload.single('imagen'), mainController.update);

router.delete('/borrar-producto/:referencia',recordarmiddleware, mainController.destroy)



module.exports = router;