import React, { useState } from 'react';
import { Phone, MapPin, Calendar, Clock, ChevronDown, Menu, X, Zap, Shield, Car, Wrench, Sparkles, Compass } from 'lucide-react';

export default function Header({ 
  onOpenTestDrive, 
  onOpenService, 
  onOpenPrice, 
  activeTab, 
  setActiveTab,
  onSelectModel 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modelsDropdownOpen, setModelsDropdownOpen] = useState(false);

  const quickNav = (tabId, hashId = null) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    if (hashId) {
      setTimeout(() => {
        const el = document.getElementById(hashId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300">
      {/* Top Announcement Bar - Sleek Automotive Navy */}
      <div className="bg-gradient-to-r from-slate-950 via-km-navy to-slate-900 text-white text-[11px] sm:text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Authorized Dealer & Bangalore Locations */}
          <div className="flex items-center gap-3 font-medium">
            <span className="flex items-center gap-1.5 text-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-white tracking-wide">Key Motorrs TATA</span>
              <span className="text-slate-400 hidden sm:inline">• Authorized Dealership Bangalore</span>
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>8 Showrooms & 7 Workshops across Bengaluru</span>
            </span>
          </div>

          {/* Right: Working Hours, Phone & Tata EV Zone badge */}
          <div className="flex items-center gap-3 text-xs">
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Today: 9:00 AM - 8:00 PM</span>
            </span>
            
            <a 
              href="tel:+919590000055" 
              className="flex items-center gap-1.5 font-bold text-amber-300 hover:text-white transition-colors tracking-wide bg-white/5 hover:bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10"
            >
              <Phone className="w-3 h-3 fill-current text-amber-400" />
              <span>+91 95900 00055</span>
            </a>

            <button 
              onClick={() => quickNav('ev-zone')}
              className="hidden md:inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-600/30 to-teal-600/30 hover:from-emerald-600/40 hover:to-teal-600/40 text-emerald-300 px-3 py-0.5 rounded-full border border-emerald-400/30 text-[11px] font-bold transition shadow-sm"
            >
              <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" />
              <span>Tata EV Zone</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with High-end Alignment */}
          <div className="flex items-center gap-3 sm:gap-6 cursor-pointer group" onClick={() => quickNav('home')}>
            <div className="relative">
              <img 
                src="/assets/img/logo.png" 
                alt="Key Motorrs TATA" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />
            </div>
            
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            
            <div className="flex items-center gap-2.5">
              <img 
                src="/assets/img/tata-logo.png" 
                alt="TATA Motors" 
                className="h-7 sm:h-9 w-auto object-contain"
              />
              <div className="hidden xl:block text-left leading-none">
                <span className="text-[9px] font-black tracking-widest text-km-blue block uppercase mb-0.5">Authorized Dealer</span>
                <span className="text-xs font-black tracking-tight text-slate-900">TATA MOTORS</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/60 shadow-inner">
            <button
              onClick={() => quickNav('home')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'home' 
                  ? 'bg-white text-km-blue shadow-sm shadow-slate-200' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              Home
            </button>

            {/* Models Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setModelsDropdownOpen(true)}
              onMouseLeave={() => setModelsDropdownOpen(false)}
            >
              <button
                onClick={() => quickNav('models')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all ${
                  activeTab === 'models' 
                    ? 'bg-white text-km-blue shadow-sm shadow-slate-200' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <span>Our Models</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform group-hover:rotate-180" />
              </button>

              {modelsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-100 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200 ring-1 ring-slate-900/5">
                  <div className="text-[10px] font-extrabold tracking-wider text-slate-400 uppercase pb-2 border-b border-slate-100 flex justify-between items-center">
                    <span>Tata Passenger Lineup</span>
                    <span className="bg-blue-50 text-km-blue px-2 py-0.5 rounded-full font-bold">Bangalore Showrooms</span>
                  </div>

                  <div className="space-y-1.5 mt-2.5">
                    <button 
                      onClick={() => { quickNav('models'); setModelsDropdownOpen(false); }}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-slate-800 hover:bg-blue-50 hover:text-km-blue rounded-xl flex items-center justify-between transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Car className="w-4 h-4 text-km-blue" />
                        <span>All Cars & SUVs</span>
                      </span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">16 Cars</span>
                    </button>

                    <button 
                      onClick={() => { quickNav('ev-zone'); setModelsDropdownOpen(false); }}
                      className="w-full text-left px-3 py-2 text-xs font-bold text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl flex items-center justify-between transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                        <span>Electric Vehicles (EV Zone)</span>
                      </span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">7 Models</span>
                    </button>
                    
                    <div className="border-t border-slate-100 my-2 pt-2">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1.5">Quick Direct View</div>
                      <div className="grid grid-cols-2 gap-1 text-[11px]">
                        {['Curvv', 'Curvv.ev', 'Nexon', 'Nexon.ev', 'Harrier', 'Safari', 'Punch', 'Altroz'].map(m => (
                          <button
                            key={m}
                            onClick={() => {
                              onSelectModel(m.toLowerCase().replace('.', '-'));
                              setModelsDropdownOpen(false);
                            }}
                            className="px-2.5 py-1.5 text-left font-semibold hover:bg-slate-100/80 rounded-lg text-slate-700 hover:text-km-blue transition-colors flex items-center gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            <span>{m}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => quickNav('ev-zone')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'ev-zone' 
                  ? 'bg-emerald-50 text-emerald-700 shadow-sm border border-emerald-200/50' 
                  : 'text-slate-600 hover:text-emerald-700 hover:bg-white/50'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
              <span>EV Zone</span>
            </button>

            <button
              onClick={() => quickNav('offers')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'offers' 
                  ? 'bg-white text-km-blue shadow-sm shadow-slate-200' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Special Offers</span>
            </button>

            <button
              onClick={() => quickNav('outlets')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeTab === 'outlets' 
                  ? 'bg-white text-km-blue shadow-sm shadow-slate-200' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Outlets</span>
            </button>

            <button
              onClick={() => quickNav('about')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'about' 
                  ? 'bg-white text-km-blue shadow-sm shadow-slate-200' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              About
            </button>
          </nav>

          {/* Action CTAs: High-end Pill Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => onOpenTestDrive()}
              className="relative overflow-hidden group bg-gradient-to-r from-km-blue to-km-blue-light text-white text-xs font-extrabold px-4 sm:px-5 py-2.5 rounded-xl shadow-md shadow-blue-900/20 hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300 flex items-center gap-1.5 uppercase tracking-wider"
            >
              <Compass className="w-4 h-4 text-blue-200 group-hover:rotate-45 transition-transform duration-300" />
              <span>Test Drive</span>
            </button>

            <button
              onClick={() => onOpenService()}
              className="bg-white hover:bg-slate-50 border border-slate-300/90 text-slate-800 text-xs font-extrabold px-4 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-1.5 uppercase tracking-wider shadow-sm hover:border-km-blue hover:text-km-blue"
            >
              <Wrench className="w-3.5 h-3.5 text-amber-600" />
              <span>Service</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenTestDrive()}
              className="bg-km-blue text-white text-xs font-bold px-3 py-2 rounded-xl shadow-sm"
            >
              Test Drive
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-km-blue rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => { onOpenTestDrive(); setMobileMenuOpen(false); }}
              className="bg-km-blue text-white font-extrabold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider text-center shadow-md shadow-blue-900/20"
            >
              Test Drive
            </button>
            <button
              onClick={() => { onOpenService(); setMobileMenuOpen(false); }}
              className="border border-slate-300 bg-white text-slate-800 font-extrabold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider text-center shadow-sm"
            >
              Book Service
            </button>
          </div>

          <div className="space-y-1">
            <button
              onClick={() => quickNav('home')}
              className="w-full text-left px-3 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-100 rounded-xl"
            >
              Home
            </button>
            <button
              onClick={() => quickNav('models')}
              className="w-full text-left px-3 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-100 rounded-xl flex items-center justify-between"
            >
              <span>Our Models (16 Cars & SUVs)</span>
              <span className="text-[10px] bg-blue-100 text-km-blue px-2 py-0.5 rounded-full font-black">All Models</span>
            </button>
            <button
              onClick={() => quickNav('ev-zone')}
              className="w-full text-left px-3 py-2.5 text-xs font-bold text-emerald-800 hover:bg-emerald-50 rounded-xl flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>Tata EV Zone</span>
            </button>
            <button
              onClick={() => quickNav('offers')}
              className="w-full text-left px-3 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-100 rounded-xl flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Special Offers & Exchange</span>
            </button>
            <button
              onClick={() => quickNav('outlets')}
              className="w-full text-left px-3 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-100 rounded-xl flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>Bangalore Outlets (8 Branches)</span>
            </button>
            <button
              onClick={() => quickNav('about')}
              className="w-full text-left px-3 py-2.5 text-xs font-bold text-slate-800 hover:bg-slate-100 rounded-xl"
            >
              About Key Motors
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => { onOpenPrice(); setMobileMenuOpen(false); }}
              className="w-full bg-slate-900 text-white font-bold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider text-center"
            >
              Get On-Road Price Quote
            </button>
            <a
              href="tel:+919590000055"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200"
            >
              <Phone className="w-4 h-4" />
              <span>Call Bangalore Helpline: +91 95900 00055</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
