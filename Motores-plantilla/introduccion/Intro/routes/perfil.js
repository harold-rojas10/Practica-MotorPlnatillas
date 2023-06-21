var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('perfil', { curso: 'Curso Backend', nombre: 'Harold Rojas' });
});

module.exports = router;