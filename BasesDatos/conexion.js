const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '$Adm1n10',//aqui va la contraseña de workbench
    database: 'personas',
    charset: 'utf8mb4' // Establecer el conjunto de caracteres en UTF-8
});


connection.connect((error) => { // Conectar a la base de datos
    if (error) {
        console.error('Error al conectar a la base de datos: ', error); // Imprimir mensaje de error en la consola
    }else{
        console.log(`Conexion exitosa exitosa`)
    }
});

module.exports = { connection }; // Exportar la función para obtener usuarios