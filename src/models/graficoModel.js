var database = require('../database/config');

function buscarGraficoAlbuns(){

    var instrucaoSql =
    `
        SELECT
            disco.idDisco,
            disco.nome AS nomeDisco,
            COUNT(voto.fkUsuario) AS qtdVotos
        FROM disco
            JOIN voto
                ON voto.fkDisco = disco.idDisco
        GROUP BY nomeDisco, idDisco
        HAVING qtdVotos > 0
        ORDER BY disco.idDisco;
    `;

    return database.executar(instrucaoSql);

}

function buscarGraficoDecadas(){

    var instrucaoSql =
    `
        SELECT
            (SELECT
                COUNT(*)
            FROM voto
            WHERE fkDisco IN (1, 2, 3, 4, 5)) AS decada70,
            (SELECT
                COUNT(*)
            FROM voto
            WHERE fkDisco IN (6, 7, 8, 9, 10, 11)) AS decada80,
            (SELECT
                COUNT(*)
            FROM voto
            WHERE fkDisco IN (12, 13)) AS decada90,
            (SELECT
                COUNT(*)
            FROM voto
            WHERE fkDisco IN (14, 15, 16)) AS decada00,
            (SELECT
                COUNT(*)
            FROM voto
            WHERE fkDisco IN (17, 18)) AS decada10,
            (SELECT
                COUNT(*)
            FROM voto
            WHERE fkDisco IN (19)) AS decada20
        FROM voto
        LIMIT 1;
    `;

    return database.executar(instrucaoSql);

}

function buscarKpiDiscoPreferido(){

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
        ORDER BY qtdVotos DESC
        LIMIT 1;
    `;

    return database.executar(instrucaoSql);

}

function buscarKpiDecadaPreferida(){

    var instrucaoSql = 
    `
        SELECT
            disco.nome AS nomeDisco,
            (
                FLOOR(YEAR(disco.dtLancamento) * 0.1) * 10
            ) AS decadaDisco,
            COUNT(voto.fkUsuario) AS qtdVotos
        FROM disco
            JOIN voto
                ON voto.fkDisco = disco.idDisco
        GROUP BY nomeDisco, decadaDisco
        ORDER BY qtdVotos DESC
        LIMIT 1;
    `;

    return database.executar(instrucaoSql);

}

module.exports = {
    buscarGraficoAlbuns,
    buscarGraficoDecadas,
    buscarKpiDiscoPreferido,
    buscarKpiDecadaPreferida,
};