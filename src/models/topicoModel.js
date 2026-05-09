var database = require("../database/config");

function cadastrar(tituloTopico, descricaoTopico, autorTopico) {
  var instrucaoSql = `INSERT INTO topico (titulo, descricao, fkAutor) VALUES ('${tituloTopico}', '${descricaoTopico}', '${autorTopico}')`;

  return database.executar(instrucaoSql);
}

function exibir(idTopico){

  var instrucaoSql = `

    SELECT
      autor.nome AS autorTopico,
      dtCriacao,
      titulo,
      descricao
    FROM topico
      JOIN usuario AS autor
        ON fkAutor = idUsuario
    WHERE idTopico = ${idTopico}; 

  `;

  return database.executar(instrucaoSql);

}

module.exports = { 
  cadastrar, 
  exibir,
};
