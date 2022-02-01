const { json } = require('express/lib/response');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const userFilePath = path.join(__dirname, '../data/user.json');
const usuarios = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));

const controllers ={
    
    detalle: (req,res)=>{
        let ref = req.params.referencia;
        let lista = productos.find(item => item.referencia == ref)
        res.render('detalle-producto', {lista})
    },
<<<<<<< HEAD:controllers/mainController.js
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
=======

    crearProducto: (req,res)=>{
        res.render('crearProducto')
    },
    store:(req, res)=>{
        let newReference = productos.length
        if (req.file){
            let nuevo = {
				referencia:newReference+1,
                mascota:"Caninos",
                categoria:"Alimento",
                razas:"Medianos y grandes",
				...req.body,
				imagen: req.file.filename
			}
			
			productos.push(nuevo)
			fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '))
			res.redirect('/productos')
        }else {
            res.redirect('crear-producto')
        }
>>>>>>> oswar:controllers/adminController.js

      res.redirect('/comida');
    },
    editarProducto:(req,res)=>{
        let reference = req.params.referencia
        
        let toEdit = productos.find(element => element.referencia == reference)
        res.render('editarProducto',{toEdit})

    },
    update:(req,res)=>{
        let reference = req.params.referencia
        let toStore = productos.find(element => element.referencia == reference)
        
        if (req.file){
            let update = {
                referencia:reference,
                mascota:"Caninos",
                categoria:"Alimento",
                razas:"Medianos y grandes",
                ...req.body,
                imagen: req.file.filename
                
            }
            productos[reference -1] = update
            fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '))
            res.redirect('/productos')
        }else {
            let update = {
                referencia:reference,
                mascota:"Caninos",
                categoria:"Alimento",
                razas:"Medianos y grandes",
                ...req.body,
                imagen: toStore.imagen
                
            }
            productos[reference -1] = update
            fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '))
            res.redirect('/productos')
        }
    },
    destroy:(req,res)=>{
        let reference = req.params.referencia
        productos.splice((reference-1),1);
        productos.forEach((element, index) => {
			element.referencia = index+1;	
		});
		fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '))
		res.redirect('/productos')
    }

}



module.exports = controllers;
