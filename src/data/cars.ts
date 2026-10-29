import type { Car } from '@/types';

export const CARS: Car[] = [
  {
    id: 'curvv-ev',
    name: 'Tata Curvv.ev',
    tagline: 'The Electric SUV Coupé',
    category: 'EV',
    bodyType: 'SUV Coupé',
    price: '₹ 17.49 Lakh*',
    priceNum: 1749000,
    fuelType: 'Pure Electric',
    range: '502 km',
    battery: '55 kWh / 45 kWh',
    charging: '10-80% in 40 mins (DC Fast)',
    safety: '5 Star BNCAP',
    transmission: 'Automatic',
    power: '167 PS',
    torque: '215 Nm',
    seating: '5 Seater',
    bootSpace: '500 Litres',
    image: '/assets/img/ourmodels/curvv-ev.avif',
    banner: '/assets/img/modelnew/curvv-ev/curvv-ev-banner.png',
    brochure: '/assets/brochure/Curvv EV.pdf',
    featured: true,
    colors: [
      { name: 'Pure Grey', img: '/assets/img/modelnew/curvv-ev/model-color/PureGrey-0.png', hex: '#6b7280' },
      { name: 'Virtual Sunrise', img: '/assets/img/modelnew/curvv-ev/model-color/VirtualSunrise-0.png', hex: '#0284c7' }
    ],
    features: [
      { name: 'Panoramic Sunroof', desc: 'Voice-assisted cinematic glass roof with mood lighting', img: '/assets/img/modelnew/curvv-ev/gallery/voice-assisted-panoramic-sunroof-with-mood-lighting-2.png' },
      { name: 'JBL Cinematic Audio', desc: '9 JBL speakers with customizable sound modes', img: '/assets/img/modelnew/curvv-ev/gallery/jbl-cinematic-sound-system-1.png' },
      { name: 'Digital Dashboard', desc: '12.3-inch touchscreen with full view navigation', img: '/assets/img/modelnew/curvv-ev/gallery/digital-dashboard-3.png' },
      { name: 'Aero R18 Alloys', desc: 'Precision engineered alloy wheels with aero inserts', img: '/assets/img/modelnew/curvv-ev/gallery/r18-alloy-wheels-with-aero-inserts-2.png' }
    ]
  },
  {
    id: 'curvv',
    name: 'Tata Curvv',
    tagline: 'Shaped for the Bold',
    category: 'SUV',
    bodyType: 'SUV Coupé',
    price: '₹ 9.99 Lakh*',
    priceNum: 999000,
    fuelType: 'Petrol / Diesel',
    range: 'Up to 19.8 km/l',
    engine: '1.2L Hyperion GDi Turbo / 1.5L Kryojet Diesel',
    safety: '5 Star BNCAP',
    transmission: '6-Speed MT / 7-Speed DCA',
    power: '125 PS / 118 PS',
    torque: '225 Nm / 260 Nm',
    seating: '5 Seater',
    bootSpace: '500 Litres',
    image: '/assets/img/ourmodels/curvv.avif',
    banner: '/assets/img/modelnew/curvv/curvv-banner.png',
    brochure: '/assets/brochure/Curvv.pdf',
    featured: true,
    colors: [
      { name: 'Daytona Grey', img: '/assets/img/modelnew/curvv/model-color/DaytonaGrey-0-15.png', hex: '#4b5563' },
      { name: 'Flame Red', img: '/assets/img/modelnew/curvv/model-color/FlameRed-0-5.png', hex: '#dc2626' }
    ],
    features: [
      { name: 'Gesture Controlled Tailgate', desc: 'Powered boot opening with kick sensor', img: '/assets/img/modelnew/curvv/gallery/Boot-Space-2.png' },
      { name: 'Digital Steering Wheel', desc: 'Illuminated Tata logo with paddle shifters', img: '/assets/img/modelnew/curvv/gallery/Digital-Steering-wheel-with-Illuminated-logo.png' },
      { name: 'Grand Centre Console', desc: 'High-mount console with wireless smartphone charging', img: '/assets/img/modelnew/curvv/gallery/Grand-Centre-Console.png' },
      { name: 'LED Projector Lamps', desc: 'Bi-LED projector headlamps with sequential indicators', img: '/assets/img/modelnew/curvv/gallery/LED-Projector-Headlamp.png' }
    ]
  },
  {
    id: 'nexon',
    name: 'Tata Nexon',
    tagline: "India's #1 Selling SUV",
    category: 'SUV',
    bodyType: 'Compact SUV',
    price: '₹ 7.99 Lakh*',
    priceNum: 799000,
    fuelType: 'Petrol / Diesel / CNG',
    range: 'Up to 24.08 km/kg (CNG)',
    engine: '1.2L Turbocharged Revotron / 1.5L Revotorq',
    safety: '5 Star Global NCAP',
    transmission: 'MT / AMT / 7-Speed DCA with E-Shifter',
    power: '120 PS',
    torque: '170 Nm',
    seating: '5 Seater',
    bootSpace: '382 Litres',
    image: '/assets/img/ourmodels/nexon.avif',
    banner: '/assets/img/modelnew/nexon/nexon-banner.png',
    brochure: '/assets/brochure/Nexon.pdf',
    featured: true,
    colors: [
      { name: 'Royal Blue', img: '/assets/img/modelnew/nexon/model-color/RoyalBlue-0-3.png', hex: '#1e3a8a' },
      { name: 'Grassland Beige', img: '/assets/img/modelnew/nexon/model-color/GrasslandBeige-0-2.png', hex: '#d4b996' }
    ],
    features: [
      { name: '10.25" Digital Cluster', desc: 'High definition cluster with navigation embedding', img: '/assets/img/modelnew/nexon/gallery/1025DigitalInstrumentcluster.png' },
      { name: '7-Speed DCA E-Shifter', desc: 'Drive-by-wire electronic gear selector', img: '/assets/img/modelnew/nexon/gallery/7-speed-dca-with-eshifter.png' },
      { name: 'Bi-Functional LED Headlamps', desc: 'Smart digital DRLs with welcome animation', img: '/assets/img/modelnew/nexon/gallery/bi-functional-led-lamp.png' },
      { name: 'iRA 2.0 Connected Tech', desc: 'Remote climate control, vehicle diagnostics & geo-fence', img: '/assets/img/modelnew/nexon/gallery/connected-vehicle-technology-v2.png' }
    ]
  },
  {
    id: 'nexon-ev',
    name: 'Tata Nexon.ev',
    tagline: 'Game Changer Electric SUV',
    category: 'EV',
    bodyType: 'Compact Electric SUV',
    price: '₹ 12.49 Lakh*',
    priceNum: 1249000,
    fuelType: 'Pure Electric',
    range: '465 km',
    battery: '40.5 kWh / 30 kWh Long Range',
    charging: 'Fast Charge 10-80% in 56 mins',
    safety: '5 Star BNCAP',
    transmission: 'Single Speed Automatic',
    power: '145 PS',
    torque: '215 Nm',
    seating: '5 Seater',
    bootSpace: '350 Litres',
    image: '/assets/img/ourmodels/nexon-ev.avif',
    banner: '/assets/img/modelnew/nexon-ev/nexon-ev-banner.png',
    brochure: '/assets/brochure/Nexon EV.pdf',
    featured: true,
    colors: [
      { name: 'Daytona Grey', img: '/assets/img/modelnew/nexon-ev/model-color/DaytonaGrey-0-4.png', hex: '#4b5563' },
      { name: 'Empowered Oxide', img: '/assets/img/modelnew/nexon-ev/model-color/FlameRed-0-6.png', hex: '#94a3b8' }
    ],
    features: [
      { name: 'V2V & V2L Charging', desc: 'Charge other electric vehicles & home appliances', img: '/assets/img/modelnew/nexon-ev/gallery/Alexa-1.png' },
      { name: 'Wireless CarPlay & Auto', desc: 'Seamless seamless phone connectivity', img: '/assets/img/modelnew/nexon-ev/gallery/Wireless-Android-Auto-and-Apple-Car-Play-011.png' },
      { name: 'Hidden Rear Wiper', desc: 'Integrated spoiler-housed aerodynamic wiper', img: '/assets/img/modelnew/nexon-ev/gallery/hidden-rear-wiper-new.png' }
    ]
  },
  {
    id: 'harrier',
    name: 'Tata Harrier',
    tagline: 'Born of D8 Architecture',
    category: 'SUV',
    bodyType: 'Mid-size Luxury SUV',
    price: '₹ 14.99 Lakh*',
    priceNum: 1499000,
    fuelType: 'Diesel',
    range: '16.8 km/l',
    engine: 'Kryotec 2.0L Turbocharged Diesel',
    safety: '5 Star Global NCAP (Top Score)',
    transmission: '6-Speed MT / 6-Speed AT with E-Shifter',
    power: '170 PS',
    torque: '350 Nm',
    seating: '5 Seater',
    bootSpace: '445 Litres',
    image: '/assets/img/ourmodels/harrier.avif',
    banner: '/assets/img/modelnew/harrier/harrier-banner.png',
    brochure: '/assets/brochure/Harrier.pdf',
    featured: true,
    colors: [
      { name: 'Ash Grey', img: '/assets/img/modelnew/harrier/model-color/AshGrey-0.png', hex: '#374151' },
      { name: 'Coral Red', img: '/assets/img/modelnew/harrier/model-color/CoralRed-0.png', hex: '#b91c1c' }
    ],
    features: [
      { name: 'ADAS Level 2 Suite', desc: '11 autonomous safety assist features', img: '/assets/img/modelnew/harrier/gallery/door-open-alert.png' },
      { name: 'Dual Zone FATC', desc: 'Individual climate zone control for driver & co-driver', img: '/assets/img/modelnew/harrier/gallery/dual-zone-fatc.png' },
      { name: 'Air Purifier with AQI', desc: 'Integrated cabin air quality index monitor', img: '/assets/img/modelnew/harrier/gallery/air-purifier-8.png' },
      { name: 'Electronic Parking Brake', desc: 'EPB with auto-hold functionality', img: '/assets/img/modelnew/harrier/gallery/epb.png' }
    ]
  },
  {
    id: 'harrier-ev',
    name: 'Tata Harrier.ev',
    tagline: 'All-Terrain Electric Dominance',
    category: 'EV',
    bodyType: 'Luxury Electric SUV',
    price: '₹ 21.99 Lakh*',
    priceNum: 2199000,
    fuelType: 'Dual Motor AWD Electric',
    range: '500+ km',
    battery: '60+ kWh acti.ev platform',
    charging: 'Ultra-fast DC Charging compatible',
    safety: '5 Star BNCAP Ready',
    transmission: 'Dual Motor AWD',
    power: '220+ PS',
    torque: '400+ Nm',
    seating: '5 Seater',
    bootSpace: '445 Litres',
    image: '/assets/img/ourmodels/harrier-ev.avif',
    banner: '/assets/img/modelnew/harrier-ev/harrier-ev-banner.png',
    brochure: '/assets/brochure/Harrier EV.pdf',
    featured: false,
    colors: [
      { name: 'Pure Grey', img: '/assets/img/modelnew/harrier-ev/model-color/puregrey-0.png', hex: '#6b7280' }
    ],
    features: [
      { name: '540° Surround Camera', desc: 'Includes transparent underside view for off-roading', img: '/assets/img/modelnew/harrier-ev/gallery/540-view.png' },
      { name: 'Comfort Wing Headrests', desc: 'First class airline style rear passenger wings', img: '/assets/img/modelnew/harrier-ev/gallery/comfort-wing-headrest-1.png' },
      { name: 'Digital Cockpit', desc: 'Dual 12.3-inch ultra-wide displays', img: '/assets/img/modelnew/harrier-ev/gallery/harrier-ev-digital-cockpit-614x400.png' }
    ]
  },
  {
    id: 'safari',
    name: 'Tata Safari',
    tagline: 'The Flagship 7-Seater Legend',
    category: 'SUV',
    bodyType: 'Flagship 7-Seater SUV',
    price: '₹ 15.49 Lakh*',
    priceNum: 1549000,
    fuelType: 'Diesel',
    range: '16.3 km/l',
    engine: 'Kryotec 2.0L Diesel Engine',
    safety: '5 Star Global NCAP (India Record)',
    transmission: '6-Speed MT / 6-Speed AT with Paddle Shifters',
    power: '170 PS',
    torque: '350 Nm',
    seating: '6 / 7 Seater Captain Options',
    bootSpace: '73 Litres (All up) / 420 Litres',
    image: '/assets/img/ourmodels/safari.avif',
    banner: '/assets/img/modelnew/safari/safari-banner.png',
    brochure: '/assets/brochure/Safari.pdf',
    featured: true,
    colors: [
      { name: 'Cosmic Gold', img: '/assets/img/modelnew/safari/model-color/CosmicGold-0-1.png', hex: '#d97706' }
    ],
    features: [
      { name: 'Ventilated 1st & 2nd Row', desc: 'Cooling comfort for front and captain seats', img: '/assets/img/modelnew/safari/gallery/4-way-powered-co-driver-seat-image-rewind.png' },
      { name: 'Dedicated 3rd Row AC', desc: 'Independent blower controls for rear passengers', img: '/assets/img/modelnew/safari/gallery/3rd-row-ac-new-safari.png' },
      { name: 'Collision Warning', desc: 'Forward collision warning with autonomous emergency braking', img: '/assets/img/modelnew/safari/gallery/forward-collision-warning-new-safari.png' }
    ]
  },
  {
    id: 'punch',
    name: 'Tata Punch',
    tagline: 'The No-Compromise Compact SUV',
    category: 'Hatch & Sedan',
    bodyType: 'Micro SUV',
    price: '₹ 5.99 Lakh*',
    priceNum: 599000,
    fuelType: 'Petrol / iCNG (Twin Cylinder)',
    range: '20.09 km/l (Petrol) / 26.99 km/kg (CNG)',
    engine: '1.2L Revotron Engine',
    safety: '5 Star Global NCAP',
    transmission: '5-Speed MT / 5-Speed AMT',
    power: '88 PS',
    torque: '115 Nm',
    seating: '5 Seater',
    bootSpace: '366 Litres (Twin cylinder retains usable boot)',
    image: '/assets/img/ourmodels/punch.avif',
    banner: '/assets/img/modelnew/punch/punch-banner.png',
    brochure: '/assets/brochure/Punch.pdf',
    featured: true,
    colors: [
      { name: 'Calypso Red', img: '/assets/img/ourmodels/punch.avif', hex: '#dc2626' }
    ],
    features: [
      { name: '90° Door Opening', desc: 'Effortless ingress and egress for all ages', img: '/assets/img/modelnew/punch/gallery/90-degree-doors-punch.png' },
      { name: 'Twin Cylinder iCNG', desc: 'Dual cylinders neatly tucked beneath boot floor', img: '/assets/img/modelnew/punch/gallery/twin-cylinder-icng.png' }
    ]
  },
  {
    id: 'punch-ev',
    name: 'Tata Punch.ev',
    tagline: 'Smart Urban Electric SUV',
    category: 'EV',
    bodyType: 'Micro Electric SUV',
    price: '₹ 9.99 Lakh*',
    priceNum: 999000,
    fuelType: 'Pure Electric',
    range: '421 km',
    battery: '35 kWh / 25 kWh',
    charging: 'Fast Charge 10-80% in 56 mins',
    safety: '5 Star BNCAP',
    transmission: 'Automatic Single Speed',
    power: '122 PS',
    torque: '190 Nm',
    seating: '5 Seater',
    bootSpace: '366 Litres + Frunk 14 Litres',
    image: '/assets/img/ourmodels/punch-ev.avif',
    banner: '/assets/img/modelnew/punch-ev/punch-ev-banner.png',
    brochure: '/assets/brochure/Punch EV.pdf',
    featured: true,
    colors: [
      { name: 'Fearless Yellow', img: '/assets/img/modelnew/punch-ev/model-color/FearlessYellow-0.png', hex: '#eab308' }
    ],
    features: [
      { name: 'Front Trunk (Frunk)', desc: '14-litre waterproof storage under bonnet for charging cables', img: '/assets/img/modelnew/punch-ev/gallery/frunk.png' },
      { name: '10.25" Cinematic Screen', desc: 'Arcade.ev apps suite and OTT streaming', img: '/assets/img/modelnew/punch-ev/gallery/10.25-inch-infotainment-by-harman.png' }
    ]
  },
  {
    id: 'altroz',
    name: 'Tata Altroz',
    tagline: 'The Gold Standard Hatchback',
    category: 'Hatch & Sedan',
    bodyType: 'Premium Hatchback',
    price: '₹ 6.49 Lakh*',
    priceNum: 649000,
    fuelType: 'Petrol / Diesel / iCNG / Racer',
    range: '19.33 to 23.6 km/l',
    engine: '1.2L Revotron / 1.5L Turbo Diesel / 1.2L i-Turbo',
    safety: '5 Star Global NCAP',
    transmission: 'MT / Dual Clutch Automatic (DCA)',
    power: '120 PS (Racer) / 88 PS',
    torque: '170 Nm / 115 Nm',
    seating: '5 Seater',
    bootSpace: '345 Litres',
    image: '/assets/img/ourmodels/altroz.avif',
    banner: '/assets/img/slider/4.jpg',
    brochure: '/assets/brochure/Altroz.pdf',
    featured: false,
    colors: [
      { name: 'Downtown Red', img: '/assets/img/ourmodels/altroz.avif', hex: '#b91c1c' }
    ],
    features: [
      { name: 'ALFA Architecture', desc: 'Agile Light Flexible Advanced laser-welded body', img: '/assets/img/slider/4.jpg' },
      { name: 'Voice-operated Sunroof', desc: 'First-in-segment electric sunroof with voice commands', img: '/assets/img/slider/4.jpg' }
    ]
  },
  {
    id: 'tiago',
    name: 'Tata Tiago',
    tagline: 'It’s Seriously Fun',
    category: 'Hatch & Sedan',
    bodyType: 'Compact Hatchback',
    price: '₹ 4.99 Lakh*',
    priceNum: 499000,
    fuelType: 'Petrol / iCNG',
    range: '20.01 km/l / 26.49 km/kg',
    engine: '1.2L Revotron Petrol',
    safety: '4 Star Global NCAP',
    transmission: '5-Speed MT / 5-Speed AMT',
    power: '86 PS',
    torque: '113 Nm',
    seating: '5 Seater',
    bootSpace: '242 Litres',
    image: '/assets/img/ourmodels/tiago.avif',
    banner: '/assets/img/slider/5.jpg',
    brochure: '/assets/brochure/Tiago.pdf',
    featured: false,
    colors: [
      { name: 'Tornado Blue', img: '/assets/img/modelnew/tiago/model-color/img1.png', hex: '#2563eb' }
    ],
    features: [
      { name: 'Harman™ Sound System', desc: '8 speakers surround acoustic sound tuning', img: '/assets/img/modelnew/tiago/gallery/12.png' },
      { name: '360 Camera View', desc: 'High-clarity parking guidelines and display', img: '/assets/img/modelnew/tiago/gallery/360_camera_tiago.png' }
    ]
  },
  {
    id: 'tiago-ev',
    name: 'Tata Tiago.ev',
    tagline: 'India’s Most Loved Electric Hatchback',
    category: 'EV',
    bodyType: 'Electric Hatchback',
    price: '₹ 7.99 Lakh*',
    priceNum: 799000,
    fuelType: 'Pure Electric',
    range: '315 km (Long Range) / 250 km (Medium Range)',
    battery: '24 kWh / 19.2 kWh IP67 Rated',
    charging: 'Fast Charge 10-80% in 57 mins',
    safety: '4 Star Global NCAP',
    transmission: 'Single Speed Automatic',
    power: '75 PS',
    torque: '114 Nm',
    seating: '5 Seater',
    bootSpace: '240 Litres',
    image: '/assets/img/ourmodels/tiago-ev.avif',
    banner: '/assets/img/modelnew/tiago-ev/tiago-ev-banner.png',
    brochure: '/assets/brochure/Tiago EV.pdf',
    featured: false,
    colors: [
      { name: 'Tropical Mist', img: '/assets/img/modelnew/tiago-ev/model-color/img1.png', hex: '#38bdf8' },
      { name: 'Teal Blue', img: '/assets/img/modelnew/tiago-ev/model-color/img5.png', hex: '#0f766e' }
    ],
    features: [
      { name: 'Multi-Mode Regenerative Braking', desc: '4-level braking regen with pedal-feel control', img: '/assets/img/modelnew/tiago-ev/gallery/Electronic-Stability-Program-ESP-with-Traction-Control.png' },
      { name: 'ZConnect Smart App', desc: '45+ connected car features on your phone', img: '/assets/img/modelnew/tiago-ev/gallery/Infotainment-Screen-1.png' }
    ]
  },
  {
    id: 'tigor',
    name: 'Tata Tigor',
    tagline: 'The Sedann Style & Class',
    category: 'Hatch & Sedan',
    bodyType: 'Compact Sedan',
    price: '₹ 5.99 Lakh*',
    priceNum: 599000,
    fuelType: 'Petrol / iCNG',
    range: '19.6 km/l / 26.43 km/kg',
    engine: '1.2L Revotron Engine',
    safety: '4 Star Global NCAP',
    transmission: '5-Speed MT / 5-Speed AMT',
    power: '86 PS',
    torque: '113 Nm',
    seating: '5 Seater',
    bootSpace: '419 Litres',
    image: '/assets/img/ourmodels/xpres.avif',
    banner: '/assets/img/modelnew/tigor/tigor-banner.png',
    brochure: '/assets/brochure/Tigor.pdf',
    featured: false,
    colors: [
      { name: 'Arizona Blue', img: '/assets/img/modelnew/tigor/model-color/ArizonaBlue-0-5.png', hex: '#1d4ed8' },
      { name: 'Classy Red', img: '/assets/img/modelnew/tigor/model-color/ClassyRed-0-1.png', hex: '#b91c1c' }
    ],
    features: [
      { name: 'Automatic Temperature Control', desc: 'Digital climate setting with rapid cooling', img: '/assets/img/modelnew/tigor/gallery/fully-automatic-temperature-control-3.png' },
      { name: 'Spacious 419L Boot', desc: 'Wide opening boot space for family travel luggage', img: '/assets/img/modelnew/tigor/gallery/boot-space-4.png' }
    ]
  },
  {
    id: 'tigor-ev',
    name: 'Tata Tigor.ev',
    tagline: 'Electric Sedan Refinement',
    category: 'EV',
    bodyType: 'Electric Sedan',
    price: '₹ 12.49 Lakh*',
    priceNum: 1249000,
    fuelType: 'Pure Electric',
    range: '315 km',
    battery: '26 kWh Liquid Cooled',
    charging: 'Fast Charge in 65 mins',
    safety: '4 Star Global NCAP',
    transmission: 'Single Speed Automatic',
    power: '75 PS',
    torque: '170 Nm',
    seating: '5 Seater',
    bootSpace: '316 Litres',
    image: '/assets/img/ourmodels/xpres.avif',
    banner: '/assets/img/modelnew/tigor-ev/tigor-ev-banner.png',
    brochure: '/assets/brochure/Tigor EV.pdf',
    featured: false,
    colors: [
      { name: 'Magnetic Red', img: '/assets/img/modelnew/tigor-ev/model-color/MagneticRed.png', hex: '#991b1b' },
      { name: 'Daytona Grey', img: '/assets/img/modelnew/tigor-ev/model-color/DaytonaGrey.png', hex: '#4b5563' }
    ],
    features: [
      { name: 'Bold EV Grille & DRLs', desc: 'Aerodynamic electric signature face with projector lamps', img: '/assets/img/modelnew/tigor-ev/gallery/A-bold-ev-front-grille_614x400.png' },
      { name: 'Contrast Black Dual Tone', desc: 'Sophisticated executive dual-tone roof', img: '/assets/img/modelnew/tigor-ev/gallery/contrast-black-roof.png' }
    ]
  },
  {
    id: 'sierra-ev',
    name: 'Tata Sierra.ev',
    tagline: 'The Icon Reimagined for the Electric Era',
    category: 'EV',
    bodyType: 'Adventure SUV',
    price: '₹ 24.99 Lakh (Expected)*',
    priceNum: 2499000,
    fuelType: 'Electric AWD',
    range: '665 km',
    battery: 'acti.ev Next-Gen High Density Pack',
    charging: 'Hyper-charging ready',
    safety: '5 Star Target BNCAP',
    transmission: 'Electric AWD',
    power: '240 PS',
    torque: '450 Nm',
    seating: '5 Seater Lounge',
    bootSpace: '550 Litres',
    image: '/assets/img/ourmodels/sierra-ev.avif',
    banner: '/assets/img/slider/model8.jpg',
    brochure: '/assets/brochure/Sierra EV.pdf',
    featured: true,
    colors: [
      { name: 'Alpine Pearl White', img: '/assets/img/ourmodels/sierra-ev.avif', hex: '#f8fafc' }
    ],
    features: [
      { name: '665 km Long Range', desc: 'Ultra high efficiency multi-cell battery architecture', img: '/assets/img/modelnew/sierra-ev/gallery/665-km-p1plus-p2-range.avif' },
      { name: 'Panoramax Glass Canopy', desc: 'Signature wraparound iconic Sierra glasshouse roof', img: '/assets/img/modelnew/sierra-ev/gallery/Panoramax.avif' },
      { name: 'Triple Horizon Screen', desc: 'Continuous uninterrupted dashboard triple display', img: '/assets/img/modelnew/sierra-ev/gallery/horizon-view-triple-screen-infotainment-experience.avif' }
    ]
  },
  {
    id: 'aeris',
    name: 'Tata Aeris Concept',
    tagline: 'Pinnacle of Luxury and Aerodynamics',
    category: 'SUV',
    bodyType: 'Flagship Concept',
    price: 'Enquire for Showcase*',
    priceNum: 2999000,
    fuelType: 'Next-Gen Hybrid / EV',
    range: '700+ km',
    engine: 'Futuristic Powertrain',
    safety: '5 Star Global Safety',
    transmission: 'Drive-by-wire Automatic',
    power: '280 PS',
    torque: '500 Nm',
    seating: '4 Seater Executive Lounge',
    bootSpace: '600 Litres',
    image: '/assets/img/ourmodels/aeris.avif',
    banner: '/assets/img/modelnew/aeris/Nitro-Crimson-with-Dual-Tone.png',
    brochure: '/assets/brochure/Curvv.pdf',
    featured: false,
    colors: [
      { name: 'Nitro Crimson', img: '/assets/img/modelnew/aeris/Nitro-Crimson-with-Dual-Tone.png', hex: '#7f1d1d' }
    ],
    features: [
      { name: '360° SVS HD Camera', desc: 'Full 3D holographic environment bird view', img: '/assets/img/modelnew/aeris/gallery/360-svs-hd-camera.jpg' },
      { name: 'Executive Power Seats', desc: '6-way powered zero gravity massage seating', img: '/assets/img/modelnew/aeris/gallery/6-way-power-seat.png' }
    ]
  }
];

