"use client";

import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { capturePostHogEvent } from "@/lib/posthog/client";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";

const stages = [
  ["", "Select stage"],
  ["idea", "Idea / Pre-Product"],
  ["mvp", "Building MVP"],
  ["launch", "Post-Launch / Early Traction"],
  ["scaling", "Scaling Operations"]
];

const teamSizes = [
  ["", "Select size"],
  ["1", "Solo Founder"],
  ["2-3", "2-3 Members"],
  ["4-10", "4-10 Members"],
  ["11+", "11+ Members"]
];

const supportNeeds = [
  ["", "Select primary need"],
  ["validation", "Validate the startup idea"],
  ["mvp", "Build a focused MVP"],
  ["ops", "Install operating systems"],
  ["growth", "Set up growth infrastructure"],
  ["full", "End-to-end startup support"]
];

const timelines = [
  ["", "Select timeline"],
  ["soon", "As soon as possible"],
  ["month", "This month"],
  ["planning", "Planning ahead"]
];

const countryCodes = [
  ["+91", "🇮🇳 +91"],
  ["+1", "🇺🇸 +1"],
  ["+44", "🇬🇧 +44"],
  ["+971", "🇦🇪 +971"],
  ["+65", "🇸🇬 +65"]
];

const preferredCommunication = [
  ["", "Select channel"],
  ["email", "Email"],
  ["whatsapp", "WhatsApp"],
  ["telegram", "Telegram"],
  ["google-meet", "Google Meet"]
];

export function DiscoverySection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [toast, setToast] = useState<{ tone: "loading" | "success" | "error"; message: string } | null>(null);
  const [hasStartedForm, setHasStartedForm] = useState(false);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timer = window.setTimeout(() => {
      setToast(null);
    }, 7000);

    return () => window.clearTimeout(timer);
  }, [toast]);

  function handleFormInteraction() {
    if (hasStartedForm) {
      return;
    }

    setHasStartedForm(true);
    capturePostHogEvent("discovery_form_started");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setToast({ tone: "loading", message: "Submitting your discovery request..." });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const value = (key: string) => String(formData.get(key) || "").trim();
    const optionalValue = (key: string) => value(key) || null;
    const countryCode = value("country-code");
    const phoneNumber = value("phone-number");

    const payload = {
      founder_name: optionalValue("founder-name"),
      startup_name: optionalValue("startup-name"),
      email: value("email"),
      phone: phoneNumber ? `${countryCode} ${phoneNumber}` : null,
      communication_preference: optionalValue("preferred-communication"),
      stage: optionalValue("stage"),
      team_size: optionalValue("team-size"),
      startup_description: optionalValue("building"),
      bottleneck: optionalValue("bottleneck"),
      website: optionalValue("website")
    };

    capturePostHogEvent("discovery_form_submit_attempted", {
      communication_preference: payload.communication_preference,
      stage: payload.stage,
      team_size: payload.team_size,
      has_phone: Boolean(payload.phone),
      has_website: Boolean(payload.website)
    });

    const supabase = createBrowserSupabaseClient();
    const { error } = await supabase.from("discovery_submissions").insert(payload);

    if (error) {
      capturePostHogEvent("discovery_form_failed", {
        stage: payload.stage,
        team_size: payload.team_size
      });
      const errorMessage = "We could not submit your discovery request. Please try again.";
      setStatus("error");
      setToast({ tone: "error", message: errorMessage });
      return;
    }

    capturePostHogEvent("discovery_form_submitted", {
      communication_preference: payload.communication_preference,
      stage: payload.stage,
      team_size: payload.team_size,
      has_phone: Boolean(payload.phone),
      has_website: Boolean(payload.website)
    });

    form.reset();
    const successMessage = "Discovery request transmitted successfully. We'll review your submission and respond within 24-48 hours.";
    setStatus("success");
    setToast({ tone: "success", message: successMessage });
  }

  return (
    <>
      {toast ? (
        <div
          className="fixed bottom-5 right-5 z-[999] w-[min(380px,calc(100vw-40px))] rounded-md border border-primary/20 bg-surface-container-lowest p-4 shadow-[0_18px_50px_rgba(0,0,0,0.45),0_0_34px_rgba(178,213,255,0.12)]"
          role="alert"
        >
          <div className="flex items-start gap-3">
            <span
              className={
                toast.tone === "error"
                  ? "mt-1 size-2 rounded-full bg-[#ffb4ab]"
                  : toast.tone === "loading"
                    ? "mt-0.5 size-3 animate-spin rounded-full border border-primary/20 border-t-primary"
                    : "mt-1 size-2 rounded-full bg-primary shadow-[0_0_14px_rgba(178,213,255,0.7)]"
              }
            />
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                {toast.tone === "error" ? "Submission Failed" : toast.tone === "loading" ? "Transmitting" : "Transmitted"}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-on-surface-variant">{toast.message}</p>
            </div>
            {toast.tone !== "loading" ? (
              <button
                aria-label="Dismiss notification"
                className="active-scale rounded-sm border border-white/10 px-2 py-1 font-mono text-[10px] uppercase text-on-surface-variant transition-colors hover:border-white/25 hover:text-on-surface"
                onClick={() => setToast(null)}
                type="button"
              >
                Close
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
      <section
        className="relative overflow-hidden border-t border-white/5 bg-surface-container-high py-16 md:py-[72px]"
        data-analytics-section="discovery"
        id="discovery"
      >
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
          <div className="grid h-full w-full grid-cols-12">
            {Array.from({ length: 12 }).map((_, index) => (
              <div className="h-full border-r border-on-surface" key={index} />
            ))}
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-margin">
          <div className="mb-8 text-center md:mb-10">
            <span className="section-eyebrow">Founder Intake</span>
            <h2 className="section-title mx-auto mt-3 max-w-xl">Start Your Discovery</h2>
            <p className="section-copy mx-auto mt-4 max-w-xl">
              Tell us about your startup, current bottlenecks, and what you&apos;re trying to build.
            </p>
          </div>
          <div className="glass-panel rounded-sm border border-white/10 p-6 shadow-2xl md:p-8">
            <form className="space-y-5" onFocusCapture={handleFormInteraction} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field id="founder-name" label="Founder Name" placeholder="Enter name" />
              <Field id="startup-name" label="Startup Name" placeholder="Project or Entity name" />
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <Field id="email" label="Email Address" placeholder="founder@startup.com" type="email" required />
              <PhoneField />
            </div>
            <SelectField id="preferred-communication" label="Preferred Communication" options={preferredCommunication} />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <SelectField id="stage" label="Current Stage" options={stages} />
              <SelectField id="team-size" label="Team Size" options={teamSizes} />
            </div>
            <TextArea id="building" label="What are you building?" placeholder="Brief description of the product or service" />
            <TextArea id="bottleneck" label="Primary Operational Bottleneck" placeholder="What is slowing down your execution right now?" />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <SelectField id="support" label="Support Needed" options={supportNeeds} />
              <SelectField id="timeline" label="Expected Timeline" options={timelines} />
            </div>
            <Field id="website" label="Product Link" placeholder="https://" type="url" />
            <div className="flex justify-end border-t border-white/5 pt-5">
              <button
                className="active-scale inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-8 py-3 font-mono text-[12px] font-bold uppercase tracking-wider text-on-primary transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                data-analytics-cta="true"
                data-analytics-label="Start Discovery"
                data-analytics-location="discovery_form"
                disabled={status === "submitting"}
                type="submit"
              >
                {status === "submitting" ? (
                  <>
                    <span className="size-3 animate-spin rounded-full border border-on-primary/30 border-t-on-primary" />
                    Submitting
                  </>
                ) : (
                  "Start Discovery"
                )}
              </button>
            </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
};

function Field({ id, label, placeholder, type = "text", required = false }: FieldProps) {
  return (
    <div>
      <label className="op-label" htmlFor={id}>
        {label} {required ? <span className="text-primary">*</span> : null}
      </label>
      <input className="op-input" id={id} name={id} placeholder={placeholder} required={required} type={type} />
    </div>
  );
}

function PhoneField() {
  return (
    <div>
      <label className="op-label" htmlFor="phone-number">
        Phone Number <span className="normal-case tracking-normal text-on-surface-variant/60">(Optional)</span>
      </label>
      <div className="grid grid-cols-[118px_1fr] gap-2">
        <select
          aria-label="Country code"
          className="op-input bg-surface-container px-3"
          defaultValue="+91"
          id="country-code"
          name="country-code"
        >
          {countryCodes.map(([value, copy]) => (
            <option key={value} value={value}>
              {copy}
            </option>
          ))}
        </select>
        <input
          className="op-input"
          id="phone-number"
          inputMode="tel"
          name="phone-number"
          placeholder="Phone number"
          type="tel"
        />
      </div>
    </div>
  );
}

function TextArea({ id, label, placeholder }: FieldProps) {
  return (
    <div>
      <label className="op-label" htmlFor={id}>
        {label}
      </label>
      <textarea className="op-input min-h-20 resize-y" id={id} name={id} placeholder={placeholder} />
    </div>
  );
}

function SelectField({ id, label, options }: { id: string; label: string; options: string[][] }) {
  return (
    <div>
      <label className="op-label" htmlFor={id}>
        {label}
      </label>
      <select className="op-input bg-surface-container" id={id} name={id} defaultValue="">
        {options.map(([value, copy], index) => (
          <option disabled={index === 0} key={value || copy} value={value}>
            {copy}
          </option>
        ))}
      </select>
    </div>
  );
}
