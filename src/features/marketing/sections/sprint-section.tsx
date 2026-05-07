import { SectionHeading } from "@/components/ui/section-heading";
import { sprintWeeks } from "@/features/marketing/content";

export function SprintSection() {
  return (
    <section className="border-y border-white/5 bg-surface-container-low py-12 md:py-14" id="sprint">
      <div className="mx-auto max-w-7xl px-5 sm:px-margin">
        <div className="mb-10 md:mb-12">
          <SectionHeading
            align="center"
            eyebrow="Framework"
            title="How We Work: The Execution Sprint"
            description="A disciplined operating model for deploying foundational startup infrastructure."
          />
        </div>
        <div className="grid grid-cols-1 divide-y divide-white/5 border border-white/5 md:grid-cols-5 md:divide-x md:divide-y-0">
          {sprintWeeks.map((item) => (
            <div
              className={
                item.featured
                  ? "space-y-4 bg-surface-container-highest/30 p-6 transition-colors hover:bg-surface-container-lowest lg:p-7"
                  : "space-y-4 p-6 transition-colors hover:bg-surface-container-lowest lg:p-7"
              }
              key={item.week}
            >
              <h3 className="text-base font-semibold text-on-surface">{item.title}</h3>
              <p className="text-[13px] leading-snug text-on-surface-variant">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
