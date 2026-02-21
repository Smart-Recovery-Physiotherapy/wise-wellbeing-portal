import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BookingSection } from "@/components/BookingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatToExpectSection } from "@/components/WhatToExpectSection";
import HomeVisitSection from "@/components/HomeVisitSection";
import { FeesSection } from "@/components/FeesComponent";
import { CancellationPolicy } from "@/components/CancellationPolicy";
import { ConditionsSection } from "@/components/ConditionsWeTreat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WhatToExpectSection/>
        <ConditionsSection/>
        <ServicesSection />
        <HomeVisitSection/>
        <FeesSection/>
        <BookingSection />
        <CancellationPolicy/>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
