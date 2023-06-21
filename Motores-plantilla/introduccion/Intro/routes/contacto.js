var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function (req, res, next) {
    const info = {
        nombreUsuario: 'Harold Rojas',
        email: 'harold.rojas@scj.gov.co',
        mensaje: 'Este es mi contacto'
    }
    res.render('contacto', {info});
});

module.exports = router;