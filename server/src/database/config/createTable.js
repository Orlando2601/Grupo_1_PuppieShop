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
            const sql4Usuarios = `CREATE TABLE Usuarios (
                id INT PRIMARY KEY AUTO_INCREMENT,
                nombre VARCHAR(255) NOT NULL,
                apellido VARCHAR(255),
                correo VARCHAR(255),
                contrasena VARCHAR(255),
                imagen VARCHAR(255))`;

            const sql5LlenarTablaProductos = `INSERT INTO Productos (id, raza, categoria, precio, cantidad, tamanio, imagen, id_marca, id_mascota) 
                VALUES 
                (1, "mediana", "alimentos", 35000, 10, 3, "Chunky-vida-activa.jpg", 1, 1),
                (2, "mediana", "alimentos", 35000, 10, 3, "Adultos-ControlDePeso.jpg", 2, 1),
                (3, "mediana", "alimentos", 35000, 10, 3, "purina-pro-plan-flagship-perros-adult-razas-grandes.png", 3, 1),
                (4, "mediana", "alimentos", 35000, 10, 3, "Adultos-medianos-y-grandes-pollo-y-carne.png", 4, 1),
                (5, "mediana", "alimentos", 35000, 10, 3, "chunky_gatos_salmon.jpg", 1, 2),
                (6, "mediana", "alimentos", 35000, 10, 3, "Adulro +7.jpg", 3, 2),
                (7, "mediana", "alimentos", 35000, 10, 3, "Adultos-Pollo-Carne.png", 4, 2)`;
            const sql6LlenarTablaMarca = `INSERT INTO Marca (id, nombre_marca) 
                VALUES 
                (1, "Chunky"),
                (2, "Dog Show"),
                (3, "Pro Plan"),
                (4, "Purina One")`;

            const sql7LlenarTablaMascota = `INSERT INTO Mascota (id, tipo_mascota) 
                VALUES 
                (1, "Perros"),
                (2, "Gatos")`;
            const sql8LlenarTablaUsuarios = `INSERT INTO Usuarios (id, nombre, apellido, correo, contrasena, imagen) 
                VALUES 
                (1, "Oswar", "Baez", "oswar@gmail.com", "$2a$10$npI2AuveykOqT0I4WIwFLO7rmtYLcwYFb9VtPN5DZHejjJ65wKt1q","oswar.png"),
                (2, "Rafael", "estrada", "prueba@hotmail.com","$2a$10$8lvdiYc4Jb/mrUBzUsfhNuiefvDcOx9pkYV0Amz55.EFM/VdkC46u","imagen1645885848674.png")`;

           

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

            connection.query(sql4Usuarios, function (err, result) {
                if(!err){
                    console.log("creada tabla 4 Usuarios");
                }else{
                    if(err.code === 1050){
                        console.log(' ya exite tabla 4 Usuarios');
                    }
                }
            });


            connection.query(sql5LlenarTablaProductos, function (err, result) {
                if(!err){
                    console.log("Llenado de tabla productos ok");
                }else{
                    if(err.code === 1050){
                        console.log('Ya existe tabla llena');
                    }
                }
            });
            
            connection.query(sql6LlenarTablaMarca, function (err, result) {
                if(!err){
                    console.log("Llenado de tabla marcas ok");
                }else{
                    if(err.code === 1050){
                        console.log('Ya existe tabla llena');
                    }
                }
            });
            
            connection.query(sql7LlenarTablaMascota, function (err, result) {
                if(!err){
                    console.log("Llenado de tabla macota ok");
                }else{
                    if(err.code === 1050){
                        console.log('Ya existe tabla llena');
                    }
                };
            });
            connection.query(sql8LlenarTablaUsuarios, function (err, result) {
                if(!err){
                    console.log("Llenado de tabla usuarios ok");
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