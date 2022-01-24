const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const publicPath =path.resolve(__dirname, './public');
const port = 3030;
const indexRouter = require('./routes/mainRouter');/* requerimos archivo de rutas */
app.use(express.static(publicPath));
app.listen(port, ()=>{console.log('Servidor corriendo en puerto ' + port);});
app.set('view engine', 'ejs'); /* Expresamos a express motor de vistas como ejs */
app.use(indexRouter); /* Definimos a express donde buscar las rutas */





