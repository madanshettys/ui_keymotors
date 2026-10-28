import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, CheckCircle2, ShieldCheck, Wrench, Car, Compass } from 'lucide-react';
import { OUTLETS } from '../data/outlets';

export default function OutletsSection({ onOpenTestDrive, onOpenService }) {
  const [filter, setFilter] = useState('all');

  const filteredOutlets = OUTLETS.filter(o => {
    if (filter === 'showroom') return o.category === 'showroom' || o.category === 'both';
    if (filter === 'service') return o.category === 'service' || o.category === 'both';
    return true;
  });

  return (
    <section id="outlets" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-black tracking-widest uppercase mb-3 border border-rose-200/60 shadow-sm">
            <MapPin className="w-4 h-4 text-rose-600" />
            <span>Bangalore Showroom Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Our Showrooms & <span className="text-gradient-blue">Service Centers</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Visit any of our 8 flagship showrooms and 7 automated workshops located conveniently across Bengaluru and surrounding districts.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex justify-center gap-2">
            {[
              { id: 'all', label: 'All Locations (8)' },
              { id: 'showroom', label: 'Showrooms (8)' },
              { id: 'service', label: 'Service Centers (7)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all ${
                  filter === tab.id
                    ? 'bg-km-blue text-white shadow-md shadow-blue-900/20 scale-102'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredOutlets.map((outlet) => (
            <div
              key={outlet.id}
              className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between hover:shadow-2xl relative overflow-hidden group hover:-translate-y-1 ${
                outlet.isFlagship
                  ? 'border-blue-400 shadow-xl shadow-blue-900/10 ring-2 ring-blue-500/20'
                  : 'border-slate-200/80 shadow-automotive'
              }`}
            >
              {outlet.isFlagship && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-km-blue to-km-blue-light text-white text-[9px] font-black uppercase tracking-widest px-3.5 py-1 rounded-bl-2xl shadow-sm">
                  Flagship 3S Hub
                </div>
              )}

              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-km-blue block mb-1">
                  {outlet.type}
                </span>

                <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-km-blue transition-colors">
                  {outlet.name.replace('Key Motors - ', '')}
                </h3>

                <div className="space-y-3 text-xs text-slate-600 my-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed font-medium">{outlet.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="font-semibold">{outlet.timings}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div className="flex flex-wrap gap-2">
                      <a href={`tel:${outlet.phone}`} className="font-extrabold text-slate-900 hover:text-km-blue transition-colors">
                        Sales: {outlet.phone}
                      </a>
                      {outlet.servicePhone && (
                        <a href={`tel:${outlet.servicePhone}`} className="text-slate-500 hover:text-amber-600 font-semibold transition-colors">
                          • Service: {outlet.servicePhone}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Outlet Features Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {outlet.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold bg-slate-50 text-slate-700 px-2.5 py-1 rounded-xl border border-slate-200/70"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-2.5">
                <a
                  href={outlet.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-black py-3 px-3 rounded-2xl transition flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5 text-blue-600" />
                  <span>Directions</span>
                </a>

                <button
                  onClick={() => onOpenTestDrive(null)}
                  className="flex-1 bg-km-blue hover:bg-km-blue-light text-white text-xs font-black py-3 px-3 rounded-2xl transition uppercase tracking-wider text-center shadow-md shadow-blue-900/20"
                >
                  Test Drive
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
