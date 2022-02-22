/* REQUERIMIENTO DE MODULOS */
const express = require('express');
const path = require('path');
const app = express();
const publicPath =path.resolve(__dirname, './src/public');
const mainRouter = require('./src/routes/mainRouter');/* requerimos archivo de rutas */
const productosRouter = require('./src/routes/productosRouter');/* requerimos archivo de rutas */
const userRouter = require('./src/routes/userRouter');/* requerimos archivo de rutas */
const session = require('express-session');/* requerimos archivo de session */
const { cookie } = require('express/lib/response');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');



/* ALMACENAR DATOS DE NAVEGACION/////////////////////////////////////////////////////////////////// */
app.use(session({secret:'?'}));/* middleware que recorre cada vista */
app.use(cookieParser());
/* CONFIGURACION PARA EXTRAER INFORMACION DE LOS FORM///////////////////////////////////////////// */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
/* /////////////////////////////////////////////////////////////////////////////////////////////// */

/* CONFIGURACION CARPETA DE VISTAS Y PARCHIVOS PUBLICOS */
app.set('views', path.resolve(__dirname, './src/views'))
app.use(express.static(publicPath));
/* CONFIGURACION RENDERIZACION VISTAS //////////////////////////////////////////////////////////////*/
app.set('view engine', 'ejs'); /* Expresamos a express motor de vistas como ejs */
/* CONFIGURACION PUERTO Y SERVIDOR///////////////////////////////////////////////////////////////// */
const puerto = process.env.PORT || 3030
app.listen(puerto, () => { console.log('Servidor corriendo en el puerto '  + puerto);});
/* //////////////////////////////////////////////////////////////////////////////////// */
/* RUTAS PRINCIPALES //////////////////////////////////////////////////////////////////////////// */
app.use(productosRouter);
app.use('/user', userRouter);
app.use(mainRouter); 
/* ///////////////////////////////////////////////////////////////////////////////////////////// */


module.exports = app;
