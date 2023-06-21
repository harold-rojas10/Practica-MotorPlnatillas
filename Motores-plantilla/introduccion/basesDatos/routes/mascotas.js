var express = require('express');
var router = express.Router();
const { connectionPet } = require('../database/conexion.js')

/* GET users listing. */
router.get('/', function (req, res, next) {
    if (req.cookies.session === 'pets') {
        connectionPet.query('SELECT * FROM veterinaria.mascotas', (error, results, fields) => {
            if (error) {
                console.log("Error en la consulta", error)
                res.status(500).send("Error en la consulta")
            } else {
                res.render('mascotas', { title: 'mascotas', pets: results, layout: 'tablas' })
            }
        });
    } else {
        res.render('error', { message: 'Debes iniciar sesion como medico, para ver las mascotas' })
    }
});

module.exports = router;