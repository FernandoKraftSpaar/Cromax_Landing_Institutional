import { ArrowRight } from 'lucide-react';
import { ButtonLink } from '../ui/Button';
import { hero } from '../../content/home';

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src='/public/images/imagem_home.png' alt={hero.imageAlt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
      </div>

      <div className="container-cromax relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display text-page-title font-bold text-white">
            {hero.title.map((segment, index) =>
              segment.highlight ? (
                <mark
                  key={index}
                  className="box-decoration-clone rounded-sm bg-cromax px-2 text-white"
                >
                  {segment.text}
                </mark>
              ) : (
                <span key={index}>{segment.text}</span>
              ),
            )}
          </h1>

          <p className="mt-8 max-w-2xl text-body-lg font-medium text-white/85">{hero.subtitle}</p>

          <div className="mt-10">
            <ButtonLink to={hero.ctaPath}>
              {hero.ctaLabel} <ArrowRight size={20} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
