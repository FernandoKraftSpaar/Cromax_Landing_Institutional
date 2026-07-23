import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'light';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-display font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cromax';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-cromax text-white shadow-lg shadow-cromax/20 hover:bg-cromax-dark hover:scale-[1.02]',
  outline: 'border border-neutral-300 bg-white text-neutral-700 hover:border-cromax hover:text-cromax',
  light: 'bg-white text-cromax hover:bg-neutral-100',
};

export function ButtonLink({ to, children, variant = 'primary', className = '' }: ButtonLinkProps) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
