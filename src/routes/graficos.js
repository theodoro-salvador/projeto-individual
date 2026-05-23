var express = require('express');
var router = express.Router;

var graficoController = require('../controllers/graficoController');

router.post('/buscarGraficoAlbuns', function(req, res){
    graficoController.buscarGraficoAlbuns(req, res);
});

module.exports = router;