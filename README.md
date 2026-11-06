# Pure Sports — Digital Store (Projeto Final Front-End)

Aplicação web de e-commerce desenvolvida em **React** como Projeto Final de Front-End da **Digital College**, implementando integralmente a especificação da **Digital Store** com a identidade visual **Pure Sports — Strength · Discipline · Performance** voltada para artigos esportivos e equipamentos fitness.

---

## Autoria / Equipe

- **Desenvolvedor:** **ERICO ALVES DE LIMA**
- **Curso / Turma:** Formação Front-End — Digital College

---

## Diferenciais Implementados

1. **Conformidade 100% com a Documentação Oficial**:
   - Todos os componentes exigidos (`Layout`, `Header`, `Footer`, `Logo`, `Information`, `Section`, `ProductCard`, `ProductListing`, `Gallery`, `FilterGroup`, `ProductOptions`, `BuyBox`, `ProductDetails`) implementados com as propriedades, dimensões e comportamentos especificados.
2. **Funcionalidades Lógicas Reais (Além do Requisito Visual)**:
   - **Busca funcional no Cabeçalho**: Filtra produtos via query string (`/products?filter=...`) ao pressionar `Enter` ou clicar no ícone de lupa.
   - **Ordenação dinâmica**: Ordena os produtos em tempo real por **Menor preço** e **Maior preço**.
   - **Filtros interativos**: Filtragem combinada por **Marca**, **Categoria**, **Gênero** (`checkbox`) e **Estado** (`radio`), atualizando dinamicamente o contador de produtos encontrados.
3. **Identidade Visual Própria (Pure Sports)**:
   - Paleta de cores esportiva inspirada na logomarca da **Pure Sports** (`#14B8C4` Ciano & `#1E2225` Grafite) e catálogo completo de equipamentos fitness com imagens em alta resolução do Unsplash.

---

## Tecnologias Utilizadas

- **[React 18](https://react.dev/)** (Componentização, Hooks, Context API)
- **[Vite](https://vitejs.dev/)** (Bundler e servidor de desenvolvimento rápido)
- **[React Router DOM v6](https://reactrouter.com/)** (Roteamento SPA: `/`, `/products`, `/produtos`, `/product/:id`)
- **[PrimeReact](https://primereact.org/) & [PrimeFlex](https://primeflex.org/)** (Estilização, grid responsivo e ícones `PrimeIcons`)

---

## Estrutura de Pastas do Projeto

```text
pure-sports/
├── public/                        # Imagens estáticas e assets públicos
├── src/
│   ├── assets/                    # Logomarcas SVG e ícones (Header, Footer, Setas, Estrela, Redes)
│   ├── components/
│   │   ├── BuyBox.jsx             # Informações de compra, avaliação, preços e CTA
│   │   ├── FilterGroup.jsx        # Grupo reutilizável de filtros (checkbox / radio)
│   │   ├── Footer.jsx             # Rodapé institucional
│   │   ├── Gallery.jsx            # Carrossel de imagens com setas e thumbnails opcionais
│   │   ├── Header.jsx             # Cabeçalho com Logo, Busca, Login, Carrinho e NavLink
│   │   ├── Information.jsx        # Colunas dinâmicas de links do rodapé
│   │   ├── Logo.jsx               # Componente de logomarca (253x44px)
│   │   ├── ProductCard.jsx        # Cartão de produto (292x321px) com desconto
│   │   ├── ProductDetails.jsx     # Encapsulador de detalhes do produto
│   │   ├── ProductListing.jsx     # Listagem de cartões de produto
│   │   ├── ProductOptions.jsx     # Seleção de tamanhos e cores (square / circle)
│   │   └── Section.jsx            # Estrutura padrão de seções das páginas
│   ├── context/
│   │   └── ThemeContext.jsx       # Contexto de configuração visual e catálogo
│   ├── data/
│   │   └── products.js            # Catálogo de produtos, slides e coleções
│   ├── pages/
│   │   ├── Layout.jsx             # Wrapper global com Header e Footer
│   │   ├── HomePage.jsx           # Página Inicial (rota /)
│   │   ├── ProductListingPage.jsx # Página de Listagem e Filtros (rotas /products e /produtos)
│   │   └── ProductViewPage.jsx    # Página de Detalhes do Produto (rota /product/:id)
│   ├── App.jsx                    # Definição das rotas da aplicação
│   ├── index.css                  # Variáveis de cores (Design System) e estilos globais
│   └── main.jsx                   # Ponto de entrada do React
├── index.html
├── package.json
└── vite.config.js
```

---

## Como Rodar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 18 ou superior) instalado.

### Passo a passo

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/EricoAlves07/pure-sports.git
   cd pure-sports
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**:
   Abra [http://localhost:5173/](http://localhost:5173/)

5. **Para gerar a build de produção**:
   ```bash
   npm run build
   ```

---

## Checklist de Requisitos Mínimos Atendidos

- [x] **Layout (`<Layout />`)**: Recebe `children` entre `<Header />` e `<Footer />` em `src/pages/Layout.jsx`.
- [x] **Logo (`<Logo />`)**: Renderiza a logomarca em `253x44px` nas versões padrão e branca.
- [x] **Header (`<Header />`)**: Busca redirecionando para `/products?filter=...`, links *Cadastre-se* e botão *Entrar* (`114x40px`), ícone de carrinho e navegação principal com `NavLink` ativo.
- [x] **Footer (`<Footer />`)**: Fundo `dark-gray`, textos `white`, `<Logo white />`, ícones de redes sociais, colunas dinâmicas via `<Information />` e copyright.
- [x] **Section (`<Section />`)**: Suporte a `title` (`24px`), `titleAlign` (`left` / `center`), `link` (`18px`) e `children`.
- [x] **ProductCard (`<ProductCard />`)**: Imagem `292x321px`, nome, `price` (`24px`) e `priceDiscount` (cortando o preço original).
- [x] **ProductListing (`<ProductListing />`)**: Renderiza lista de produtos utilizando `<ProductCard />`.
- [x] **Gallery (`<Gallery />`)**: Slide interativo com setas (desabilitando no início/fim) e miniaturas opcionais (`showThumbs` `117x95px` com borda `2px` na cor `primary`).
- [x] **FilterGroup (`<FilterGroup />`)**: Inputs `checkbox` e `radio` (`22x22px`) na cor `primary`.
- [x] **ProductOptions (`<ProductOptions />`)**: Formatos `square` (`46px` de altura) e `circle` (`31x31px`), tipos `text` e `color`, borda `2px` ao selecionar.
- [x] **BuyBox (`<BuyBox />`)**: Nome (`32px`), referência (`12px`), estrelas em caixa `warning` (`#F6AA1C`) com ícone de estrela branco, avaliações, preços, descrição, `children` e botão `COMPRAR` em `warning` (`#F6AA1C`).
- [x] **Páginas Principais**: `<HomePage />` (`/`), `<ProductListingPage />` (`/products` e `/produtos`) e `<ProductViewPage />` (`/product/:id`).
