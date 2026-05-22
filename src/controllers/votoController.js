var votoModel = require('../models/votoModel');

function enviarVoto(req, res){

    var idDisco = req.body.idDiscoServer;
    var idUsuario = req.body.idUsuarioServer;

    votoModel.enviarVoto(idDisco, idUsuario)
    .then(function (resposta){

        res.json(resposta);
        console.log(resposta);

    })

}

module.exports = {
    enviarVoto,
};