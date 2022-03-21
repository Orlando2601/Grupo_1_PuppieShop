// modulos
const mysql = require('mysql2');
const config = require('./config')
const {crearTablaProductos} = require('./createTable')
const {username, password, database, host, dialect} = {...config.development}

//
// crear conexion db
const connection = mysql.createConnection({
  host,
  user: username,
  password,
  
});

  //
const crearDB = ()=>{
  connection.connect(function(error){
    if(error){
       console.log(error);
       return (crearTablaProductos())
    }else{
       console.log('Conexion correcta.');
    }
 });
      connection.query("CREATE DATABASE " + database, function (err, result) {
        if(!err){
          console.log('creada base')
          return (crearTablaProductos())
        }else{
          if(err.errno === 1007) {
            console.log("ya existe")
            return
          }
        }
        
      });
      connection.end();

      

}
 crearTablaProductos()


module.exports = {
  crearDB
 
}