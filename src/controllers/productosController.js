/* const { json } = require('body-parser'); */
const req = require('express/lib/request');
const fs = require('fs');
const path = require('path')
const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productosController = {
    home: (req,res)=>{
        res.render('products/home')
    },
    comida:(req,res)=>{
        res.render('products/listaProductos',{productos})
    },
    detalle: (req,res)=>{
        let ref = req.params.referencia;
        let lista = productos.find(item => item.referencia == ref)
        res.render('products/detalle-producto', {lista})
    }
}

module.exports = productosController;