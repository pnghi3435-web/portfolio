import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { PRICING_TIERS, STUDIO_INFO } from '../data/portfolioData';
import { BookingFormData } from '../types';

interface ContactSectionProps {
  selectedTierId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedTierId }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    packageId: selectedTierId || 'executive-presence',
    preferredDate: '',
    story: '',
    agreedToTerms: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (selectedTierId) {
      setFormData((prev) => ({ ...prev, packageId: selectedTierId }));
    }
  }, [selectedTierId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage('Vui lòng điền đầy đủ Họ tên, Số điện thoại và Email liên hệ.');
      return;
    }
    if (!formData.agreedToTerms) {
      setErrorMessage('Vui lòng chấp nhận điều khoản bảo mật của PN Studio.');
      return;
    }

    setErrorMessage('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFAF8] border-t border-[#8C8984]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5">
            <span className="inline-block border border-[#8C8984]/50 px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#5A5856] font-medium mb-4">
              LIÊN HỆ ĐẶT LỊCH
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] leading-[1.15] font-normal text-[#0D0D0D] tracking-tight mb-10">
              Khởi đầu tác phẩm <br />
              chân dung của bạn.
            </h2>

            {/* Studio Addresses & Contacts */}
            <div className="space-y-7">
              {/* Hà Nội */}
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 mt-0.5 text-[#0D0D0D] shrink-0 stroke-[1.5]" />
                <div>
                  <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#0D0D0D]">
                    {STUDIO_INFO.hanoi.title}
                  </h4>
                  <p className="text-sm text-[#5A5856] font-light mt-1">
                    {STUDIO_INFO.hanoi.address}
                  </p>
                </div>
              </div>

              {/* Sài Gòn */}
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 mt-0.5 text-[#0D0D0D] shrink-0 stroke-[1.5]" />
                <div>
                  <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#0D0D0D]">
                    {STUDIO_INFO.saigon.title}
                  </h4>
                  <p className="text-sm text-[#5A5856] font-light mt-1">
                    {STUDIO_INFO.saigon.address}
                  </p>
                </div>
              </div>

              {/* Hotline */}
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 mt-0.5 text-[#0D0D0D] shrink-0 stroke-[1.5]" />
                <div>
                  <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#0D0D0D]">
                    {STUDIO_INFO.hotline.title}
                  </h4>
                  <p className="text-sm text-[#0D0D0D] font-medium mt-1">
                    {STUDIO_INFO.hotline.phone}{' '}
                    <span className="text-[#8C8984] font-normal text-xs">
                      {STUDIO_INFO.hotline.note}
                    </span>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 mt-0.5 text-[#0D0D0D] shrink-0 stroke-[1.5]" />
                <div>
                  <h4 className="text-xs uppercase tracking-[0.16em] font-semibold text-[#0D0D0D]">
                    {STUDIO_INFO.email.title}
                  </h4>
                  <p className="text-sm text-[#5A5856] font-light mt-1">
                    {STUDIO_INFO.email.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Note on Photography session confidentiality */}
            <div className="mt-12 p-5 border-l-2 border-[#0D0D0D] bg-[#F4F4F2] text-xs text-[#5A5856] leading-relaxed">
              Mỗi buổi chụp chỉ tiếp đón duy nhất 01 khách hàng trong một khoảng thời gian để đảm bảo tính riêng tư tuyệt đối, sự thoải mái và chất lượng tập trung nghệ thuật cao nhất.
            </div>
          </div>

          {/* Right Column: Underline Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#8C8984]/25 p-8 sm:p-12">
              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-14 h-14 bg-[#0D0D0D] text-[#FAFAF8] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0D0D0D]">
                    Yêu Cầu Đã Được Tiếp Nhận
                  </h3>
                  <p className="text-sm text-[#5A5856] max-w-md mx-auto font-light leading-relaxed">
                    Cảm ơn <span className="font-medium text-[#0D0D0D]">{formData.fullName}</span>. Giám đốc Nghệ thuật của PN Studio sẽ chủ động liên hệ qua điện thoại/Zalo ({formData.phone}) trong vòng 12 giờ làm việc để thảo luận về định hướng concept và sắp xếp lịch tiếp đón riêng tư.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          phone: '',
                          email: '',
                          packageId: 'executive-presence',
                          preferredDate: '',
                          story: '',
                          agreedToTerms: true,
                        });
                      }}
                      className="border border-[#0D0D0D] text-[#0D0D0D] px-6 py-2.5 text-xs uppercase tracking-[0.16em] hover:bg-[#0D0D0D] hover:text-[#FAFAF8] transition-colors"
                    >
                      GỬI YÊU CẦU KHÁC
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Form Header */}
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0D0D0D] tracking-tight">
                      Đăng ký tư vấn buổi chụp
                    </h3>
                    <p className="text-xs sm:text-sm text-[#747878] mt-1.5 font-light">
                      Điền thông tin ban đầu để chúng tôi thấu hiểu mong đợi của bạn.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-[#FFDAD6]/30 border border-[#BA1A1A] text-[#93000A] text-xs">
                      {errorMessage}
                    </div>
                  )}

                  {/* 2 Columns: Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {/* HỌ VÀ TÊN */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] uppercase tracking-[0.14em] text-[#5A5856] font-medium">
                        HỌ VÀ TÊN *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Nguyễn Văn A"
                        className="w-full bg-transparent border-b border-[#8C8984] focus:border-[#0D0D0D] py-2.5 text-sm text-[#0D0D0D] placeholder-[#8C8984]/60 outline-none transition-colors"
                      />
                    </div>

                    {/* SỐ ĐIỆN THOẠI / ZALO */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] uppercase tracking-[0.14em] text-[#5A5856] font-medium">
                        SỐ ĐIỆN THOẠI / ZALO *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+84 9xx xxx xxx"
                        className="w-full bg-transparent border-b border-[#8C8984] focus:border-[#0D0D0D] py-2.5 text-sm text-[#0D0D0D] placeholder-[#8C8984]/60 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* 2 Columns: Email & Package */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {/* EMAIL LIÊN HỆ */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] uppercase tracking-[0.14em] text-[#5A5856] font-medium">
                        EMAIL LIÊN HỆ *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@domain.com"
                        className="w-full bg-transparent border-b border-[#8C8984] focus:border-[#0D0D0D] py-2.5 text-sm text-[#0D0D0D] placeholder-[#8C8984]/60 outline-none transition-colors"
                      />
                    </div>

                    {/* GÓI DỊCH VỤ QUAN TÂM */}
                    <div className="space-y-1.5">
                      <label className="block text-[11px] uppercase tracking-[0.14em] text-[#5A5856] font-medium">
                        GÓI DỊCH VỤ QUAN TÂM
                      </label>
                      <select
                        value={formData.packageId}
                        onChange={(e) =>
                          setFormData({ ...formData, packageId: e.target.value })
                        }
                        className="w-full bg-transparent border-b border-[#8C8984] focus:border-[#0D0D0D] py-2.5 text-sm text-[#0D0D0D] outline-none cursor-pointer transition-colors"
                      >
                        {PRICING_TIERS.map((tier) => (
                          <option key={tier.id} value={tier.id} className="bg-white text-[#0D0D0D]">
                            {tier.englishTitle} ({tier.price})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* DỰ KIẾN THỜI GIAN MONG MUỐN THỰC HIỆN */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] uppercase tracking-[0.14em] text-[#5A5856] font-medium">
                      DỰ KIẾN THỜI GIAN MONG MUỐN THỰC HIỆN
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredDate: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-[#8C8984] focus:border-[#0D0D0D] py-2.5 text-sm text-[#0D0D0D] outline-none transition-colors"
                    />
                  </div>

                  {/* CHIA SẺ CÂU CHUYỆN HOẶC Ý TƯỞNG CỦA BẠN */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] uppercase tracking-[0.14em] text-[#5A5856] font-medium">
                      CHIA SẺ CÂU CHUYỆN HOẶC Ý TƯỞNG CỦA BẠN
                    </label>
                    <textarea
                      rows={3}
                      value={formData.story}
                      onChange={(e) =>
                        setFormData({ ...formData, story: e.target.value })
                      }
                      placeholder="Mục đích bộ ảnh, thông điệp muốn truyền tải, hoặc phong cách ánh sáng bạn ấn tượng nhất..."
                      className="w-full bg-transparent border-b border-[#8C8984] focus:border-[#0D0D0D] py-2.5 text-sm text-[#0D0D0D] placeholder-[#8C8984]/60 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Checkbox: Privacy & Confidentiality Agreement */}
                  <div className="pt-2">
                    <label className="flex items-start space-x-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-4 h-4 mt-0.5 border border-[#0D0D0D] bg-transparent">
                        <input
                          type="checkbox"
                          checked={formData.agreedToTerms}
                          onChange={(e) =>
                            setFormData({ ...formData, agreedToTerms: e.target.checked })
                          }
                          className="opacity-0 absolute inset-0 cursor-pointer"
                        />
                        {formData.agreedToTerms && (
                          <div className="w-2.5 h-2.5 bg-[#0D0D0D]" />
                        )}
                      </div>
                      <span className="text-xs text-[#5A5856] leading-relaxed group-hover:text-[#0D0D0D] transition-colors">
                        Tôi đồng ý với chính sách bảo mật thông tin hình ảnh và lịch hẹn riêng tư của PN STUDIO.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      id="submit-booking-form"
                      className="w-full bg-[#0D0D0D] hover:bg-[#2A2928] text-[#FAFAF8] py-4 text-xs uppercase tracking-[0.18em] font-medium transition-colors border border-[#0D0D0D] active:scale-[0.99]"
                    >
                      GỬI YÊU CẦU ĐẶT LỊCH &amp; TƯ VẤN CONCEPT
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
