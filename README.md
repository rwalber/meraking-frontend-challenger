# User CRUD

<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#construção">Construção</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando-o-projeto">Getting Started</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalção">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>

## Sobre o Projeto

* Este projeto faz parte do desafio técnico proposto pela Meraking;
* Projeto desenvolvido por Walber Rocha;

[![Product Name Screen Shot][product-screenshot]](https://marvel-wiki-ivory.vercel.app/)

### Construção

O projeto foi desenvolvido com o uso do framework Angular, versão 12. As bibliotecas de interface escolhida foi a AntDesign em conjunto com o SCSS.

* Angular 12;
* Ant Design;

## Iniciando o projeto

### Pré-requisitos

* npm
  ```sh
  npm install npm@latest -g
  ```

* Angular
  ```sh
  npm install angular@cli -g
  ```

### Instalação

1. Clone do repositório
   ```sh
   git clone https://github.com/rwalber/meraking-frontend-challenger
   ```
3. Instalar pacotes NPM
   ```sh
   npm install
   ```
4. Rodar o projeto
   ```js
   ng s
   ```
## Uso

* O botão “Add New User” abre modal contendo os campos a serem inseridos para cadastro;
* O botão "Get Random Users" busca dados da API [Random User](https://randomuser.me/) para preencher a tela como exemplo de requisições e consumo de API;
* A ferramenta “Show 5 entries” altera a quantidade de elementos exibidos em tela;
* Ao digitar no campo “Search” e clicar em [Enter], é filtrado os dados da tabela por “Username”;
* Ao clicar nas coluna, deve ordenar pela coluna clicada;
* Ao clicar na action “Visualizar”, é exibir o modal com as informações do registro e com os campos desabilitados;
* Ao clicar em na action “Editar”, é exibido o modal com as informações do registro e com os campos habilitados;
* Ao clicar em na action “Apagar”, o registro selecionado é removido;


## Contato

Walber Rocha - walber_jesus@hotmail.com

Project Link: [https://github.com/rwalber/marvel-wiki](https://github.com/rwalber/marvel-wiki)

[![LinkedIn][linkedin-shield]][linkedin-url]

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/rwalber/
[product-screenshot]: src/assets/home.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/