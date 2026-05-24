var graficoModel = require('../models/graficoModel');

function buscarGraficoAlbuns(req, res){

    graficoModel.buscarGraficoAlbuns()
    .then(function(resposta){

        if(resposta.length > 0){
            res.status(200).json(resposta);
        } else{
            res.status(204).send('Nenhum resultado');
        }
        
    });

}

function buscarGraficoDecadas(req, res){

    graficoModel.buscarGraficoDecadas()
    .then(function(resposta){

        if(resposta.length == 1){
            res.status(200).json(resposta);
        } else{
            res.status(204).send('Nenhum resultado');
        }

    });

}

function buscarKpiDiscoPreferido(req, res){

    graficoModel.buscarKpiDiscoPreferido()
    .then(function(resposta){

        if(resposta.length == 1){
            res.status(200).json(resposta);
        } else{
            res.status(204).send('Nenhum resultado');
        }

    })

}

module.exports = {
    buscarGraficoAlbuns,
    buscarGraficoDecadas,
    buscarKpiDiscoPreferido,
};