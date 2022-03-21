module.exports = (sequelize, dataTypes)=>{
    let alias = 'Productos';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            
        },
        mascota:{
            type: dataTypes.INTEGER
        },
        raza:{
            type: dataTypes.INTEGER
        },
        categoria:{
            type:dataTypes.INTEGER
        },
        nombre:{
            type:dataTypes.STRING,
            allowNull: false
        },
        tamaño: {
            type:dataTypes.INTEGER,
            allowNull:false
        },
        cantidad: {
            type:dataTypes.INTEGER,
            allowNull:false
        },
        precio: {
            type:dataTypes.INTEGER,
            allowNull:false
        },
        referencia:{
            type:dataTypes.STRING,
            allowNull: false
        },
        imagen:{
            type:dataTypes.STRING,
            allowNull: false
        }


    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Productos = sequelize.define(alias, cols, config);

    return Productos
}