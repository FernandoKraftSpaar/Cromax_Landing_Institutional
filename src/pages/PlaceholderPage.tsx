import { Construction } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';

interface PlaceholderPageProps {
  title: string;
  subtitle?: string;
}

/**
 * Página temporária "em construção". Mantém a rota ativa (sem 404) enquanto a
 * seção não é refinada em um PR seguinte.
 */
export function PlaceholderPage({ title, subtitle }: PlaceholderPageProps) {
  return (
    <div className="container-cromax flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cromax/10 text-cromax">
        <Construction size={32} />
      </div>
      <SectionTitle title={title} subtitle={subtitle} align="center" />
      <p className="mt-8 text-body-lg font-medium text-neutral-500">
        Esta página será construída em uma próxima etapa de validação.
      </p>
    </div>
  );
}
