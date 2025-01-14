import Features from "@/components/features";
import Hero from "@/components/hero";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <main className="w-full flex flex-col items-center">
        <Navbar />
        <MaxWidthWrapper className="flex flex-col items-center">
          <Hero />
          <Features />
          {/* <Testimonials /> */}
          {/* <CTA /> */}
        </MaxWidthWrapper>
      </main>
    </div>
  );
}
