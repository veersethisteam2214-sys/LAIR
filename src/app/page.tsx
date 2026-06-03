import ScrollVideoHero from "@/components/ScrollVideoHero";
import {
  Nav,
  WhatIsLair,
  Audience,
  Benefits,
  Membership,
  DashboardPreview,
  About,
  Trust,
  FinalCta,
  Footer,
} from "@/sections/Sections";
import Waitlist from "@/sections/Waitlist";
import Faq from "@/sections/Faq";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <div id="top" className="relative bg-background">
      <Nav />

      {/* Scroll-scrubbed cinematic hero */}
      <ScrollVideoHero />

      {/* Content flows in after the video experience */}
      <main className="relative z-10 bg-background">
        <WhatIsLair />
        <Audience />
        <Benefits />
        <Membership />
        <Waitlist />
        <DashboardPreview />
        <About />
        <Trust />
        <Faq />
        <Contact />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
