/* REQUERIMIENTO DE MODULOS */
const express = require('express');
const path = require('path');
const app = express();
const publicPath =path.resolve(__dirname, './src/public');
const imgPublic = path.resolve(__dirname, './src/public/images/dbUsers');
const mainRouter = require('./src/routes/mainRouter');/* requerimos archivo de rutas */
const productosRouter = require('./src/routes/productosRouter');/* requerimos archivo de rutas */
const userRouter = require('./src/routes/userRouter');/* requerimos archivo de rutas */
const usersApiRouter = require('./src/routes/api/usersApiRouter')
const productApiRouter = require('./src/routes/api/productApiRouter')
const session = require('express-session');/* requerimos archivo de session */
const { cookie } = require('express/lib/response');
const cookies = require('cookie-parser');
const methodOverride = require('method-override');
const userLoggedMiddelware = require('./src/middleware/userLoggedMiddleware')
const error404 = require('./src/middleware/errorMiddleware')
const {crearDB} = require('./src/database/config/conect');
const Sequelize = require('sequelize')
//const recordarmiddleware = require('./src/middleware/recordarmiddleware')
const cors = require('cors')
app.use(cors())

crearDB()
/* ALMACENAR DATOS DE NAVEGACION/////////////////////////////////////////////////////////////////// */
app.use(session({secret:'?',resave:false,saveUninitialized:false}));/* middleware que recorre cada vista */
app.use(cookies());

/* CONFIGURACION PARA EXTRAER INFORMACION DE LOS FORM///////////////////////////////////////////// */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

/* /////////////////////////////////////////////////////////////////////////////////////////////// */
app.use(userLoggedMiddelware)
/* CONFIGURACION CARPETA DE VISTAS Y PARCHIVOS PUBLICOS */
app.set('views', path.resolve(__dirname, './src/views'))
app.use(express.static(publicPath));
app.use(express.static(imgPublic));
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
app.use('/api',usersApiRouter); 
/* app.use(error404) */
app.use('/api',productApiRouter); 
/* ///////////////////////////////////////////////////////////////////////////////////////////// */


module.exports = app;
