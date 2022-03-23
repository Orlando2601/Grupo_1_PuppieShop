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
            let sql1Productos = `CREATE TABLE Productos (
                id INT PRIMARY KEY AUTO_INCREMENT,
                nombre VARCHAR(255) NOT NULL,
                precio INT NOT NULL,
                cantidad INT NOT NULL,
                tamanio INT NOT NULL,
                imagen VARCHAR(255) NOT NULL,
                id_marca INT NOT NULL ,
                id_mascota INT NOT NULL)`;

            let sql2Marcas = `CREATE TABLE Marca (
                id INT PRIMARY KEY AUTO_INCREMENT,
                nombre_marca VARCHAR(255) NOT NULL)`;
            let sql3Mascota = `CREATE TABLE Mascota (
                id INT PRIMARY KEY AUTO_INCREMENT,
                tipo_mascota VARCHAR(255) NOT NULL)`;

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
            connection.query(sql2Marcas, function (err, result) {
                if(!err){
                    console.log("creada tabla 2 Marcas")
                    return
                }else{
                    if(err.code === 1050){
                        console.log(' ya exite tabla 2 Marcas')
                        return
                    }
                }
                
            })
            connection.query(sql3Mascota, function (err, result) {
                if(!err){
                    console.log("creada tabla 3 Mascota")
                    return
                }else{
                    if(err.code === 1050){
                        console.log(' ya exite tabla 3 Mascota')
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