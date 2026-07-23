import type { Config } from 'tailwindcss';

/**
 * Design tokens da Cromax (ver docs/CONSOLIDACAO.md).
 * Paleta, gradientes, tipografia (Funnel Display / Poppins) e escala responsiva.
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cromax: {
          DEFAULT: '#C5001C',
          dark: '#87001A',
        },
        neutralbg: '#F4F4F4',
      },
      fontFamily: {
        display: ['"Funnel Display"', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Título Página — Funnel Display Bold 80
        'page-title': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05' }],
        // Título Seção — Funnel Display Regular 60
        'section-title': ['clamp(2rem, 4.5vw, 3.75rem)', { lineHeight: '1.1' }],
        // Subtítulo / Corpo 1 — Funnel Display Bold 30
        subtitle: ['clamp(1.375rem, 2vw, 1.875rem)', { lineHeight: '1.3' }],
        // Corpo 2 — Poppins Medium 18
        'body-lg': ['clamp(1rem, 1vw, 1.125rem)', { lineHeight: '1.7' }],
      },
      maxWidth: {
        container: '80rem',
      },
      backgroundImage: {
        // Header e footer usam gradientes de sentidos contrários (decisão do founder).
        'cromax-gradient': 'linear-gradient(135deg, #C5001C 0%, #87001A 100%)',
        'cromax-gradient-rev': 'linear-gradient(315deg, #C5001C 0%, #87001A 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
