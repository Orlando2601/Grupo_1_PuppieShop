const express = require('express');
const path = require('path');
const app = express();
const publicPath =path.resolve(__dirname, './public');
app.use(express.static(publicPath));
const port = 3030;

app.listen(port, ()=>{console.log('Servidor corriendo en puerto ' + port);});



app.get('', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});



app.get('/detalle-producto', (req, res)=>{res.sendFile(path.join(__dirname, '/views/detalle-producto.html'))});



app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});