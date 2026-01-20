"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import SkillMarquee from "@/components/SkillMarquee";
import Projects from "@/components/Projects";
import CoreExpertise from "@/components/CoreExpertise";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="bg-[#050505] min-h-screen scroll-smooth">
      <Preloader onComplete={() => setIsLoading(false)} />
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        <section id="home">
          <Hero isLoaded={!isLoading} />
        </section>
        <SkillMarquee />
        <Projects />
        <section id="expertise">
          <CoreExpertise />
        </section>
        <About />
        <section id="contact">
          <ContactCTA />
        </section>
        <Footer />
      </div>
    </main>
  );
}