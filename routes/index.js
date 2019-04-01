var express = require('express');
var request = require('request');
var router = express.Router();

var url = 'http://localhost:3000/API';
var canciones;
request({
  url: url,
  json: true
}, (error, res, body)=>{
  canciones = body.data;
  for(cancion of body.data)
  {
    console.log(cancion.titulo);
  }
  //console.log(JSON.stringify(body, undefined, 1));
  //console.log(JSON.stringify(body.data[0]));
  //console.log(JSON.stringify(body.data[1]));
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {cancionesLista: [
    {titulo: "Cancion1"},
    {titulo: "Titulo2"}
  ]});
});

module.exports = router;
