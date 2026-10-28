import React, { useState, useMemo } from 'react';
import { Zap, Leaf, IndianRupee, TrendingUp, Sparkles, ArrowRight, ShieldCheck, BatteryCharging, Compass } from 'lucide-react';
import { CARS } from '../data/cars';

export default function EvSavingsCalculator({ onSelectModel, onOpenTestDrive }) {
  const [dailyKm, setDailyKm] = useState(45);
  const [petrolPrice, setPetrolPrice] = useState(103);
  const [petrolMileage, setPetrolMileage] = useState(13); // km/l
  const [evTariff, setEvTariff] = useState(7.5); // ₹ per kWh in Bangalore

  const evCars = CARS.filter(c => c.category === 'EV');

  const savings = useMemo(() => {
    const petrolCostPerKm = petrolPrice / petrolMileage;
    const evKmPerKwh = 7.5; 
    const evCostPerKm = evTariff / evKmPerKwh;

    const monthlyKm = dailyKm * 30;
    const yearlyKm = dailyKm * 365;

    const monthlyPetrolCost = monthlyKm * petrolCostPerKm;
    const monthlyEvCost = monthlyKm * evCostPerKm;
    const monthlySaving = monthlyPetrolCost - monthlyEvCost;

    const yearlySaving = monthlySaving * 12;
    const fiveYearSaving = yearlySaving * 5;

    const co2SavedKg = Math.round((yearlyKm * 0.12) / 1000);
    const treesEquivalent = Math.round(co2SavedKg / 22);

    return {
      petrolCostPerKm: petrolCostPerKm.toFixed(2),
      evCostPerKm: evCostPerKm.toFixed(2),
      monthlySaving: Math.round(monthlySaving),
      yearlySaving: Math.round(yearlySaving),
      fiveYearSaving: Math.round(fiveYearSaving),
      co2SavedTonnes: (co2SavedKg / 1000).toFixed(1),
      treesEquivalent
    };
  }, [dailyKm, petrolPrice, petrolMileage, evTariff]);

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="ev-zone" className="py-20 sm:py-28 bg-dark-mesh text-white relative overflow-hidden border-t border-slate-800">
      {/* Decorative High-Tech Glows */}
      <div className="absolute top-1/4 left-0 -ml-40 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 -mr-40 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black tracking-widest uppercase mb-3 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
            <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>Tata EV Green Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            How Much Will You <span className="text-gradient-ev">Save with Tata EV</span>?
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Bengaluru runs on Tata EV. Discover your exact fuel savings, Karnataka road-tax exemption benefits, and carbon offset compared to traditional petrol cars.
          </p>
        </div>

        {/* High-Tech Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 dark-range">
          {/* Controls Column with Frosted Glassmorphism */}
          <div className="lg:col-span-6 bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl ring-1 ring-white/5">
            {/* Daily Distance */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Your Daily Bangalore Commute</span>
                </label>
                <span className="text-xl font-black text-emerald-400 tracking-tight">
                  {dailyKm} km / day
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="180"
                step="5"
                value={dailyKm}
                onChange={(e) => setDailyKm(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-1">
                <span>10 km (City Short)</span>
                <span>45 km (Tech Park Commute)</span>
                <span>180 km (Heavy Daily)</span>
              </div>
            </div>

            {/* Petrol Price */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                  Current Petrol Price (Bengaluru)
                </label>
                <span className="text-base font-black text-white">
                  ₹ {petrolPrice} / Litre
                </span>
              </div>
              <input
                type="range"
                min="95"
                max="125"
                step="1"
                value={petrolPrice}
                onChange={(e) => setPetrolPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Petrol Mileage Baseline */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                  Old Petrol Car Mileage
                </label>
                <span className="text-base font-black text-white">
                  {petrolMileage} km / Litre
                </span>
              </div>
              <input
                type="range"
                min="9"
                max="20"
                step="0.5"
                value={petrolMileage}
                onChange={(e) => setPetrolMileage(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Cost Per Km comparison snippet */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-center">
                <span className="text-[10px] text-red-300 uppercase block font-black tracking-wider">Petrol Running Cost</span>
                <span className="text-2xl font-black text-red-400 mt-0.5 block">₹ {savings.petrolCostPerKm} <span className="text-xs font-bold text-red-300">/ km</span></span>
              </div>
              <div className="bg-emerald-500/15 border border-emerald-500/30 rounded-2xl p-4 text-center shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                <span className="text-[10px] text-emerald-300 uppercase block font-black tracking-wider">Tata EV Running Cost</span>
                <span className="text-2xl font-black text-emerald-400 mt-0.5 block">₹ {savings.evCostPerKm} <span className="text-xs font-bold text-emerald-300">/ km</span></span>
              </div>
            </div>
          </div>

          {/* Results Summary Display - Neon Glow Panel */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-gradient-to-br from-emerald-950/90 via-slate-900 to-slate-950 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-300">
                  5-Year Cumulative Fuel Savings
                </span>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30 font-black">
                  Zero Road Tax Benefit
                </span>
              </div>

              <div className="py-6">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-emerald-400 tracking-tight text-gradient-ev">
                  {formatINR(savings.fiveYearSaving)}
                </div>
                <div className="text-sm text-slate-300 mt-2 font-medium">
                  That is a guaranteed <span className="font-extrabold text-white text-base">{formatINR(savings.monthlySaving)}</span> saved in your bank account every single month!
                </div>
              </div>

              {/* Environmental Impact */}
              <div className="grid grid-cols-2 gap-4 pt-5 border-t border-emerald-500/20">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base font-black text-white">{savings.co2SavedTonnes} Tonnes</div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase">CO2 Prevented / Year</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Sparkles className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <div className="text-base font-black text-white">~{savings.treesEquivalent} Trees</div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase">Planting Equivalent</div>
                  </div>
                </div>
              </div>
            </div>

            {/* EV Model Quick Access Bar */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 backdrop-blur-md">
              <span className="text-xs text-slate-300 font-black uppercase tracking-wider flex items-center gap-1.5">
                <BatteryCharging className="w-4 h-4 text-emerald-400" />
                <span>Tata EV Lineup:</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {evCars.map(c => (
                  <button
                    key={c.id}
                    onClick={() => onSelectModel(c.id)}
                    className="px-3 py-1.5 bg-white/10 hover:bg-emerald-500 hover:text-white rounded-xl text-xs font-extrabold text-slate-200 transition-all hover:scale-105"
                  >
                    {c.name.replace('Tata ', '')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
