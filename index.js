const db = require('./config/db');
const express = require('express');
const cors = require('cors');

const app = express();

// Para capturar informacion desde el body hacia el API REST.....s
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Definir puerto para el servidor .....
app.set('port', process.env.PORT || 4000);

app.use(cors());

//APII REST ....
app.get('/usuarios', (req, res) =>{
    
  db.query('SELECT * FROM users' , (err, data) =>{
    if(err) {
      return err
    }
    res.json({
      mensaje: 'Resultado de la Consulta',
      data})

  })  
  
})

app.post('/usuarios/insert' , (req, res) =>{
  const values = Object.values(req.body);
  const sql = 'INSERT INTO users (username,password,nombre,apellido,documento) VALUES(?,?,?,?,?)';
  db.query(sql, values, (err, result) =>{
    if(err) {
      return err
    }
    res.json({
      mensaje: 'Usuario agregado',
      result
    })
  })
})

// Operacion de buscar un usuario ...
app.get('/usuarios/:id', (req, res) =>{
  const ID = req.params.id;
  const sql = 'SELECT * FROM users WHERE id = ?';
  db.query(sql , [ID], (err, data) =>{
    if(err) {
      return err
    }
    res.json({
      mensaje: 'Resultado de la Consulta Individual ',
      data})

  })  
  
})
// Operacion de Edicion ..
app.put('/usuarios/edit/:id', (req, res) =>{
  const ID = req.params.id;
  const values = Object.values(req.body);
  const sql = 'UPDATE users SET username = ?, password = ?, nombre = ?, apellido = ?, documento = ? WHERE id ='+ID;
  db.query(sql , values, (err, data) =>{
    if(err) {
      return err
    }
    res.json({
      mensaje: 'Registro Actualizado ..... ',
      data})
  })
})

// Operacion de Eliminacion ...
app.delete('/usuarios/remove/:id', (req,res) => {
  const ID = req.params.id;
  const sql = 'DELETE FROM users WHERE id = ?';
  db.query(sql , [ID], (err, data) =>{
    if(err) {
      return err
    }
    res.json({
      mensaje: 'Eliminado ..... ',
      data})
  })
})

app.listen(app.get('port'), ()=> {
  console.log('server on port', app.get('port'))
});