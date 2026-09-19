import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAFAF8] border-t border-[#8C8984]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block border border-[#8C8984]/50 px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#5A5856] font-medium mb-4">
            CẢM NHẬN &amp; ĐÁNH GIÁ
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#0D0D0D] tracking-[-0.01em]">
            Tiếng Nói Của Sự Đồng Cảm
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#747878] tracking-[0.06em]">
            Những sẻ chia từ nhân vật, nhà sáng lập và các gia đình sau hành trình sáng tạo tại Atelier
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-[#8C8984]/25 p-8 sm:p-10 flex flex-col justify-between hover:border-[#0D0D0D] transition-all duration-300"
            >
              <div>
                <span className="font-serif text-3xl text-[#8C8984] block mb-4">“</span>
                <p className="font-serif text-base sm:text-lg text-[#0D0D0D] leading-relaxed mb-6 font-normal">
                  {t.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-[#8C8984]/20 flex items-center space-x-4">
                {t.portraitUrl && (
                  <img
                    src={t.portraitUrl}
                    alt={t.author}
                    className="w-11 h-11 object-cover filter grayscale contrast-125 border border-[#8C8984]/30"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#0D0D0D]">{t.author}</h4>
                  <p className="text-[11px] text-[#747878] uppercase tracking-[0.08em]">{t.role}</p>
                  <p className="text-[10px] text-[#8C8984]">{t.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
