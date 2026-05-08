import { SectionHeading } from "@/components/ui/section-heading";
import { ecosystemItems } from "@/features/marketing/content";

export function EcosystemSection() {
  return (
    <section className="py-12 md:py-14" data-analytics-section="what_we_provide" id="ecosystem">
      <div className="mx-auto max-w-7xl px-5 sm:px-margin">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeading
            eyebrow="What We Provide"
            title="A Complete Operating Ecosystem for Early-Stage Startups"
            description="ARMATA gives founders the structure to validate, build, operate, and grow without turning execution into chaos."
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {ecosystemItems.map((item) => (
              <article
                className="group relative overflow-hidden rounded-md border border-white/5 bg-surface-container-lowest p-5 transition duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-surface-container-low"
                key={item.title}
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="meta-label text-primary">{item.meta}</span>
                  <span className="h-px w-10 bg-white/10 transition-colors duration-200 group-hover:bg-primary/40" />
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-copy mt-2">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
