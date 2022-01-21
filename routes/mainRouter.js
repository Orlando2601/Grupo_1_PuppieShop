const express = require('express'); /* Importamos modulo express */
const router = express.Router(); /* Definimos el método Router de express a la variable router para exportarla */
const path = require('path')
const multer =require('multer')
const mainController = require('../controllers/mainController');

/* const bodyParser = require('body-parser') */




router.get('/comida', mainController.comida)


/* Cargando imagenes en el form con multer */
let multerDiskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, '../public/images/productsDB');
        callback(null, folder);
    },/* Definimos la ruta donde se almacenará el archivo subido */
    filename: (req, file, callback) => {
        console.log(file)
        const imageName = 'imagen' + Date.now() + path.extname(file.originalname);
        console.log(imageName)
        
        callback(null, imageName);
        
       
    }/* con este metodo asignaremos un nombre al archivo subido en este caso tomara los datos de la fecha y hora sumando la extension del archivo */
});/* MEtodo para qasignar ruta donde se va a guardar el archivo enviado y ademas definir un nombre al archivo cargado */
let fileUpload = multer({storage:multerDiskStorage});/* Definimos el metodo que ultiizaremos en todos los formularios para subir imagenes */
let multerImageMidleware =  fileUpload.single('imagen')

router.post('/crear-producto/',multerImageMidleware, mainController.store)
/* Fin Cargando imagenes en el form con multer */


router.get('/editar-producto/:referencia', mainController.editarProducto)


router.patch('/editar-producto/:referencia',multerImageMidleware, mainController.update);

router.get('/detalle/:referencia', mainController.detalle)
router.delete('/borrar-producto/:referencia', mainController.destroy)

module.exports = router;