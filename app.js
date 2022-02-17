/* REQUERIMIENTO DE MODULOS */
const express = require('express');
const path = require('path');
const app = express();
const publicPath =path.resolve(__dirname, './src/public');
const mainRouter = require('./src/routes/mainRouter');/* requerimos archivo de rutas */
const productosRouter = require('./src/routes/productosRouter');/* requerimos archivo de rutas */
const userRouter = require('./src/routes/userRouter');/* requerimos archivo de rutas */
const session = require('express-session');/* requerimos archivo de session */


/* CONFIGURACION PARA EXTRAER INFORMACION DE LOS FORM///////////////////////////////////////////// */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const methodOverride = require('method-override');
const { cookie } = require('express/lib/response');
const cookieParser = require('cookie-parser');
app.use(methodOverride("_method"));
/* /////////////////////////////////////////////////////////////////////////////////////////////// */
app.set('views', path.resolve(__dirname, './src/views'))

app.use(express.static(publicPath));
/* CONFIGURACION RENDERIZACION VISTAS //////////////////////////////////////////////////////////////*/
app.set('view engine', 'ejs'); /* Expresamos a express motor de vistas como ejs */
/* CONFIGURACION PUERTO Y SERVIDOR///////////////////////////////////////////////////////////////// */
const puerto = process.env.PORT || 3030
app.listen(puerto, () => { console.log('Servidor corriendo en el puerto '  + puerto);});/* Configuracion heroku */
/* //////////////////////////////////////////////////////////////////////////////////// */
/* CONFIGURACION PARA MIDDLEWARE GENERAL //////////////////////////////////////////////////////////////*/
app.use(session({secret:'?'}));/* middleware que recorre cada vista */
app.use(cookieParser());

/* //////////////////////////////////////////////////////////////////////////////////// */

/* RUTAS PRINCIPALES //////////////////////////////////////////////////////////////////////////// */
app.use(productosRouter);
app.use('/user', userRouter);
app.use(mainRouter); 


/* ///////////////////////////////////////////////////////////////////////////////////////////// */


module.exports = app;
