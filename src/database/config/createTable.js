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

        connection.connect((error)=>{!error ? console.log("Conexion Correcta") : console.log(error)});

            const sql1Productos = `CREATE TABLE Productos (
                id INT PRIMARY KEY AUTO_INCREMENT,
                raza VARCHAR(255) NOT NULL,
                categoria VARCHAR(255) NOT NULL,
                precio INT NOT NULL,
                cantidad INT NOT NULL,
                tamanio INT NOT NULL,
                imagen VARCHAR(255),
                id_marca BIGINT(10),
                id_mascota BIGINT(10))`;

            const sql2Marcas = `CREATE TABLE Marca (
                id INT PRIMARY KEY AUTO_INCREMENT,
                nombre_marca VARCHAR(255) NOT NULL)`;
            const sql3Mascota = `CREATE TABLE Mascota (
                id INT PRIMARY KEY AUTO_INCREMENT,
                tipo_mascota VARCHAR(255) NOT NULL)`;

            const sql4LlenarTablaProductos = `INSERT INTO Productos (id, raza, categoria, precio, cantidad, tamanio, imagen, id_marca, id_mascota) 
                VALUES 
                (1, "mediana", "alimentos", 35000, 10, 3, "Chunky-vida-activa.jpg", 1, 1),
                (2, "mediana", "alimentos", 35000, 10, 3, "Adultos-ControlDePeso.jpg", 2, 1),
                (3, "mediana", "alimentos", 35000, 10, 3, "purina-pro-plan-flagship-perros-adult-razas-grandes.png", 3, 1),
                (4, "mediana", "alimentos", 35000, 10, 3, "Adultos-medianos-y-grandes-pollo-y-carne.png", 4, 1),
                (5, "mediana", "alimentos", 35000, 10, 3, "chunky_gatos_salmon.jpg", 1, 2),
                (6, "mediana", "alimentos", 35000, 10, 3, "Adulro +7.jpg", 3, 2),
                (7, "mediana", "alimentos", 35000, 10, 3, "Adultos-Pollo-Carne.png", 4, 2)`;
            const sql5LlenarTablaMarca = `INSERT INTO Marca (id, nombre_marca) 
                VALUES 
                (1, "Chunky"),
                (2, "Dog Show"),
                (3, "Pro Plan"),
                (4, "Purina One")`;

            const sql6LlenarTablaMascota = `INSERT INTO Mascota (id, tipo_mascota) 
                VALUES 
                (1, "Perros"),
                (2, "Gatos")`;

           

            connection.query(sql1Productos, function (err, result) {
                if(!err){
                    console.log("creada tabla 1 Productos");
                }else{
                    if(err.code === 1050){
                        console.log(' ya exite tabla 1 Productos');
                    }
                }
            });

            connection.query(sql2Marcas, function (err, result) {
                if(!err){
                    console.log("creada tabla 2 Marcas");
                }else{
                    if(err.code === 1050){
                        console.log(' ya exite tabla 2 Marcas'); 
                    }
                }
            });

            connection.query(sql3Mascota, function (err, result) {
                if(!err){
                    console.log("creada tabla 3 Mascota");
                }else{
                    if(err.code === 1050){
                        console.log(' ya exite tabla 3 Mascota');
                    }
                }
            });

            connection.query(sql4LlenarTablaProductos, function (err, result) {
                if(!err){
                    console.log("Llenado de tabla productos ok");
                }else{
                    if(err.code === 1050){
                        console.log('Ya existe tabla llena');
                    }
                }
            });
            
            connection.query(sql5LlenarTablaMarca, function (err, result) {
                if(!err){
                    console.log("Llenado de tabla marcas ok");
                }else{
                    if(err.code === 1050){
                        console.log('Ya existe tabla llena');
                    }
                }
            });
            
            connection.query(sql6LlenarTablaMascota, function (err, result) {
                if(!err){
                    console.log("Llenado de tabla macota ok");
                }else{
                    if(err.code === 1050){
                        console.log('Ya existe tabla llena');
                    }
                };
            });
            
            connection.end();
}


module.exports={
     crearTablas
}