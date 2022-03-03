/* const { json } = require('body-parser'); */
const req = require('express/lib/request');
const fs = require('fs');
const path = require('path')
const productsFilePath = path.join(__dirname, '../data/productos.json');
const carritoFilePath = path.join(__dirname, '../data/carrito.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const carrito = JSON.parse(fs.readFileSync(carritoFilePath, 'utf-8'));




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
    
const carritodecompra=(req,res)=>{
    let totalprecio=carrito.map(li=>li.total).reduce((acum,num)=>
       parseInt(acum)+parseInt(num)
   ,0)

    res.render("products/carrito",{carrito,totalprecio})

    }

const listacarrito=(req,res)=>{
    let ref = req.params.referencia;
    let lista = productos.find(item => item.referencia == ref)
    let indice = carrito.findIndex(el=>el.id==lista.id)
    let lleva=req.body.cantidad2;
    if(indice!=-1){
    if(parseInt(carrito[indice].lleva)+parseInt(lleva)>lista.cantidad){return res.redirect('/carrito')}}
    let total=indice!=-1?parseInt(carrito[indice].lleva)*parseInt(lista.precio):lista.precio
    let nuevo={
        ...lista,
        lleva:lleva,
        total:total
    }
    let up={}

    
   indice!=-1?carrito[indice] = up={...lista,lleva:parseInt(lleva)+parseInt(carrito[indice].lleva),total:
    parseInt(nuevo.precio)*(parseInt(lleva)+parseInt(carrito[indice].lleva))}:carrito.push(nuevo);


    let totalprecio=carrito.map(li=>li.total).reduce((acum,num)=>
    parseInt(acum)+parseInt(num)
    ,0)


    fs.writeFileSync(carritoFilePath, JSON.stringify(carrito, null, ' '))
    res.render("products/carrito",{carrito,totalprecio})


}
const destroy=(req,res)=>{
    indice=req.params.id;
    carrito.splice((indice),1)
    fs.writeFileSync(carritoFilePath, JSON.stringify(carrito, null, ' '))
    res.redirect('/carrito')
}


module.exports = {
    home,
    userhome,
    comida,
    detalle,
    carritodecompra,
    listacarrito,
    destroy
}