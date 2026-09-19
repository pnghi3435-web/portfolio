import React from 'react';
import { PHILOSOPHY_PORTRAIT } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 lg:py-28 border-t border-[#8C8984]/20 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Photographer in atelier portrait */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] p-4 sm:p-6 border border-[#8C8984]/20">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#1C1B1B]">
                <img
                  src={PHILOSOPHY_PORTRAIT.imageUrl}
                  alt="Portraitist in Atelier"
                  className="w-full h-full object-cover filter grayscale contrast-[1.15]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-4 flex items-center justify-between text-[#8C8984] text-[11px] uppercase tracking-[0.14em]">
                <span>ATELIER ARCHIVE</span>
                <span>HÀ NỘI / SÀI GÒN</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quote & Artistic Creed */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag with subtle rectangle indicator */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#5A5856] font-medium">
                TRIẾT LÝ NGHỆ THUẬT
              </span>
              <span className="w-6 h-[1px] bg-[#8C8984]" />
            </div>

            {/* Giant Monograph Quote */}
            <blockquote className="font-serif text-2xl sm:text-4xl lg:text-[42px] leading-[1.3] text-[#0D0D0D] font-normal mb-8 tracking-[-0.01em]">
              {PHILOSOPHY_PORTRAIT.quote}
            </blockquote>

            {/* Supporting Curatorial Essay */}
            <div className="space-y-4 text-[#5A5856] text-sm sm:text-[15px] leading-relaxed font-light max-w-xl">
              <p>
                Tại PN Studio, chúng tôi từ chối những kỹ thuật làm mịn nhân tạo hay ánh sáng phẳng đại trà. Chúng tôi tin rằng bóng tối không phải là sự thiếu vắng ánh sáng, mà là công cụ điêu khắc định hình nên chiều sâu của tâm hồn.
              </p>
              <p>
                Mỗi buổi chụp là một không gian thiền định và đối thoại, nơi bạn buông bỏ lớp phòng vệ hàng ngày để lộ diện một phiên bản chân thực, bản lĩnh và trường tồn cùng thời gian.
              </p>
            </div>

            {/* Signature & Role */}
            <div className="mt-8 pt-6 border-t border-[#8C8984]/25 flex items-center justify-between">
              <div>
                <p className="font-serif text-lg text-[#0D0D0D]">Phạm Nhật</p>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#8C8984]">
                  Founder &amp; Master Portraitist
                </p>
              </div>
              <div className="text-right">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#0D0D0D] font-medium border-b border-[#0D0D0D] pb-0.5">
                  THE CHIAROSCURO METHOD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
