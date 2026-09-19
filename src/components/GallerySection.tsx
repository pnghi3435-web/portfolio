import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { CategoryType, PortfolioItem } from '../types';
import { ArrowRight, Maximize2 } from 'lucide-react';

interface GallerySectionProps {
  onOpenLightbox: (item: PortfolioItem) => void;
  onOpenArchivalBox: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onOpenLightbox,
  onOpenArchivalBox,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'TẤT CẢ' },
    { id: 'editorial', label: 'EDITORIAL & THỜI TRANG' },
    { id: 'executive', label: 'DOANH NHÂN & LÃNH ĐẠO' },
    { id: 'fineart', label: 'FINE ART PORTRAIT' },
    { id: 'heritage', label: 'GIA ĐÌNH & DI SẢN' },
  ];

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  // Highlight specific cards as in screenshot when viewing "all"
  const topRowItems = activeCategory === 'all' ? filteredItems.slice(0, 2) : [];
  const bottomRowItems = activeCategory === 'all' ? filteredItems.slice(2, 5) : filteredItems;

  return (
    <section id="portfolio" className="py-20 lg:py-28 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
        <div>
          <span className="inline-block border border-[#8C8984]/50 px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#5A5856] font-medium mb-4">
            TUYỂN TẬP TÁC PHẨM
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#0D0D0D] tracking-[-0.01em]">
            Curated Portrait Galleries
          </h2>
        </div>

        {/* Filter Categories Buttons */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 text-[11px] uppercase tracking-[0.14em] font-medium transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#0D0D0D] text-[#FAFAF8] border-[#0D0D0D]'
                    : 'bg-transparent text-[#5A5856] border-[#8C8984]/30 hover:border-[#0D0D0D] hover:text-[#0D0D0D]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Grid */}
      {activeCategory === 'all' ? (
        <div className="space-y-8">
          {/* Top Row: 2 Asymmetric / Large Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Card 1: Nghệ sĩ vĩ cầm An Hạ (approx 7 cols) */}
            {topRowItems[0] && (
              <div
                onClick={() => onOpenLightbox(topRowItems[0])}
                className="lg:col-span-7 group cursor-pointer bg-white border border-[#8C8984]/25 p-4 sm:p-6 transition-all duration-300 hover:border-[#0D0D0D]"
              >
                {/* Minimalist Frame Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-[#8C8984]/15 mb-4 text-[11px] text-[#8C8984] tracking-[0.08em]">
                  <span className="truncate max-w-[280px] sm:max-w-md">
                    Portfolio Nhiếp ảnh Chân dung Chuyên nghiệp
                  </span>
                  <span className="hidden sm:inline">Trang chủ / Dự án</span>
                </div>

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#111111] mb-4">
                  <img
                    src={topRowItems[0].imageUrl}
                    alt={topRowItems[0].title}
                    className="w-full h-full object-cover filter grayscale contrast-[1.18] brightness-95 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 text-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  {/* Subtle lower frame text in photo */}
                  <div className="absolute bottom-3 left-4 text-[10px] text-white/80 tracking-widest uppercase pointer-events-none drop-shadow-sm">
                    Symphony of Shadows • Editorial Portraits, 2024
                  </div>
                </div>

                {/* Bottom Caption */}
                <div className="flex items-baseline justify-between pt-2">
                  <h3 className="font-serif text-lg sm:text-xl text-[#0D0D0D] font-normal group-hover:underline">
                    {topRowItems[0].title}
                  </h3>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#8C8984]">
                    {topRowItems[0].badge}
                  </span>
                </div>
              </div>
            )}

            {/* Card 2: Founder Trần Quốc Dũng (approx 5 cols) */}
            {topRowItems[1] && (
              <div
                onClick={() => onOpenLightbox(topRowItems[1])}
                className="lg:col-span-5 group cursor-pointer bg-white border border-[#8C8984]/25 p-4 sm:p-6 transition-all duration-300 hover:border-[#0D0D0D]"
              >
                {/* Frame Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-[#8C8984]/15 mb-4 text-[11px] text-[#8C8984] tracking-[0.08em]">
                  <span className="uppercase tracking-wider text-[#0D0D0D] font-medium">
                    DŨNG CEO CÔNG NGHỆ
                  </span>
                  <span>NOVA TECH</span>
                </div>

                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-[#111111] mb-4">
                  <img
                    src={topRowItems[1].imageUrl}
                    alt={topRowItems[1].title}
                    className="w-full h-full object-cover filter grayscale contrast-[1.2] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 text-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 stroke-[1.5]" />
                  </div>
                </div>

                {/* Bottom Caption */}
                <div className="flex items-baseline justify-between pt-2">
                  <h3 className="font-serif text-lg sm:text-xl text-[#0D0D0D] font-normal group-hover:underline">
                    {topRowItems[1].title}
                  </h3>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-[#8C8984]">
                    {topRowItems[1].badge}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Row: 3 Columns matching original */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bottomRowItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group cursor-pointer bg-white border border-[#8C8984]/25 p-4 sm:p-6 transition-all duration-300 hover:border-[#0D0D0D] flex flex-col justify-between"
              >
                <div>
                  {item.frameTitle && (
                    <div className="pb-3 border-b border-[#8C8984]/15 mb-3 text-[10px] uppercase tracking-[0.12em] text-[#8C8984] truncate">
                      {item.frameTitle}
                    </div>
                  )}

                  <div className="relative aspect-[3/4] overflow-hidden bg-[#111111] mb-4">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover filter grayscale contrast-[1.18] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-black/60 text-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4 stroke-[1.5]" />
                    </div>
                  </div>
                </div>

                <div className="flex items-baseline justify-between pt-2 border-t border-[#8C8984]/10">
                  <h3 className="font-serif text-base sm:text-lg text-[#0D0D0D] font-normal group-hover:underline truncate pr-2">
                    {item.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#8C8984] shrink-0">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Filtered Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group cursor-pointer bg-white border border-[#8C8984]/25 p-4 sm:p-6 transition-all duration-300 hover:border-[#0D0D0D] flex flex-col justify-between"
            >
              <div>
                {item.frameTitle && (
                  <div className="pb-3 border-b border-[#8C8984]/15 mb-3 text-[10px] uppercase tracking-[0.12em] text-[#8C8984] truncate">
                    {item.frameTitle}
                  </div>
                )}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#111111] mb-4">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover filter grayscale contrast-[1.18] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 text-white p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 stroke-[1.5]" />
                  </div>
                </div>
              </div>

              <div className="flex items-baseline justify-between pt-2 border-t border-[#8C8984]/10">
                <h3 className="font-serif text-base sm:text-lg text-[#0D0D0D] font-normal group-hover:underline truncate pr-2">
                  {item.title}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#8C8984] shrink-0">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Curatorial Archival Link */}
      <div className="mt-16 text-center">
        <button
          onClick={onOpenArchivalBox}
          id="open-archival-box-btn"
          className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] text-[#0D0D0D] hover:text-[#5A5856] font-medium py-3 border-b border-[#0D0D0D] transition-colors group"
        >
          <span>YÊU CẦU XEM PORTFOLIO MỞ RỘNG DẠNG ARCHIVAL BOX</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
