type Tone = 'dark' | 'light' | 'brand';
type Align = 'left' | 'center';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: Align;
  tone?: Tone;
}

const titleColor: Record<Tone, string> = {
  dark: 'text-black',
  light: 'text-white',
  brand: 'text-cromax',
};

export function SectionTitle({ title, subtitle, align = 'center', tone = 'dark' }: SectionTitleProps) {
  const isCenter = align === 'center';
  return (
    <div className={`flex flex-col gap-4 ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}>
      <h2 className={`font-display text-section-title ${titleColor[tone]}`}>{title}</h2>
      <span className="h-1.5 w-20 rounded-full bg-cromax" />
      {subtitle && (
        <p className={`max-w-2xl text-body-lg ${tone === 'light' ? 'text-white/80' : 'text-neutral-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
