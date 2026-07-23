import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { navItems } from '../../content/navigation';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-cromax-dark/80 backdrop-blur-xl md:hidden">
      <div className="container-cromax flex h-20 items-center justify-between">
        <Logo kind="symbol" variant="white" className="h-10 w-auto" />
        <button type="button" onClick={onClose} className="text-white" aria-label="Fechar menu">
          <X size={28} />
        </button>
      </div>
      <nav className="flex flex-1 flex-col items-center justify-center gap-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            onClick={onClose}
            className={({ isActive }) =>
              `font-display text-3xl font-bold transition-colors hover:text-white ${
                isActive ? 'text-white underline decoration-2 underline-offset-8' : 'text-white/90'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
