export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  images: string[];
  supplier: Supplier;
  moqTiers: MOQTier[];
  description: string;
  specifications: Record<string, string>;
  certifications: string[];
  rating: number;
  reviewCount: number;
  tags: string[];
  tradeTerms: string[];
  paymentTerms: string[];
  leadTime: string;
  shippingMethods: string[];
}

export interface Supplier {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviewCount: number;
  location: string;
  verificationLevel: 'verified' | 'premium' | 'basic';
  responseTime: string;
  businessType: string;
}

export interface MOQTier {
  quantity: number;
  pricePerUnit: number;
  currency: string;
  discount?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subcategories: Subcategory[];
  productCount: number;
}

export interface Subcategory {
  id: string;
  name: string;
  productCount: number;
}

export interface QuoteRequest {
  productName: string;
  category: string;
  quantity: number;
  tradeTerm: string;
  targetPrice: number;
  currency: string;
  maxBudget: number;
  description: string;
  specifications: string;
  images: File[];
  shippingMethod: string;
  destinationPort: string;
  leadTime: number;
  paymentTerm: string;
  urgency: 'low' | 'medium' | 'high';
}

export interface FinancingTier {
  level: number;
  name: string;
  maxFinancing: number;
  requirements: string[];
  benefits: string[];
  currentAmount?: number;
}