module.exports = (sequelize, dataTypes)=>{
    let alias = 'Carrito';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_producto:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        cantidad:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        id_usuario:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        total:{
            type:dataTypes.INTEGER,
            allowNull: false
        }
        


    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Usuarios = sequelize.define(alias, cols, config);

    return Usuarios
}