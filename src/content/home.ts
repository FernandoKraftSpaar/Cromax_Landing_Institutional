import { Droplet, Globe, Layers, Microscope, Zap } from 'lucide-react';
import type {
  DiagnosticFlowContent,
  FeaturedProductContent,
  HeroContent,
  Pillar,
} from '../types';
import { PLACEHOLDER_HERO, PLACEHOLDER_PRODUCT } from './placeholders';

// Hero — texto e realce conforme Miro board.
export const hero: HeroContent = {
  title: [
    { text: 'A ' },
    { text: 'inovação', highlight: true },
    { text: ' que responde à ' },
    { text: 'realidade', highlight: true },
  ],
  subtitle:
    'Desenvolvemos Diagnósticos Point-of-Care e Ferramentas de Apoio ao Diagnóstico para Medicina Descentralizada',
  ctaLabel: 'Nossas Soluções',
  ctaPath: '/servicos',
  imageSrc: PLACEHOLDER_HERO,
  imageAlt: 'Profissional de saúde realizando um teste rápido point-of-care',
};

// Frase-pilar centralizada (Miro).
export const introHeadline =
  'Descentralizando o diagnóstico com Ciência de alto Impacto';

// 3 pilares de introdução (textos verbatim do Miro).
export const pillars: Pillar[] = [
  {
    icon: Layers,
    title: 'Inovação Descentralizada',
    description:
      'Desenvolvemos soluções que levam o diagnóstico para onde o paciente está — sem depender de laboratório central. Da zona rural à emergência climática, a Cromax opera onde o sistema falha.',
  },
  {
    icon: Microscope,
    title: 'Tecnologia Point of Care',
    description:
      'Nossa plataforma integra coleta, preparo da amostra e detecção em um único fluxo. Mais agilidade na decisão clínica, menos fricção operacional — em qualquer ponto de atendimento.',
  },
  {
    icon: Globe,
    title: 'Saúde Única',
    description:
      'Diagnóstico que une saúde humana, animal e ambiental. Seguindo o princípio One Health, desenvolvemos soluções que protegem populações inteiras, não apenas indivíduos.',
  },
];

// Fluxo de Diagnóstico Integrado (rótulos do Miro + descrições do código base aprovado).
export const diagnosticFlow: DiagnosticFlowContent = {
  title: 'Fluxo de Diagnóstico Integrado',
  subtitle: 'Da coleta ao resultado',
  steps: [
    {
      icon: Droplet,
      title: 'Coleta',
      description: 'Simples amostragem point-of-care (ex.: gota de sangue ou similar).',
    },
    {
      icon: Layers,
      title: 'Preparo Pré-Analítico',
      description: 'Separação de plasma acoplada e filtragem molecular imediata.',
    },
    {
      icon: Zap,
      title: 'Diagnóstico',
      description: 'Leitura de múltiplos analitos simultâneos com alta especificidade.',
      emphasis: true,
    },
  ],
};

// Destaque do produto piloto (LeHFT Multiteste).
export const featuredProduct: FeaturedProductContent = {
  eyebrow: 'Portfólio Ativo',
  name: 'LeHFT Multiteste',
  description:
    'O produto piloto da Cromax permite testes rápidos com sensibilidade laboratorial através da inovação brasileira em biotecnologia.',
  ctaLabel: 'Conhecer nossa atuação',
  ctaPath: '/servicos',
  imageSrc: PLACEHOLDER_PRODUCT,
  imageAlt: 'LeHFT Multiteste — produto piloto da Cromax',
};
