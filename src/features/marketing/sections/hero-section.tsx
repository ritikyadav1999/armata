const executionSignals = [
  { label: "Validation", value: "Interviewing", tone: "text-primary" },
  { label: "MVP Scope", value: "Focused", tone: "text-on-surface" },
  { label: "Ops System", value: "Installing", tone: "text-secondary" }
];

const scopeItems = ["Core workflow", "Onboarding path", "Feedback capture"];

const readinessItems = [
  { label: "Customer signal", value: "72%" },
  { label: "Build clarity", value: "High" },
  { label: "Launch readiness", value: "Next" }
];

export function HeroSection() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 pb-12 pt-8 sm:px-margin md:flex-row md:gap-14 md:pb-14 md:pt-10">
      <div className="flex-1">
        <div className="max-w-xl">
          <h1 className="text-[40px] font-bold leading-[1.06] text-on-surface sm:text-[48px]">
            Helping Startups Build With Clarity
          </h1>
          <p className="section-copy mt-5 max-w-lg text-[15px]">
            We help founders validate ideas, build focused MVPs, install operational systems, and scale with clarity.
          </p>
          <div className="mt-7 flex flex-wrap gap-sm">
            <a
              className="active-scale inline-block rounded-sm bg-primary px-lg py-3 text-center font-mono text-[12px] font-bold uppercase tracking-wider text-on-primary"
              href="#discovery"
            >
              Start Discovery
            </a>
            <a
              className="active-scale inline-block rounded-sm border border-white/10 px-lg py-3 text-center font-mono text-[12px] font-bold uppercase tracking-wider transition-colors hover:border-white/25 hover:bg-surface-container-high"
              href="#sprint"
            >
              See How We Work
            </a>
          </div>
        </div>
      </div>
      <div className="w-full max-w-xl flex-1">
        <div className="hero-console glass-panel relative overflow-hidden rounded-sm border border-white/10 p-4 shadow-glow sm:p-5">
          <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-3">
            <div>
              <span className="meta-label text-primary">Startup Command Center</span>
              <p className="mt-1 text-[12px] leading-relaxed text-on-surface-variant">Execution workspace for early-stage teams</p>
            </div>
            <span className="rounded-sm border border-primary/20 bg-primary/5 px-2 py-1 font-mono text-[10px] uppercase text-primary">
              Live
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {executionSignals.map((signal) => (
              <div className="rounded-sm border border-white/5 bg-surface-container-lowest p-3" key={signal.label}>
                <span className="block font-mono text-[9px] font-semibold uppercase tracking-widest text-on-surface-variant">
                  {signal.label}
                </span>
                <span className={`mt-3 block text-sm font-semibold ${signal.tone}`}>{signal.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_0.86fr]">
            <div className="rounded-sm border border-white/5 bg-surface-container-lowest p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="meta-label text-on-surface-variant">MVP Scope</span>
                <span className="font-mono text-[10px] uppercase text-primary">Aligned</span>
              </div>
              <div className="space-y-3">
                {scopeItems.map((item, index) => (
                  <div className="flex items-center gap-3" key={item}>
                    <span className="hero-check grid size-4 place-items-center rounded-sm border border-primary/30 bg-primary/5" />
                    <div className="h-2 flex-1 overflow-hidden rounded-sm bg-surface-container-high">
                      <span
                        className="hero-scope-bar block h-full rounded-sm bg-gradient-to-r from-primary/80 to-secondary/60"
                        style={{ width: `${86 - index * 14}%`, animationDelay: `${index * 180}ms` }}
                      />
                    </div>
                    <span className="w-28 text-right text-[11px] text-on-surface-variant">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-sm border border-white/5 bg-surface-container-lowest p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="meta-label text-on-surface-variant">Readiness</span>
                <span className="size-1.5 rounded-full bg-primary hero-live-dot" />
              </div>
              <div className="space-y-3">
                {readinessItems.map((item) => (
                  <div className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0" key={item.label}>
                    <span className="text-[12px] text-on-surface-variant">{item.label}</span>
                    <span className="font-mono text-[11px] text-on-surface">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-sm border border-white/5 bg-surface-container-lowest p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="meta-label text-on-surface-variant">Operating Rhythm</span>
              <span className="font-mono text-[10px] uppercase text-secondary">Feedback loop active</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {["Signal", "Scope", "Build", "Learn"].map((item, index) => (
                <div className="hero-rhythm-step rounded-sm border border-white/5 bg-surface-container-high px-2 py-2 text-center" key={item}>
                  <span className="font-mono text-[9px] uppercase text-on-surface-variant">{item}</span>
                  <span
                    className="mt-2 block h-0.5 rounded-sm bg-primary/80"
                    style={{ animationDelay: `${index * 220}ms` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
