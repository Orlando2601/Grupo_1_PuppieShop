/* const { json } = require('body-parser'); */
const req = require('express/lib/request');
const fs = require('fs');
const path = require('path')
const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));




const home = (req,res)=>{
       return res.render('products/home')
    }

const userhome = (req,res)=>{
        return res.render('users/homeuser')

    }

const comida = (req,res)=>{
       return res.render('products/listaProductos',{productos})
    }
const detalle = (req,res)=>{
        let ref = req.params.referencia;
        let lista = productos.find(item => item.referencia == ref)
        return res.render('products/detalle-producto', {lista})
    }


module.exports = {
    home,
    userhome,
    comida,
    detalle
}