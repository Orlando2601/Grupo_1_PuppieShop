/* IMPORTACION DE MODULOS */
const express = require('express'); /* Importamos modulo express */
const router = express.Router(); /* Definimos el método Router de express a la variable router para exportarla */
const userController = require('../controllers/userController');
const path = require('path')
const {body, check} = require('express-validator')
const multer = require('multer')



/* //////////////////////////////////////////////////////////////////////////////////////////// */

/* VALIDACIONES DE CAMPOS //////////////////////////////////////////////////////////////////*/
const validaciones = [
    check('nombre').notEmpty().withMessage('Debes ingresar tu nombre'),
    check('apellido').notEmpty().withMessage('Debes ingresar tu apellido'),
    check('correo').notEmpty().withMessage('Debes ingresar un correo valido'),
    check('contraseña').notEmpty().withMessage('Debes ingresar una contrasenia')
];
const validacionesLog = [
    body('correo').notEmpty().withMessage('Debes ingresar un correo valido'),
    body('contraseña').notEmpty().withMessage('Debes ingresar una contrasenia')
];
/* ////////////////////////////////////////////////////////////////////////////////////////// */
/* CONFIGURACION MULTER */
let multerDiskStorageUser = multer.diskStorage({
    destination: (req, file, cb)=>{
                    let folder = path.join(__dirname, '../public/images/dbUsers');
                    cb(null, folder)
                    
    },
    filename:(req, file, cb)=>{
                    console.log(file);
                    const imageName = ('imagen' + Date.now() + path.extname(file.originalname))
                    cb(null, imageName);
                    
    }
})
let fileUploadUser = multer({storage:multerDiskStorageUser});
let multerImageMidlewareUser = fileUploadUser.single('imagen')
let recordarmiddleware=require('../middleware/recordarmiddleware');
/* //////////////////////////////////////////////////////////////////////// */


/* ADMINISTRACION DE RUTAS */

router.get('/login',recordarmiddleware, userController.login)
router.get('/registro',recordarmiddleware,validaciones, userController.registro)
router.post('/registro', userController.users)
router.post('/login',recordarmiddleware,userController.logged)

module.exports = router;