import React from 'react';
import { Gift, RefreshCw, ArrowRight, Sparkles, Building2, ShieldCheck, Zap } from 'lucide-react';

export default function OffersSection({ onOpenPrice, onOpenTestDrive }) {
  const offers = [
    {
      title: 'Mega Exchange Carnival',
      benefit: 'Up to ₹ 1,25,000*',
      desc: 'Top trade-in value for your old car of any brand with additional Tata manufacturer exchange bonus.',
      badge: 'LIMITED PERIOD',
      color: 'from-amber-500 to-orange-600',
      actionText: 'Get Car Valuation'
    },
    {
      title: 'Bangalore Corporate Privilege',
      benefit: 'Up to ₹ 35,000 Off*',
      desc: 'Exclusive corporate cash discount for employees of Infosys, TCS, Wipro, Bosch, Accenture, Dell and 500+ corporates.',
      badge: 'IT & CORPORATE',
      color: 'from-blue-600 to-indigo-700',
      actionText: 'Check Eligibility'
    },
    {
      title: 'Tata EV Green Freedom Offer',
      benefit: 'Free 7.2 kW Fast Charger*',
      desc: 'Complimentary home AC fast wallbox charger + free installation support with Curvv.ev, Nexon.ev & Punch.ev.',
      badge: 'EV SPECIAL',
      color: 'from-emerald-600 to-teal-700',
      actionText: 'Claim EV Offer'
    },
    {
      title: '100% On-Road Funding',
      benefit: 'Zero Down Payment Scheme',
      desc: 'Drive home your dream Tata car with 100% on-road financing from SBI, HDFC and Tata Capital with flexible 7-year tenure.',
      badge: 'EASY FINANCE',
      color: 'from-slate-800 to-slate-900',
      actionText: 'Check EMI Plan'
    }
  ];

  return (
    <section id="offers" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-100/60 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black tracking-widest uppercase mb-3 border border-amber-300/50 shadow-sm">
            <Gift className="w-4 h-4 text-amber-600" />
            <span>Exclusive Month-End Privileges</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Special Offers at <span className="text-gradient-blue">Key Motorrs</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Take advantage of season-exclusive exchange bonuses, manufacturer loyalty benefits, corporate discounts, and unbeatable interest rates on the entire Tata lineup.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-automotive hover:shadow-2xl border border-slate-200/80 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden group"
            >
              <div>
                <span className={`inline-block text-[10px] font-black uppercase px-3 py-1 rounded-full text-white bg-gradient-to-r ${offer.color} mb-4 shadow-sm`}>
                  {offer.badge}
                </span>

                <h3 className="text-lg font-black text-slate-900 mb-1 tracking-tight">
                  {offer.title}
                </h3>

                <div className="text-2xl font-black text-km-blue my-2.5 tracking-tight group-hover:scale-102 transition-transform">
                  {offer.benefit}
                </div>

                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {offer.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenPrice()}
                  className="w-full bg-slate-50 hover:bg-km-blue hover:text-white text-slate-800 text-xs font-black py-3 px-3 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 border border-slate-200/80 group-hover:border-transparent"
                >
                  <span>{offer.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Callout for Old Car Exchange - Luxury Obsidian Look */}
        <div className="mt-14 bg-gradient-to-r from-slate-950 via-km-navy to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 relative overflow-hidden">
          <div className="space-y-2.5 text-center md:text-left z-10">
            <span className="text-xs font-black uppercase tracking-widest text-amber-300 flex items-center justify-center md:justify-start gap-2">
              <RefreshCw className="w-4 h-4 text-amber-300" />
              <span>Tata Motors Assured Exchange Desk</span>
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Upgrade Your Old Car to a New Tata Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-medium leading-relaxed">
              Get free doorstep 45-point inspection, instant bank transfer, RC transfer guarantee, and top exchange value across Bangalore.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 z-10">
            <button
              onClick={() => onOpenPrice()}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm px-6 py-4 rounded-2xl transition uppercase tracking-wider shadow-xl hover:-translate-y-0.5"
            >
              Get Free Valuation
            </button>
            <button
              onClick={() => onOpenTestDrive()}
              className="bg-white/10 hover:bg-white/20 text-white font-black text-xs sm:text-sm px-6 py-4 rounded-2xl border border-white/20 transition backdrop-blur-md hover:-translate-y-0.5"
            >
              Book Test Drive
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
