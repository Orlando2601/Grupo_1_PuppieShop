const { json } = require('body-parser');
const req = require('express/lib/request');
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
    store:(req, res)=>{
        let newReference = productos.length
        let formu = JSON.parse(req.body);
        
        console.log(formu);
        let nuevo = {
            referencia: newReference + 1,
            mascota:"caninos",
            categoria: "alimentos",
            ...req.body,
            imagen:"purina-pro-plan-flagship-perros-active-mind-razas-medianas-y-grandes.png"
        }
        productos.push(nuevo);
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '))
			res.redirect('/')
    },
    editarProducto:(req,res)=>{
        res.render('editarProducto')

    },
    comida:(req,res)=>{
        res.render('listaProductos',{productos})
    }

}



module.exports =controllers;
