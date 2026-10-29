export const DEALERSHIP = {
  name: 'Key Motorrs TATA',
  shortName: 'Key Motors',
  legalName: 'Key Motor Ventures Pvt. Ltd.',
  tagline: 'Authorized TATA Motors Passenger & Electric Vehicles Dealership in Bangalore',
  establishedYear: 2005,
  stats: {
    happyCustomers: '75,000+',
    showroomsCount: 8,
    workshopsCount: 7,
    yearsOfTrust: 20,
    googleRating: '4.8',
    reviewsCount: '12,400+',
    evDelivered: '8,500+',
  },
  contacts: {
    primaryPhone: '+91 95900 00055',
    servicePhone: '+91 95900 00066',
    salesPhone: '+91 95900 00055',
    insurancePhone: '+91 95900 00077',
    primaryPhoneClean: '+919590000055',
    servicePhoneClean: '+919590000066',
    email: 'contact@keymotors.in',
    salesEmail: 'sales@keymotors.in',
    serviceEmail: 'service@keymotors.in',
    workingHours: 'Mon - Sun: 9:00 AM - 8:00 PM',
    serviceHours: 'Mon - Sat: 8:30 AM - 7:00 PM',
  },
  address: {
    headOffice: 'Sy No. 35/1, Mysore Road, Opp. Nayandahalli Metro Station, Nayandahalli, Bengaluru, Karnataka 560039',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560039',
    country: 'India',
  },
  social: {
    whatsappUrl: 'https://wa.me/919606019206?text=Hi!%20I%20wanted%20to%20know%20more%20about%20Tata%20Cars%20and%20Services%20at%20Key%20Motors.',
    facebookUrl: 'https://www.facebook.com/Keymotorsbangalore/',
    instagramUrl: 'https://www.instagram.com/keymotors_ventures',
    linkedinUrl: 'https://www.linkedin.com/company/keymotors',
    youtubeUrl: 'https://www.youtube.com/@KeyMotorrsTataCars',
  },
} as const;

export const FINANCE_DEFAULTS = {
  defaultInterestRate: 8.75, // in percentage
  minInterestRate: 7.95,
  maxInterestRate: 14.0,
  defaultTenureMonths: 60,
  tenureOptions: [
    { label: '3 Years (36 Mo)', value: 36 },
    { label: '4 Years (48 Mo)', value: 48 },
    { label: '5 Years (60 Mo)', value: 60 },
    { label: '7 Years (84 Mo)', value: 84 },
  ],
  defaultDownPaymentPercent: 20,
  // Karnataka (Bangalore) RTO Life Time Tax (LTT)
  rtoSlabs: [
    { maxPrice: 500000, rate: 0.14 },
    { maxPrice: 1000000, rate: 0.17 },
    { maxPrice: 2000000, rate: 0.18 },
    { maxPrice: Infinity, rate: 0.20 },
  ],
  evRtoRate: 0.0, // 0% Road Tax on pure EVs in Karnataka!
  insuranceRate: 0.035, // ~3.5% of ex-showroom
  registrationFee: 2500, // Standard RTO hypothecation and smart card fee
  fastagTcsMisc: 4500, // FASTag, HSRP plate, handling
} as const;

export const EV_SAVINGS_DEFAULTS = {
  petrolPricePerLitre: 102.86,
  dieselPricePerLitre: 88.94,
  cngPricePerKg: 85.50,
  homeElectricityPerUnit: 8.50, // Rs per kWh
  commercialChargingPerUnit: 18.00,
  avgPetrolMileage: 14.5, // km/L in city
  avgDieselMileage: 18.0, // km/L
  avgEvEfficiency: 8.5, // km/kWh (e.g. 115 Wh/km)
  avgCo2PerKmPetrol: 145, // grams CO2
} as const;

export const NAVIGATION = {
  mainNav: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    {
      label: 'Our Models',
      href: '/models',
      hasDropdown: true,
      children: [
        { label: 'All Models', href: '/models' },
        { label: 'Curvv & Curvv.ev', href: '/models/curvv' },
        { label: 'Nexon & Nexon.ev', href: '/models/nexon' },
        { label: 'Harrier & Harrier.ev', href: '/models/harrier' },
        { label: 'Safari', href: '/models/safari' },
        { label: 'Punch & Punch.ev', href: '/models/punch' },
        { label: 'Altroz', href: '/models/altroz' },
        { label: 'Tiago & Tiago.ev', href: '/models/tiago' },
        { label: 'Tigor & Tigor.ev', href: '/models/tigor' },
        { label: 'Sierra (Upcoming)', href: '/models/sierra' },
        { label: 'Aeris', href: '/models/aeris' },
      ],
    },
    { label: 'EV Zone', href: '/ev-zone' },
    { label: 'Special Offers', href: '/special-offers' },
    {
      label: 'Outlets',
      href: '/outlets',
      hasDropdown: true,
      children: [
        { label: 'All Showrooms & Workshops', href: '/outlets' },
        { label: 'Mysore Road (Flagship)', href: '/outlets/mysore-road' },
        { label: 'JP Nagar', href: '/outlets/jp-nagar' },
        { label: 'Bannerghatta Road', href: '/outlets/bannerghatta-road' },
        { label: 'Nelamangala Highway', href: '/outlets/nelamangala' },
        { label: 'Magadi Road', href: '/outlets/magadi-road' },
        { label: 'Jigani', href: '/outlets/jigani' },
        { label: 'Doddaballapura', href: '/outlets/doddaballapura' },
        { label: 'Kanakapura Town', href: '/outlets/kanakapura-town' },
      ],
    },
    {
      label: 'Services',
      href: '/service',
      hasDropdown: true,
      children: [
        { label: 'Book Certified Service', href: '/service' },
        { label: 'Service Packages & AMC', href: '/service-packages' },
        { label: 'Assurance Old Car Exchange', href: '/exchange-cars' },
        { label: 'Finance & Loan EMI', href: '/finance' },
        { label: 'Car Insurance', href: '/insurance' },
        { label: 'Insurance Renewal', href: '/insurance-renewal' },
        { label: 'Extended Warranty', href: '/extended-warranty' },
      ],
    },
    { label: 'Test Drive', href: '/test-drive' },
    { label: 'Contact', href: '/contact' },
  ],
  footerLinks: {
    models: [
      { label: 'Tata Curvv.ev', href: '/models/curvv-ev' },
      { label: 'Tata Curvv', href: '/models/curvv' },
      { label: 'Tata Nexon.ev', href: '/models/nexon-ev' },
      { label: 'Tata Nexon', href: '/models/nexon' },
      { label: 'Tata Harrier', href: '/models/harrier' },
      { label: 'Tata Safari', href: '/models/safari' },
      { label: 'Tata Punch.ev', href: '/models/punch-ev' },
      { label: 'Tata Punch', href: '/models/punch' },
      { label: 'Tata Altroz', href: '/models/altroz' },
      { label: 'Tata Tiago.ev', href: '/models/tiago-ev' },
    ],
    services: [
      { label: 'Book Service Appointment', href: '/service' },
      { label: 'Value Care AMC Packages', href: '/service-packages' },
      { label: 'Old Car Spot Evaluation', href: '/exchange-cars' },
      { label: 'Car Loan & EMI Calculator', href: '/finance' },
      { label: 'Tata Motor Insurance', href: '/insurance' },
      { label: 'Online Insurance Renewal', href: '/insurance-renewal' },
      { label: 'Extended Warranty 2+3 Yrs', href: '/extended-warranty' },
    ],
    showrooms: [
      { label: 'Mysore Road (Nayandahalli)', href: '/outlets/mysore-road' },
      { label: 'JP Nagar Ring Road', href: '/outlets/jp-nagar' },
      { label: 'Bannerghatta Road', href: '/outlets/bannerghatta-road' },
      { label: 'Nelamangala Highway 3S', href: '/outlets/nelamangala' },
      { label: 'Magadi Road', href: '/outlets/magadi-road' },
      { label: 'Jigani Industrial Area', href: '/outlets/jigani' },
      { label: 'Doddaballapura', href: '/outlets/doddaballapura' },
      { label: 'Kanakapura Town', href: '/outlets/kanakapura-town' },
    ],
    company: [
      { label: 'About Key Motors', href: '/about' },
      { label: 'Celebration Gallery', href: '/gallery' },
      { label: 'Customer Reviews', href: '/customers-testimonial' },
      { label: 'Frequently Asked Questions', href: '/faq' },
      { label: 'Careers @ Key Motors', href: '/careers' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions' },
    ],
  },
} as const;
