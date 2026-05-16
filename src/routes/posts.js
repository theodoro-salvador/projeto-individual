var express = require("express");
var router = express.Router();

var postController = require("../controllers/postController");

router.post("/cadastrar", function(req, res) {
    postController.cadastrar(req, res);
});

router.get('/obterIdPost/:idTopico', function(req, res){
    postController.obterIdPost(req, res);
});

router.get('/receberIds/:idTopico', function(req, res){
    postController.receberIds(req, res);
});

router.get('/exibir/:postagem', function(req, res){
    postController.exibir(req, res);
});

module.exports = router;