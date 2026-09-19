import React, { useState } from 'react';
import { X, CheckCircle2, Box, Sparkles, BookOpen } from 'lucide-react';

interface ArchivalBoxModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestBox: (name: string, phone: string, email: string) => void;
}

export const ArchivalBoxModal: React.FC<ArchivalBoxModalProps> = ({
  isOpen,
  onClose,
  onRequestBox,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRequestBox(name, phone, email);
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0D0D]/90 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#FAFAF8] border border-[#8C8984]/30 p-8 sm:p-12 overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#0D0D0D] hover:bg-[#EEEEEC] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-12 h-12 bg-[#0D0D0D] text-[#FAFAF8] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#0D0D0D]">
              Đã Ghi Nhận Yêu Cầu Của Bạn
            </h3>
            <p className="text-sm text-[#5A5856] font-light leading-relaxed max-w-md mx-auto">
              Chuyên viên lưu trữ của PN Studio sẽ gửi bản xem trước danh mục tác phẩm giới hạn (Digital Archival Preview) qua email <span className="font-medium text-[#0D0D0D]">{email}</span> và liên hệ sắp xếp buổi thưởng lãm hộp in thủ công trực tiếp tại Atelier.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="bg-[#0D0D0D] text-[#FAFAF8] px-8 py-3 text-xs uppercase tracking-[0.16em]"
              >
                HOÀN TẤT
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-8">
              <span className="inline-block border border-[#8C8984]/50 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-[#5A5856] font-medium mb-3">
                PRIVATE ARCHIVE &amp; MONOGRAPH
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0D0D0D] tracking-tight">
                Bộ Tuyển Tập Archival Box Mở Rộng
              </h3>
              <p className="text-xs sm:text-sm text-[#5A5856] mt-2 font-light leading-relaxed">
                Hộp lưu trữ Archival Box chứa hơn 80 tác phẩm chân dung nguyên bản chưa công bố trên website, được in thử nghiệm trên các dòng giấy thủ công quý từ Đức (Hahnemühle) và Nhật Bản (Awagami Washi).
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-xs">
              <div className="p-4 bg-white border border-[#8C8984]/20">
                <Box className="w-4 h-4 text-[#0D0D0D] mb-2 stroke-[1.5]" />
                <h4 className="font-medium text-[#0D0D0D] mb-1">Hộp Gỗ Sơn Mài</h4>
                <p className="text-[#747878] text-[11px] leading-relaxed">
                  Bảo tồn chống ẩm mốc &amp; ánh sáng tử ngoại chuẩn bảo tàng.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#8C8984]/20">
                <Sparkles className="w-4 h-4 text-[#0D0D0D] mb-2 stroke-[1.5]" />
                <h4 className="font-medium text-[#0D0D0D] mb-1">80+ Tác Phẩm</h4>
                <p className="text-[#747878] text-[11px] leading-relaxed">
                  Bản in Silver Gelatin &amp; Carbon Pigment độc quyền.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#8C8984]/20">
                <BookOpen className="w-4 h-4 text-[#0D0D0D] mb-2 stroke-[1.5]" />
                <h4 className="font-medium text-[#0D0D0D] mb-1">Mẫu Giấy Quý</h4>
                <p className="text-[#747878] text-[11px] leading-relaxed">
                  Mục sở thị vân giấy Cotton Rag và độ sâu tương phản đen trắng.
                </p>
              </div>
            </div>

            {/* Quick Request Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1.5">
                <label className="block text-[11px] uppercase tracking-[0.14em] text-[#5A5856] font-medium">
                  HỌ VÀ TÊN *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Quý khách vui lòng nhập họ tên"
                  className="w-full bg-transparent border-b border-[#8C8984] focus:border-[#0D0D0D] py-2 text-sm text-[#0D0D0D] outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="block text-[11px] uppercase tracking-[0.14em] text-[#5A5856] font-medium">
                    SỐ ĐIỆN THOẠI / ZALO *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+84 9xx xxx xxx"
                    className="w-full bg-transparent border-b border-[#8C8984] focus:border-[#0D0D0D] py-2 text-sm text-[#0D0D0D] outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] uppercase tracking-[0.14em] text-[#5A5856] font-medium">
                    EMAIL NHẬN DANH MỤC *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@domain.com"
                    className="w-full bg-transparent border-b border-[#8C8984] focus:border-[#0D0D0D] py-2 text-sm text-[#0D0D0D] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#0D0D0D] hover:bg-[#2A2928] text-[#FAFAF8] py-3.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors"
                >
                  XÁC NHẬN YÊU CẦU XEM BỘ ARCHIVAL BOX
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
