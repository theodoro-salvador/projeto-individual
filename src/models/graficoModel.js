var database = require('../database/config');

function buscarGraficoAlbuns(){

    var instrucaoSql =
    `
        SELECT
            disco.nome AS nomeDisco,
            COUNT(voto.fkUsuario) AS qtdVotos
        FROM disco
            JOIN voto
                ON voto.fkDisco = disco.idDisco
        GROUP BY nomeDisco
        HAVING qtdVotos > 0
        ORDER BY qtdVotos DESC;
    `;

    return database.executar(instrucaoSql);

}

module.exports = {
    buscarGraficoAlbuns,
};