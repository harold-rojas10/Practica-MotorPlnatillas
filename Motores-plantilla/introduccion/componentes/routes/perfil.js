var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const usuario = {
    perfil: 'desarrollador',
    mensaje: 'Esta es la descripcion de un desarrollador',
    correo: 'ejemplo@ejemplo.com',
    pagina: 'Back End'
  }
  res.render('perfil', { data: usuario, layout: 'main'});
});

module.exports = router;
