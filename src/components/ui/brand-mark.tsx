import Image from "next/image";

export function BrandMark() {
  return (
    <div className="flex items-center gap-3" aria-label="ARMATA">
      <Image
        alt=""
        aria-hidden="true"
        className="size-9 object-contain"
        height={72}
        priority
        src="/armata-logo.png"
        width={67}
      />
      <span className="font-mono text-[13px] font-bold uppercase tracking-[0.22em] text-on-surface">ARMATA</span>
    </div>
  );
}
