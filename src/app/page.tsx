import { DiscoverySection } from "@/features/marketing/sections/discovery-section";
import { Footer } from "@/features/marketing/sections/footer";
import { HeroSection } from "@/features/marketing/sections/hero-section";
import { Navigation } from "@/features/marketing/sections/navigation";
import { PhilosophySection } from "@/features/marketing/sections/philosophy-section";
import { PipelineSection } from "@/features/marketing/sections/pipeline-section";
import { SprintSection } from "@/features/marketing/sections/sprint-section";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-[68px]">
        <HeroSection />
        <PhilosophySection />
        <PipelineSection />
        <SprintSection />
        <DiscoverySection />
      </main>
      <Footer />
    </>
  );
}
