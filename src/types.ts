export type CategoryType = 'all' | 'editorial' | 'executive' | 'fineart' | 'heritage';

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'editorial' | 'executive' | 'fineart' | 'heritage';
  imageUrl: string;
  badge: string;
  year?: string;
  frameTitle?: string;
  metadata?: {
    camera: string;
    lens: string;
    settings: string;
    filmStock?: string;
    paper?: string;
  };
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface PricingTier {
  id: string;
  name: string;
  englishTitle: string;
  price: string;
  priceRaw: number;
  highlighted?: boolean;
  description: string;
  duration: string;
  deliverables: string[];
  features: string[];
  badge?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  year: string;
  portraitUrl?: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  packageId: string;
  preferredDate: string;
  story: string;
  agreedToTerms: boolean;
}
