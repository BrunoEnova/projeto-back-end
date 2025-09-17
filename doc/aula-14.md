O que são Migrations?

Migrations (ou migrações) são um conjunto de ferramentas e processos usados para gerenciar alterações no banco de dados de forma controlada e consistente. Basicamente, é como um controle de versão para o banco de dados, da mesma forma que você tem o Git para o código.

Imagina que você tem um banco de dados, e de repente você precisa adicionar uma nova tabela ou alterar o formato de uma existente. As migrations permitem que você faça essas mudanças sem perder dados e de forma segura, sempre podendo voltar atrás se algo der errado.

Por que usar Migrations?

Facilidade no Controle de Versão: Você pode ver como o banco de dados evoluiu ao longo do tempo, com cada alteração sendo registrada.

Sincronização entre Equipes: Quando mais de uma pessoa trabalha no mesmo projeto, as migrations ajudam todos a terem o banco de dados atualizado de forma consistente.

Segurança: Migrations garantem que você possa reverter as mudanças no banco de dados, caso algo dê errado.

Como funcionam as Migrations?

Vamos entender isso de uma maneira simples:

Criando a Migration:
Quando você precisa fazer uma alteração no banco de dados (como adicionar uma nova tabela), você cria uma migration. Isso é feito geralmente por uma ferramenta ou biblioteca específica (como Sequelize, TypeORM, Django ORM, etc.). A migration vai ser um arquivo que descreve a alteração no banco de dados.

Aplicando a Migration:
Quando a migration está pronta, você aplica a alteração no banco de dados com um comando simples. Isso vai alterar a estrutura do banco, como adicionar uma tabela ou modificar uma coluna.

Revertendo a Migration:
Se algo der errado ou você quiser desfazer uma mudança, você pode reverter a migration, o que vai desfazer as alterações feitas no banco de dados, voltando à versão anterior.

Instalando a lib

```bash
npm install node-pg-migrate
```

Criar scripts no package json

```json
"scripst":{
 "migrations:create": "node-pg-migrate -m infra/migrations create",
    "migrations:up": "node-pg-migrate -m infra/migrations --envPath .env up",

}
```
