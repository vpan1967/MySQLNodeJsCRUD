const {database} = require('./keys');
const mysql = require('mysql');

const conexion = mysql.createConnection(database);

conexion.connect( (err) =>{
    if(err)
    {
      console.log('Error DB: ', err);
      return err;
    }
    console.log('DB MySQL conectada');
})

module.exports = conexion;