"use client";

import posthog from "posthog-js";

type EventProperties = Record<string, boolean | number | string | null | undefined>;

let isPostHogInitialized = false;

export function initPostHog() {
  if (typeof window === "undefined" || isPostHogInitialized) {
    return;
  }

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (!key || !host) {
    return;
  }

  posthog.init(key, {
    api_host: host,
    autocapture: true,
    capture_pageview: false,
    capture_heatmaps: true,
    defaults: "2026-01-30",
    person_profiles: "identified_only",
    session_recording: {
      maskAllInputs: true
    }
  });

  isPostHogInitialized = true;
}

export function capturePostHogEvent(event: string, properties?: EventProperties) {
  initPostHog();

  if (!isPostHogInitialized) {
    return;
  }

  posthog.capture(event, properties);
}
