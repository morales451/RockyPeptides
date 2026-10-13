import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Familiar from "@/components/Familiar";
import Basics from "@/components/Basics";
import WhyEvolve from "@/components/WhyEvolve";
import DosingGuide from "@/components/DosingGuide";
import WhatToExpect from "@/components/WhatToExpect";
import WeightLossProjection from "@/components/WeightLossProjection";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import Myths from "@/components/Myths";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Familiar />
        <Basics />
        <WhyEvolve />
        <DosingGuide />
        <WhatToExpect />
        <WeightLossProjection />
        <SocialProof />
        <Pricing />
        <Myths />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
