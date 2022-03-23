module.exports = (sequelize, dataTypes) => {
    let alias = 'Mascota';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        tipo_mascota: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };
    let config = {
        tableName:"mascota",
        timestamps: false,
        deletedAt: false
    }
    const Mascota = sequelize.define(alias, cols, config);

    Mascota.associate = function(models) {
        Mascota.hasMany(models.Producto, { 
            as: "productos", 
            foreignKey: "id_mascota"
        })
    }

    return Mascota
};