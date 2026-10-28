import React, { useState, useMemo } from 'react';
import { X, Tag, CheckCircle2, ShieldCheck, Download, Send, Phone, MapPin, Sparkles } from 'lucide-react';
import { CARS } from '../data/cars';

export default function OnRoadPriceModal({ isOpen, onClose, preselectedModelId, onOpenTestDrive }) {
  if (!isOpen) return null;

  const [modelId, setModelId] = useState(preselectedModelId || 'curvv');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('560039');
  const [includeAccessories, setIncludeAccessories] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const selectedCar = CARS.find(c => c.id === modelId) || CARS[0];
  const basePrice = selectedCar.priceNum || 999000;
  const isEv = selectedCar.category === 'EV';

  const breakdown = useMemo(() => {
    const rto = isEv ? Math.round(basePrice * 0.04) : Math.round(basePrice * 0.15);
    const insurance = Math.round(basePrice * 0.038) + 6500;
    const fastag = 600;
    const tcs = basePrice > 1000000 ? Math.round(basePrice * 0.01) : 0;
    const accessories = includeAccessories ? 18500 : 0;
    const totalOnRoad = basePrice + rto + insurance + fastag + tcs + accessories;

    return {
      exShowroom: basePrice,
      rto,
      insurance,
      fastag,
      tcs,
      accessories,
      totalOnRoad
    };
  }, [basePrice, isEv, includeAccessories]);

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 ring-1 ring-slate-900/10">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-km-navy to-km-blue text-white p-5 sm:p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center">
              <Tag className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black tracking-tight">Bangalore On-Road Price</h2>
              <p className="text-xs text-blue-200 font-medium">Official Karnataka RTO, Tax & Subsidy Breakdown</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-7 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Select Model */}
          <div>
            <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
              Select Tata Model
            </label>
            <select
              value={modelId}
              onChange={(e) => setModelId(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm font-extrabold text-slate-900 focus:outline-none focus:ring-2 focus:ring-km-blue"
            >
              {CARS.map(c => (
                <option key={c.id} value={c.id}>
                  {c.name} — {c.price} ({c.fuelType})
                </option>
              ))}
            </select>
          </div>

          {/* Price Breakdown Box */}
          <div className="bg-slate-50 rounded-3xl p-5 sm:p-6 border border-slate-200/80 space-y-3.5 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <span className="text-xs font-black text-slate-700 uppercase tracking-wider">Ex-Showroom Price:</span>
              <span className="text-base font-black text-slate-900">{formatINR(breakdown.exShowroom)}</span>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <span>Karnataka RTO / Road Tax</span>
                {isEv && <span className="text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded-md">EV Concession</span>}
              </span>
              <span className="font-extrabold text-slate-900">{formatINR(breakdown.rto)}</span>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
              <span>Comprehensive 1+3 Yr Insurance:</span>
              <span className="font-extrabold text-slate-900">{formatINR(breakdown.insurance)}</span>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
              <span>Fastag & Registration Fee:</span>
              <span className="font-extrabold text-slate-900">{formatINR(breakdown.fastag)}</span>
            </div>

            {breakdown.tcs > 0 && (
              <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
                <span>Govt TCS (1% on &gt;₹10L):</span>
                <span className="font-extrabold text-slate-900">{formatINR(breakdown.tcs)}</span>
              </div>
            )}

            <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeAccessories}
                  onChange={(e) => setIncludeAccessories(e.target.checked)}
                  className="rounded text-km-blue accent-km-blue"
                />
                <span>Key Motors Essential Accessories Pack</span>
              </label>
              <span className="font-extrabold text-slate-900">
                {includeAccessories ? formatINR(breakdown.accessories) : '₹ 0'}
              </span>
            </div>

            {/* Total Highlight */}
            <div className="border-t-2 border-slate-200 pt-3.5 flex items-center justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-900 block">
                  Total Bangalore On-Road Price
                </span>
                <span className="text-[11px] text-slate-500 font-medium">Includes all taxes & mandatory fees</span>
              </div>
              <span className="text-2xl font-black text-km-blue">
                {formatINR(breakdown.totalOnRoad)}
              </span>
            </div>
          </div>

          {/* Lead Capture */}
          {submitted ? (
            <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-3xl text-center space-y-2 animate-in zoom-in-95 duration-200">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <div className="text-sm font-black text-emerald-900">
                Quote Sent to WhatsApp!
              </div>
              <p className="text-xs text-emerald-700 font-medium">
                The detailed variant price list and current dealer discounts have been dispatched to your mobile.
              </p>
              <button
                onClick={() => { onClose(); onOpenTestDrive(modelId); }}
                className="mt-2 inline-block bg-km-blue text-white text-xs font-black py-2.5 px-4 rounded-xl shadow-md"
              >
                Schedule Test Drive for this car
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="text-xs font-black text-slate-700 uppercase tracking-wider">
                Send Detailed Price List & Special Offers to Mobile
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-km-blue"
                />
                <input
                  type="tel"
                  required
                  placeholder="Mobile (WhatsApp) *"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-km-blue"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider py-4 px-4 rounded-2xl shadow-xl shadow-emerald-600/20 transition flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Receive Instant PDF Quote on WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
