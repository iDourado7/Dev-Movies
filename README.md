🎬 Dev-Movies

Aplicação web para descobrir filmes e séries em cartaz, lançamentos, populares e mais bem avaliados — com detalhes, elenco e trailers, usando dados em tempo real da [TMDB (The Movie Database)](https://www.themoviedb.org/).

![status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![license](https://img.shields.io/badge/licen%C3%A7a-MIT-blue)

📸 Demonstração

<!-- Substitua pelos seus prints/gif reais -->
<!-- ![home](./docs/screenshot-home.png) -->
<!-- ![detalhes](./docs/screenshot-detalhes.png) -->

> Adicione aqui alguns prints ou um GIF do projeto rodando (home, página de detalhes e visualização mobile).

✨ Funcionalidades

- 🏠 **Home** com destaque de lançamento e carrosséis de populares/bem avaliados
- 🎞️ Listagens completas: **Em Cartaz**, **Lançamentos**, **Populares** e **Bem Avaliados** (filmes e séries)
- 📄 **Página de detalhes** com sinopse, gêneros, elenco (créditos) e trailer
- 🔍 Navegação entre **Filmes** e **Séries**
- 📱 Layout **responsivo**, adaptado para desktop, tablet e mobile

🛠️ Tecnologias

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/) — rotas
- [styled-components](https://styled-components.com/) — estilização
- [Motion](https://motion.dev/) (Framer Motion) — animações
- [Axios](https://axios-http.com/) — requisições HTTP
- [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) — base de dados de filmes e séries

🚀 Como rodar localmente

Pré-requisitos
- [Node.js](https://nodejs.org/) 18+
- Uma chave de API gratuita da TMDB ([crie a sua aqui](https://www.themoviedb.org/settings/api))

Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/dev-movies.git
cd dev-movies

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
# crie um arquivo .env na raiz com:
echo "VITE_TMDB_API_KEY=sua_chave_aqui" > .env

# 4. Rode o projeto
npm run dev
```

O projeto vai abrir em `http://localhost:5173` (ou a porta que o Vite indicar no terminal).

## 📁 Estrutura do projeto

```
src/
├── components/       # Componentes reutilizáveis (Header, Footer, Carousel, CardLinks, Genres, Credits, Trailer, Button...)
├── containers/       # Páginas principais (Home, Detail, Filmes, Series)
├── subFilmes/        # Sub-páginas de filmes (Cartaz, Lançamentos, Populares, Bem Avaliados)
├── subSeries/        # Sub-páginas de séries (Exibição, Lançamentos, Populares, Bem Avaliadas)
├── layout/           # Layout base e header
├── routes/           # Definição de rotas (React Router)
├── services/         # Integração com a API da TMDB
├── styles/           # Estilos globais
└── utils/            # Funções utilitárias (montagem de URLs de imagem, etc.)
```

🗺️ Rotas

| Rota | Descrição |
|---|---|
| `/` | Página inicial |
| `/filmes` | Listagem de filmes |
| `/series` | Listagem de séries |
| `/detalhes/:tipo/:id` | Detalhes de um filme/série específico |
| `/cartaz` | Filmes em cartaz |
| `/lancamentos-movies` | Lançamentos de filmes |
| `/populares-movies` | Filmes populares |
| `/bem-avaliados` | Filmes mais bem avaliados |
| `/exibicao-series` | Séries em exibição |
| `/lancamentos-series` | Lançamentos de séries |
| `/populares-series` | Séries populares |
| `/bem-avaliadas` | Séries mais bem avaliadas |

📌 Roadmap / próximos passos

- [ ] Busca por título
- [ ] Sistema de favoritos
- [ ] Testes automatizados
- [ ] Modo claro/escuro

👤 Autor

Desenvolvido por **[Seu Nome]** — projeto de estudo em React.

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [seu perfil](https://linkedin.com/in/seu-usuario)

