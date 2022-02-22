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
    body('nombre').notEmpty().withMessage('Debes ingresar tu nombre'),
    body('apellido').notEmpty().withMessage('Debes ingresar tu apellido'),
    body('correo').notEmpty().withMessage('Debes ingresar un correo valido'),
    body('contraseña').notEmpty().withMessage('Debes ingresar una contrasenia'),
    body('repiteContraseña').custom((val, {req})=>{
        if (val !== req.body.contraseña){
            throw new Error('Password confirmation does not match password');
        } 
        return true
    })


    
   
];


const validacionesLog = [
    body('correo').notEmpty().withMessage('Debes ingresar un correo valido'),
    body('contraseña').notEmpty().withMessage('Debes ingresar una contrasenia')
];
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
let recordarmiddleware=require('../middleware/recordarmiddleware');
/* //////////////////////////////////////////////////////////////////////// */


/* ADMINISTRACION DE RUTAS */
<<<<<<< HEAD

router.get('/login',recordarmiddleware, userController.login)
router.get('/registro',recordarmiddleware,validaciones, userController.registro)
router.post('/registro', userController.users)
=======
router.get('/login', userController.login)
>>>>>>> 4c0241b37bf99128e421d8358590e0a9c6a7c27e
router.post('/login',recordarmiddleware,userController.logged)
router.get('/registro',validaciones, userController.registro)
router.post('/registro',multerImageMidlewareUser, validaciones, userController.users)
router.get('/adminPerfil', userController.adminPefil)





module.exports = router;