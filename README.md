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

## Deploy (Azure SWA)

O workflow `.github/workflows/azure-static-web-apps.yml` publica o `dist/`. É necessário configurar o secret `AZURE_STATIC_WEB_APPS_API_TOKEN` no repositório. O `staticwebapp.config.json` garante o fallback de SPA para as rotas do React Router.
