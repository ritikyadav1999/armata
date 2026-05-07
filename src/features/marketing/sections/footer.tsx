import { BrandMark } from "@/components/ui/brand-mark";

const footerGroups = [
  {
    title: "System",
    links: [
      { label: "Why We Exist", href: "#why" },
      { label: "The Pipeline", href: "#pipeline" }
    ]
  },
  {
    title: "Registry",
    links: [
      { label: "Sprint Model", href: "#sprint" },
      { label: "Discovery Intake", href: "#discovery" }
    ]
  },
  {
    title: "Nodes",
    links: [
      { label: "Contact", href: "mailto:hello@armata.group" },
      { label: "Twitter", href: "#" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-5 sm:px-margin md:flex-row">
        <div className="space-y-4">
          <BrandMark />
          <p className="max-w-xs text-[12px] leading-relaxed text-on-surface-variant">
            Operating Infrastructure for the next generation of founders. Precision in execution.
          </p>
          <p className="pt-4 font-mono text-[10px] text-on-surface-variant opacity-40">
            &copy; 2026 ARMATA GROUP. SYSTEM STATUS: NOMINAL.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-12 md:w-auto md:grid-cols-3">
          {footerGroups.map((group) => (
            <div className="space-y-4" key={group.title}>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-on-surface opacity-60">{group.title}</h3>
              <div className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <a
                    className="font-mono text-[11px] uppercase text-on-surface-variant transition-colors hover:text-primary"
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
