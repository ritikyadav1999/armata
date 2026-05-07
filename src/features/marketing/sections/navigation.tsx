import { BrandMark } from "@/components/ui/brand-mark";
import { navItems } from "@/features/marketing/content";

export function Navigation() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-margin">
        <div className="flex items-center gap-sm">
          <BrandMark />
        </div>
        <div className="hidden items-center gap-lg md:flex">
          {navItems.map((item, index) => (
            <a
              className={
                index === 0
                  ? "font-mono text-[11px] uppercase tracking-wider text-on-surface transition-colors hover:text-primary"
                  : "font-mono text-[11px] uppercase tracking-wider text-on-surface-variant transition-colors hover:text-primary"
              }
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          className="active-scale rounded-sm bg-on-surface px-md py-2 text-center font-mono text-[11px] font-bold uppercase tracking-wider text-surface"
          href="#discovery"
        >
          Start Discovery
        </a>
      </div>
    </nav>
  );
}
