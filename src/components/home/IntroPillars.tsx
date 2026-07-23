import { Logo } from '../ui/Logo';
import { introHeadline, pillars } from '../../content/home';

export function IntroPillars() {
  return (
    <section className="bg-white py-24">
      <div className="container-cromax">
        <div className="flex flex-col items-center text-center">
          <Logo kind="symbol" variant="red" className="mb-6 h-14 w-auto" />
          <h2 className="mx-auto max-w-3xl font-display text-section-title text-cromax">
            {introHeadline}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="rounded-2xl border border-neutral-100 bg-neutralbg p-8 transition-colors hover:border-cromax/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cromax/10 text-cromax">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 font-display text-subtitle font-bold text-black">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-body-lg font-medium text-neutral-600">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
