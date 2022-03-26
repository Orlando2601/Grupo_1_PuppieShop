const { json } = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const db = require('../database/models');





const crearProducto = async(req,res)=>{
    try {
        const allmarca = await db.Marca.findAll();
        return res.render('adminProducts/crearProducto',{marca:allmarca});
        
    } catch (error) {
        res.render(error)
        
    }
        
        
        
    }

const tienda = async(req,res)=>{
    const {id_mascota,raza,categoria,id_marca,tamanio,cantidad, precio }=req.body;
    const imagen=req.file?req.file.filename:"Default.jpg";

    await db.Producto.create({
        id_mascota,
        raza,
        categoria,
        id_marca,
        tamanio,
        cantidad,
        precio, 
        imagen

    })
    const lista=await db.Producto.findAll();

      res.render('users/adminPerfil',{lista, user: req.session.usuarioLogueado});
      
    }

const editarProducto = async (req,res)=>{
        const promtoEdit=await db.Producto.findByPk(req.params.id,{include:['marca']})
        const prommarca=db.Marca.findAll();
        const [toEdit,marca]= await Promise.all([promtoEdit,prommarca])
        return res.render('adminProducts/editarProducto',{toEdit,marca})

    }

const update = async(req,res)=>{
    const {id_mascota,raza,categoria,id_marca,tamanio,cantidad, precio }=req.body;
    if(req.file){
    await db.Producto.update(
        {
            id_mascota,
            raza,
            categoria,
            id_marca,
            tamanio,
            cantidad, 
            precio,
            imagen:req.file.filename

        },
        {
            where:{id:req.params.id}
        }
    )}else{
        await db.Producto.update(
            {
                id_mascota,
                raza,
                categoria,
                id_marca,
                tamanio,
                cantidad, 
                precio,
                
            },
            {
                where:{id:req.params.id}
            }
        )
        
    }
        
       res.redirect('/user/adminPerfil')
        
    }

const destroy = async(req,res)=>{
    try {   
        await db.Producto.destroy({
            where:{id:req.params.id}
        })

        res.redirect('/user/adminPerfil')
        
    } catch (error) {
        res.render(error)
        
        
    }
        
		
    }
    
module.exports ={
    crearProducto,
    tienda,
    editarProducto,
    update,
    destroy
}
