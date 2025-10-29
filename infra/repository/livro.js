const { query } = require("../database");

function consultarTodos()  {
  const sql = `SELECT * FROM livro`;

  const resultados = await query(sql)

  return resultados;

}
