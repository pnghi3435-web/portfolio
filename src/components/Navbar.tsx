import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (pkgId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tác phẩm', href: '#portfolio' },
    { label: 'TRIẾT LÝ', href: '#philosophy' },
    { label: 'GÓI CHỤP', href: '#investment' },
    { label: 'ĐÁNH GIÁ', href: '#testimonials' },
    { label: 'LIÊN HỆ', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAF8]/95 backdrop-blur-sm border-b border-[#8C8984]/20 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-[#FAFAF8] py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Navigation items - Left/Center as in original design */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs uppercase tracking-[0.14em] text-[#1A1C1B] hover:text-[#5A5856] font-medium transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-[#0D0D0D] after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Logo Brand */}
        <div className="md:hidden flex items-center">
          <a href="#" className="font-serif text-xl tracking-wider font-semibold text-[#0D0D0D]">
            PN STUDIO
          </a>
        </div>

        {/* Booking CTA Button (Exact design: Black rectangle with calendar icon and text) */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onOpenBooking()}
            id="nav-booking-btn"
            className="flex items-center space-x-2.5 bg-[#0D0D0D] hover:bg-[#2A2928] text-[#FAFAF8] px-5 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs uppercase tracking-[0.15em] font-medium transition-all duration-200 active:scale-[0.98] border border-[#0D0D0D]"
          >
            <Calendar className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>ĐẶT LỊCH CHỤP</span>
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0D0D0D] hover:bg-[#EEEEEC] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#8C8984]/20 bg-[#FAFAF8] px-6 py-6 space-y-4">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-[0.14em] text-[#1A1C1B] hover:text-[#5A5856] py-2 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
