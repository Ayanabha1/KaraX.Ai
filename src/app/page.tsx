import AskKaraX from "@/components/ask-karax";
import Features from "@/components/features";
import Hero from "@/components/hero";
import Integrations from "@/components/integrations";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";
import { TrustedOrganizations } from "@/components/trusted-by-orgs";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <main className="w-full flex flex-col items-center overflow-x-hidden">
        <Navbar />
        <MaxWidthWrapper className="flex flex-col items-center">
          <Hero />
          <TrustedOrganizations />
          <Features />
          <AskKaraX />
          <Integrations />
          {/* <Testimonials /> */}
          {/* <CTA /> */}
        </MaxWidthWrapper>
      </main>
    </div>
  );
}
