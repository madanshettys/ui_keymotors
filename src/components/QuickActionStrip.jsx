import React from 'react';
import { Tag, Compass, Wrench, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

export default function QuickActionStrip({ onOpenTestDrive, onOpenService, onOpenPrice, onGoOutlets }) {
  const cards = [
    {
      title: 'Get On-Road Price',
      subtitle: 'Transparent Bangalore RTO & Tax Breakdown',
      icon: Tag,
      iconGradient: 'from-blue-600 via-indigo-600 to-km-blue',
      shadowGlow: 'group-hover:shadow-blue-500/20',
      badge: 'Instant Quote',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/60',
      action: () => onOpenPrice()
    },
    {
      title: 'Book a Test Drive',
      subtitle: 'Free Doorstep or Showroom Test Drive',
      icon: Compass,
      iconGradient: 'from-sky-500 via-blue-600 to-indigo-700',
      shadowGlow: 'group-hover:shadow-sky-500/20',
      badge: 'Free Doorstep',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200/60',
      action: () => onOpenTestDrive()
    },
    {
      title: 'Book Car Service',
      subtitle: 'Express 90-Min & Free Pickup/Drop',
      icon: Wrench,
      iconGradient: 'from-amber-500 via-orange-600 to-red-600',
      shadowGlow: 'group-hover:shadow-amber-500/20',
      badge: 'Certified Bay',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200/60',
      action: () => onOpenService()
    },
    {
      title: 'Bangalore Outlets',
      subtitle: '8 Showrooms & 7 Certified Workshops',
      icon: MapPin,
      iconGradient: 'from-emerald-500 via-teal-600 to-cyan-700',
      shadowGlow: 'group-hover:shadow-emerald-500/20',
      badge: 'Find Nearest',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      action: () => onGoOutlets()
    }
  ];

  return (
    <section className="relative -mt-10 sm:-mt-14 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              onClick={card.action}
              className={`group relative bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-automotive hover:shadow-2xl ${card.shadowGlow} border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer overflow-hidden flex flex-col justify-between`}
            >
              {/* Subtle top ambient glow */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.iconGradient}`}></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-13 h-13 p-3.5 rounded-2xl bg-gradient-to-br ${card.iconGradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full border ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-km-blue transition-colors mb-1.5 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {card.subtitle}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-black text-km-blue group-hover:text-blue-600">
                <span className="tracking-wide">Explore</span>
                <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
