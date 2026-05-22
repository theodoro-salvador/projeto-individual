var votoModel = require('../models/votoModel');

function enviarVoto(req, res){

    var fkVoto = req.body.fkVotoServer;
    var idUsuario = req.body.idUsuarioServer;

    votoModel.enviarVoto(fkVoto, idUsuario)
    .then(function (resposta){

        res.json(resposta);
        console.log(resposta);

    })

}

module.exports = {
    enviarVoto,
};