
const db = require('../../database/models');

const comida = async (req,res)=>{
         try {
        const producto =await  db.Producto.findAll({
            include: ['marca','mascota']
            
         })

         res.json(producto) 
    } catch (error) {
        console.log(error)
    } 
    
    }
const detalle = async(req,res)=>{
        const lista= await db.Producto.findByPk(req.params.id,{include:['marca']})
        //res.json(lista)
        return res.json(lista)
    }

const crearProducto = async(req,res)=>{
    try {
        const allmarca = await db.Marca.findAll();
        return res.json(allmarca);
        
    } catch (error) {
        res.json(error)
        
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

      res.json(lista);
      
    }

const editarProducto = async (req,res)=>{
        const promtoEdit=await db.Producto.findByPk(req.params.id,{include:['marca']})
        const prommarca=db.Marca.findAll();
        const [toEdit,marca]= await Promise.all([promtoEdit,prommarca])
         res.json({toEdit,marca})

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
        
       res.json("listo")
        
    }

const destroy = async(req,res)=>{
    try {   
        await db.Producto.destroy({
            where:{id:req.params.id}
        })

        res.json('eliminado')
        
    } catch (error) {
        res.json(error)
        
        
    }
        
		
    }


module.exports = {
    comida,
    detalle,
    crearProducto,
    tienda,
    editarProducto,
    update,
    destroy,
   
}