export type CarCategory = 'EV' | 'SUV' | 'Hatch & Sedan' | 'Hatchback' | 'Sedan' | 'Upcoming';

export interface CarColor {
  name: string;
  img: string;
  hex: string;
}

export interface CarFeature {
  name: string;
  desc: string;
  img: string;
}

export interface CarVariant {
  name: string;
  price: number;
  transmission: string;
  fuel: string;
}

export interface Car {
  id: string;
  name: string;
  tagline: string;
  category: CarCategory;
  bodyType: string;
  price: string;
  priceNum: number;
  fuelType: string;
  range?: string;
  battery?: string;
  charging?: string;
  engine?: string;
  safety: string;
  transmission: string;
  power: string;
  torque: string;
  seating: string;
  bootSpace: string;
  image: string;
  banner: string;
  brochure: string;
  featured?: boolean;
  colors?: CarColor[];
  features?: CarFeature[];
  variants?: CarVariant[];
}

export type OutletType = 'Showroom' | 'Service Center' | 'Showroom & Mega Service Center' | 'Highway 3S Facility (Sales, Service, Spares)' | 'Certified Service Center' | 'Showroom & Quick Service Facility';

export interface Outlet {
  id: string;
  name: string;
  type: OutletType | string;
  category: 'showroom' | 'service' | 'both';
  address: string;
  phone: string;
  servicePhone?: string;
  email: string;
  timings: string;
  mapUrl: string;
  mapEmbedUrl?: string;
  features: string[];
  isFlagship?: boolean;
  image?: string;
}

export interface SliderItem {
  id: number;
  title: string;
  subtitle: string;
  desktopImg: string;
  mobileImg?: string;
  ctaText?: string;
  targetModel?: string;
  action?: string;
  primaryCtaText?: string;
  primaryCtaAction?: string;
  primaryCtaModel?: string;
  secondaryCtaText?: string;
  secondaryCtaAction?: string;
  secondaryCtaModel?: string;
  badge?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  car: string;
  outlet: string;
  rating: number;
  date: string;
  image: string;
  comment: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: 'General' | 'EV & Charging' | 'Booking & Test Drive' | 'Finance & Exchange' | 'Service & Maintenance';
}

export interface SpecialOffer {
  id: string;
  carName: string;
  modelId: string;
  discountUpTo: string;
  exchangeBonus: string;
  corporateBonus: string;
  financeScheme: string;
  bannerImage: string;
  validTill: string;
  badge: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  priceStart: string;
  recommendedFor: string;
  features: string[];
  isPopular?: boolean;
}

export interface JobOpening {
  id: string;
  title: string;
  department: 'Sales' | 'Service' | 'EV Specialist' | 'Customer Relationship' | 'Finance & Insurance';
  location: string;
  experience: string;
  vacancies: number;
  description: string;
  responsibilities: string[];
  requirements: string[];
}
