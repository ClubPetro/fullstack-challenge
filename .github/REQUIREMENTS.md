<kbd>[⬅️ README](../README.md)</kbd>

<div align='center'>

# **Documento de Requisitos**

</div>

| Tipo do Requisito  | Descrição  |
|---|---|
| **Requisitos do Desafio**  | Os requisitos que estão em negrito, foram propostos pelo desafio e contém a informação (Obrigatório ou Bônus) no final  |
| *Requisitos Extras*  | Os requisitos que estão em *itálico*, são requisitos que eu adicionei no projeto  |

<br>

# **Backend**

### **Requisitos Funcionais**

  - [ ] **Formato Dos Dados (Obrigatório)**:
    - **País: O país escolhido (Obrigatório)**
    - **Local: O local dentro do país escolhido (Obrigatório)**
    - **Meta: O mês e o ano que o usuário pretende visitar o local (Obrigatório)**
    - **Url da bandeira do país (Obrigatório)**
    - **Data de criação do registro (Obrigatório)**
    - **Data de atualização do registro (Obrigatório)**

### **Requisitos Não Funcionais**

  - [ ] **Desenvolver uma API utilizando Node.js e Express (Obrigatório)**
  - [ ] **O candidato deverá adicionar ao projeto uma explicação de como executar a aplicação (Obrigatório)**
  - [ ] **Utilização do framework [NestJS](https://nestjs.com/) (Bônus)**
  - [ ] **Typescript (Bônus)**
  - [ ] **Testes automatizados (Bônus)**
  - [ ] **[TypeORM](https://typeorm.io/#/) (Bônus)**
  - [ ] **[Docker](https://www.docker.com/) (Bônus)**
  - [ ] **Deploy para [Google Cloud Platform](https://cloud.google.com/) (ao criar conta é possível receber um bonus para teste) (Bônus)**

### **Regras de Negócio**

  - [ ] **Apenas o Local e a Meta poderão ser editados (Obrigatório)**
  - [ ] **O mesmo local em determinado país não poderá ser adicionado de forma duplicada (Obrigatório)**
  - [ ] **A listagem dos dados deverá ser ordenada de forma crescente pela meta (Obrigatório)**

# **Frontend**

### **Requisitos Funcionais**

 - [ ] **O Sistema deverá conter um formulário com 3 campos (Obrigatório)**:
    - **País: um select contendo a lista de todos os países existentes (Obrigatório)**
    - **Local: um input para que o usuário digite o local que ele deseja conhecer no país selecionado (Obrigatório)**
    - **Meta: um input para que o usuário digite a o mês e o ano que ele pretende visitar o local em questão (Obrigatório)**


### **Requisitos Não Funcionais**

  - [ ] **Quando o usuário clicar em "Adicionar", o formulário deverá ser resetado e os dados deverão ser submetidos para a API. Em seguida, a listagem dos cards deverá ser atualizada (Obrigatório)**
  - [ ] **O Sistema deverá ser desenvolvido em typescript utilizando a biblioteca [React](https://pt-br.reactjs.org/) (Obrigatório)**
  - [ ] **O Layout deverá ser fielmente seguido e pode ser encontrado no [Figma](https://www.figma.com/file/IC0xt3K3X21rLEfLRQ3mpl/Lugares-que-quero-conhecer?node-id=0%3A1) (Obrigatório)**
  - [ ] **Integração com o [Backend](#backend) (Obrigatório)**
  - [ ] **O Sistema deverá ser desenvolvido utilizando [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html) (Obrigatório)**
  - [ ] **O Sistema deverá ser integrado à API [Rest Countries](https://restcountries.eu/rest/v2/all) para a listagem dos países. Esta conta com a imagem da bandeira e a tradução do nome do país para Português (Obrigatório)**
  - [ ] **A biblioteca [react-input-mask](https://www.npmjs.com/package/react-input-mask) deverá ser utilizada para colocar uma mascara no input de "Meta" no formato mm/aaaa (Obrigatório)**
  - [ ] **O Sistema deverá ser responsivo (Obrigatório)**
  - [ ] **O candidato deverá adicionar ao projeto uma explicação de como executar a aplicação (Obrigatório)**
  - [ ] **[Material-UI](https://material-ui.com/pt/) (Bônus)**
  - [ ] **[Styled Components](https://styled-components.com/) (Bônus)**
  - [ ] **Testes automatizados (Bônus)**

### **Regras de Negócio**

  - [ ] **Apenas o Local e Meta poderão ser editados e a edição do card deverá ser feita de acordo com a criatividade do canditado, não tendo um layout específico para esta ação (Obrigatório)**
