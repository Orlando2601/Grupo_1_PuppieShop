
const bcrypt = require('bcryptjs')
module.exports = (sequelize, dataTypes)=>{
    let alias = 'Usuarios';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
            
            
        },
        nombre:{
            type: dataTypes.STRING,
            allowNull: false
        },
        apellido:{
            type: dataTypes.STRING,
            allowNull: false
        },
        correo:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        contrasena:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        imagen: dataTypes.STRING(500),


    };
    let config = {
        tableName:"usuarios",
        timestamps: false,
        deletedAt: false,
        hooks:{
            beforeCreate:async(user)=>{
                const salt = await bcrypt.genSalt(10);
                user.contrasena=await bcrypt.hash(user.contrasena,salt)
            }
        }
    }

    const Usuarios = sequelize.define(alias, cols, config);

    return Usuarios
}