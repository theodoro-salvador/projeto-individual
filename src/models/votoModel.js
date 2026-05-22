var database = require('../database/config');

function enviarVoto(fkVoto, idUsuario){

    var instrucaoSql = 
    `
        INSERT INTO usuario (fkVoto) VALUE (${fkVoto}) WHERE idUsuario = ${idUsuario};
    `;

    return database.executar(instrucaoSql);

}

module.exports = {
    enviarVoto,
};