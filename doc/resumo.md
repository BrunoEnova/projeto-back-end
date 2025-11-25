📘 MATERIAL DE ESTUDO — PROJETO BACK-END

Abaixo está um material completo e bem explicado para te ajudar a entender cada parte do projeto e todos os conceitos usados nele.

🔹 1. O que é o Node.js?

Node.js é um ambiente de execução JavaScript fora do navegador.
Ele permite criar servidores, APIs, scripts e outras aplicações backend usando JavaScript.

🔹 2. O que é o package.json?

É o arquivo principal de configuração de qualquer projeto Node.

Ele serve para:

Definir as dependências (como Express, pg, dotenv).

Definir scripts (npm run test, npm run migrate:up, etc).

Guardar informações do projeto.

Controlar ferramentas como Jest e Prettier.

No seu projeto, o package.json também define:

Scripts para subir o Docker.

Scripts para rodar migrações.

Scripts de lint (prettier).

🔹 3. O que são dependências?

Existem 2 tipos:

dependencies

São libs usadas em PRODUÇÃO.
No seu projeto:

express

pg

dotenv

node-pg-migrate

devDependencies

Usadas apenas durante DESENVOLVIMENTO.

No seu projeto:

jest

prettier

@types/jest

🔹 4. O que é um servidor HTTP?

HTTP é o protocolo da web.
O servidor HTTP recebe requisições e devolve respostas.

No seu projeto, o servidor é criado com:

const express = require("express");
const app = express();
app.listen(3000);


Você usa o Express, que simplifica:

criação de rotas

leitura de JSON

controle de erros

🔹 5. O que são variáveis de ambiente?

São valores externos ao código, usados para:

Senha do banco

Usuário

Porta

URL externa

Esses valores ficam em .env, por exemplo:

PGHOST=localhost
PGUSER=postgres
PGPASSWORD=postgres
PGDATABASE=projeto


E são carregados pelo:

require("dotenv").config();

🔹 6. O que é Docker Compose e para que usamos?

É uma ferramenta que permite subir infraestrutura (serviços) usando código YAML.

Seu projeto usa Docker Compose para subir o PostgreSQL:

docker compose up -d

Cria um container:

PostgreSQL

Com porta mapeada

Volume

Configurações

Isso facilita rodar o banco de dados sem instalar nada.

🔹 7. O que são migrações?

Migrações servem para criar, alterar e versionar o banco de dados.

Em vez de editar o banco manualmente, você cria arquivos como:

infra/migrations/1719843270000_create_author_table.js


Cada arquivo descreve:

o que criar

como desfazer

Seu projeto usa node-pg-migrate.

Script para criar migração:

npm run migrate:create migration_name


Para aplicar as migrações:

npm run migrate:up

🔹 8. O que é o PostgreSQL?

É o banco de dados relacional usado no projeto.

Com ele você tem:

tabelas

relacionamentos

constraints

integrações com pg (biblioteca do Node)

O driver usado é:

npm install pg


É ele que conecta o Node ao PostgreSQL.

🔹 9. Arquitetura do projeto

Seu projeto tem uma organização moderna:

src/
  controller/
  service/
infra/
  migrations/

controller/

Recebe as requisições HTTP.
Exemplo:

res.status(200).json({ ... });

service/

Contém a regra de negócio.

repository/ (pode existir dependendo da aula)

Cuida da comunicação com o banco.
Geralmente contém:

db.query("SELECT * FROM author WHERE id = $1", [id]);

infra/migrations/

Arquivos responsáveis por criar tabelas no banco.

🔹 10. O que é Lint e Prettier?
✔ Lint

Ferramenta que analisa o código procurando:

erros

más práticas

estilos inconsistentes

variáveis não usadas

Seu projeto não usa ESLint, mas poderia.

✔ Prettier

Ferramenta que formata o código automaticamente.

Seu projeto usa:

lint:check
prettier --check .

lint:fix
prettier --write .

🔹 11. O que são testes automatizados? (Jest)

São códigos usados para garantir que sua API funciona como deveria.

Seu projeto usa o Jest.

Testes servem para:

validar regras de negócio

evitar regressões

testar rotas

testar serviços

Exemplo simples:

test("soma", () => {
  expect(1 + 1).toBe(2);
});


E você executa:

npm test


Ou modo observação:

npm run test:watch

🔹 12. Fluxo geral da aplicação

O usuário faz uma requisição HTTP (ex: GET /authors).

O Express recebe a requisição e chama o controller.

O controller chama o service.

O service chama o repository.

O repository acessa o banco via pg.

O resultado volta para o controller.

O controller responde para o usuário.