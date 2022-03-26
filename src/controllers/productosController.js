/* const { json } = require('body-parser'); */
const req = require('express/lib/request');
const { render } = require('express/lib/response');
const fs = require('fs');
const path = require('path')
const db = require('../database/models');




const home = (req,res)=>{
       return res.render('products/home')
    }

const userhome = (req,res)=>{
        return res.render('users/homeuser')

    }

const comida = async (req,res)=>{
         try {
        const producto =await  db.Producto.findAll({
            include: ['marca','mascota']
            
         })
            //res.json(producto)
         res.render('products/listaProductos',{producto}) 
    } catch (error) {
        console.log(error)
    } 
    
    }
const detalle = async(req,res)=>{
        const lista= await db.Producto.findByPk(req.params.id,{include:['marca']})
        //res.json(lista)
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
    if(parseInt(carrito[indice].lleva)+parseInt(lleva)>lista.cantidad)
    {return res.redirect('/carrito')}

    let total=parseInt(carrito[indice].lleva)*parseInt(lista.precio)

    carrito[indice]=
    {...lista,
        lleva:parseInt(lleva)+parseInt(carrito[indice].lleva),
        total:parseInt(lista.precio)*(parseInt(lleva)+parseInt(carrito[indice].lleva))
    }

    
        } else{
        let total=parseInt(lleva)*parseInt(lista.precio)
        let nuevo={

            ...lista,
            lleva:lleva,
            total:total,
         }
         carrito.push(nuevo);
    }
       
    let totalprecio=carrito.map(li=>li.total).reduce((acum,num)=>
    parseInt(acum)+parseInt(num)
    ,0)

    fs.writeFileSync(carritoFilePath, JSON.stringify(carrito, null, ' '))
    res.render("products/carrito",{carrito,totalprecio})

}
const editarCarrito=(req,res)=>{
    let ref = req.params.referencia;
    let lista = productos.find(item => item.referencia == ref)

    res.render('products/Editcarrito',{lista})

}
const actualizarCarrito=(req,res)=>{
    let ref = req.params.referencia;
    let lista = carrito.find(item => item.referencia == ref)
    
    let indice = carrito.findIndex(el=>el.id==lista.id)
    let lleva=req.body.cantidad2;
    let total=parseInt(lleva)*parseInt(lista.precio)
    let up={
        ...lista,
        lleva:lleva,
        total:total
    }
    carrito[indice]=up;

    fs.writeFileSync(carritoFilePath, JSON.stringify(carrito, null, ' '))
    res.redirect('/carrito')

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
    destroy,
    editarCarrito,
    actualizarCarrito
}