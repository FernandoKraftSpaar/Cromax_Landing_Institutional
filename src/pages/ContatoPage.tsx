import { Mail, MessageCircle } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { siteInfo, whatsappUrl } from '../content/site';

export default function ContatoPage() {
  return (
    <div className="container-cromax py-24">
      <SectionTitle title="Contato" subtitle="Fale com nossa equipe." align="center" />

      <div className="mx-auto mt-12 flex max-w-xl flex-col gap-4">
        <a
          href={`mailto:${siteInfo.email}`}
          className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-neutralbg p-6 transition-colors hover:border-cromax/40"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cromax/10 text-cromax">
            <Mail size={22} />
          </span>
          <span>
            <span className="block font-display font-bold text-black">E-mail</span>
            <span className="font-medium text-neutral-600">{siteInfo.email}</span>
          </span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-neutralbg p-6 transition-colors hover:border-cromax/40"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cromax/10 text-cromax">
            <MessageCircle size={22} />
          </span>
          <span>
            <span className="block font-display font-bold text-black">WhatsApp</span>
            <span className="font-medium text-neutral-600">Iniciar conversa</span>
          </span>
        </a>
      </div>

      <p className="mt-10 text-center text-sm font-medium text-neutral-400">
        Formulário de contato (tipado, pronto para API) será adicionado em uma próxima etapa.
      </p>
    </div>
  );
}
