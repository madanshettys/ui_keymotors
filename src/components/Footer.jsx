import React from 'react';
import { Phone, Mail, MapPin, Shield, Zap, Car, ExternalLink, Heart, Compass, Clock } from 'lucide-react';
import { OUTLETS } from '../data/outlets';
import { CARS } from '../data/cars';

export default function Footer({ onOpenTestDrive, onOpenService, onSelectModel, setActiveTab }) {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      {/* Upper Footer CTA Strip - Luxury Automotive Blue */}
      <div className="bg-gradient-to-r from-slate-950 via-km-navy to-km-blue py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-blue-300 font-black uppercase tracking-widest text-[11px] block">
              Bangalore's Leading Tata Dealership
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Ready to Experience Your Next TATA Vehicle?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg">
              Book a free doorstep test drive or get a transparent Bangalore on-road price quote in minutes.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onOpenTestDrive()}
              className="bg-white hover:bg-slate-100 text-km-blue font-black px-6 py-3.5 rounded-2xl transition uppercase tracking-wider shadow-xl hover:-translate-y-0.5"
            >
              Book Test Drive
            </button>
            <a
              href="tel:+919590000055"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-6 py-3.5 rounded-2xl transition flex items-center gap-2 shadow-xl hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>+91 95900 00055</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Authorized Badge */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-2xl shadow-md">
                <img src="/assets/img/logo.png" alt="Key Motorrs" className="h-8 w-auto" />
              </div>
              <div className="bg-white p-2 rounded-2xl shadow-md">
                <img src="/assets/img/tata-logo.png" alt="TATA Motors" className="h-8 w-auto" />
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-medium">
              Key Motorrs is an authorized dealership of Tata Motors Passenger & Electric Vehicles with 8 state-of-the-art showrooms and 7 automated service facilities across Bengaluru. Delivering trust, safety, and customer delight for over 20 years.
            </p>

            <div className="space-y-2.5 pt-2 text-slate-300 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span className="text-xs">Nayandahalli Metro Station Opp., Mysore Road, Bengaluru 560039</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919590000055" className="hover:text-white font-extrabold text-xs">
                  +91 95900 00055 / 080-6922 2222
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:sales@keymotors.in" className="hover:text-white text-xs">
                  sales@keymotors.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Tata Models */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest text-blue-400">
              TATA Models
            </h4>
            <ul className="space-y-2 text-slate-400 font-medium text-xs">
              {['curvv', 'curvv-ev', 'nexon', 'nexon-ev', 'harrier', 'safari', 'punch', 'punch-ev', 'tiago', 'altroz'].map(id => {
                const car = CARS.find(c => c.id === id);
                if (!car) return null;
                return (
                  <li key={id}>
                    <button
                      onClick={() => onSelectModel(id)}
                      className="hover:text-white transition-colors text-left flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                      <span>{car.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Bangalore Showrooms */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest text-blue-400">
              Bengaluru Outlets
            </h4>
            <ul className="space-y-2 text-slate-400 font-medium text-xs">
              {OUTLETS.map(outlet => (
                <li key={outlet.id}>
                  <a
                    href={outlet.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                    <span>{outlet.name.replace('Key Motors - ', '')}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest text-blue-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-400 font-medium text-xs">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-white">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('models')} className="hover:text-white">
                  All Tata Models
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('ev-zone')} className="hover:text-white text-emerald-400">
                  Tata EV Zone
                </button>
              </li>
              <li>
                <button onClick={() => onOpenTestDrive()} className="hover:text-white">
                  Book Doorstep Test Drive
                </button>
              </li>
              <li>
                <button onClick={() => onOpenService()} className="hover:text-white">
                  Book Car Service (Express)
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('offers')} className="hover:text-white">
                  Special Offers & Exchange
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('about')} className="hover:text-white">
                  About Key Motors
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-14 pt-8 border-t border-slate-900 text-[11px] text-slate-500 space-y-3">
          <p className="leading-relaxed">
            *Disclaimer: Prices shown are ex-showroom Bengaluru. Road tax, Karnataka RTO registration, mandatory insurance, fastag, and dealer logistics are extra. Offers and promotions are valid for a limited period and subject to stock availability and manufacturer terms.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-900/60 font-medium">
            <div>
              © {new Date().getFullYear()} Key Motorrs TATA. All Rights Reserved. Authorized TATA Motors Dealership in Karnataka.
            </div>
            <div className="flex gap-4">
              <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-slate-400 cursor-pointer">Terms & Conditions</span>
              <span>•</span>
              <span className="hover:text-slate-400 cursor-pointer">Customer Grievance</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
