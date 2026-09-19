import { PortfolioItem, PricingTier, Testimonial } from '../types';

export const HERO_PLATE_MAIN = {
  title: 'PLATE NO. 01 — THE INNER LIGHT',
  subtitle: 'LEICA S3, 70MM F/2.5',
  imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=85&w=1600&sat=-100',
  year: '2024',
  camera: 'Leica S3 (Medium Format)',
  lens: 'Leica Summarit-S 70mm f/2.5 ASPH CS',
  settings: '1/125s • f/4.0 • ISO 100',
  paper: 'Hahnemühle Photo Rag Baryta 315gsm',
};

export const HERO_SERIES_04 = {
  series: 'SERIES NO. 04',
  title: 'NGHỆ SĨ THỊ GIÁC',
  imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=85&w=1000&sat=-100',
  year: '19.08.2024',
  caption: 'Ánh sáng Chiaroscuro tôn vinh từng nếp thời gian và khí chất của người nghệ sĩ.',
  camera: 'Hasselblad 907X 50C',
  lens: 'XCD 80mm f/1.9',
  settings: '1/90s • f/2.8 • ISO 64',
};

export const PHILOSOPHY_PORTRAIT = {
  imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=85&w=1000&sat=-100',
  name: 'Phạm Nhật — Founder & Master Portraitist',
  quote: '"Một bức chân dung xuất sắc không chỉ ghi lại vẻ ngoài, mà phơi bày phẩm giá và linh hồn của con người."',
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'violinist-an-ha',
    title: 'Nghệ sĩ vĩ cầm An Hạ',
    subtitle: 'Symphony of Shadows - Giao Hưởng Bóng Tối | Editorial Portraits, 2024',
    category: 'editorial',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=85&w=1400&sat=-100',
    badge: '2024 / ARCHIVAL PLATE',
    frameTitle: 'Portfolio Nhiếp ảnh Chân dung Chuyên nghiệp',
    aspectRatio: 'landscape',
    metadata: {
      camera: 'Leica SL2',
      lens: 'Apo-Summicron-SL 50mm f/2 ASPH',
      settings: '1/160s • f/2.8 • ISO 200',
      filmStock: 'Monochrome Digital Sensor',
      paper: 'Canson Infinity Platine Fibre Rag 310gsm',
    },
  },
  {
    id: 'founder-tran-quoc-dung',
    title: 'Founder Trần Quốc Dũng',
    subtitle: 'DŨNG CEO CÔNG NGHỆ | NOVA TECH — Chân dung chuyên nghiệp & Tầm vóc người tiên phong',
    category: 'executive',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=85&w=1200&sat=-100',
    badge: '2024 / EXECUTIVE SUITE',
    frameTitle: 'DŨNG CEO CÔNG NGHỆ',
    aspectRatio: 'square',
    metadata: {
      camera: 'Hasselblad H6D-100c',
      lens: 'HC 100mm f/2.2',
      settings: '1/200s • f/5.6 • ISO 64',
      filmStock: 'Chiaroscuro Master Light Studio',
      paper: 'Ilford Galerie Prestige Gold Fibre Silk',
    },
  },
  {
    id: 'tinh-no-03',
    title: "Tác phẩm 'Tĩnh' No. 03",
    subtitle: 'Nghiên cứu hình thể & nhịp điệu tĩnh lặng trong không gian Chiaroscuro',
    category: 'fineart',
    imageUrl: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=85&w=1000&sat=-100',
    badge: 'GALLERY EDITION',
    aspectRatio: 'portrait',
    metadata: {
      camera: 'Leica M10 Monochrom',
      lens: 'Noctilux-M 50mm f/0.95 ASPH',
      settings: '1/250s • f/1.2 • ISO 160',
      filmStock: 'Pure Monochrome Native Sensor',
      paper: 'Awagami Bizan White 300gsm Handcrafted Washi',
    },
  },
  {
    id: 'di-san-bui-gia',
    title: 'Di sản Gia đình Bùi gia',
    subtitle: 'LỜI NGUYỆN ƯỚC TRỌN ĐỜI • HÀ NỘI, 2023 | Natural grain, Leica M6, Kodak Tri-X 400',
    category: 'heritage',
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=85&w=1000&sat=-100',
    badge: 'HERITAGE FOLIO',
    frameTitle: 'LỜI NGUYỆN ƯỚC TRỌN ĐỜI • HÀ NỘI',
    aspectRatio: 'portrait',
    metadata: {
      camera: 'Leica M6 Rangefinder 35mm',
      lens: 'Summilux-M 50mm f/1.4 Pre-ASPH',
      settings: '1/60s • f/2.0',
      filmStock: 'Kodak Tri-X 400 (D-76 Developer 1:1)',
      paper: 'Fiber-Base Silver Gelatin Silver Print',
    },
  },
  {
    id: 'kts-le-hoang-quan',
    title: 'KTS Lê Hoàng Quân',
    subtitle: 'Elias Thorne: The Architect’s Hand | Camera: Leica M10-R, 50mm Summilux f/1.4',
    category: 'executive',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=85&w=1000&sat=-100',
    badge: 'MONO ARCHIVE',
    frameTitle: 'Elias Thorne: The Architect’s Hand',
    aspectRatio: 'portrait',
    metadata: {
      camera: 'Leica M10-R',
      lens: 'Summilux-M 50mm f/1.4 ASPH',
      settings: '1/125s • f/2.8 • ISO 400',
      filmStock: 'Natural Grain Tone Curve',
      paper: 'Hahnemühle Museum Etching 350gsm',
    },
  },
  // Additional archival plates for filter browsing and expanded box
  {
    id: 'archival-haute-couture',
    title: 'Nàng Thơ & Vải Lụa',
    subtitle: 'Nghiên cứu nếp gấp & cấu trúc điêu khắc ánh sáng Paris Atelier',
    category: 'editorial',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=85&w=1000&sat=-100',
    badge: 'HAUTE COUTURE',
    aspectRatio: 'portrait',
    metadata: {
      camera: 'Hasselblad 907X',
      lens: 'XCD 45mm f/4 P',
      settings: '1/200s • f/4.0 • ISO 100',
      filmStock: 'Digital Medium Format Monochrome',
      paper: 'Hahnemühle German Etching 310gsm',
    },
  },
  {
    id: 'heritage-three-generations',
    title: 'Gia đình Vũ tộc — Ba thế hệ',
    subtitle: 'Khoảnh khắc tiếp nối truyền thống và ánh mắt tự hào của bậc phụ lão',
    category: 'heritage',
    imageUrl: 'https://images.unsplash.com/photo-1542037104857-ffbc0b91c487?auto=format&fit=crop&q=85&w=1000&sat=-100',
    badge: 'LEGACY ARCHIVE',
    aspectRatio: 'square',
    metadata: {
      camera: 'Linhof Master Technika 4x5',
      lens: 'Schneider Kreuznach Symmar-S 150mm f/5.6',
      settings: '1/30s • f/11',
      filmStock: 'Ilford HP5 Plus 4x5 Sheet Film',
      paper: 'Traditional Darkroom Barium Gelatin',
    },
  },
  {
    id: 'fineart-solitude',
    title: 'Độc Thoại Của Đá',
    subtitle: 'Nghiên cứu bóng tối chạm khắc lên đường nét tĩnh tại',
    category: 'fineart',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=85&w=1000&sat=-100',
    badge: 'FINE ART EXHIBITION',
    aspectRatio: 'portrait',
    metadata: {
      camera: 'Leica SL2-S',
      lens: 'Summilux-SL 50mm f/1.4 ASPH',
      settings: '1/125s • f/1.4 • ISO 50',
      filmStock: 'Monochrome High-Key',
      paper: 'Hahnemühle Bamboo 290gsm',
    },
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'executive-presence',
    name: 'Gói Doanh Nhân & Lãnh Đạo',
    englishTitle: 'The Executive Presence',
    price: '18.500.000₫',
    priceRaw: 18500000,
    highlighted: false,
    description: 'Dành cho các CEO, nhà sáng lập, chính khách và chuyên gia muốn khẳng định vị thế, tầm vóc và chiều sâu tư tưởng qua ánh sáng quyền uy.',
    duration: '90 phút sáng tạo tại Studio riêng tư',
    deliverables: [
      '12 tác phẩm Master retouch hoàn thiện thủ công',
      'Định dạng ảnh số độ phân giải cao cho truyền thông & Forbes',
      '03 bản in Archival Cotton Rag 20x30cm ép khung nhôm anode',
      'Cấp giấy phép sử dụng thương mại vĩnh viễn',
    ],
    features: [
      'Tư vấn phong cách trang phục và định hình ngôn ngữ cơ thể',
      'Trang điểm & làm tóc chuyên nghiệp cho nhiếp ảnh đen trắng',
      'Phục vụ trà thủ công & không gian tiếp đón riêng tư',
    ],
    badge: 'LEADERSHIP PORTRAIT',
  },
  {
    id: 'archival-monograph',
    name: 'Tác Phẩm Độc Bản & Sưu Tầm',
    englishTitle: 'The Archival Monograph',
    price: '36.000.000₫',
    priceRaw: 36000000,
    highlighted: true, // The striking black card in the center of the mockup!
    description: 'Trải nghiệm đỉnh cao cùng Giám đốc Nghệ thuật. Biến chân dung của bạn thành một tác phẩm triển lãm bảo tàng lưu truyền qua thời gian.',
    duration: '180 phút làm việc sâu 1-kèm-1',
    deliverables: [
      '25 tác phẩm Monochrome Master hoàn mỹ',
      '01 Cuốn Folio Book bọc da thủ công nhập khẩu từ Ý dập chìm tên',
      '01 Tác phẩm triển lãm khổ lớn 60x90cm in trên giấy Hahnemühle Photo Rag',
      'Chứng thư xác thực độc bản (COA) có chữ ký tác giả',
    ],
    features: [
      'Nhiếp ảnh trực tiếp bởi Master Photographer & Giám đốc Nghệ thuật',
      'Thiết kế concept ánh sáng Chiaroscuro cá nhân hóa theo cốt cách',
      'Stylist riêng & 3 layouts trang phục cao cấp',
      'Quyền truy cập phòng tối và chứng kiến quá trình in tráng Fine Art',
    ],
    badge: 'SIGNATURE MASTERPIECE',
  },
  {
    id: 'heritage-family',
    name: 'Di Sản Gia Đình & Dòng Tộc',
    englishTitle: 'Heritage & Family Legacy',
    price: '48.000.000₫',
    priceRaw: 48000000,
    highlighted: false,
    description: 'Lưu giữ tình thân và giá trị cốt lõi của các thế hệ trong gia đình qua kỹ thuật phim âm bản khổ lớn (Large Format) lưu trữ hàng thế kỷ.',
    duration: 'Buổi chụp không giới hạn áp lực thời gian',
    deliverables: [
      'Hộp Archival Box sơn mài thủ công khắc gia huy',
      '30 bản in lụa Fine Art 25x35cm bảo tồn trên 150 năm',
      'Bộ phim âm bản 4x5 inch hoặc 120mm gốc bàn giao riêng',
      'Lưu trữ dữ liệu số trọn đời trên máy chủ điện toán đám mây riêng',
    ],
    features: [
      'Chụp tại Atelier hoặc tư gia trang trọng của gia đình',
      'Ghi lại từng cá nhân, cặp đôi và toàn thể đại gia đình',
      'Tài liệu phỏng vấn & chắp bút câu chuyện gia phong kèm theo bộ ảnh',
    ],
    badge: 'CENTURY ARCHIVE',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'quote-1',
    quote: 'Trước ống kính của PN Studio, tôi không cảm thấy mình đang "tạo dáng". Đó là một cuộc đối thoại trong im lặng nơi người chụp thấu suốt mọi góc khuất kiêu hãnh và điềm tĩnh nhất của tôi.',
    author: 'Trần Quốc Dũng',
    role: 'Founder & CEO, Nova Tech',
    year: 'Khách hàng 2024',
    portraitUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=85&w=300&sat=-100',
  },
  {
    id: 'quote-2',
    quote: 'Bức chân dung đen trắng này diễn tả được âm thanh của cây vĩ cầm ngay cả khi nó không cất tiếng. Ánh sáng Chiaroscuro ở đây đạt tới độ điêu luyện của hội họa phục hưng.',
    author: 'An Hạ',
    role: 'Nghệ sĩ vĩ cầm Soloist',
    year: 'Khách hàng 2024',
    portraitUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=85&w=300&sat=-100',
  },
  {
    id: 'quote-3',
    quote: 'Hộp ảnh Archival Box của cha mẹ tôi được đặt ở vị trí trang trọng nhất trong phòng khách. Mỗi lần lật giở từng trang giấy cotton rag, con cháu tôi đều cảm nhận được cội nguồn sâu thẳm.',
    author: 'Bùi Gia Khiêm',
    role: 'Nhà sưu tầm nghệ thuật tư nhân',
    year: 'Khách hàng 2023',
    portraitUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=85&w=300&sat=-100',
  },
];

export const STUDIO_INFO = {
  hanoi: {
    title: 'HÀ NỘI STUDIO',
    address: 'Tầng 4, Biệt thự cổ 18 Điện Biên Phủ, Ba Đình',
  },
  saigon: {
    title: 'TP. HỒ CHÍ MINH ATELIER',
    address: 'Phòng 2A, 14 Tôn Thất Đạm, Quận 1',
  },
  hotline: {
    title: 'HOTLINE TIẾP ĐÓN',
    phone: '+84 (0) 908 246 888',
    note: '(Theo lịch hẹn riêng)',
  },
  email: {
    title: 'THƯ ĐIỆN TỬ',
    address: 'atelier@pnstudio-portrait.com',
  },
};
