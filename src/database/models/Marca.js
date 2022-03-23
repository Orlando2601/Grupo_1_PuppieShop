module.exports = (sequelize, dataTypes) => {
    let alias = 'Marca';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        nombre_marca: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        tableName:"marca",
        timestamps: false,
        deletedAt: false
    }
    const Marca = sequelize.define(alias, cols, config);

    Marca.associate = function(models) {
        Marca.hasMany(models.Producto, { 
            as: "productos", 
            foreignKey: "id_marca"
        })
    }

    return Marca
};