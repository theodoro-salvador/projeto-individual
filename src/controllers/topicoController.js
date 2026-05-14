var topicoModel = require("../models/topicoModel");

function cadastrar(req, res) {

  var tituloTopico = req.body.tituloTopicoServer;
  var descricaoTopico = req.body.descricaoTopicoServer;
  var autorTopico = req.body.autorTopicoServer;

    topicoModel.cadastrar(tituloTopico, descricaoTopico, autorTopico).then((resultado) => {
      res.status(201).json(resultado);
    });

}

function exibir(req, res){

  var idTopico = req.params.idTopico;

  console.log('buscando dados do tópico para exibir');

  topicoModel.exibir(idTopico).then(function (resultado){

    if(resultado.length > 0){

      res.status(200).json(resultado);
      
    } else{

      res.status(204).send('Nenhum resultado encontrado');

    }

  })

}

function receberIds(req, res){

  topicoModel.receberIds().then(function (resultado){

    if(resultado.length > 0){
      res.status(200).json(resultado);
    }

  });

}

module.exports = {
  cadastrar,
  exibir,
  receberIds,
};
