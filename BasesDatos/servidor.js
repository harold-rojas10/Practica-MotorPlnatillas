const express = require('express')
const {connection} = require('./conexion.js')
const moment = require('moment');

const app = express();
const PUERTO = 3000;

app.set('view engine','ejs');
app.use(express.static('public'));//uso de archivos estaticos
app.use(express.urlencoded({ extended: true }));//cuerpo de la solicitud por metodo post

app.get('/', (req, res) => {
    connection.query('SELECT * FROM personas', (error, filas) => {
        if (error) {
            console.log("Error en la consulta", error)
            res.status(500).send("Error en la consulta")
        } else {
            res.render('usuarios', {filas: filas})
        }
    });
});
//Manejo error 500
app.get('*',(req, res) => {
    //Envio con estado
    res.status(404).sendFile(__dirname+'/404.html')
})

app.use((error, req, res, next) => {
    res.status(500).send('Ha ocurrido un error interno en el servidor.');
});

app.listen(PUERTO,()=>{
    console.log(`El servidor está corriendo en http://localhost:${PUERTO}`)
})