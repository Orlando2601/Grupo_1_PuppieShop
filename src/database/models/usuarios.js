module.exports = (sequelize, dataTypes)=>{
    let alias = 'Usuarios';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type:dataTypes.STRING,
            allowNull: false
        },
        apellido:{
            type:dataTypes.STRING,
            allowNull: false
        },
        correo:{
            type:dataTypes.STRING,
            allowNull: false
        },
        contraseña:{
            type:dataTypes.STRING,
            allowNull: false
        },
        imagen:{
            type:dataTypes.STRING,
            allowNull: false
        },
        id_carrito:{
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
    /* Usuarios.associate = (models)=>{
        Usuarios.belongsToMany(models.Productos, {
            as:"productos",
            trough:"Carrito",
            foreignKey:"id_usuario",
            otherkey:"id_producto",
            timestamps:false
        });

    } */
    return Usuarios
}