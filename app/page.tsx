import Hero from "@/components/Hero";
import { Stats, Marquee, Mission, Philosophy } from "@/components/SectionsA";
import { Services, About, GivingBack } from "@/components/SectionsB";
import { Testimonials, Process, Pricing, FAQs, CTABanner, Contact } from "@/components/SectionsC";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Marquee />
      <Mission />
      <Philosophy />
      <Services />
      <About />
      <GivingBack />
      <Testimonials />
      <Process />
      <Pricing />
      <FAQs />
      <CTABanner />
      <Contact />
    </>
  );
}
