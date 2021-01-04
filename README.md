# Desafio de Fullstack

<img src="./img/logo-clubpetro.png" 
     alt="Clubpetro" width="300">

- [Descrição](#descrição)
  - [O Desafio](#o-desafio)
      - [Backend](#backend)
      - [Frontend](#frontend)
  - [Requisitos Obrigatórios](#requisitos-obrigatórios)
  - [Bônus](#bônus)
- [Submissão e Prazo de Entrega](#submissão-e-prazo-de-entrega)

## Descrição

Este desafio tem como objetivo avaliar as habilidades técnicas do candidato a vaga de desenvolvedor fullstack no Clubpetro.

#### O Desafio

O desafio consiste em desenvolver um sistema que permita o CRUD de lugares para se conhecer ao redor do mundo. Como na imagem a seguir:

<img src="./img/challenge.png" alt="Desafio" >

#### Backend

> Desenvolvimento da API para alimentar o [frontend](#frontend).

Os dados a ser considerados são:

- País: O país escolhido;
- Local: O local dentro do país escolhido;
- Meta: O mês e o ano que o usuário pretende visitar o local;
- Url da bandeira do país;
- Data de criação do registro;
- Data de atualização do registro.

##### Requisitos Obrigatórios

> Requisitos que serão avaliados no desafio.

- A API deverá ser desenvolvida com Node.js e Express;
- Apenas o Local e a Meta poderão ser editados;
- O mesmo local em determinado país não poderá ser adicionado de forma duplicada;
- A listagem dos dados deverá ser ordenada de forma crescente pela meta;
- O candidato deverá adicionar ao projeto uma explicação de como executar a aplicação.

##### Bônus

> Requisitos que não são obrigatórios mas podem te deixar em vantagem com relação aos outros candidatos.

- Utilização do framework [NestJS](https://nestjs.com/);
- Typescript;
- Testes automatizados;
- [TypeORM](https://typeorm.io/#/);
- [Docker](https://www.docker.com/);
- Deploy para [Google Cloud Platform](https://cloud.google.com/) (ao criar conta é possível receber um bonus para teste).

### Frontend

O Sistema deverá conter um formulário com 3 campos:

- País: um select contendo a lista de todos os países existentes;
- Local: um input para que o usuário digite o local que ele deseja conhecer no país selecionado;
- Meta: um input para que o usuário digite a o mês e o ano que ele pretende visitar o local em questão.

Quando o usuário clicar em "Adicionar", o formulário deverá ser resetado e os dados deverão ser submetidos para a API. Em seguida, a listagem dos cards deverá ser atualizada.

##### Requisitos Obrigatórios

> Requisitos que serão avaliados no frontend.

- O Sistema deverá ser desenvolvido em typescript utilizando a biblioteca [React](https://pt-br.reactjs.org/);
- O Layout apresentado na imagem acima deverá ser fielmente seguido e pode ser encontrado no [Figma](https://www.figma.com/file/IC0xt3K3X21rLEfLRQ3mpl/Lugares-que-quero-conhecer?node-id=0%3A1);
- Integração com o [Backend](#backend);
- Apenas o Local e Meta poderão ser editados e a edição do card deverá ser feita de acordo com a criatividade do canditado, não tendo um layout específico para esta ação;
- O Sistema deverá ser desenvolvido utilizando [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html);
- O Sistema deverá ser integrado à API [Rest Countries](https://restcountries.eu/rest/v2/all) para a listagem dos países. Esta conta com a imagem da bandeira e a tradução do nome do país para Português;
- A biblioteca [react-input-mask](https://www.npmjs.com/package/react-input-mask) deverá ser utilizada para colocar uma mascara no input de "Meta" no formato mm/aaaa;
- O Sistema deverá ser responsivo;
- O candidato deverá adicionar ao projeto uma explicação de como executar a aplicação.

##### Bônus

> Requisitos que não são obrigatórios mas podem te deixar em vantagem com relação aos outros candidatos.

- [Material-UI](https://material-ui.com/pt/)
- [Styled Components](https://styled-components.com/)
- Testes automatizados

### Submissão e Prazo de entrega

- O candidato deverá realizar um fork deste repositório e submeter o código no mesmo.
- Em caso do deploy realizado, a url deverá ser adicionada no README;
- O prazo de entrega para este desafio é de 3 (três) semanas, contando a partir do dia em que o canditado recebeu o email com o link do repositório;
- Ao finalizar o desafio, o candidato deverá enviar um email para jobs@clubpetro.com.br contendo o link do seu PR.
