module.exports = (sequelize, dataTypes)=>{
    let alias = 'Producto';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
            
            
        },
        raza:{
            type: dataTypes.STRING,
            allowNull: false
        },
        categoria:{
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
        imagen: dataTypes.STRING(500),
        id_marca: dataTypes.BIGINT(10),
        id_mascota: dataTypes.BIGINT(10),


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