import { SectionHeading } from "@/components/ui/section-heading";
import { principles } from "@/features/marketing/content";

export function PhilosophySection() {
  return (
    <section className="border-y border-white/5 bg-surface-container-low py-12 md:py-14" id="why">
      <div className="mx-auto max-w-7xl px-5 sm:px-margin">
        <div className="mb-10 md:mb-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Core Philosophy"
              title="Built for Early-Stage Execution"
              description="Most startups fail from fragmented execution - not lack of ideas. ARMATA helps founders move from chaotic execution to structured growth."
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent md:block" />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            {principles.map((principle) => (
              <article
                className="group relative z-10 overflow-hidden rounded-md border border-white/5 bg-surface-container-lowest p-5 transition duration-200 hover:-translate-y-1 hover:border-primary/25 hover:bg-surface-container lg:p-6"
                key={principle.step}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid size-9 place-items-center rounded-sm border border-white/10 bg-surface-container-high font-mono text-[11px] font-bold text-on-surface-variant">
                    {principle.step}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="rounded-sm border border-white/10 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-on-surface-variant">
                    Core
                  </span>
                </div>
                <h3 className="card-title">{principle.title}</h3>
                <p className="card-copy mt-3">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
