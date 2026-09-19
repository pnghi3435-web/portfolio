import React, { useEffect } from 'react';
import { X, Camera, Aperture, FileText, Calendar } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onBookConcept: (title: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onBookConcept }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0D0D0D]/95 backdrop-blur-md p-4 sm:p-6 lg:p-10 transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full bg-[#141414] border border-[#8C8984]/20 flex flex-col lg:flex-row overflow-hidden max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#FAFAF8] bg-black/60 hover:bg-black transition-colors"
          aria-label="Đóng"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Viewport */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[360px] lg:min-h-[580px] p-4 sm:p-8">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-h-[75vh] w-auto max-w-full object-contain filter grayscale contrast-[1.18]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Curatorial & Technical EXIF Sidebar */}
        <div className="w-full lg:w-[380px] p-6 sm:p-8 bg-[#181818] border-t lg:border-t-0 lg:border-l border-[#8C8984]/20 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Tag / Badge */}
            <div className="mb-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#A0A09E] font-medium border border-[#8C8984]/30 px-2.5 py-1">
                {item.badge}
              </span>
            </div>

            {/* Title & Series */}
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#FAFAF8] mb-2 tracking-tight">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="text-xs text-[#8C8984] leading-relaxed mb-6 font-light">
                {item.subtitle}
              </p>
            )}

            {/* Technical EXIF & Curatorial Specifications */}
            <div className="space-y-4 pt-6 border-t border-[#8C8984]/20 text-xs">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#A0A09E] font-semibold">
                THÔNG SỐ KỸ NGHỆ:
              </p>

              {item.metadata?.camera && (
                <div className="flex items-start space-x-3 text-[#C9C6C5]">
                  <Camera className="w-4 h-4 text-[#8C8984] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8C8984] block text-[10px] uppercase tracking-wider">
                      HỆ THỐNG MÁY CHỤP
                    </span>
                    <span>{item.metadata.camera}</span>
                  </div>
                </div>
              )}

              {item.metadata?.lens && (
                <div className="flex items-start space-x-3 text-[#C9C6C5]">
                  <Aperture className="w-4 h-4 text-[#8C8984] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8C8984] block text-[10px] uppercase tracking-wider">
                      QUANG HỌC &amp; THÔNG SỐ
                    </span>
                    <span>
                      {item.metadata.lens} • {item.metadata.settings}
                    </span>
                  </div>
                </div>
              )}

              {item.metadata?.paper && (
                <div className="flex items-start space-x-3 text-[#C9C6C5]">
                  <FileText className="w-4 h-4 text-[#8C8984] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8C8984] block text-[10px] uppercase tracking-wider">
                      GIẤY IN BẢO TÀNG
                    </span>
                    <span>{item.metadata.paper}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-8 border-t border-[#8C8984]/20 mt-6">
            <button
              onClick={() => {
                onClose();
                onBookConcept(item.title);
              }}
              className="w-full flex items-center justify-center space-x-2 bg-[#FAFAF8] hover:bg-[#E2E3E1] text-[#0D0D0D] py-3.5 text-xs uppercase tracking-[0.16em] font-medium transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>ĐẶT LỊCH CONCEPT NÀY</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
