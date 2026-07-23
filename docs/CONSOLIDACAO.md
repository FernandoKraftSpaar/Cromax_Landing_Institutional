# Cromax — Consolidação & Especificação

> Fonte da verdade do desenvolvimento da landing page institucional da Cromax. Consolida os recursos trazidos pelo founder (PDFs do Miro vetorizado, código base de inspiração, logomarcas) e as decisões travadas em conversa.

## 1. Identidade

Cromax Soluções Diagnósticas — **DeepTech de biotecnologia diagnóstica (point-of-care)**, vertical, focada em testagem de doenças infecciosas **sob medida a realidades epidemiológicas precisas**. Vinculada ao Parque UFRGS / Incubadora Empresarial de Biotecnologia da UFRGS. Referência em diagnóstico descentralizado e **One Health**. **Produto piloto: LeHFT Multiteste.**

## 2. Stack & arquitetura

- Vite + React + TypeScript + Tailwind CSS; ícones `lucide-react`; **React Router** (multi-rota, sem 404).
- Conteúdo separado da apresentação: textos/dados em `src/content/*.ts` (tipados); componentes só cuidam da UI.
- Um componente por seção; tipos centralizados em `src/types`.
- Deploy Azure Static Web Apps: `staticwebapp.config.json` (fallback SPA → index.html) + workflow CI. Preparado para futura integração com Azure Functions.
- Fluxo PR-first: nunca commitar direto na branch principal (`main`).

## 3. Design tokens

| Token | Valor | Uso |
| --- | --- | --- |
| Branco | `#FFFFFF` | fundo do corpo |
| Cinza claro | `#F4F4F4` | cards / seções neutras |
| Vermelho primário | `#C5001C` | primária, header/footer, acentos |
| Vermelho escuro | `#87001A` | hover / fim do gradiente |
| Preto | `#000000` | títulos |

Gradiente `#C5001C → #87001A` no **header (fixo)** e no **footer**, com **sentidos contrários** (135° no header, 315° no footer). Corpo em fundo branco com letras coloridas.

## 4. Tipografia (Google Fonts) + escala responsiva

| Estilo | Fonte / peso | Desktop (Miro) | Escala responsiva |
| --- | --- | --- | --- |
| Título Página | Funnel Display Bold | 80px | `clamp(2.5rem, 6vw, 5rem)` |
| Título Seção | Funnel Display Regular | 60px | `clamp(2rem, 4.5vw, 3.75rem)` |
| Subtítulo / Corpo 1 | Funnel Display Bold | 30px | `clamp(1.375rem, 2vw, 1.875rem)` |
| Corpo 2 | Poppins Medium | 18px | `clamp(1rem, 1vw, 1.125rem)` |

## 5. Rotas (menu canônico = header)

| Rota | Página | Label |
| --- | --- | --- |
| `/` | Home | Início (logo) |
| `/sobre` | Sobre Nós | Sobre Nós |
| `/servicos` | Serviços | Serviços |
| `/contexto` | Blog/Contexto | **Contexto** |
| `/noticias` | Notícias | Notícias |
| `/contato` | Contato | Contato |
| `*` | catch-all → `/` | — |

## 6. Layout global

- **Header**: fixo, gradiente vermelho, símbolo branco à esquerda + nav branca; no mobile, **menu overlay com glassmorphism**.
- **Footer**: gradiente vermelho (sentido contrário ao header), wordmark branco + tagline "A inovação que responde à realidade" + redes + dados legais + Acesso Rápido.

## 7. Decisões travadas

1. Label do blog = **Contexto** (rota `/contexto`).
2. Hero: **um** CTA — "Nossas Soluções" (→ `/servicos`). Sem badge.
3. Fluxo de diagnóstico: **usar as descrições de etapa do código base**.
4. **LeHFT Multiteste em destaque** na Home.
5. Contexto: usar o texto de "A importância da divulgação científica" do Miro (Site (4).pdf).
6. Contato: e-mail **contato@cromaxsd.com.br**, Instagram **@cromaxsd**.
7. Logo branca: **derivada do vetor** (`#c5001c` → `#fff`) e versionada no repo. Símbolo "X" isolado via crop de viewBox.
8. Header e footer com gradientes de **sentidos contrários**.
9. Footer legal: **Cromax Inova Simples** + CNPJ (número pendente) + endereço UFRGS.

## 8. Mapa de conteúdo por página

Legenda: ✅ Miro (aprovado) · 🟡 placeholder (temática a definir) · 🔵 código base aprovado pelo founder.

### Home `/` — nesta entrega
- ✅ Hero: foto + "A **inovação** que responde à **realidade**" + subtítulo.
- 🔵 CTA "Nossas Soluções".
- ✅ Frase-pilar: "Descentralizando o diagnóstico com Ciência de alto Impacto".
- ✅ 3 pilares (Inovação Descentralizada · Tecnologia Point of Care · Saúde Única).
- ✅ Fluxo: Coleta → Preparo Pré-Analítico → Diagnóstico / "Da coleta ao resultado" (🔵 descrições de etapa).
- 🔵/🟡 Destaque **LeHFT Multiteste** (texto do código base; imagem placeholder).

### Sobre Nós `/sobre` — próximos PRs (✅ Miro)
Vinculação UFRGS · Propósito (banner) · Missão · Visão · Valores (7, incl. Sustentabilidade) · 5 Princípios · ODS 3/9/12 (painel glassmorphism).

### Serviços `/servicos` — próximos PRs (✅ Miro)
Título "Tecnologias Point-of-Care que chegam a quem mais precisa" + 3 serviços (P&D · Treinamento Técnico · Cursos de Capacitação) + Portfólio Próprio ("Em breve").

### Contexto `/contexto` — próximos PRs (✅ Miro)
"O que é a Contexto?" + Temas (Ciência Aplicada · Saúde Pública · Inovação Nacional) + "A importância da divulgação científica" + grid de artigos (🟡 placeholders).

### Notícias `/noticias` — próximos PRs
🟡 grid de caixinhas (foto + título), 1 fixada.

### Contato `/contato` — próximos PRs
Formulário tipado (`ContactFormData`) como stub (sem envio) + WhatsApp/e-mail. Nesta entrega, placeholder com e-mail + WhatsApp.

## 9. Pendências de recurso

- Foto oficial do Hero (P&B com realce vermelho) — placeholder até chegar o arquivo.
- Logo/artes do LeHFT Multiteste e imagens de produto/seções — placeholders.
- Número do CNPJ; telefone/WhatsApp definitivo (placeholder atual `5551999999999`); LinkedIn (se houver).
- PNG branco oficial (hoje: lockup/símbolo branco derivado do vetor).

## 10. Assets de logo

Derivados do único vetor oficial (`logo vetorizado (1).svg`, monocromático `#c5001c`):

- `src/assets/logos/cromax-lockup.svg` — lockup completo (vermelho).
- `src/assets/logos/cromax-lockup-white.svg` — lockup branco (footer).
- `src/assets/logos/cromax-symbol.svg` — símbolo "X" isolado (vermelho).
- `src/assets/logos/cromax-symbol-white.svg` — símbolo branco (header/menu).
- `public/favicon.svg` — símbolo vermelho.
