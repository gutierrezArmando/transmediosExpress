const express = require('express');
const conection = require('../database/dbTest');
const router = express.Router();


/*Para desplegar todos los usuarios*/
router.get('/', function (req, res) {
    conection.query('select * from musica', function (error, result, fields) {
        if(error)
            throw error;
        return res.json({error: false, data: result, message: 'Lista de tareas'});
        res.status(404);
        res.send("Error al buscar en base de datos");
    })
});
module.exports = router;