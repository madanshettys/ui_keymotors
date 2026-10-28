import React, { useState } from 'react';
import { X, Scale, Check, Shield, Zap, ArrowRight } from 'lucide-react';
import { CARS } from '../data/cars';

export default function CarComparisonModal({ isOpen, onClose, comparedCars, onOpenTestDrive }) {
  if (!isOpen) return null;

  const [slot1, setSlot1] = useState(comparedCars[0]?.id || 'curvv');
  const [slot2, setSlot2] = useState(comparedCars[1]?.id || 'nexon');

  const car1 = CARS.find(c => c.id === slot1) || CARS[0];
  const car2 = CARS.find(c => c.id === slot2) || CARS[1];

  const specs = [
    { label: 'Ex-Showroom Price', key1: car1.price, key2: car2.price, highlight: true },
    { label: 'Segment / Body Type', key1: car1.bodyType, key2: car2.bodyType },
    { label: 'Fuel / Powertrain', key1: car1.fuelType, key2: car2.fuelType },
    { label: 'Safety NCAP Rating', key1: car1.safety, key2: car2.safety, isSafety: true },
    { label: 'Range / Mileage', key1: car1.range, key2: car2.range, highlight: true },
    { label: 'Transmission', key1: car1.transmission, key2: car2.transmission },
    { label: 'Max Power', key1: car1.power, key2: car2.power },
    { label: 'Max Torque', key1: car1.torque, key2: car2.torque },
    { label: 'Boot Space', key1: car1.bootSpace, key2: car2.bootSpace },
    { label: 'Seating Capacity', key1: car1.seating, key2: car2.seating },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 ring-1 ring-slate-900/10">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-km-navy to-km-blue text-white p-5 sm:p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center">
              <Scale className="w-5 h-5 text-blue-300" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black tracking-tight">Tata Car Comparison Tool</h2>
              <p className="text-xs text-blue-200 font-medium">Side-by-side technical specs, safety & dimensions</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Vehicle Selection Header */}
        <div className="grid grid-cols-2 gap-4 p-5 sm:p-7 bg-slate-50 border-b border-slate-200">
          {/* Car 1 */}
          <div className="text-center space-y-3">
            <select
              value={slot1}
              onChange={(e) => setSlot1(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-2xl px-3 py-2.5 text-xs sm:text-sm font-extrabold text-slate-900 shadow-sm"
            >
              {CARS.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
            <div className="h-32 flex items-center justify-center car-pedestal p-2">
              <img src={car1.image} alt={car1.name} className="max-h-28 max-w-full object-contain filter drop-shadow" />
            </div>
            <div className="text-base font-black text-slate-900">{car1.name}</div>
            <div className="text-sm font-black text-km-blue">{car1.price}</div>
            <button
              onClick={() => { onClose(); onOpenTestDrive(car1.id); }}
              className="bg-km-blue hover:bg-km-blue-light text-white text-xs font-black py-2 px-4 rounded-xl transition shadow-md shadow-blue-900/10 uppercase tracking-wider"
            >
              Test Drive
            </button>
          </div>

          {/* Car 2 */}
          <div className="text-center space-y-3 border-l border-slate-200 pl-4">
            <select
              value={slot2}
              onChange={(e) => setSlot2(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-2xl px-3 py-2.5 text-xs sm:text-sm font-extrabold text-slate-900 shadow-sm"
            >
              {CARS.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
            <div className="h-32 flex items-center justify-center car-pedestal p-2">
              <img src={car2.image} alt={car2.name} className="max-h-28 max-w-full object-contain filter drop-shadow" />
            </div>
            <div className="text-base font-black text-slate-900">{car2.name}</div>
            <div className="text-sm font-black text-km-blue">{car2.price}</div>
            <button
              onClick={() => { onClose(); onOpenTestDrive(car2.id); }}
              className="bg-km-blue hover:bg-km-blue-light text-white text-xs font-black py-2 px-4 rounded-xl transition shadow-md shadow-blue-900/10 uppercase tracking-wider"
            >
              Test Drive
            </button>
          </div>
        </div>

        {/* Comparison Specs Table */}
        <div className="p-4 sm:p-6 max-h-[400px] overflow-y-auto divide-y divide-slate-100 text-xs sm:text-sm">
          {specs.map((row, idx) => (
            <div key={idx} className={`py-3.5 grid grid-cols-12 gap-2 items-center ${idx % 2 === 0 ? 'bg-slate-50/50 rounded-xl' : 'bg-white'}`}>
              <div className="col-span-4 font-black text-slate-600 pl-3">
                {row.label}
              </div>
              <div className={`col-span-4 text-center font-extrabold ${row.highlight ? 'text-km-blue font-black' : 'text-slate-900'}`}>
                {row.isSafety && <Shield className="w-3.5 h-3.5 inline mr-1 text-amber-500 fill-amber-500" />}
                {row.key1 || '—'}
              </div>
              <div className={`col-span-4 text-center font-extrabold ${row.highlight ? 'text-km-blue font-black' : 'text-slate-900'}`}>
                {row.isSafety && <Shield className="w-3.5 h-3.5 inline mr-1 text-amber-500 fill-amber-500" />}
                {row.key2 || '—'}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-slate-100/90 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
          <span>*Ex-showroom prices Bangalore. Detailed variant quotes available on request.</span>
          <button
            onClick={onClose}
            className="bg-slate-900 hover:bg-slate-800 text-white font-black px-5 py-2.5 rounded-2xl transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
