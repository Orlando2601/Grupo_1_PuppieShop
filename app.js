const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const publicPath =path.resolve(__dirname, './public');
const indexRouter = require('./routes/mainRouter');/* requerimos archivo de rutas */

const methodOverride = require('method-override');


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json());
app.use(methodOverride('_method'));


app.use(express.static(publicPath));

app.set('view engine', 'ejs'); /* Expresamos a express motor de vistas como ejs */

app.listen(process.env.PORT || 3000, () => { console.log('Servidor corriendo en el puerto 3000');});/* Configuracion heroku */


app.use(indexRouter); /* Definimos a express donde buscar las rutas */


module.exports = app;

