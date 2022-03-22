//modulos
const mysql = require('mysql2');
const { sequelize } = require('../models');
const config = require('./config')
const {username, password, database, host, dialect} = {...config.development}
//
// creacion de nueva tabla
// crear conexion con db

//

const crearTablas = ()=>{
  
        const connection = mysql.createConnection({
            host,
            user:username,
            password,
            database
        });

        connection.connect(function(error){
            if(error){
               console.log(error)
               return;
            }else{
               console.log('Conexion correcta.');
            }
         });
            let sql1Productos = "CREATE TABLE Productos(id INT PRIMARY KEY AUTO_INCREMENT, Mascota INT, Raza INT, Categoria INT, Nombre VARCHAR(255) NOT NULL, Tamaño INT NOT NULL, Cantidad INT NOT NULL, Precio INT NOT NULL, Referencia VARCHAR(255) NOT NULL, Imagen VARCHAR(255) NOT NULL) ;";
            let sql2Usuarios = "CREATE TABLE Usuarios(id INT PRIMARY KEY AUTO_INCREMENT, Nombre VARCHAR(255) NOT NULL, Apellido VARCHAR(255) NOT NULL, Correo VARCHAR(255) NOT NULL, Contraseña VARCHAR(255) NOT NULL, Imagen VARCHAR(255) NOT NULL, id_Carrito INT NOT NULL)"
            let sql3Carrito = "CREATE TABLE Carrito(id INT PRIMARY KEY AUTO_INCREMENT, id_producto INT NOT NULL, cantidad INT NOT NULL, id_usuario INT NOT NULL, total INT NOT NULL)"
            //let sql4RelacionCarrito = "CREATE TABLE RelacionCarrito(id INT PRIMARY KEY AUTO_INCREMENT, id_producto INT NOT NULL, id_carrito INT NOT NULL)"
            connection.query(sql1Productos, function (err, result) {
                if(!err){
                    console.log("creada tabla 1 Productos")
                    return
                }else{
                    if(err.code === 1050){
                        console.log(' ya exite tabla 1 Productos')
                        return
                    }
                }
                
            })
            connection.query(sql2Usuarios, function (err, result) {
                if(!err){
                    console.log("creada tabla 2 Usuarios")
                    return
                }else{
                    if(err.code === 1050){
                        console.log(' ya exite tabla 2 Usuarios')
                        return
                    }
                }
                
            })
            connection.query(sql3Carrito, function (err, result) {
                if(!err){
                    console.log("creada tabla 3 Carrito")
                    return
                }else{
                    if(err.code === 1050){
                        console.log(' ya exite tabla 3 Carrito')
                        return
                    }
                }
                
            })
            /* connection.query(sql4RelacionCarrito, function (err, result) {
                if(!err){
                    console.log("creada tabla 4 Relacion Carrito")
                    return
                }else{
                    if(err.code === 1050){
                        console.log(' ya exite tabla 4 Relacion Carrito')
                        return
                    }
                }
                
            }) */
            
            
            
            connection.end();
    
                
  
    //
}


module.exports={
     crearTablas
}