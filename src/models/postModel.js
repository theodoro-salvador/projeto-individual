var database = require("../database/config");

function cadastrar(textoPost, idUsuario, idTopico, idPostagem){
    var instrucaoSql = `
    INSERT INTO postagem (idPostagem, fkTopico, texto, fkAutor) 
    VALUES (${idPostagem}, ${idTopico}, '${textoPost}', ${idUsuario});
    `;

    return database.executar(instrucaoSql);
}

function obterIdPost(idTopico){

    var instrucaoSql = `
        SELECT
            idPostagem, 0,
            fkTopico, 0
        FROM postagem
        WHERE fkTopico = ${idTopico}
        ORDER BY idPostagem DESC
        LIMIT 1;
    `;

    return database.executar(instrucaoSql);

}

module.exports = {
    cadastrar,
    obterIdPost,
}