import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAFAF8] border-t border-[#8C8984]/20 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Logo */}
          <div>
            <a
              href="#"
              className="font-serif text-2xl tracking-[0.15em] font-normal text-[#0D0D0D] uppercase hover:opacity-80 transition-opacity"
            >
              PN STUDIO
            </a>
          </div>

          {/* Copyright & Curatorial Statement */}
          <div className="text-center md:text-right">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#747878]">
              © 2025 PN STUDIO. ALL RIGHTS RESERVED. ARCHIVAL FINE ART &amp; PORTRAITURE.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.16em] text-[#0D0D0D] hover:text-[#5A5856] py-1 border-b border-[#0D0D0D] transition-colors"
          >
            <span>VỀ ĐẦU TRANG</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
