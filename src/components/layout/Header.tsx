import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { MobileMenu } from './MobileMenu';
import { navItems } from '../../content/navigation';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-20 bg-cromax-gradient transition-shadow duration-300 ${
        scrolled ? 'shadow-lg shadow-black/10' : ''
      }`}
    >
      <div className="container-cromax flex h-full items-center justify-between">
        <Link to="/" aria-label="Cromax — página inicial" className="flex items-center">
          <Logo kind="symbol" variant="white" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `font-sans text-sm font-medium tracking-wide transition-colors hover:text-white ${
                      isActive
                        ? 'border-b-2 border-white pb-1 text-white'
                        : 'text-white/85'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="text-white md:hidden"
          aria-label="Abrir menu"
        >
          <Menu size={28} />
        </button>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
