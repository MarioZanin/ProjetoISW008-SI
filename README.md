# ProjetoISW008-SI

## Projeto de API para demonstrar a amnipulação de uma cadastro de usuários (Aleatório)
Programa destinado a matérial desenvolvido junto ao Curso de Sistema para Internet (SI) do 3º Ciclo da Faculdade Rubens Lara (FATEC) Baixada Santista, no primeiro semestre de 2024.
O Objetivo do projeto é:
usar o FETCH e o estilo monádico, para realizar um CRUD através de uma página HTMLcom relacionamento direto com uma API.

## CRIAÇÃO DO PROJETO

### Passo 1: Crie uma Conta no Render.com

1. Acessando o Render.com: Vá para [Render.com](https://render.com/) e clique em "Sign Up" para criar uma nova conta ou "Log In" se já tiver uma conta.

2. Conectando com o GitHub: Durante o processo de inscrição ou login, você será solicitado a conectar sua conta do GitHub. Isso é necessário para que o Render possa acessar seu repositório e fazer o deploy do projeto.

### Passo 2: Preparndo o Projeto no GitHub

1. Se você não tiver um um repositório criado, deve criar o mesmo no GitHub da seguinte forma:
   - Vá para [GitHub](https://github.com/) e crie um novo repositório.
   - Dê um nome ao repositório e, opcionalmente, adicione uma descrição.

2. Faça o Push do Projeto para o GitHub:
   No terminal do seu projeto, inicie um repositório git, adicione todos os arquivos e faça o push para o GitHub usando o seguinte código:
   
   bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   

### Passo 3: Configurar o Deploy no Render.com

1.Criando um Novo Serviço no Render:
   - Após fazer login no Render, clique em "New" e depois em "Web Service".

2. Conectando o Repositório GitHub:
   - Escolha "Connect account" para conectar sua conta do GitHub (se ainda não estiver conectada).
   - Autorize o Render a acessar seus repositórios GitHub.

3. Selecione o Repositório:
   - Selecione o repositório onde você fez o push do projeto.
   
4. Configurando o Serviço:
   - Name: Dê um nome ao seu serviço (ex: `weather-crud-project`).
   - Region: Escolha a região que melhor se adequa a você.
   - Branch: Escolha a branch `main` (ou outra se estiver usando uma branch diferente).
   - Build Command: Neste projeto não é necessário, pois estaremos utilizando um servidor Node.js simples.
   - Start Command: `npm start`

5. Environment:
   - Para este projeto, não há necessidade de variáveis de ambiente específicas. 

### Passo 4: Deploy do Projeto

1. Clique em "Create Web Service":
   - O Render começará a configurar e fazer o deploy do seu serviço. Você verá os logs em tempo real do processo de build e deploy.
   
2. Acesse a URL do Serviço:
   - Após o deploy ser concluído, você receberá uma URL onde o seu serviço estará rodando. Clique na URL para acessar seu projeto.

### Passo 5: Verifique o Funcionamento

1.Testando:
   - Acesse a URL fornecida pelo Render.com e verifique se o CRUD está funcionando conforme esperado. Adicione, edite e exclua usuários para garantir que tudo esteja funcionando corretamente.

## Execução deste Projeto

1)	Copie a seguinte URL (Render):   https://projetoisw008-si.onrender.com
2)	Abra o navegador de sua preferência  (Edge, Chrome, FireFox e etc...);
3)	Cole diretamente no barra de endereço;
4)	Basta somente executar (enter) e o projeto será iniciado;
5)	Você poderá interagir com o projeto incluindo novo usuário, atualizando email do usuários ou excluindo usuários 

## Explicação sobre o CRUD realizado neste projeto utilizando o JavaScript, uma Fetch API e o Estilo Monádico

**CRUD** (Create, Read, Update, Delete) é um conjunto de operações essenciais para manipulação de dados em uma aplicação, sendo que estas, no presente projeto, realizadas com JavaScript usando a Fetch API e o estilo monádico:

#### 1. **Create (Criar)**
Nesta operação, novos dados são enviados para o servidor para criar um novo recurso. Utiliza-se o método `POST` da Fetch API para enviar os dados no corpo da requisição em formato JSON. Após a criação, os dados retornados pelo servidor podem ser adicionados ao estado da aplicação.

#### 2. **Read (Ler)**
Esta operação recupera dados do servidor para leitura. Utiliza-se o método `GET` da Fetch API para buscar os dados e atualizá-los na aplicação. É uma operação importante para inicializar e atualizar a interface do usuário com dados atuais do servidor.

#### 3. **Update (Atualizar)**
Nesta operação, os dados de um recurso existente são modificados. Utiliza-se o método `PUT` ou `PATCH` da Fetch API para enviar as atualizações ao servidor. O identificador do recurso é necessário para especificar qual recurso deve ser atualizado. Após a atualização, o estado da aplicação é atualizado para refletir as mudanças.

#### 4. **Delete (Excluir)**
Esta operação remove um recurso existente. Utiliza-se o método `DELETE` da Fetch API para enviar a requisição de remoção ao servidor. Novamente, o identificador do recurso é necessário para especificar qual recurso deve ser excluído. Após a exclusão, o estado da aplicação é atualizado para remover o recurso.

### Estilo Monádico com Fetch API

O estilo monádico em JavaScript é implementado através do encadeamento de Promises, uma abordagem que permite a execução sequencial de operações assíncronas. Utilizando `then` para encadear operações, cada chamada de `then` recebe o resultado da operação anterior, facilitando a manipulação de resultados e o tratamento de erros com `catch`.

- **Fetch API**: A Fetch API retorna Promises, permitindo o uso do estilo monádico. A sequência de operações `fetch().then().then().catch()` torna o código mais legível e gerenciável.

### Resumo

- **Create**: Adicionar novos recursos (`POST`).
- **Read**: Recuperar e exibir dados (`GET`).
- **Update**: Modificar recursos existentes (`PUT`/`PATCH`).
- **Delete**: Remover recursos (`DELETE`).

Utilizando a Fetch API e o estilo monádico, essas operações são realizadas de forma assíncrona e encadeada, proporcionando uma maneira eficiente e clara de gerenciar operações CRUD em JavaScript.

