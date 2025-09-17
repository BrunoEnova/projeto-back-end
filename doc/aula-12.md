# Conetar ao banco de dados

# Conexão com PostgreSQL no Node.js

## 1. Introdução ao PostgreSQL no Node.js

O **PostgreSQL** é um sistema de gerenciamento de banco de dados relacional (SGBD) altamente utilizado e conhecido por sua robustez e flexibilidade. Para interagir com o PostgreSQL no **Node.js**, utilizamos a biblioteca `pg`, que é um cliente para conectar, executar comandos SQL e manipular os dados.

---

## 2. Instalação da Biblioteca

Primeiro, instale a biblioteca `pg`:

```bash
npm install pg
```

Essa biblioteca fornece as funcionalidades necessárias para conectar e interagir com o banco de dados PostgreSQL.

3. Configuração Inicial de Conexão

Antes de começar a fazer consultas no banco de dados, é necessário configurar a conexão ao PostgreSQL.

a. Arquivo de Conexão (database.js)

Crie um arquivo db.js no seu projeto para configurar a conexão e a consulta SQL.

```js
const { Client } = require("pg");

async function query(sql, args = []) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "",
    database: "",
    password: "",
  });
  await client.connect();

  const res = await client.query(sql, args);

  await client.end();
  return res.rows;
}
```

Criar scripts no package json

```json
"scripst":{
  "services:up": "docker compose up -d",
  "services:stop": "docker compose stop",
  "services:down": "docker compose down",
}
```
