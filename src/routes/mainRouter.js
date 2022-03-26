/* IMPORTACION DE MODULOS */
const express = require('express');
const router = express.Router();
const path = require('path')
const mainController = require('../controllers/mainController');
const multer =require('multer')
const notLogMiddleware =require('../middleware/notLogMiddleware')
/* MIDDLEWARE//////////////////////////////////////////////////////////////////////////////////////////// */
let productosvalidation=require('../validation/productosvalidation');
let validationMiddleware=require('../middleware/validationMiddleware')

/* ADMINISTRACION DE RUTAS */
//***MULTER**//

const app = express();
app.set('view engine', 'ejs');

let storage = multer.diskStorage({
    destination: (req,file ,cb)=>cb(null,'src/public/images/productsDB'),
    filename:(req,file,cb)=>cb(null,Date.now()+'-'+file.originalname)


});
var upload=multer({storage});
const { validationResult } = require('express-validator')

router.post('/',upload.single('imagen'),productosvalidation,validationMiddleware,mainController.tienda)
router.get('/editar-producto',notLogMiddleware, mainController.editarProducto)
router.get('/editar-producto/:id',notLogMiddleware, mainController.editarProducto)
router.get('/crear-producto',notLogMiddleware, mainController.crearProducto)
router.patch('/editar-producto/:id',upload.single('imagen'), mainController.update);

router.delete('/borrar-producto/:id',notLogMiddleware, mainController.destroy)



module.exports = router;