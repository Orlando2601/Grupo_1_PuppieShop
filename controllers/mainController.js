
const fs = require('fs');
const path = require('path')
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controllers ={
    home: (req,res)=>{
        res.render('home')
    },
    login: (req,res)=>{
        res.render('login')
    },
    detalle: (req,res)=>{
        let ref = req.params.referencia;
        let detalle = productos.find(item => item.referencia == ref)
        res.render('detalle-producto', {lista:detalle})
    },
    registro:(req,res)=>{
        res.render('registro')
    },
    crearProducto: (req,res)=>{
        res.render('crearProducto')
    },
    editarProducto:(req,res)=>{
        res.render('editarProducto')
    },
    comida:(req,res)=>{
        res.render('listaProductos',{productos})
    }

}



module.exports =controllers;
