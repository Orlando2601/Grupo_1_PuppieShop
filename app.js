const express = require('express');
const path = require('path');
/* const bodyParser = require('body-parser') */

const publicPath =path.resolve(__dirname, './public');

const adminRouter = require('./routes/adminRouter');/* requerimos archivo de rutas */
const productosRouter = require('./routes/productosRouter');/* requerimos archivo de rutas */
const userRouter = require('./routes/userRouter')
const methodOverride = require('method-override');


const app = express();
app.use(express.urlencoded({ extended: false }));
/* app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) */
app.use(express.json());
app.use(methodOverride('_method'));


app.use(express.static(publicPath));

app.set('view engine', 'ejs'); /* Expresamos a express motor de vistas como ejs */
const puerto = process.env.PORT || 3030
app.listen(puerto, () => { console.log('Servidor corriendo en el puerto '  + puerto);});/* Configuracion heroku */


app.use('/admin',adminRouter); /* Definimos a express donde buscar las rutas */
app.use('/productos', productosRouter)
app.use('/user', userRouter)


module.exports = app;

