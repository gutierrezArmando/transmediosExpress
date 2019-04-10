var express = require('express');
var request = require('request');
var router = express.Router();

var url = 'http://localhost:3000/API';
var canciones;

/*
request({
  url: url,
  json: true
}, (error, res, body)=>{
  canciones = body.data;
  for(cancion of body.data)
  {
    console.log(cancion.titulo);
  }
});
*/
/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', {listaVideos: [
    {titulo: 'Cancion1'},
    {titulo: 'Titulo2'}
  ]});
});*/

/*
router.get('/', function(req, res, next) {
  res.render('index', {listaVideos: canciones});
});
*/
/*
router.get('/', (req, res, next) => {
  request.get({
    url: url,
    json: true
  }, function(err, response) {
    if (err) {
      self.callback(err, null);
      return;
    }
    console.log(response.body); // Has content
    res.render('index', {listaVideos: response.body.data}); // <<-- response body here as param
  });
});
*/
router.get('/', function (req, res, next) {
  request.get({
    url: url,
    json: true
  },function (err, response) {
    if(err) {
      self.callback(err, null);
    }
    console.log(response.body);
    res.render('index', {listaVideos: response.body.data});
  });
});

module.exports = router;

//https://stackoverflow.com/questions/48974520/render-api-response-body-content-with-node-js

//https://codeforgeek.com/2014/09/handle-get-post-request-express-4/