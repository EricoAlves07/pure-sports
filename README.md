# Digital Store

Aplicação web de e-commerce desenvolvida em React como projeto acadêmico do curso de Front-End da Digital College. O objetivo do projeto é colocar em prática conceitos de componentização, gerenciamento de estado, roteamento entre páginas e estilização de interfaces.

## Autoria

- **Desenvolvedor:** Erico Alves de Lima
- **Curso:** Formação Front-End — Digital College

## Tecnologias utilizadas

Conforme configurado no `package.json`:

- **React 18** (`react`, `react-dom`)
- **Vite** (`vite`, `@vitejs/plugin-react`)
- **React Router DOM v6** (`react-router-dom`)
- **PrimeReact** (`primereact`)
- **PrimeFlex** (`primeflex`)
- **PrimeIcons** (`primeicons`)
- **JavaScript (ES Modules)** e **CSS**

## Funcionalidades principais

A aplicação está organizada em componentes reutilizáveis (como cabeçalho, rodapé, galeria de imagens, cartões de produto e grupos de filtro) e conta com três páginas principais:

- **Home (`/`):** Apresenta o cabeçalho com barra de pesquisa e menu de navegação, carrossel de banners principais, seção de coleções em destaque, vitrine de produtos em alta e rodapé institucional.
- **Listagem de Produtos (`/products`):** Exibe o catálogo de produtos com suporte a pesquisa por termo na URL (`?filter=`), ordenação por menor ou maior preço e filtros laterais por marca, categoria, gênero e estado.
- **Detalhes do Produto (`/product/:id`):** Mostra as informações do produto selecionado, incluindo galeria de imagens, preço original e promocional, descrição, opções de variação (como tamanho e cor, quando aplicáveis) e uma lista de produtos recomendados.

## Como executar o projeto

### Pré-requisitos

- **Node.js** (versão 18 ou superior)

### Passo a passo

1. Clone o repositório e acesse a pasta do projeto:
   ```bash
   git clone https://github.com/EricoAlves07/pure-sports.git
   cd pure-sports
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse a aplicação no navegador no endereço exibido no terminal (por padrão, `http://localhost:5173/`).

### Outros scripts disponíveis

- Gerar a versão de produção:
  ```bash
  npm run build
  ```
- Visualizar localmente a build gerada:
  ```bash
  npm run preview
  ```
