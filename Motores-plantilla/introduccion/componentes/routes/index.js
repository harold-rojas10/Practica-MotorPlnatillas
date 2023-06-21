var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const usuario = {
    nombre: 'Ana',
    apellido: 'Garcia',
    correo: 'ejemplo@ejemplo.com',
    pagina: 'Back End'
  }
  res.render('index', { data: usuario, layout: 'main'});
});

module.exports = router;
