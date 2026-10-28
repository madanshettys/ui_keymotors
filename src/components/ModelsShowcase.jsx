import React, { useState, useMemo } from 'react';
import { CARS } from '../data/cars';
import { Search, Zap, Shield, FileText, Scale, Eye, Compass, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function ModelsShowcase({ 
  onSelectModel, 
  onOpenTestDrive, 
  onToggleCompare, 
  comparedCars = [] 
}) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'ALL', label: 'All Models', count: CARS.length },
    { id: 'SUV', label: 'Cars & SUVs', count: CARS.filter(c => c.category === 'SUV').length },
    { id: 'EV', label: 'Electric Vehicles (EV)', count: CARS.filter(c => c.category === 'EV').length },
    { id: 'Hatch & Sedan', label: 'Hatchbacks & Sedans', count: CARS.filter(c => c.category === 'Hatch & Sedan').length },
  ];

  const filteredCars = useMemo(() => {
    return CARS.filter(car => {
      const matchCat = selectedCategory === 'ALL' || car.category === selectedCategory;
      const matchSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          car.fuelType.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          car.bodyType.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.priceNum - b.priceNum;
      if (sortBy === 'price-high') return b.priceNum - a.priceNum;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="models" className="py-20 sm:py-28 bg-slate-100/60 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Refined Typography */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-km-blue text-xs font-black tracking-widest uppercase mb-3 border border-blue-200/50 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Official TATA Car Range</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Discover Your Perfect <span className="text-gradient-blue">TATA</span> Vehicle
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From award-winning electric vehicles to iconic 5-star safety SUVs. Available for immediate delivery and test drives across all Bangalore Key Motors showrooms.
          </p>
        </div>

        {/* Filter Toolbar with Luxury Glass Styling */}
        <div className="bg-white/80 backdrop-blur-xl p-3 sm:p-4 rounded-3xl border border-slate-200/80 shadow-automotive mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-black transition-all flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-km-blue text-white shadow-md shadow-blue-900/25 scale-102'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60'
                }`}
              >
                {cat.id === 'EV' && <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />}
                <span>{cat.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                  selectedCategory === cat.id ? 'bg-blue-800 text-blue-200' : 'bg-slate-200/80 text-slate-700'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-2.5 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search models, fuel, body..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-km-blue focus:bg-white transition-all"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-2xl text-xs font-bold px-3.5 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-km-blue transition-all"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Cars Showcase Grid - Luxury Automotive Pedestal Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCars.map((car) => {
            const isCompared = comparedCars.some(c => c.id === car.id);

            return (
              <div
                key={car.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-automotive shadow-automotive-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Image Pedestal Box with Spotlight Glow */}
                <div className="relative bg-gradient-to-b from-slate-100 via-slate-50 to-white car-pedestal p-6 flex items-center justify-center min-h-[230px] overflow-hidden border-b border-slate-100">
                  {/* Category & Safety Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                    {car.category === 'EV' ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                        <Zap className="w-3 h-3 fill-white" />
                        <span>Tata EV</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                        <span>{car.bodyType}</span>
                      </span>
                    )}

                    {car.safety && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-[9px] font-black uppercase tracking-wider shadow-sm">
                        <Shield className="w-3 h-3 fill-white" />
                        <span>{car.safety}</span>
                      </span>
                    )}
                  </div>

                  {/* Compare Button */}
                  <button
                    onClick={() => onToggleCompare(car)}
                    className={`absolute top-4 right-4 z-10 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isCompared 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'bg-white/90 hover:bg-white text-slate-700 hover:text-km-blue shadow-sm border border-slate-200'
                    }`}
                    title="Compare Vehicle"
                  >
                    <Scale className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-extrabold uppercase">
                      {isCompared ? 'Added' : 'Compare'}
                    </span>
                  </button>

                  {/* Model Image strictly untouched, with smooth studio scaling */}
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-44 object-contain transform group-hover:scale-106 transition-transform duration-500 filter drop-shadow-md"
                    loading="lazy"
                  />
                </div>

                {/* Card Information Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Model Name & Fuel Type */}
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-km-blue transition-colors tracking-tight">
                        {car.name}
                      </h3>
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        {car.fuelType}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 italic mt-1 font-medium">
                      "{car.tagline}"
                    </p>

                    {/* Pricing Box - High-End Automotive Slate */}
                    <div className="mt-4 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] uppercase font-black text-slate-400 tracking-wider block">
                          Starting Ex-Showroom
                        </span>
                        <span className="text-xl font-black text-km-blue">
                          {car.price}
                        </span>
                      </div>
                      <span className="text-[10px] font-extrabold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-lg border border-emerald-300/40">
                        Bangalore Stock
                      </span>
                    </div>

                    {/* Key Specs Pills */}
                    <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-100">
                        <span className="text-[10px] text-slate-400 uppercase block font-black">
                          {car.category === 'EV' ? 'Certified Range' : 'Mileage'}
                        </span>
                        <span className="font-extrabold text-slate-900">
                          {car.range}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-100">
                        <span className="text-[10px] text-slate-400 uppercase block font-black">
                          Transmission
                        </span>
                        <span className="font-extrabold text-slate-900 truncate block">
                          {car.transmission}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons Bar */}
                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onOpenTestDrive(car.id)}
                        className="w-full bg-gradient-to-r from-km-blue to-km-blue-light hover:from-blue-600 hover:to-blue-800 text-white text-xs font-black py-2.5 px-3 rounded-xl transition-all shadow-sm shadow-blue-900/10 text-center uppercase tracking-wider hover:-translate-y-0.5"
                      >
                        Test Drive
                      </button>

                      <button
                        onClick={() => onSelectModel(car.id)}
                        className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-black py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 hover:-translate-y-0.5"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-600" />
                        <span>Specs & 360</span>
                      </button>
                    </div>

                    {car.brochure && (
                      <a
                        href={car.brochure}
                        download
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-500 hover:text-km-blue py-1 transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5 text-red-500" />
                        <span>Download Official Brochure (PDF)</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
