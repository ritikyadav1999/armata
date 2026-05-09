import { DiscoverySection } from "@/features/marketing/sections/discovery-section";
import { EcosystemSection } from "@/features/marketing/sections/ecosystem-section";
import { Footer } from "@/features/marketing/sections/footer";
import { HeroSection } from "@/features/marketing/sections/hero-section";
import { Navigation } from "@/features/marketing/sections/navigation";
import { PhilosophySection } from "@/features/marketing/sections/philosophy-section";
import { PipelineSection } from "@/features/marketing/sections/pipeline-section";
import { SprintSection } from "@/features/marketing/sections/sprint-section";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Armata",
  url: "https://www.armata.co.in",
  logo: "https://www.armata.co.in/armata-logo.png",
  description:
    "Armata helps early-stage startups validate ideas, build focused MVPs, install operating systems, and create growth infrastructure.",
  brand: {
    "@type": "Brand",
    name: "Armata"
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Startup Idea and Market Validation",
        description: "Validate startup assumptions and collect customer signal before heavy product development."
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Focused MVP Execution",
        description: "Scope and build lean MVP workflows that prove the core value of a startup product."
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Startup Operating Systems",
        description: "Install onboarding, analytics, feedback loops, support workflows, and execution systems for startups."
      }
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Growth Infrastructure",
        description: "Create repeatable acquisition, activation, and learning systems for startup growth."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
      <Navigation />
      <main className="pt-[68px]">
        <HeroSection />
        <PhilosophySection />
        <EcosystemSection />
        <PipelineSection />
        <SprintSection />
        <DiscoverySection />
      </main>
      <Footer />
    </>
  );
}
