var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:'Curso Backend',description:'Este es mi primer servidor desde una plantilla'});
});

module.exports = router;
