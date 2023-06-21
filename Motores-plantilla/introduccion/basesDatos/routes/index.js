var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { mensaje: 'Ingrese su usuario y contraseña', error: false });
});


router.post('/login', (req, res) => {
  const nombre = req.body.name
  const contrasenia = req.body.password
  if (nombre === 'desarrollador' && contrasenia === 'backend1234') {
    res.cookie('session', 'exitoso')
    res.render('index', { nombre })
  } else{
    if (nombre === 'medico' && contrasenia === 'vete1234') {
      res.cookie('session', 'pets')
      res.render('index', { nombre })
    } else{
      res.render('login', { mensaje: 'credenciales incorrectas. Por favor, vuelva a ingresar', error: true });
    }
    
  }

})

module.exports = router;
