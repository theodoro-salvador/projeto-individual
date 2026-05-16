var postModel = require("../models/postModel");

function cadastrar(req, res){

    var textoPost = req.body.textoPostServer;
    var idUsuario = req.body.idUsuarioServer;
    var idTopico = req.body.idTopicoServer;
    var idPostagem = req.body.idPostagemServer;

    postModel.cadastrar(textoPost, idUsuario, idTopico, idPostagem).then((resultado)=>{
        res.status(201).json(resultado);
    });

}

function obterIdPost(req, res){

    var idTopico = req.params.idTopico;

    postModel.obterIdPost(idTopico).then(function(resultado){

        if(resultado.length > 0){

            res.status(200).json(resultado);

        } else{
            
            res.status(204).send('Nenhum registro encontrado');

        }

    })

}

module.exports = {
    cadastrar,
    obterIdPost,
}