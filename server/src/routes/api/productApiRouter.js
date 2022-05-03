
/*//////////////////////////////////////////////////////////////////*/
/* IMPORTACION DE MODULOS */

const express = require('express'); /* Importamos modulo express */
const router = express.Router(); /* Definimos el método Router de express a la variable router para exportarla */
const productosApiController = require('../../controllers/api/productApiController');

const multer =require('multer')

/* MIDDLEWARE//////////////////////////////////////////////////////////////////////////////////////////// */
let productosvalidation=require('../../validation/productosvalidation');
let validationMiddleware=require('../../middleware/validationMiddleware')
const notLogMiddleware =require('../../middleware/notLogMiddleware')

/* ADMINISTRACION DE RUTAS */
//***MULTER**//

const app = express();
app.set('view engine', 'ejs');

let storage = multer.diskStorage({
    destination: (req,file ,cb)=>cb(null,'src/public/images/productsDB'),
    filename:(req,file,cb)=>cb(null,Date.now()+'-'+file.originalname)

});
var upload=multer({storage});


/*////////////////////////////RUTAS//////////////////////////// */
router.get('/comida', productosApiController.comida)
router.get('/detalle/:id', productosApiController.detalle)

router.post('/crear-producto',upload.single('imagen'),productosvalidation, validationMiddleware,productosApiController.tienda)
router.get('/editar-producto/:id', productosApiController.editarProducto)
router.get('/crear-producto', productosApiController.crearProducto)
router.patch('/editar-producto/:id',upload.single('imagen'), productosApiController.update);
router.delete('/borrar-producto/:id', productosApiController.destroy)





module.exports = router