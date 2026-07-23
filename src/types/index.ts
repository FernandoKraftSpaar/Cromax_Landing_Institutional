import type { LucideIcon } from 'lucide-react';

/** Item de navegação (header e rodapé). */
export interface NavItem {
  label: string;
  path: string;
}

/** Segmento do título do Hero — permite realce (marca-texto) em palavras específicas. */
export interface HeroTitleSegment {
  text: string;
  highlight?: boolean;
}

export interface HeroContent {
  title: HeroTitleSegment[];
  subtitle: string;
  ctaLabel: string;
  ctaPath: string;
  imageSrc: string;
  imageAlt: string;
}

/** Pilar de introdução da Home. */
export interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Etapa do fluxo de diagnóstico. */
export interface FlowStep {
  icon: LucideIcon;
  title: string;
  description: string;
  emphasis?: boolean;
}

export interface DiagnosticFlowContent {
  title: string;
  subtitle: string;
  steps: FlowStep[];
}

/** Destaque de produto (LeHFT Multiteste). */
export interface FeaturedProductContent {
  eyebrow: string;
  name: string;
  description: string;
  ctaLabel: string;
  ctaPath: string;
  imageSrc: string;
  imageAlt: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

/** Dados institucionais usados no rodapé e no contato. */
export interface SiteInfo {
  legalName: string;
  cnpj: string;
  email: string;
  /** Somente dígitos, formato internacional (ex.: 5551999999999). */
  whatsapp: string;
  address: string;
  tagline: string;
  social: SocialLink[];
}

/**
 * Estrutura do formulário de contato — tipada para ser espelhada por uma
 * futura API (Azure Functions) que registrará as mensagens.
 */
export interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  message: string;
}
