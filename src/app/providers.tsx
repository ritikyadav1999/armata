"use client";

import { capturePostHogEvent, initPostHog } from "@/lib/posthog/client";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, type ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    initPostHog();
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      <PostHogBehaviorTracking />
      {children}
    </>
  );
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    capturePostHogEvent("$pageview", {
      $current_url: window.location.href,
      path: url
    });
  }, [pathname, searchParams]);

  return null;
}

function PostHogBehaviorTracking() {
  useEffect(() => {
    const viewedSections = new Set<string>();
    const scrollDepths = [25, 50, 75, 90];
    const capturedDepths = new Set<number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const section = entry.target.getAttribute("data-analytics-section");

          if (!section || viewedSections.has(section)) {
            return;
          }

          viewedSections.add(section);
          capturePostHogEvent("section_viewed", {
            section
          });
        });
      },
      {
        threshold: 0.45
      }
    );

    document.querySelectorAll<HTMLElement>("[data-analytics-section]").forEach((section) => {
      observer.observe(section);
    });

    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-analytics-cta]") : null;

      if (!target) {
        return;
      }

      capturePostHogEvent("cta_clicked", {
        label: target.getAttribute("data-analytics-label") || target.textContent?.trim() || "Unknown",
        location: target.getAttribute("data-analytics-location") || "unknown",
        target: target.getAttribute("href") || target.getAttribute("data-analytics-target")
      });
    }

    function handleScroll() {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        return;
      }

      const depth = Math.round((window.scrollY / scrollableHeight) * 100);

      scrollDepths.forEach((threshold) => {
        if (depth >= threshold && !capturedDepths.has(threshold)) {
          capturedDepths.add(threshold);
          capturePostHogEvent("scroll_depth_reached", {
            depth: threshold
          });
        }
      });
    }

    document.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
