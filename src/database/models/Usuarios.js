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
        contraseña:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        imagen: dataTypes.STRING(500),


    };
    let config = {
        tableName:"usuarios",
        timestamps: false,
        deletedAt: false
    }

    const Usuarios = sequelize.define(alias, cols, config);

    return Usuarios
}