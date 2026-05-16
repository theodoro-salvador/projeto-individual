var database = require("../database/config");

function cadastrar(tituloTopico, descricaoTopico, autorTopico) {
  var instrucaoSql = `INSERT INTO topico (titulo, descricao, fkAutor) VALUES ('${tituloTopico}', '${descricaoTopico}', '${autorTopico}')`;

  return database.executar(instrucaoSql);
}

function exibir(idTopico){

  var instrucaoSql = `

    SELECT
      usuario.nome AS autor,
      YEAR(dtCriacao) AS ano,
      MONTH(dtCriacao) AS mes,
      DAY(dtCriacao) AS dia,
      titulo,
      descricao,
      usuario2.nome AS autorPostagem,
      YEAR(dtPostagem) AS anoPostagem,
      MONTH(dtPostagem) AS mesPostagem,
      DAY(dtPostagem) AS diaPostagem,
      dtPostagem,
      (
        SELECT 
          COUNT(idPostagem)
        FROM postagem
        WHERE fkTopico = ${idTopico}
      ) AS qtdPostagens
    FROM topico
      JOIN usuario
        ON topico.fkAutor = usuario.idUsuario
      LEFT JOIN postagem
        ON fkTopico = idTopico
      LEFT JOIN usuario AS usuario2
        ON postagem.fkAutor = usuario2.idUsuario
    WHERE idTopico = ${idTopico}
    ORDER BY dtPostagem DESC
    LIMIT 1; 

  `;

  return database.executar(instrucaoSql);

}

function receberIds(){

  var instrucaoSql = `

    SELECT
      idTopico
    FROM topico
    ORDER BY idTopico ASC;

  `;

  return database.executar(instrucaoSql);

}

module.exports = { 
  cadastrar, 
  exibir,
  receberIds,
};
