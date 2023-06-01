# Projeto de Mentoria - README

![front deployado](https://github.com/Joffre-Quintas/ProjMentoriaGB_Frontend/assets/117463401/a02e79b0-00b9-483b-9a03-0b2083c89058)


Este é o repositório do projeto de mentoria desenvolvido como parte do Programa Boticário. O projeto consiste em uma aplicação fullstack com o objetivo de praticar o desenvolvimento do CRUD, trabalhar com datas, manipular endpoints e rotas.

## Instalação

Para executar o projeto localmente, siga as etapas abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório usando o seguinte comando:

   ```
   git clone https://github.com/Joffre-Quintas/ProjMentoriaGB_Frontend
   ```

3. Acesse o diretório do projeto:

   ```
   cd proj-mentoria-gb
   ```

4. Instale as dependências do projeto executando o comando:

   ```
   npm install
   ```

## Configuração

Antes de iniciar o projeto, é necessário realizar algumas configurações. Certifique-se de ter as seguintes variáveis de ambiente configuradas:

- `MONGODB_URI`: URL de conexão com o banco de dados MongoDB.
- `PORT`: Porta em que o servidor backend será executado (opcional, padrão é 3000).

## Execução

Após a instalação e configuração, você pode iniciar o projeto executando os seguintes comandos:

```
npm run dev
```

Este comando iniciará o servidor backend e o servidor de desenvolvimento do frontend. O servidor backend será executado na porta especificada ou na porta 3000 por padrão. O servidor de desenvolvimento do frontend será executado em http://localhost:3000.

## Deploy

O backend do projeto está implantado na plataforma Render.

O frontend do projeto está implantado na plataforma Vercel. Você pode acessá-lo no seguinte URL: [Vercel Deploy](https://proj-mentoria-gb-frontend-eb8o-rf2lzp5qy-joffre-quintas.vercel.app).

## Tecnologias Utilizadas

A aplicação faz uso das seguintes tecnologias e bibliotecas:

- Frontend:
  - React
  - TypeScript
  - Vite (Bundler)

- Backend:
  - Node.js
  - Express (Framework)
  - Mongoose (ODM para MongoDB)

## Observações

Este projeto foi desenvolvido como parte do desafio proposto pelos mentores do Programa Boticário. Durante o desafio, foi utilizado um arquivo JSON para simular o banco de dados. No entanto, como um desafio pessoal, optei por utilizar um banco de dados real, o MongoDB, devido à minha experiência anterior com o banco no Programa.

Para cumprir o objetivo do desafio, a aplicação realiza requisições HTTP para todas as rotas, em vez de utilizar o contexto para persistência de dados entre as rotas.

Este é o meu primeiro projeto fullstack completo e, apesar de suas limitações, foi uma oportunidade de aprender e praticar várias tecnologias e conceitos.
