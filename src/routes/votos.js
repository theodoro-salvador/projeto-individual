var express = require('express');
var router = express.Router();

var votoController = require('../controllers/votoController');

router.post('/enviarVoto', function (req, res){
    votoController.enviarVoto(req, res);
});

module.exports = router;