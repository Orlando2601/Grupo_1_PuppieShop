
const db = require('../../database/models');

const comida = async (req,res)=>{
         try {
        const {rows,count }=await  db.Producto.findAndCountAll({
            include: ['marca','mascota']
         })

         const url =  await rows.forEach(item => {
            item.dataValues.Detalle ="http://localhost:3030/api/detalle/"+item.id;
        });
        const imagen =  await rows.forEach(item => {
            item.dataValues.Urlimagen ="http://localhost:3030/images/productsDB/"+item.imagen;
        });
        

            return res.json({productos:rows,totaldeproductos:count})

           
    } catch (error) {
        console.log(error)
    
    }
}
const detalle = async(req,res)=>{
    try {
        const lista= await db.Producto.findByPk(req.params.id,{include:['marca']})

        const imagen = lista.dataValues.Urlimagen ="http://localhost:3030/images/productsDB/"+lista.imagen;
    
       return res.json(lista)
        
    } catch (error) {
        
    }
        
    }


module.exports = {
    comida,
    detalle,
   
}