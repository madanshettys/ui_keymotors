import React from 'react';
import { Award, Users, CheckCircle2, ShieldCheck, Sparkles, Building2, Star, ArrowRight } from 'lucide-react';

export default function AboutSection({ onOpenTestDrive, onGoOutlets }) {
  const stats = [
    { value: '75,000+', label: 'Delighted Customers', sub: 'Across Karnataka' },
    { value: '20+ Years', label: 'Dealership Legacy', sub: 'Since 2004' },
    { value: '8 Showrooms', label: 'Prime Bengaluru', sub: 'High-tech Hubs' },
    { value: '7 Workshops', label: 'Automated Bays', sub: '90-min Express' },
    { value: '4.8 ★', label: 'Google Rating', sub: '15,000+ Reviews' },
  ];

  const pillars = [
    {
      title: 'Seamless Digital to Showroom Journey',
      desc: 'Explore complete specs, calculate custom EMIs, and book zero-friction doorstep test drives anywhere in Bangalore from the comfort of your home.'
    },
    {
      title: 'Dedicated Product Champions',
      desc: 'Our trained automotive advisors ensure complete pricing transparency with no hidden charges, fast bank approvals, and a royal delivery celebration.'
    },
    {
      title: 'Future-Ready Electric Vehicle Hubs',
      desc: 'Equipped with 60kW DC fast-chargers, certified high-voltage technicians, and dedicated EV service lanes across Bengaluru.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden bg-mesh-radial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-km-blue text-xs font-black tracking-widest uppercase mb-3.5 border border-blue-200/60 shadow-sm">
            <Award className="w-4 h-4 text-km-blue" />
            <span>Authorized TATA Motors Dealership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Driven by Trust: Your Premier <span className="text-gradient-blue">TATA Showroom</span> in Bangalore
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Welcome to Key Motorrs — Bengaluru’s most preferred Tata passenger and electric vehicle dealership. For over two decades, we have been crafting unforgettable car buying and ownership experiences.
          </p>
        </div>

        {/* Stats Grid - Luxury Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mb-16">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="bg-slate-50/80 backdrop-blur-md border border-slate-200/80 rounded-3xl p-5 sm:p-6 text-center hover:bg-white hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-km-blue tracking-tight group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-black text-slate-800">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content: Story & Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Genuine Images with Architectural Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-900/5">
                <img 
                  src="/assets/img/home/home-abt-1.jpg" 
                  alt="Key Motors Tata Showroom Experience" 
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
              </div>

              {/* Overlapping secondary image */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-1/2 rounded-3xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block ring-1 ring-slate-900/5">
                <img 
                  src="/assets/img/home/home-abt-2.jpg" 
                  alt="Customer Car Delivery at Key Motors" 
                  className="w-full h-52 object-cover object-center transform hover:scale-103 transition-transform duration-700"
                />
              </div>

              {/* Floating Award Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xl rounded-2xl p-3.5 shadow-2xl border border-slate-100 flex items-center gap-3 ring-1 ring-slate-900/5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-km-blue to-km-blue-light flex items-center justify-center text-white font-black text-base shadow-md">
                  20+
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">Years of Service</div>
                  <div className="text-[11px] text-slate-500 font-medium">Bengaluru Since 2004</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pillars & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-black text-km-blue uppercase tracking-widest">
                The Key Motors Commitment
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Why Key Motorrs Stands Apart in Karnataka
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you are stepping in for your very first family hatchback, transitioning to the futuristic Tata EV ecosystem, or scheduling a periodic service checkup, Key Motors combines genuine hospitality with Tata Motors' world-class automotive safety and engineering.
              </p>
            </div>

            <div className="space-y-3.5">
              {pillars.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-km-blue flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-km-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-slate-900">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenTestDrive}
                className="bg-km-blue hover:bg-km-blue-light text-white font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-xl shadow-blue-900/20 hover:shadow-2xl transition-all tracking-wide uppercase hover:-translate-y-0.5"
              >
                Book Doorstep Test Drive
              </button>
              <button
                onClick={onGoOutlets}
                className="border border-slate-300 bg-white text-slate-800 hover:border-km-blue hover:text-km-blue font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-2xl transition shadow-sm hover:-translate-y-0.5"
              >
                Locate 8 Showrooms
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
