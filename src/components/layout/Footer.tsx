import { Link } from 'react-router-dom';
import { Mail, MessageCircle } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { navItems } from '../../content/navigation';
import { siteInfo, whatsappUrl } from '../../content/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cromax-gradient-rev text-white">
      <div className="container-cromax grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo kind="lockup" variant="white" className="h-12 w-auto" />
          <p className="mt-6 max-w-sm font-display text-subtitle font-bold leading-tight">
            {siteInfo.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            {siteInfo.social.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="rounded-full border border-white/30 p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/90">
            Acesso Rápido
          </h3>
          <ul className="mt-6 space-y-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white/90">
            Contato
          </h3>
          <ul className="mt-6 space-y-3 text-sm text-white/80">
            <li>
              <a
                href={`mailto:${siteInfo.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail size={16} /> {siteInfo.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </li>
            <li className="text-white/70">{siteInfo.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container-cromax py-6 text-xs text-white/70">
          <p>
            © {year} {siteInfo.legalName}. Todos os direitos reservados.
            {siteInfo.cnpj ? ` · CNPJ ${siteInfo.cnpj}` : ''}
          </p>
        </div>
      </div>
    </footer>
  );
}
