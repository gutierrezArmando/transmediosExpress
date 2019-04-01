var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
    res.render('about',  {pageName: 'Original', apellido:'El apellido'} );
});

router.get('/:nombre', function (req, res) {    
    res.render('about',{pageName: req.params.nombre, apellido: 'El apellido del segundo nivel'});
});

router.get('/:nombre/:apellido', function (req, res) {    
    res.render('about',{pageName: req.params.nombre, apellido: req.params.apellido});
});

module.exports = router;