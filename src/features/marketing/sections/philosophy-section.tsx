import { SectionHeading } from "@/components/ui/section-heading";
import { principles } from "@/features/marketing/content";

export function PhilosophySection() {
  return (
    <section className="border-y border-white/5 bg-surface-container-low py-12 md:py-14" id="why">
      <div className="mx-auto max-w-7xl px-5 sm:px-margin">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="max-w-xl">
            <SectionHeading eyebrow="Core Philosophy" title="Why ARMATA Exists" />
            <div className="mt-6 space-y-4">
              <p className="max-w-lg text-[22px] font-semibold leading-snug text-on-surface sm:text-2xl">
                Most startups fail from fragmented execution &mdash; not lack of ideas.
              </p>
              <p className="max-w-lg text-body-lg text-on-surface-variant">
                Validation comes too late. Systems come too late. Growth becomes reactive instead of intentional.
              </p>
              <p className="max-w-lg text-body-lg text-on-surface">
                ARMATA helps founders build with operational clarity from day one.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                className="group relative overflow-hidden rounded-md border border-white/5 bg-surface-container-lowest/70 p-5 transition duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-surface-container"
                key={principle.step}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-primary/80">{principle.step}</span>
                  <span className="h-px w-8 bg-white/10 transition-colors duration-200 group-hover:bg-primary/40" />
                </div>
                <h3 className="text-base font-semibold text-on-surface">{principle.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-on-surface-variant">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
