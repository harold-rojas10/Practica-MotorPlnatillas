var express = require('express');
var router = express.Router();
const { connection } = require('../database/conexion.js')

/* GET users listing. */
router.get('/', function (req, res, next) {
  if (req.cookies.session === 'exitoso') {
    connection.query('SELECT * FROM personas', (error, results, fields) => {
      if (error) {
        console.log("Error en la consulta", error)
        res.status(500).send("Error en la consulta")
      } else {
        res.render('usuarios', { title: 'usuarios', usuarios: results, layout: 'tablas' })
      }
    });
  } else {
    res.render('error',{message: 'Debes iniciar sesion como admin, para ver los usuarios'})
  }
});

module.exports = router;
