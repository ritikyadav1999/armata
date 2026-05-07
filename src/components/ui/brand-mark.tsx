export function BrandMark() {
  return (
    <div className="flex items-center gap-sm" aria-label="ARMATA">
      <span className="relative grid size-4 place-items-center">
        <span className="absolute h-3.5 w-3.5 rotate-45 border border-primary/80" />
        <span className="h-1.5 w-1.5 bg-primary" />
      </span>
      <span className="font-mono text-label font-bold uppercase tracking-[0.2em] text-on-surface">ARMATA</span>
    </div>
  );
}
