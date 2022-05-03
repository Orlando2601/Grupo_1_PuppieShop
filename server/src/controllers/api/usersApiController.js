const db = require('../../database/models');

const listaUsuarios  = async(req, res)=>{
        try {
            const {rows, count} = await db.Usuarios.findAndCountAll({
                attributes:['id','nombre','apellido','correo']
            });

     
       

            const nuevo =  await rows.forEach(element => {
                element.dataValues.urlDetalleUser ="http://localhost:3030/api/usuario/"+element.id;
            });

            return res.status(200).json({listaUsers:rows,totalUsuarios:count})

            
        } catch (error) {
            console.log(error)
        }



}

const detalleUsuario = async(req, res)=>{
    try {
        const idUser = req.params.id
        const usuario = await db.Usuarios.findByPk(idUser)
        return res.json({usuario})
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    listaUsuarios,
    detalleUsuario
}