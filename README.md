# Desafio de Fullstack

<img src="./.github/assets/logo-clubpetro.png"
     alt="Clubpetro" width="300">

## **Dependências**

Você precisa do [Node.JS](https://nodejs.org/en/download/) e o [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) instalado na sua máquina para executar o projeto.

## **Server**

Primeiro, altere o arquivo `.env.example` para `.env`:

```bash
$ mv .env.example .env
```

Adicione as informações nas variáveis de ambiente do seu arquivo `.env`:

```bash
# Exemplo:
SERVER_PORT=3333
```


Iniciando o servidor:

```bash
$ yarn dev
```

Executando os testes:

```bash
$ yarn test
```

## **Client**

Iniciando o front-end:

```bash
$ yarn start
```

Executando os testes:

```bash
$ yarn test
```
