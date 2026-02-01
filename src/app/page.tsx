"use client";

import { useEffect, useRef, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { MarketStats } from '@/components/MarketStats';
import { Comparison } from '@/components/Comparison';
import { ProfitCalculator } from '@/components/ProfitCalculator';
import { MenuShowcase } from '@/components/MenuShowcase';
import { ChefLessOps } from '@/components/ChefLessOps';
import { SupportSection } from '@/components/SupportSection';
import { ContactForm } from '@/components/ContactForm';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { StickyFooter } from '@/components/StickyFooter';
import { FloatingWhatsAppButton } from '@/components/FloatingWhatsAppButton';

export default function Page() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showStickyFooter, setShowStickyFooter] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky footer when hero section is out of view
        setShowStickyFooter(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-stone-50 min-h-screen">
      <Navbar />
      <main>
        <div ref={heroRef}>
          <Hero />
        </div>
        <MarketStats />
        <Comparison />
        <ProfitCalculator />
        <MenuShowcase />
        <ChefLessOps />
        <SupportSection />

        
        <Testimonials />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
      {showStickyFooter && <StickyFooter />}
      <FloatingWhatsAppButton />
    </div>
  );
}

