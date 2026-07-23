import { ChevronDown, ChevronRight } from 'lucide-react';
import { diagnosticFlow } from '../../content/home';

export function DiagnosticFlow() {
  const { title, subtitle, steps } = diagnosticFlow;

  return (
    <section className="bg-white pb-24">
      <div className="container-cromax">
        <div className="rounded-3xl bg-cromax-gradient px-6 py-14 text-white md:px-12">
          <div className="text-center">
            <h2 className="font-display text-section-title">{title}</h2>
            <p className="mt-3 font-display text-subtitle font-bold text-white/85">{subtitle}</p>
          </div>

          <div className="mt-12 flex flex-col items-stretch justify-center gap-6 md:flex-row md:items-center">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;
              return (
                <div key={step.title} className="flex flex-col items-center gap-6 md:flex-row">
                  <article className="flex w-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-lg md:w-64">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full ${
                        step.emphasis ? 'bg-cromax text-white' : 'bg-cromax/10 text-cromax'
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-4 font-display text-subtitle font-bold text-black">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-neutral-600">{step.description}</p>
                  </article>

                  {!isLast && (
                    <>
                      <ChevronRight className="hidden shrink-0 text-white/80 md:block" size={28} />
                      <ChevronDown className="shrink-0 text-white/80 md:hidden" size={28} />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
