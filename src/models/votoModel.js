var database = require('../database/config');

function enviarVoto(idDisco, idUsuario){

    var instrucaoSql = 
    `
        INSERT INTO voto (fkDisco, fkUsuario) VALUES 
        (${idDisco}, ${idUsuario});
    `;

    return database.executar(instrucaoSql);

}

module.exports = {
    enviarVoto,
};