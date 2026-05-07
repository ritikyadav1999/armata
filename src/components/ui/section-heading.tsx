type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className={isCentered ? "section-title mx-auto mt-3 max-w-2xl" : "section-title mt-3 max-w-xl"}>{title}</h2>
      {description ? (
        <p className={isCentered ? "section-copy mx-auto mt-4 max-w-2xl" : "section-copy mt-4 max-w-xl"}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
