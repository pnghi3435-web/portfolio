import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { GallerySection } from './components/GallerySection';
import { InvestmentSection } from './components/InvestmentSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { ArchivalBoxModal } from './components/ArchivalBoxModal';
import { PortfolioItem } from './types';

export default function App() {
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);
  const [archivalBoxOpen, setArchivalBoxOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string>('executive-presence');

  const scrollToContact = (tierId?: string) => {
    if (tierId) {
      setSelectedTierId(tierId);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookConcept = (conceptTitle: string) => {
    scrollToContact();
    // Pre-fill story or focus if needed
    const storyInput = document.querySelector('textarea');
    if (storyInput) {
      storyInput.value = `Tôi muốn tìm hiểu và tư vấn buổi chụp phong cách: ${conceptTitle}`;
      storyInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1A1C1B]">
      {/* Top Navigation */}
      <Navbar onOpenBooking={() => scrollToContact()} />

      {/* Main Content Sections matching the mockup */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenBooking={() => scrollToContact()}
          onOpenLightbox={(item) => setActiveLightboxItem(item)}
        />

        {/* 2. Philosophy Section (Triết lý nghệ thuật) */}
        <PhilosophySection />

        {/* 3. Curated Portrait Galleries */}
        <GallerySection
          onOpenLightbox={(item) => setActiveLightboxItem(item)}
          onOpenArchivalBox={() => setArchivalBoxOpen(true)}
        />

        {/* 4. Session Experiences & Investment (Gói chụp & Biểu phí) */}
        <InvestmentSection
          onSelectTier={(tierId) => scrollToContact(tierId)}
        />

        {/* 5. Testimonials (Tiếng Nói Của Sự Đồng Cảm) */}
        <TestimonialsSection />

        {/* 6. Contact & Consultation Booking Form */}
        <ContactSection selectedTierId={selectedTierId} />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Interactive Lightbox Modal for High-Fidelity Viewing */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
        onBookConcept={handleBookConcept}
      />

      {/* Archival Box Monograph Request Modal */}
      <ArchivalBoxModal
        isOpen={archivalBoxOpen}
        onClose={() => setArchivalBoxOpen(false)}
        onRequestBox={(name, phone, email) => {
          console.log('Archival Box requested:', { name, phone, email });
        }}
      />
    </div>
  );
}
