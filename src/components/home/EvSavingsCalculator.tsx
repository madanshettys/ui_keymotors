'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EV_SAVINGS_DEFAULTS } from '@/config/constants';
import { CARS } from '@/data/cars';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { formatInr } from '@/lib/utils';
import { Zap, Fuel, Leaf, ArrowRight, ShieldCheck, BatteryCharging } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export function EvSavingsCalculator() {
  const [dailyKm, setDailyKm] = useState(45);
  const [selectedEvModel, setSelectedEvModel] = useState('curvv-ev');
  const { openTestDrive } = useModals();

  const evCars = CARS.filter((c) => c.category === 'EV');
  const activeEv = evCars.find((c) => c.id === selectedEvModel) || evCars[0];

  // Calculations
  const monthlyKm = dailyKm * 30;
  const yearlyKm = dailyKm * 365;

  // Petrol cost
  const monthlyPetrolLiters = monthlyKm / EV_SAVINGS_DEFAULTS.avgPetrolMileage;
  const monthlyPetrolCost = Math.round(monthlyPetrolLiters * EV_SAVINGS_DEFAULTS.petrolPricePerLitre);

  // EV electricity cost
  const monthlyEvUnits = monthlyKm / EV_SAVINGS_DEFAULTS.avgEvEfficiency;
  const monthlyEvCost = Math.round(monthlyEvUnits * EV_SAVINGS_DEFAULTS.homeElectricityPerUnit);

  // Savings
  const monthlySavings = monthlyPetrolCost - monthlyEvCost;
  const yearlySavings = monthlySavings * 12;
  const fiveYearSavings = yearlySavings * 5;

  // CO2 saved
  const yearlyCo2SavedKg = Math.round((yearlyKm * EV_SAVINGS_DEFAULTS.avgCo2PerKmPetrol) / 1000);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Inputs & Sliders */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="ev" className="gap-1 font-bold">
                    <Zap className="w-3.5 h-3.5 fill-current" /> Tata.ev Calculator
                  </Badge>
                  <span className="text-xs text-muted-foreground font-semibold">
                    Bangalore Fuel Rates Applied
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  Calculate Your Savings with Tata Electric
                </h2>
                <p className="text-sm text-muted-foreground">
                  Compare daily running costs of Bangalore petrol (₹{EV_SAVINGS_DEFAULTS.petrolPricePerLitre}/L) vs home EV charging (₹{EV_SAVINGS_DEFAULTS.homeElectricityPerUnit}/unit).
                </p>
              </div>

              {/* Select EV Model */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Select Tata EV Model
                </span>
                <div className="flex flex-wrap gap-2">
                  {evCars.map((ev) => (
                    <button
                      key={ev.id}
                      onClick={() => setSelectedEvModel(ev.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        selectedEvModel === ev.id
                          ? 'bg-ev text-ev-foreground shadow-sm'
                          : 'bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {ev.name.replace('Tata ', '')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Daily Distance Slider */}
              <div className="space-y-3 p-4 rounded-2xl bg-muted/50 border border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-foreground">Daily Commute Distance</span>
                  <span className="text-xl font-black text-primary">{dailyKm} km / day</span>
                </div>

                <Slider
                  value={[dailyKm]}
                  onValueChange={(val) => setDailyKm(val[0])}
                  min={10}
                  max={200}
                  step={5}
                  className="py-2"
                />

                <div className="flex justify-between text-[11px] text-muted-foreground font-semibold">
                  <span>10 km (City Short)</span>
                  <span>50 km (Standard Daily)</span>
                  <span>100 km+ (Highway)</span>
                  <span>200 km</span>
                </div>
              </div>

              {/* Running cost breakdown pill */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
                  <div className="text-muted-foreground font-semibold flex items-center gap-1">
                    <Fuel className="w-3.5 h-3.5 text-destructive" /> Petrol Monthly Cost
                  </div>
                  <div className="text-lg font-bold text-destructive mt-1">
                    {formatInr(monthlyPetrolCost)}
                  </div>
                  <div className="text-[10px] text-muted-foreground">~₹ {(monthlyPetrolCost / monthlyKm).toFixed(2)} per km</div>
                </div>

                <div className="p-3 rounded-xl bg-ev/10 border border-ev/20">
                  <div className="text-muted-foreground font-semibold flex items-center gap-1">
                    <BatteryCharging className="w-3.5 h-3.5 text-ev" /> Tata.ev Monthly Cost
                  </div>
                  <div className="text-lg font-bold text-ev mt-1">
                    {formatInr(monthlyEvCost)}
                  </div>
                  <div className="text-[10px] text-muted-foreground">~₹ {(monthlyEvCost / monthlyKm).toFixed(2)} per km</div>
                </div>
              </div>
            </div>

            {/* Right: Net Savings Highlight Box */}
            <div className="lg:col-span-5 bg-primary text-primary-foreground rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-foreground/80">
                    Your Net Fuel Savings
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-white mt-1">
                    {formatInr(fiveYearSavings)}
                  </div>
                  <p className="text-xs text-primary-foreground/80 mt-1">
                    Estimated savings over 5 Years ({yearlyKm * 5} km)
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-primary-foreground/15 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-primary-foreground/80">Monthly Cash Saved:</span>
                    <span className="font-bold text-white text-sm">{formatInr(monthlySavings)} / mo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-foreground/80">Annual Cash Saved:</span>
                    <span className="font-bold text-white text-sm">{formatInr(yearlySavings)} / yr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-foreground/80 flex items-center gap-1">
                      <Leaf className="w-3.5 h-3.5 text-ev" /> CO₂ Avoided Yearly:
                    </span>
                    <span className="font-bold text-ev text-sm">{yearlyCo2SavedKg} kg CO₂</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <Button
                    size="lg"
                    onClick={() => openTestDrive(activeEv.id)}
                    className="w-full bg-white text-primary hover:bg-slate-100 font-bold shadow-lg"
                  >
                    Test Drive {activeEv.name}
                  </Button>

                  <Link href={`/models/${activeEv.id}`} className="block">
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-white/30 text-white hover:bg-white/10 font-semibold text-xs"
                    >
                      Explore {activeEv.name} Specs & Battery
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
