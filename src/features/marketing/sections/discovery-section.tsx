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
  ["validation", "Idea Validation"],
  ["engineering", "MVP Engineering"],
  ["ops", "Operational Systems"],
  ["growth", "Growth Infrastructure"],
  ["full", "Full Pipeline Deployment"]
];

const timelines = [
  ["", "Select timeline"],
  ["immediate", "Immediate (Next 2 Weeks)"],
  ["1month", "Within 1 Month"],
  ["q-next", "Next Quarter"]
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
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-surface-container-high py-16 md:py-[72px]" id="discovery">
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div className="grid h-full w-full grid-cols-12">
          {Array.from({ length: 12 }).map((_, index) => (
            <div className="h-full border-r border-on-surface" key={index} />
          ))}
        </div>
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-margin">
        <div className="mb-8 text-center md:mb-10">
          <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-primary">System Intake</span>
          <h2 className="text-3xl font-bold leading-tight text-on-surface">Start Your Discovery</h2>
          <p className="mt-4 text-body-sm text-on-surface-variant">
            Tell us about your startup, current bottlenecks, and what you&apos;re trying to build.
          </p>
        </div>
        <div className="glass-panel rounded-sm border border-white/10 p-6 shadow-2xl md:p-8">
          <form className="space-y-5">
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
            <Field id="website" label="Website / Artifact Link" placeholder="https://" type="url" />
            <div className="flex justify-end border-t border-white/5 pt-5">
              <button
                className="active-scale rounded-sm bg-primary px-8 py-3 font-mono text-[12px] font-bold uppercase tracking-wider text-on-primary transition-colors hover:bg-primary/90"
                type="submit"
              >
                Submit Discovery Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
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
