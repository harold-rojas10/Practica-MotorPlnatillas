var express = require('express');
var router = express.Router();

router.use(express.urlencoded({ extended: true }));//cuerpo de la solicitud

router.post('/', (req, res) => {
    const nombre = req.body.name
    const email = req.body.email

    res.render('enviado', { nombre,email })//envio datos a la plantilla
})

module.exports = router;