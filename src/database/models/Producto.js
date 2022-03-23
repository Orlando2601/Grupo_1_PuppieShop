module.exports = (sequelize, dataTypes)=>{
    let alias = 'Producto';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
            
            
        },
        nombre:{
            type: dataTypes.STRING,
            allowNull: false
        },
        precio:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        cantidad:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        tamanio:{
            type:dataTypes.INTEGER,
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING,
            allowNull: false
        },
        id_marca: {
            type:dataTypes.INTEGER,
            allowNull:false
        },
        id_mascota: {
            type:dataTypes.INTEGER,
            allowNull:false
        }


    };
    let config = {
        tableName:"productos",
        timestamps: false,
        deletedAt: false
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Marca, {
            as: "marca",
            foreignKey: "id_marca"
        });
        Producto.belongsTo(models.Mascota, { 
            as: "mascota", 
            foreignKey: "id_mascota"
        })
    }
    return Producto
}