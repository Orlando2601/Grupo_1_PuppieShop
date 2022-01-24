const { json } = require('express/lib/response');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const userFilePath = path.join(__dirname, '../data/user.json');
const usuarios = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

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
    users:(req,res)=>{
      let nuevousuario = {
        ...req.body,
       
        
      };
      usuarios.push(nuevousuario);
      fs.writeFileSync(userFilePath,JSON.stringify(usuarios,null,' '));

      res.redirect('/');
    },
    crearProducto: (req,res)=>{
        res.render('crearProducto')
    },
    tienda:(req,res)=>{
      let nuevoproducto = {
        id: productos[productos.length-1].id+1,
        ...req.body,
        referencia: "REF00"+(productos[productos.length-1].id+1),
        imagen:'Purina® Pro Plan® Bright Mind.png'
        
      };
      productos.push(nuevoproducto);
      fs.writeFileSync(productsFilePath,JSON.stringify(productos,null,' '));

      res.redirect('/comida');
    },
    editarProducto:(req,res)=>{
        res.render('editarProducto')
    },
    comida:(req,res)=>{
        res.render('listaProductos',{lista:productos})
    }

}



module.exports =controllers;
