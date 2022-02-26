/* IMPORTACION DE MODULOS */
const express = require('express');
const router = express.Router();
const path = require('path')
const mainController = require('../controllers/mainController');
const multer =require('multer')
const notLogMiddleware =require('../middleware/notLogMiddleware')
/* MIDDLEWARE//////////////////////////////////////////////////////////////////////////////////////////// */
//let recordarmiddleware=require('../middleware/recordarmiddleware');

/* ADMINISTRACION DE RUTAS */
//***MULTER**//

let storage = multer.diskStorage({
    destination: (req,file ,cb)=>cb(null,'src/public/images/productsDB'),
    filename:(req,file,cb)=>cb(null,Date.now()+'-'+file.originalname)


});
var upload=multer({storage});

router.post('/',upload.single('imagen'),mainController.tienda)
router.get('/editar-producto',notLogMiddleware, mainController.editarProducto)
router.get('/editar-producto/:referencia',notLogMiddleware, mainController.editarProducto)
router.get('/crear-producto',notLogMiddleware, mainController.crearProducto)
router.patch('/editar-producto/:referencia',upload.single('imagen'), mainController.update);

router.delete('/borrar-producto/:referencia',notLogMiddleware, mainController.destroy)



module.exports = router;