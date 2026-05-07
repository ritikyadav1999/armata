import { SectionHeading } from "@/components/ui/section-heading";
import { sprintWeeks } from "@/features/marketing/content";

export function SprintSection() {
  return (
    <section className="border-y border-white/5 bg-surface-container-low py-12 md:py-14" id="sprint">
      <div className="mx-auto max-w-7xl px-5 sm:px-margin">
        <div className="mb-10 md:mb-12">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading align="center" eyebrow="Framework" title="How We Work With Founders" />
            <div className="mt-5 space-y-3">
              <p className="section-copy">
                We work closely with early-stage founders to bring clarity to product direction, execution, and
                operational systems.
              </p>
              <p className="section-copy">
                Rather than building everything at once, we focus on validating what matters, reducing unnecessary
                complexity, and helping startups move with structure from the beginning.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent md:block" />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
            {sprintWeeks.map((item, index) => (
              <article
                className={
                  item.featured
                    ? "group relative z-10 overflow-hidden rounded-md border border-primary/25 bg-surface-container-highest p-5 shadow-glow transition duration-200 hover:-translate-y-1 hover:border-primary/45 lg:p-6"
                    : "group relative z-10 overflow-hidden rounded-md border border-white/5 bg-surface-container-lowest p-5 transition duration-200 hover:-translate-y-1 hover:border-primary/25 hover:bg-surface-container lg:p-6"
                }
                key={item.week}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="mb-8 flex items-center justify-between">
                  <span
                    className={
                      item.featured
                        ? "grid size-9 place-items-center rounded-sm border border-primary/30 bg-primary/10 font-mono text-[11px] font-bold text-primary"
                        : "grid size-9 place-items-center rounded-sm border border-white/10 bg-surface-container-high font-mono text-[11px] font-bold text-on-surface-variant"
                    }
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={item.featured ? "h-px flex-1 bg-primary/20" : "h-px flex-1 bg-white/10"} />
                  <span
                    className={
                      item.featured
                        ? "rounded-sm border border-primary/20 bg-primary/5 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-primary"
                        : "rounded-sm border border-white/10 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-on-surface-variant"
                    }
                  >
                    {item.featured ? "Build" : "Step"}
                  </span>
                </div>
                <h3 className={item.featured ? "card-title text-primary" : "card-title"}>
                  {item.title}
                </h3>
                <p className="card-copy mt-3">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
