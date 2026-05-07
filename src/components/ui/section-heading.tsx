type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
      <h2 className="mt-2 text-h1 text-on-surface">{title}</h2>
      {description ? (
        <p className="mt-3 text-body-sm text-on-surface-variant">{description}</p>
      ) : null}
    </div>
  );
}
