import React from 'react';
import { Star, Quote, CheckCircle2, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black tracking-widest uppercase mb-3 border border-emerald-300/50 shadow-sm">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>4.8 ★ Google Verified Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Stories from Our <span className="text-gradient-blue">Happy Owners</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Over 75,000 families across Bengaluru have celebrated their dream Tata car delivery at Key Motors. Here is what they have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-automotive hover:shadow-2xl border border-slate-200/80 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 group"
            >
              <div>
                {/* Photo and Customer Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-2xl object-cover object-center shadow-md border-2 border-white ring-2 ring-blue-500/20 shrink-0"
                      onError={(e) => {
                        e.target.src = '/assets/img/gallery/Customer-1.jpg';
                      }}
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center border-2 border-white">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-900 group-hover:text-km-blue transition-colors">
                      {t.name}
                    </h3>
                    <p className="text-xs font-extrabold text-km-blue">{t.car}</p>
                    <span className="text-[11px] font-medium text-slate-500 block mt-0.5">{t.outlet}</span>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3 bg-amber-50/80 px-2.5 py-1 rounded-xl w-fit border border-amber-200/60">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-black text-amber-900 ml-1">5.0</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                <span className="flex items-center gap-1 text-emerald-600">
                  <span>Verified Bangalore Buyer</span>
                </span>
                <span>{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
