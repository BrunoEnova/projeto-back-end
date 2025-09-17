# 📚 O que é um Banco de Dados?

Um **banco de dados** (ou **database**) é um **conjunto organizado de informações** que são armazenadas de forma que possam ser **acessadas, gerenciadas e atualizadas facilmente**.

Ele serve para **guardar dados de forma estruturada** — como nomes de usuários, senhas, produtos, pedidos, etc. — para serem usados por sites, apps, sistemas, etc.

---

## 💡 Exemplo simples do dia a dia

Pense em uma **planilha do Excel** com várias abas:

- Aba "Clientes" → nome, e-mail, telefone
- Aba "Produtos" → nome do produto, preço, estoque
- Aba "Pedidos" → quem comprou, o quê, quando

Essas abas funcionam como **tabelas de um banco de dados**. Cada linha é um **registro**, e cada coluna é um **campo (atributo)**.

---

## 🏗️ Estrutura básica de um banco de dados relacional

Um **banco de dados relacional** (o mais comum) é composto por:

- **Tabelas** – Conjuntos de dados organizados em linhas e colunas
- **Linhas (registros)** – Cada linha representa uma entrada única
- **Colunas (campos)** – Cada coluna representa um tipo de dado (ex: nome, idade)

### 📊 Exemplo de tabela: `clientes`

| id  | nome          | email          | telefone        |
| --- | ------------- | -------------- | --------------- |
| 1   | João da Silva | joao@email.com | (11) 99999-9999 |
| 2   | Ana Costa     | ana@email.com  | (21) 88888-8888 |

---

## 🧠 Tipos de banco de dados

### 1. Relacional (SQL)

- Usa **tabelas**
- Usa a linguagem **SQL** (Structured Query Language)
- Exemplos:
  - MySQL
  - PostgreSQL
  - Oracle
  - SQL Server
  - SQLite

### 2. Não Relacional (NoSQL)

- Mais flexível, sem necessidade de tabelas
- Usa formatos como **JSON**, documentos ou chave-valor
- Exemplos:
  - MongoDB
  - Redis
  - Firebase
  - Cassandra

---

## 🛠️ O que dá para fazer com um banco de dados?

- **Salvar dados** (cadastro de usuários, produtos, etc.)
- **Buscar dados** (login, filtros, pesquisas)
- **Atualizar dados** (editar perfil, mudar senha)
- **Deletar dados** (excluir conta, apagar pedido)

Essas ações são chamadas de **CRUD**:

| Ação  | Significado        |
| ----- | ------------------ |
| **C** | Create (Criar)     |
| **R** | Read (Ler)         |
| **U** | Update (Atualizar) |
| **D** | Delete (Deletar)   |

---

## 🖥️ Banco de dados e sistemas

Um banco de dados geralmente é acessado por:

- **Sites** (ex: e-commerce buscando produtos)
- **Aplicativos** (ex: redes sociais buscando postagens)
- **APIs** (intermediários que conectam o sistema ao banco de dados)

---

## 🔐 Segurança e integridade

Um bom banco de dados também:

- Controla quem pode acessar ou alterar dados
- Garante que os dados sejam consistentes e corretos
- Faz backups para evitar perda de informações

---

## ✅ Resumo

| Conceito       | Explicação                                        |
| -------------- | ------------------------------------------------- |
| Banco de dados | Local onde dados são armazenados e organizados    |
| Tabela         | Conjunto de dados (como uma planilha)             |
| Registro       | Uma linha da tabela (ex: um cliente)              |
| Campo          | Uma coluna da tabela (ex: nome, email)            |
| SQL            | Linguagem para manipular bancos de dados          |
| CRUD           | Operações básicas: Criar, Ler, Atualizar, Deletar |
