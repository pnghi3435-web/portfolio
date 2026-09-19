import React from 'react';
import { PRICING_TIERS } from '../data/portfolioData';
import { PricingTier } from '../types';
import { Check } from 'lucide-react';

interface InvestmentSectionProps {
  onSelectTier: (tierId: string) => void;
}

export const InvestmentSection: React.FC<InvestmentSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="investment" className="py-20 lg:py-28 bg-[#F4F4F2] border-t border-[#8C8984]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 lg:mb-20">
          <span className="inline-block border border-[#8C8984]/50 px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#5A5856] font-medium mb-4">
            TRẢI NGHIỆM CHỤP &amp; BIỂU PHÍ
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal text-[#0D0D0D] tracking-[-0.01em]">
            Session Experiences &amp; Investment
          </h2>
          <p className="mt-4 text-[#5A5856] text-sm sm:text-[15px] font-light max-w-2xl leading-relaxed">
            Mỗi tác phẩm tại PN Studio là kết tinh của nghệ thuật ánh sáng, kỹ nghệ in tráng phòng tối bảo tàng và trải nghiệm tiếp đón độc bản dành riêng cho bạn.
          </p>
        </div>

        {/* 3 Columns Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier: PricingTier) => {
            const isDark = tier.highlighted;

            return (
              <div
                key={tier.id}
                className={`relative p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isDark
                    ? 'bg-[#0D0D0D] text-[#FAFAF8] shadow-[0_12px_40px_rgba(0,0,0,0.2)] lg:-translate-y-2 border border-[#0D0D0D]'
                    : 'bg-[#FAFAF8] text-[#1A1C1B] border border-[#8C8984]/25 hover:border-[#0D0D0D]'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-current/15 mb-6">
                    <span
                      className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${
                        isDark ? 'text-[#C4C7C7]' : 'text-[#8C8984]'
                      }`}
                    >
                      {tier.badge}
                    </span>
                    {isDark && (
                      <span className="bg-[#FAFAF8] text-[#0D0D0D] text-[9px] uppercase tracking-[0.16em] px-2 py-0.5 font-bold">
                        RECOMMENDED
                      </span>
                    )}
                  </div>

                  {/* Title & Category */}
                  <h3
                    className={`font-serif text-2xl sm:text-3xl font-normal mb-1 tracking-tight ${
                      isDark ? 'text-[#FAFAF8]' : 'text-[#0D0D0D]'
                    }`}
                  >
                    {tier.englishTitle}
                  </h3>
                  <p
                    className={`text-xs uppercase tracking-[0.12em] mb-6 ${
                      isDark ? 'text-[#A0A09E]' : 'text-[#747878]'
                    }`}
                  >
                    {tier.name}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2">
                      <span className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
                        {tier.price}
                      </span>
                    </div>
                    <p
                      className={`text-[11px] tracking-[0.05em] mt-1 ${
                        isDark ? 'text-[#858383]' : 'text-[#8C8984]'
                      }`}
                    >
                      (Chi phí trọn gói bản quyền tác giả &amp; sản phẩm vật lý)
                    </p>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-[13px] leading-relaxed mb-8 font-light ${
                      isDark ? 'text-[#C9C6C5]' : 'text-[#5A5856]'
                    }`}
                  >
                    {tier.description}
                  </p>

                  {/* Duration pill */}
                  <div
                    className={`mb-8 p-3 text-[11px] uppercase tracking-[0.12em] text-center border ${
                      isDark
                        ? 'border-[#FAFAF8]/20 bg-white/5 text-[#FAFAF8]'
                        : 'border-[#8C8984]/20 bg-white text-[#0D0D0D]'
                    }`}
                  >
                    {tier.duration}
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p
                      className={`text-[11px] uppercase tracking-[0.16em] font-medium ${
                        isDark ? 'text-[#FAFAF8]' : 'text-[#0D0D0D]'
                      }`}
                    >
                      Tác Phẩm Bàn Giao:
                    </p>
                    {tier.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-xs leading-relaxed">
                        <Check
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 stroke-[2] ${
                            isDark ? 'text-[#FAFAF8]' : 'text-[#0D0D0D]'
                          }`}
                        />
                        <span className={isDark ? 'text-[#E5E2E1]' : 'text-[#444748]'}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-6 border-t border-current/15 mt-6">
                  <button
                    onClick={() => onSelectTier(tier.id)}
                    className={`w-full py-3.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors text-center border ${
                      isDark
                        ? 'bg-[#FAFAF8] text-[#0D0D0D] hover:bg-[#E2E3E1] border-[#FAFAF8]'
                        : 'bg-[#0D0D0D] text-[#FAFAF8] hover:bg-[#2A2928] border-[#0D0D0D]'
                    }`}
                  >
                    LỰA CHỌN GÓI NÀY
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Private Commissions */}
        <div className="mt-12 text-center text-xs text-[#747878] tracking-[0.06em]">
          * Nhận đặt lịch tác phẩm mỹ thuật ngoại cảnh hoặc tư gia biệt thự theo yêu cầu riêng biệt.
        </div>
      </div>
    </section>
  );
};
