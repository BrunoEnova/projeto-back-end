# 🐳 Introdução ao Docker e Docker Compose (Básico)

Este guia é para quem **nunca usou Docker** e quer entender o básico com exemplos simples.

---

## 🚀 O que é o Docker?

Imagine que você tem um projeto que funciona no seu computador, mas não funciona no computador de outra pessoa. Por quê? Porque o **ambiente** (versões, configurações, dependências) é diferente.

> **Docker resolve esse problema.**

**Docker** é uma ferramenta que **empacota seu projeto com tudo que ele precisa para rodar** (código, dependências, configurações). Isso é chamado de **container**.

---

## 📦 O que é um Container?

Um **container** é como uma **caixinha isolada** com:

- Seu código
- Dependências (Node, PostgreSQL, etc.)
- Configurações
- Sistema operacional mínimo

Você **cria o container uma vez** e pode rodar **em qualquer lugar**: Windows, Linux, Mac, servidor, nuvem, etc.

---

## 🏗️ O que é uma Imagem?

Uma **imagem Docker** é como uma **receita de bolo** que descreve como o container será montado.

Ela é criada a partir de um arquivo chamado `Dockerfile`.

---

## 🧪 Exemplo: Dockerizando um projeto Node.js

### Estrutura do projeto

### Exemplo de `Dockerfile`

```dockerfile
# Usa a imagem oficial do Node.js
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto para o container
COPY . .

# Instala as dependências
RUN npm install

# Comando para iniciar a aplicação
CMD ["node", "index.js"]
```

Comandos para usar:

```cmd
# Cria a imagem a partir do Dockerfile
docker build -t meu-app .

# Roda o container
docker run meu-app
```

📂 O que é Docker Compose?

Quando seu projeto precisa de vários containers (por exemplo, app + banco de dados), usar comandos individuais fica complicado.

Docker Compose permite orquestrar múltiplos containers com um único comando usando um arquivo docker-compose.yml.

Exemplo de docker-compose.yml

```yaml
version: '3.8'

services:
  backend:
    build: .
    ports: - "3000:3000"

  db:
    image: postgres
    environment:
    POSTGRES_USER: user
    POSTGRES_PASSWORD: password
    POSTGRES_DB: meu_banco
    ports: - "5432:5432"

```

Comandos para usar:

```cmd
# Sobe todos os serviços (containers)
docker-compose up

# Para todos os serviços
docker-compose down
```

## ✅ Resumo rápido

| Conceito              | Explicação                                                 |
| --------------------- | ---------------------------------------------------------- |
| **Docker**            | Ferramenta para criar containers isolados                  |
| **Container**         | Ambiente isolado onde seu app roda com tudo configurado    |
| **Imagem**            | Receita que define o que vai dentro do container           |
| **Dockerfile**        | Arquivo que descreve como criar a imagem                   |
| **Docker Compose**    | Ferramenta para rodar múltiplos containers ao mesmo tempo  |
| `docker build`        | Cria uma imagem a partir do Dockerfile                     |
| `docker run`          | Roda um container da imagem criada                         |
| `docker-compose up`   | Sobe todos os containers definidos no `docker-compose.yml` |
| `docker-compose down` | Para e remove os containers criados pelo Compose           |
