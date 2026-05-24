var express = require('express');
var router = express.Router();

var graficoController = require('../controllers/graficoController');

router.get('/buscarGraficoAlbuns', function(req, res){
    graficoController.buscarGraficoAlbuns(req, res);
});

router.get('/buscarGraficoDecadas', function(req, res){
    graficoController.buscarGraficoDecadas(req,res);
});

router.get('/buscarKpiDiscoPreferido', function(req, res){
    graficoController.buscarKpiDiscoPreferido(req, res);
})

module.exports = router;