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

function receberIds(idTopico){

    var instrucaoSql = `
        SELECT
            idPostagem,
            fkTopico AS idTopico
        FROM postagem
        WHERE fkTopico = ${idTopico}
        ORDER BY idPostagem ASC;
    `;

    return database.executar(instrucaoSql);

}

function exibir(postagem){

    console.log('Cheguei na função exibir no model');
    console.log(postagem);

    let dadosPostagem = JSON.parse(postagem);

    console.log(dadosPostagem);
    
    let idPostagem = dadosPostagem.idPostagem;
    let idTopico = dadosPostagem.idTopico;

    var instrucaoSql = `
        SELECT
            usuario.nome AS autorPostagem,
            texto,
            YEAR(dtPostagem) AS anoPostagem,
            MONTH(dtPostagem) AS mesPostagem,
            DAY(dtPostagem) AS diaPostagem,
            HOUR(dtPostagem) AS horaPostagem,
            MINUTE(dtPostagem) AS minutoPostagem,
            SECOND(dtPostagem) AS segundoPostagem
        FROM postagem
            JOIN usuario
                ON fkAutor = idUsuario
        WHERE idPostagem = ${idPostagem}
            AND fkTopico = ${idTopico};
    `;

    return database.executar(instrucaoSql);

}

module.exports = {
    cadastrar,
    obterIdPost,
    receberIds,
    exibir,
}