🎬 Dev-Filmes

Aplicação web para filmes e séries em cartaz, lançamentos, populares e mais bem avaliados — com detalhes, elenco e trailers, usando dados em tempo real da [TMDB (The Movie Database)](https://www.themoviedb.org/).

![status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)

🛠️ Tecnologia:

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)


Estilização:

![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)


API: [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) — base de dados de filmes e séries


Demonstração: 


✨ Funcionalidades:

- Página de 'HOME' com destaque de lançamento e carrosséis.
- Listagens completas: **Em Cartaz**, **Lançamentos**, **Populares** e **Bem Avaliados** (filmes e séries)
- Página de detalhes com sinopse, gêneros, elenco (créditos) e trailer
- Navegação entre **Filmes** e **Séries**
- Layout **responsivo**, adaptado para desktop, tablet e mobile


📁 Estrutura do projeto

src/
├── components/       # Componentes reutilizáveis (Header, Footer, Carousel, CardLinks, Genres, Credits, Trailer, Button...)
<br>
├── containers/       # Páginas principais (Home, Detail, Filmes, Series)
<br>
├── subFilmes/        # Sub-páginas de filmes (Cartaz, Lançamentos, Populares, Bem Avaliados)
<br>
├── subSeries/        # Sub-páginas de séries (Exibição, Lançamentos, Populares, Bem Avaliadas)
<br>
├── layout/           # Layout base e header
<br>
├── routes/           # Definição de rotas (React Router)
<br>
├── services/         # Integração com a API da TMDB
<br>
├── styles/           # Estilos globais
<br>
└── utils/            # Funções utilitárias (montagem de URLs de imagem, etc.)


🗺️ Rotas

| Rota | Descrição |
===========================
| / | Página inicial |
| /filmes | Listagem de filmes |
| /series | Listagem de séries |
| /detalhes/:tipo/:id | Detalhes de um filme/série específico |
| /cartaz | Filmes em cartaz |
| /lancamentos-movies | Lançamentos de filmes |
| /populares-movies | Filmes populares |
| /bem-avaliados | Filmes mais bem avaliados |
| /exibicao-series | Séries em exibição |
| /lancamentos-series | Lançamentos de séries |
| /populares-series | Séries populares |
| /bem-avaliadas | Séries mais bem avaliadas |


👤 Autor
Desenvolvido por **[Matheus Pires Brito]** — projeto de estudo em React.

- LinkedIn: [seu perfil](https://linkedin.com/in/matheuspires27/)

