import React, { useState } from 'react';
import { X, Shield, Zap, FileText, CheckCircle2, ChevronRight, Palette, Layers, Award, Sparkles, Compass } from 'lucide-react';
import { CARS } from '../data/cars';

export default function CarDetailModal({ carId, onClose, onOpenTestDrive }) {
  if (!carId) return null;

  const car = CARS.find(c => c.id === carId);
  if (!car) return null;

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const currentColor = car.colors && car.colors.length > 0 ? car.colors[selectedColorIndex] : null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-5xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 max-h-[92vh] flex flex-col ring-1 ring-slate-900/10">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-slate-950 via-km-navy to-km-blue text-white p-5 sm:p-6 flex items-center justify-between shrink-0 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                {car.bodyType} • {car.fuelType}
              </span>
              {car.safety && (
                <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full font-black">
                  {car.safety}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{car.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8 flex-1">
          {/* Main Visual Display & Color Customizer */}
          <div className="bg-gradient-to-b from-slate-100 via-slate-50 to-white car-pedestal rounded-3xl p-6 sm:p-8 text-center relative border border-slate-200/80 shadow-inner">
            {/* Display active color car image or default image */}
            <div className="h-56 sm:h-72 flex items-center justify-center">
              <img
                src={currentColor?.img || car.image}
                alt={car.name}
                className="max-h-full max-w-full object-contain filter drop-shadow-xl transition-all duration-300"
              />
            </div>

            {/* Color Swatches */}
            {car.colors && car.colors.length > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-200 inline-flex flex-col items-center">
                <span className="text-xs font-black text-slate-700 mb-2.5 flex items-center gap-1.5 uppercase tracking-wider">
                  <Palette className="w-4 h-4 text-km-blue" />
                  <span>Color: {currentColor?.name}</span>
                </span>
                <div className="flex items-center gap-3">
                  {car.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColorIndex(idx)}
                      style={{ backgroundColor: color.hex }}
                      className={`w-8 h-8 rounded-full shadow-md transition-all ${
                        selectedColorIndex === idx
                          ? 'ring-4 ring-km-blue scale-110 shadow-lg'
                          : 'opacity-80 hover:opacity-100 hover:scale-105'
                      }`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Key Overview Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-center">
              <span className="text-[10px] text-slate-400 font-black uppercase block tracking-wider">Starting Price</span>
              <span className="text-lg font-black text-km-blue">{car.price}</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-center">
              <span className="text-[10px] text-slate-400 font-black uppercase block tracking-wider">
                {car.category === 'EV' ? 'Certified Range' : 'Engine / Mileage'}
              </span>
              <span className="text-sm font-extrabold text-slate-800">{car.range}</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-center">
              <span className="text-[10px] text-slate-400 font-black uppercase block tracking-wider">Transmission</span>
              <span className="text-sm font-extrabold text-slate-800">{car.transmission}</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-center">
              <span className="text-[10px] text-slate-400 font-black uppercase block tracking-wider">Seating Capacity</span>
              <span className="text-sm font-extrabold text-slate-800">{car.seating}</span>
            </div>
          </div>

          {/* Feature Highlights Gallery */}
          {car.features && car.features.length > 0 && (
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 mb-4 flex items-center gap-2 tracking-tight">
                <Layers className="w-5 h-5 text-km-blue" />
                <span>Signature Innovations & Technology</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {car.features.map((feat, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 items-center">
                    {feat.img && (
                      <img
                        src={feat.img}
                        alt={feat.name}
                        className="w-20 h-16 object-cover rounded-xl shrink-0 border border-slate-200 shadow-sm"
                      />
                    )}
                    <div>
                      <h4 className="text-sm font-black text-slate-900">{feat.name}</h4>
                      <p className="text-xs text-slate-600 mt-0.5 leading-relaxed font-medium">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Specifications Table */}
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-900 mb-4 flex items-center gap-2 tracking-tight">
              <Award className="w-5 h-5 text-km-blue" />
              <span>Technical Specifications</span>
            </h3>
            <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 text-xs sm:text-sm divide-y divide-slate-200">
              {car.engine && (
                <div className="py-2.5 flex justify-between font-medium">
                  <span className="text-slate-500">Engine Architecture:</span>
                  <span className="font-extrabold text-slate-900">{car.engine}</span>
                </div>
              )}
              {car.battery && (
                <div className="py-2.5 flex justify-between font-medium">
                  <span className="text-slate-500">Battery Pack (IP67):</span>
                  <span className="font-extrabold text-slate-900">{car.battery}</span>
                </div>
              )}
              {car.charging && (
                <div className="py-2.5 flex justify-between font-medium">
                  <span className="text-slate-500">Fast Charging Time:</span>
                  <span className="font-extrabold text-slate-900">{car.charging}</span>
                </div>
              )}
              <div className="py-2.5 flex justify-between font-medium">
                <span className="text-slate-500">Max Power:</span>
                <span className="font-extrabold text-slate-900">{car.power}</span>
              </div>
              <div className="py-2.5 flex justify-between font-medium">
                <span className="text-slate-500">Max Torque:</span>
                <span className="font-extrabold text-slate-900">{car.torque}</span>
              </div>
              <div className="py-2.5 flex justify-between font-medium">
                <span className="text-slate-500">Boot Space:</span>
                <span className="font-extrabold text-slate-900">{car.bootSpace}</span>
              </div>
              <div className="py-2.5 flex justify-between font-medium">
                <span className="text-slate-500">Safety Standard:</span>
                <span className="font-extrabold text-emerald-700">{car.safety}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 sm:p-6 bg-slate-100/90 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 shrink-0">
          {car.brochure ? (
            <a
              href={car.brochure}
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-700 hover:text-km-blue py-2 px-3 rounded-xl hover:bg-slate-200 transition"
            >
              <FileText className="w-4 h-4 text-red-500" />
              <span>Download Official Brochure</span>
            </a>
          ) : <div></div>}

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-2xl border border-slate-300 text-xs sm:text-sm font-black text-slate-700 hover:bg-slate-200 transition"
            >
              Close
            </button>
            <button
              onClick={() => { onClose(); onOpenTestDrive(car.id); }}
              className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-km-blue to-km-blue-light hover:from-blue-600 hover:to-blue-800 text-white text-xs sm:text-sm font-black shadow-lg shadow-blue-900/20 transition uppercase tracking-wider hover:-translate-y-0.5"
            >
              Book Doorstep Test Drive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
