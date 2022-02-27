/* IMPORTACION DE MODULOS */
const express = require('express'); /* Importamos modulo express */
const router = express.Router(); /* Definimos el método Router de express a la variable router para exportarla */
const userController = require('../controllers/userController');
const path = require('path')
const {body, check} = require('express-validator')
const multer = require('multer')
/* / MIDDLEWARES    //////////////////////////////////////////////////////////////////////////////// */
const notLogMiddleware =require('../middleware/notLogMiddleware')
const guestMiddleware = require('../middleware/guestMiddleware'); 
/* VALIDACIONES DE CAMPOS //////////////////////////////////////////////////////////////////*/
const registrovalidation=require('../validation/registrovalidation')
const logvalidation=require('../validation/logvalidation')

/* ////////////////////////////////////////////////////////////////////////////////////////// */
/* CONFIGURACION MULTER PARA GUARDAR ARCHIVOS*/
let multerDiskStorageUser = multer.diskStorage({
    destination: (req, file, cb)=>{
                    let folder = path.join(__dirname, '../public/images/dbUsers'); //Destino de archivos guardados
                    cb(null, folder)
                    
    },
    filename:(req, file, cb)=>{
                    console.log(file);
                    const imageName = ('imagen' + Date.now() + path.extname(file.originalname)) // configuración del nombre del archivo
                    cb(null, imageName);
                    
    }
})
let fileUploadUser = multer({storage:multerDiskStorageUser});
let multerImageMidlewareUser = fileUploadUser.single('imagen')
/* //////////////////////////////////////////////////////////////////////// */

/* ADMINISTRACION DE RUTAS */
router.get('/login',guestMiddleware, userController.login)
router.post('/login',logvalidation, userController.logged)
router.get('/registro',guestMiddleware, registrovalidation, userController.registro)
router.post('/registro',multerImageMidlewareUser, registrovalidation, userController.users)
router.get('/adminPerfil',notLogMiddleware, userController.adminPefil)
router.post('/cerrarSesion', userController.cerrarSesion)





module.exports = router;