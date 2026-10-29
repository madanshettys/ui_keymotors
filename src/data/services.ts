import type { ServicePackage } from '@/types';

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'silver-amc',
    name: 'Silver Value Care AMC',
    tagline: 'Essential Periodic Maintenance for Hassle-Free Daily Driving',
    priceStart: '₹ 4,999 / year',
    recommendedFor: 'Hatchbacks & Compact SUVs under 3 years old',
    features: [
      'Scheduled Periodic Oil & Filter Service (10,000 km / 1 Year)',
      'Free 40-Point Digital Vehicle Health Checkup',
      'Complimentary Exterior Wash & Interior Vacuuming',
      '10% Discount on Additional Mechanical Labor',
      'Priority Bay Scheduling at all Key Motors Workshops',
    ],
    isPopular: false,
  },
  {
    id: 'gold-amc',
    name: 'Gold Comprehensive AMC',
    tagline: 'Complete Mechanical, Electrical & Wear-and-Tear Protection',
    priceStart: '₹ 9,999 / year',
    recommendedFor: 'Mid-size SUVs, High Mileage & Daily Commuters',
    features: [
      'Everything in Silver AMC included',
      'Brake Pad & Disc Inspection with Free Fluid Top-Up',
      'Computerized 3D Wheel Alignment & Wheel Balancing',
      'AC Evaporator Disinfection & Air Filter Replacement',
      'Free Doorstep Pick-up and Drop anywhere in Bangalore',
      '15% Discount on Genuine Tata Accessories & Detailing',
      '24x7 Key Motors Roadside Emergency Assistance',
    ],
    isPopular: true,
  },
  {
    id: 'platinum-amc',
    name: 'Platinum Luxury Protection',
    tagline: 'VIP Concierge Service with Zero Unexpected Ownership Expenses',
    priceStart: '₹ 17,999 / year',
    recommendedFor: 'Harrier, Safari, Curvv & Tata.ev Owners',
    features: [
      'Everything in Gold AMC included',
      'Complete Wear & Tear Consumables Coverage (Wipers, Belts, Bulbs)',
      'High-Gloss Ceramic Body Shield & Underbody Anti-Rust Coating',
      'Dedicated Service Relationship Manager & Priority 90-min Bay',
      'Unlimited Doorstep Pickup & Courtesy Replacement Car for major repairs',
      'Complimentary Rat Repellent & Engine Bay Dressing',
      'Zero-Deductible Insurance Claim Handling Assistance',
    ],
    isPopular: false,
  },
];

export const SERVICE_TYPES = [
  { id: 'periodic', name: 'Periodic Scheduled Service', desc: 'Engine oil, oil filter, air filter, multipoint inspection' },
  { id: 'express', name: '90-Min Express Service', desc: 'Rapid 2-technician bay turnaround for routine checkups' },
  { id: 'ev-health', name: 'Tata.ev Battery & High-Voltage Health Scan', desc: 'Computerized diagnostics of high-voltage battery pack and motor' },
  { id: 'ac-care', name: 'AC Cooling & Antimicrobial Disinfection', desc: 'AC filter, evaporator coil clean, refrigerant check' },
  { id: 'wheel-care', name: '3D Wheel Alignment & Balancing', desc: 'Automated computerized laser alignment and tire rotation' },
  { id: 'bodyshop', name: 'Cashless Body & Paint Insurance Repair', desc: 'Dust-free high-temperature paint booth with 40-bay capacity' },
  { id: 'deep-clean', name: 'Luxury Interior & Exterior Spa Detailing', desc: 'Steam upholstery shampoo, 3M exterior buffing, paint sealant' },
];
