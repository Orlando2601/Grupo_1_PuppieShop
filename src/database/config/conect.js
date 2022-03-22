// modulos
const mysql = require('mysql2');
const config = require('./config')
const {crearTablas} = require('./createTable')
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
       return (crearTablas())
    }else{
       console.log('Conexion correcta.');
    }
 });
      connection.query("CREATE DATABASE " + database, function (err, result) {
        if(!err){
          console.log('creada base')
          return (crearTablas())
        }else{
          if(err.errno === 1007) {
            console.log("ya existe")
            return
          }
        }
        
      });
      connection.end();

      

}
 crearTablas()


module.exports = {
  crearDB
 
}