# Cromax — Landing Institucional

Landing page institucional da **Cromax Soluções Diagnósticas** — DeepTech de biotecnologia diagnóstica (point-of-care) para medicina descentralizada, vinculada ao Parque UFRGS / Incubadora de Biotecnologia.

## Stack

- **Vite + React + TypeScript + Tailwind CSS**
- **React Router** (multi-rota, com fallback SPA — sem 404)
- Ícones: **lucide-react**
- Fontes (Google Fonts): **Funnel Display** (títulos) e **Poppins** (corpo)
- Deploy alvo: **Azure Static Web Apps** (`staticwebapp.config.json` + workflow CI)

## Scripts

```bash
npm install     # instala dependências
npm run dev     # ambiente de desenvolvimento (http://localhost:5173)
npm run build   # type-check + build de produção (dist/)
npm run preview # pré-visualiza o build
```

## Estrutura

```
src/
  assets/logos/     # lockup e símbolo (vermelho/branco), derivados do vetor oficial
  components/
    layout/         # Header, Footer, MobileMenu, Layout
    ui/             # Logo, Button, SectionTitle
    home/           # Hero, IntroPillars, DiagnosticFlow, FeaturedProduct
  content/          # textos e dados (separados da apresentação), tipados
  pages/            # uma página por rota
  types/            # tipos centralizados
```

O **conteúdo** (textos, dados) fica em `src/content/*` e os **componentes** cuidam apenas da UI.

## Design tokens

Definidos em `tailwind.config.ts`. Detalhes completos (paleta, tipografia, decisões de UI/UX, mapa de conteúdo) em [`docs/CONSOLIDACAO.md`](./docs/CONSOLIDACAO.md).

## Deploy — GitHub Pages

Workflow: `.github/workflows/deploy-pages.yml`. Roda o build do Vite, gera o
`404.html` (fallback de SPA) e publica via GitHub Pages.

**Pré-requisito (uma vez):** *Settings → Pages → Build and deployment → Source =
**GitHub Actions*** (isso desliga o modo "Deploy from a branch", que publicava o
código-fonte cru e causava 404).

Como é um _project site_, o app é servido em `/<repo>/`. O build define `base`
automaticamente quando a env `GITHUB_PAGES=true` está presente (definida no
workflow), e o React Router usa `basename={import.meta.env.BASE_URL}`. Em
desenvolvimento local o `base` continua `/`.

- **Produção:** a cada atualização da `main` (ex.: merge de PR) o site é
  republicado em `https://<usuario>.github.io/Cromax_Landing_Institutional/`.
- **Preview de um PR (opcional):** *Actions → "Deploy to GitHub Pages" → Run
  workflow* selecionando a branch (requer liberar a branch em
  *Settings → Environments → github-pages*).
