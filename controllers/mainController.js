/* const { json } = require('body-parser'); */
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
        let lista = productos.find(item => item.referencia == ref)
        res.render('detalle-producto', {lista})
    },
    registro:(req,res)=>{
        res.render('registro')
    },
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
			res.redirect('/')
        }else {
            res.redirect('/crear-producto')
        }

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
            res.redirect('/')
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
            res.redirect('/')
        }
    },
    destroy:(req,res)=>{
        let reference = req.params.referencia
        productos.splice((reference-1),1);
        productos.forEach((element, index) => {
			element.referencia = index+1;	
		});
		fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '))
		res.redirect('/')
    },
    comida:(req,res)=>{
        res.render('listaProductos',{productos})
    }

}



module.exports =controllers;
