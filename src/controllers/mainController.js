const { json } = require('express/lib/response');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));




const crearProducto = (req,res)=>{
        res.render('adminProducts/crearProducto')
    }

const tienda = (req,res)=>{
        let nuevoTamano;
        (productos.length === 0 )? nuevoTamano = 1 : nuevoTamano = productos[productos.length-1].id+1
        let imagen =  req.file? req.file.filename:'defaul.png';
        let nuevoproducto = {
        id: nuevoTamano,
        ...req.body,
        referencia: "REF00" + nuevoTamano,
        imagen:imagen
      };
      productos.push(nuevoproducto);
      fs.writeFileSync(productsFilePath,JSON.stringify(productos,null,' '));

      res.render('users/adminPerfil',{lista:productos, user: req.session.usuarioLogueado});
      
    }

const editarProducto = (req,res)=>{
        let reference = req.params.referencia
        
        let toEdit = productos.find(element => element.referencia == reference)
        res.render('adminProducts/editarProducto',{toEdit})

    }

const update = (req,res)=>{
        let referencia = req.params.referencia
        let toStore = productos.find(element => element.referencia == referencia)
        if (req.file){
            let update = {
                id: toStore.id,
                referencia:referencia,
    
                ...req.body,
                imagen: req.file.filename
                
            }
            
            productos[toStore.id -1] = update
            fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '))
            res.redirect('/')
        }else {
            let update = {
                id: toStore.id,
                referencia:referencia,
                ...req.body,
                imagen: toStore.imagen
                
            }

            
            productos[toStore.id -1] = update
            fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '))
            res.redirect('/')
        }
    }

const destroy = (req,res)=>{
        let referencia = req.params.referencia;
        
        productos.splice((referencia-1),1)
    
        productos.forEach((element, index) => {
			element.id = index+1;
		});

		fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, ' '))
		res.redirect('/')
    }
    
module.exports ={
    crearProducto,
    tienda,
    editarProducto,
    update,
    destroy
}
