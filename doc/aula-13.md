📝 Material sobre Variáveis de Ambiente em Node.js com .env

1. O que são Variáveis de Ambiente?

As variáveis de ambiente são valores de configuração que podem ser acessados pela aplicação, mas são definidas fora do código-fonte. Elas ajudam a manter informações sensíveis ou variáveis de configuração, como credenciais de banco de dados, URLs de APIs externas, e configurações de ambiente (desenvolvimento, produção, etc.), de forma segura e flexível.

São valores que forneceo para o contexto da execuacao do programa.

Exemplos de variáveis de ambiente:

Chaves de API: API_KEY=abcdef123456

Banco de dados: DB_HOST=localhost

Porta do servidor: PORT=3000

As variáveis de ambiente ajudam a:

Evitar que credenciais ou informações sensíveis fiquem expostas no código.

Facilitar a configuração de diferentes ambientes (desenvolvimento, teste, produção).

Tornar a aplicação mais flexível e fácil de configurar em diferentes máquinas ou servidores.

2. Por que usar variáveis de ambiente no Node.js?

Segurança: Não expõe informações sensíveis como senhas, chaves de API, ou credenciais de banco de dados diretamente no código.

Flexibilidade: Permite que a aplicação seja configurada de maneira diferente em cada ambiente sem precisar alterar o código-fonte.

Configuração Centralizada: As variáveis de ambiente podem ser facilmente modificadas sem necessidade de alterar o código.

3. Como usar variáveis de ambiente no Node.js?

Em Node.js, o acesso a variáveis de ambiente pode ser feito diretamente pelo objeto process.env.

Por exemplo:

console.log(process.env.PORT); // Acessa a variável de ambiente PORT

Porém, em ambientes de desenvolvimento, a configuração dessas variáveis diretamente no sistema pode ser difícil ou impraticável. Por isso, usamos um arquivo chamado .env para definir essas variáveis de maneira simples e organizada.

4. Configurando o .env no Node.js
   Passo 1: Instalar a biblioteca dotenv

Para carregar variáveis de ambiente de um arquivo .env no seu projeto Node.js, usamos a biblioteca dotenv.

Instalação:

Execute o seguinte comando para instalar o dotenv no seu projeto:

npm install dotenv

Passo 2: Criar o arquivo .env

Crie um arquivo chamado .env na raiz do seu projeto. Neste arquivo, você pode definir suas variáveis de ambiente.

Exemplo de conteúdo do .env:

DB_HOST=localhost
DB_PORT=5432
DB_USER=myuser
DB_PASSWORD=mypassword
API_KEY=abcdef123456
PORT=3000

Nota: As variáveis devem ser escritas no formato NOME_VARIAVEL=valor e cada variável deve estar em uma linha separada.

Passo 3: Carregar as variáveis de ambiente com dotenv

No seu arquivo principal (app.js, server.js, etc.), você deve carregar as variáveis de ambiente logo no início, usando o dotenv.

// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

// Agora você pode acessar as variáveis de ambiente
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const apiKey = process.env.API_KEY;
const port = process.env.PORT || 3000;

console.log(`Conectando ao banco de dados em ${dbHost}:${dbPort}...`);
console.log(`API Key: ${apiKey}`);
console.log(`Servidor rodando na porta: ${port}`);

Passo 4: Acessando as variáveis de ambiente

Após carregar as variáveis de ambiente com o dotenv, você pode acessar qualquer variável definida no arquivo .env usando process.env.NOME_VARIAVEL.

Exemplo:

const apiKey = process.env.API_KEY; // Acessando a variável de ambiente API_KEY
console.log(apiKey); // Exibe a chave da API

5. Boas práticas com variáveis de ambiente

Nunca commit o arquivo .env: O arquivo .env pode conter informações sensíveis, como senhas e chaves de API. Para evitar que ele seja compartilhado no repositório Git, adicione-o ao arquivo .gitignore.

Adicione .env ao .gitignore:

# .gitignore

.env

Use variáveis de ambiente apenas para configuração: Armazene apenas configurações que podem mudar de ambiente para ambiente, como credenciais, portas, e chaves de API. Evite armazenar informações críticas de lógica de negócio no .env.

Documente suas variáveis de ambiente: Mantenha uma documentação sobre o que cada variável de ambiente significa e quais valores são esperados. Isso facilita a configuração e uso do projeto por outras pessoas.

Variaveis de ambioente no docker-compose.yaml

```yaml
version: "3"

services:
  web:
    image: my-web-app
    ports:
      - "${PORT}:${PORT}" # Usa a variável PORT do arquivo .env
    environment:
      - DB_HOST=${DB_HOST} # Usa a variável DB_HOST do arquivo .env
      - DB_PORT=${DB_PORT} # Usa a variável DB_PORT do arquivo .env
      - DB_USER=${DB_USER} # Usa a variável DB_USER do arquivo .env
      - DB_PASSWORD=${DB_PASSWORD} # Usa a variável DB_PASSWORD do arquivo .env
    volumes:
      - ./app:/app

  db:
    image: postgres:latest
    environment:
      - POSTGRES_USER=${DB_USER} # Passando a variável DB_USER para o container do banco
      - POSTGRES_PASSWORD=${DB_PASSWORD} # Passando a variável DB_PASSWORD para o container do banco
      - POSTGRES_DB=mydb
    ports:
      - "${DB_PORT}:${DB_PORT}"
```
