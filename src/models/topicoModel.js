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
      descricao
    FROM topico
      JOIN usuario
        ON fkAutor = idUsuario
    WHERE idTopico = ${idTopico}; 

  `;

  return database.executar(instrucaoSql);

}

function receberIds(){

  var instrucaoSql = `

    SELECT
      idTopico
    FROM topico;

  `;

  return database.executar(instrucaoSql);

}

module.exports = { 
  cadastrar, 
  exibir,
  receberIds,
};
