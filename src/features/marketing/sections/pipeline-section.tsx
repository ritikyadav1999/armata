"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { pipelineStages } from "@/features/marketing/content";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";

export function PipelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<"processing" | "completing">("processing");
  const [isResetting, setIsResetting] = useState(false);
  const finalStageIndex = pipelineStages.length - 1;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (phase === "processing") {
        setPhase("completing");
        return;
      }

      if (activeIndex === finalStageIndex) {
        setIsResetting(true);
        setActiveIndex(0);
        setPhase("processing");

        window.setTimeout(() => {
          setIsResetting(false);
        }, 80);

        return;
      }

      setActiveIndex((current) => current + 1);
      setPhase("processing");
    }, phase === "processing" ? 1500 : 1100);

    return () => window.clearTimeout(timer);
  }, [activeIndex, finalStageIndex, phase]);

  const progressWidth = useMemo(() => {
    return `${(activeIndex / (pipelineStages.length - 1)) * 100}%`;
  }, [activeIndex]);

  return (
    <section className="py-12 md:py-14" id="pipeline">
      <div className="mx-auto max-w-7xl px-5 sm:px-margin">
        <div className="mb-10 md:mb-12">
          <SectionHeading
            align="center"
            eyebrow="Operating Path"
            title="From Startup Idea to Scalable System"
            description="A clear path from founder assumptions to customer signal, focused product execution, operating loops, and growth systems."
          />
        </div>
        <div
          className={
            isResetting
              ? "pipeline-flow is-resetting relative flex flex-col justify-between gap-4 md:flex-row"
              : "pipeline-flow relative flex flex-col justify-between gap-4 md:flex-row"
          }
        >
          <div className="pipeline-line-layer absolute inset-x-0 top-1/2 -z-10 hidden h-10 -translate-y-1/2 overflow-x-clip md:block">
            <div className="pipeline-track absolute left-0 top-1/2 h-px w-full -translate-y-1/2" />
            <div
              className="pipeline-progress absolute left-0 top-1/2 h-px -translate-y-1/2"
              style={{ width: progressWidth }}
            />
            <div
              className="pipeline-signal absolute left-0 top-1/2 h-px -translate-y-1/2"
              style={{ left: progressWidth }}
            />
          </div>
          {pipelineStages.map((stage, index) => (
            <div
              className="pipeline-node group flex flex-1 flex-col items-center"
              key={stage.title}
              style={{ "--stage-index": index } as CSSProperties}
            >
              <div
                className={
                  [
                    "pipeline-card relative z-10 mb-4 w-full rounded-sm p-4 text-center transition-colors group-hover:border-primary/50",
                    stage.featured ? "is-featured" : "",
                    index < activeIndex ? "is-complete" : "",
                    index === activeIndex ? "is-current" : "",
                    index === activeIndex && phase === "completing" ? "is-completing" : "",
                    index > activeIndex ? "is-pending" : ""
                  ].join(" ")
                }
              >
                <span className="pipeline-card-sheen" aria-hidden="true" />
                <span className="pipeline-card-dot" aria-hidden="true" />
                <span className="pipeline-card-check" aria-hidden="true" />
                <span
                  className={
                    index <= activeIndex || stage.featured
                      ? "mb-1 block font-mono text-[10px] uppercase text-primary"
                      : "mb-1 block font-mono text-[10px] uppercase text-on-surface-variant"
                  }
                >
                  {stage.meta}
                </span>
                <h3 className={index <= activeIndex || stage.featured ? "text-sm font-semibold text-primary" : "text-sm font-semibold"}>
                  {stage.title}
                </h3>
              </div>
              {index < pipelineStages.length - 1 ? (
                <div
                  className={
                    index < activeIndex
                      ? "mobile-pipeline-track is-complete relative h-6 w-px overflow-hidden md:hidden"
                      : "mobile-pipeline-track relative h-6 w-px overflow-hidden md:hidden"
                  }
                >
                  {index === activeIndex ? <span className="mobile-pipeline-signal" /> : null}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
