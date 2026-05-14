var express = require("express");
var router = express.Router();

var topicoController = require("../controllers/topicoController");

router.post("/cadastrar", function (req, res) {
    topicoController.cadastrar(req, res);
})

router.get('/exibir/:idTopico', function (req, res) {
    topicoController.exibir(req, res);
})

router.get('/receberIds', function (req, res){
    topicoController.receberIds(req, res);
})

module.exports = router;