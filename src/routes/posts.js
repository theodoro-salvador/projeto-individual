var express = require("express");
var router = express.Router();

var postController = require("../controllers/postController");

router.post("/cadastrar", function(req, res) {
    postController.cadastrar(req, res);
});

router.get('/obterIdPost/:idTopico', function(req, res){
    postController.obterIdPost(req, res);
});

module.exports = router;