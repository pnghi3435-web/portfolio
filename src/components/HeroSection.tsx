import React from 'react';
import { HERO_PLATE_MAIN, HERO_SERIES_04 } from '../data/portfolioData';
import { Maximize2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenLightbox: (item: any) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenLightbox }) => {
  return (
    <section className="pt-6 sm:pt-10 pb-16 lg:pb-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
      {/* Top Tag Label */}
      <div className="mb-6 sm:mb-8">
        <span className="inline-block border border-[#8C8984]/50 px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#5A5856] font-medium">
          FINE-ART PORTRAITURE & EDITORIAL MONOCHROME
        </span>
      </div>

      {/* Main Headline & Statement Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
        {/* Left Column: Big Headline */}
        <div className="lg:col-span-8">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[72px] leading-[1.1] font-normal text-[#0D0D0D] tracking-[-0.02em]">
            Bắt trọn chiều sâu &amp; <br />
            thần thái nguyên bản <br />
            qua từng khung hình.
          </h1>
        </div>

        {/* Right Column: Statement & CTAs */}
        <div className="lg:col-span-4 lg:pt-2 flex flex-col justify-between">
          <p className="text-[#5A5856] text-sm sm:text-[15px] leading-relaxed font-light mb-8 max-w-md">
            Chúng tôi kiến tạo những tác phẩm chân dung đen trắng độc bản, nơi ánh sáng Chiaroscuro tôn vinh sự chân thực, nội tâm và thần thái quyền quý của bạn.
          </p>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center bg-[#0D0D0D] hover:bg-[#2A2928] text-[#FAFAF8] px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium transition-colors text-center border border-[#0D0D0D]"
            >
              KHÁM PHÁ PORTFOLIO
            </a>
            <a
              href="#investment"
              className="inline-flex items-center justify-center bg-transparent hover:bg-[#0D0D0D] hover:text-[#FAFAF8] text-[#0D0D0D] px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium transition-colors text-center border border-[#0D0D0D]"
            >
              TÌM HIỂU GÓI CHỤP
            </a>
          </div>
        </div>
      </div>

      {/* Two Hero Photographic Plates */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Left Plate: Large Plate 01 */}
        <div
          onClick={() =>
            onOpenLightbox({
              id: 'hero-plate-01',
              title: HERO_PLATE_MAIN.title,
              subtitle: HERO_PLATE_MAIN.subtitle,
              imageUrl: HERO_PLATE_MAIN.imageUrl,
              badge: 'PLATE NO. 01',
              metadata: {
                camera: HERO_PLATE_MAIN.camera,
                lens: HERO_PLATE_MAIN.lens,
                settings: HERO_PLATE_MAIN.settings,
                paper: HERO_PLATE_MAIN.paper,
              },
            })
          }
          className="group relative cursor-pointer lg:col-span-8 bg-[#0D0D0D] overflow-hidden flex flex-col justify-end min-h-[420px] sm:min-h-[520px] lg:min-h-[580px]"
        >
          <img
            src={HERO_PLATE_MAIN.imageUrl}
            alt="The Inner Light — Fine Art Portrait"
            className="absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-[1.15] brightness-95 group-hover:scale-[1.015] transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />

          {/* Subtle gradient vignette at bottom to guarantee plate caption readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Plate caption at bottom */}
          <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#FAFAF8]/90 font-medium">
              {HERO_PLATE_MAIN.title} ({HERO_PLATE_MAIN.subtitle})
            </span>
            <span className="text-[#FAFAF8]/70 group-hover:text-white transition-colors p-1.5 bg-black/40 backdrop-blur-xs">
              <Maximize2 className="w-4 h-4 stroke-[1.5]" />
            </span>
          </div>
        </div>

        {/* Right Plate: Series No. 04 Card */}
        <div
          onClick={() =>
            onOpenLightbox({
              id: 'hero-series-04',
              title: HERO_SERIES_04.title,
              subtitle: HERO_SERIES_04.caption,
              imageUrl: HERO_SERIES_04.imageUrl,
              badge: HERO_SERIES_04.series,
              metadata: {
                camera: HERO_SERIES_04.camera,
                lens: HERO_SERIES_04.lens,
                settings: HERO_SERIES_04.settings,
              },
            })
          }
          className="group relative cursor-pointer lg:col-span-4 bg-[#FFFFFF] border border-[#8C8984]/25 p-6 sm:p-8 flex flex-col justify-between"
        >
          {/* Top Series Badge & Date */}
          <div className="flex items-center justify-between pb-4 border-b border-[#8C8984]/15 mb-4">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#0D0D0D] font-semibold">
              {HERO_SERIES_04.series}
            </span>
            <span className="text-[10px] uppercase tracking-[0.14em] text-[#8C8984]">
              {HERO_SERIES_04.year}
            </span>
          </div>

          {/* Photo in frame */}
          <div className="relative w-full aspect-[4/5] bg-[#1C1B1B] overflow-hidden mb-6">
            <img
              src={HERO_SERIES_04.imageUrl}
              alt="Nghệ sĩ thị giác"
              className="w-full h-full object-cover object-top filter grayscale contrast-[1.2] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Bottom title block */}
          <div className="text-center pt-2">
            <h3 className="font-serif text-lg sm:text-xl font-normal text-[#0D0D0D] tracking-[0.12em] uppercase">
              {HERO_SERIES_04.title}
            </h3>
            <p className="text-[11px] text-[#8C8984] tracking-[0.08em] mt-1">
              Chiaroscuro Master Edition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
