import React, { useState } from 'react';
import { X, CheckCircle2, Wrench, Calendar, Clock, MapPin, Truck, Sparkles, ShieldCheck } from 'lucide-react';
import { OUTLETS } from '../data/outlets';
import { CARS } from '../data/cars';

export default function ServiceBookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [carModel, setCarModel] = useState('Nexon');
  const [regNumber, setRegNumber] = useState('');
  const [servicePackage, setServicePackage] = useState('periodic');
  const [pickupRequired, setPickupRequired] = useState(true);
  const [outletId, setOutletId] = useState('mysore-road');
  const [preferredDate, setPreferredDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const serviceOutlets = OUTLETS.filter(o => o.category === 'both' || o.category === 'service');

  const packages = [
    { id: 'periodic', name: 'Periodic Maintenance', desc: 'Engine oil, filters, 40-point safety check', time: '90 Mins' },
    { id: 'express', name: 'Express Quick Bay', desc: 'Rapid inspection, fluid top-up & wash', time: '60 Mins' },
    { id: 'ac', name: 'AC & Climate Disinfection', desc: 'Cabin filter replacement, ozone treatment', time: '45 Mins' },
    { id: 'body', name: 'Cashless Bodyshop Repair', desc: 'Insurance tie-up with all major providers', time: 'Full Service' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    const ref = 'KM-SRV-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);

    const booking = {
      id: ref,
      carModel,
      regNumber,
      servicePackage,
      pickupRequired,
      outletId,
      preferredDate,
      name,
      phone,
      address,
      createdAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('km_service_bookings') || '[]');
      existing.unshift(booking);
      localStorage.setItem('km_service_bookings', JSON.stringify(existing));
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 ring-1 ring-slate-900/10">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white p-5 sm:p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-amber-100" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black tracking-tight">Book Certified TATA Service</h2>
              <p className="text-xs text-amber-100 font-medium">7 Automated Workshops in Bengaluru • 90-Min Express Bay</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 sm:p-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10 text-amber-600" />
            </div>

            <div className="inline-block bg-amber-50 text-amber-800 text-xs font-black px-3.5 py-1 rounded-full border border-amber-200">
              Service Appointment ID: {bookingRef}
            </div>

            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Service Appointment Confirmed!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-medium">
              We have reserved your service slot on <span className="font-black text-slate-900">{preferredDate}</span>. Our service advisor will call you to coordinate vehicle {pickupRequired ? 'doorstep pickup' : 'workshop drop-off'}.
            </p>

            <div className="pt-4 flex justify-center">
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="bg-amber-600 hover:bg-amber-700 text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-2xl transition shadow-lg shadow-amber-600/20"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Service Package Selector */}
            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                Choose Service Package
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {packages.map(p => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setServicePackage(p.id)}
                    className={`p-3.5 rounded-2xl border text-left transition ${
                      servicePackage === p.id
                        ? 'border-amber-500 bg-amber-50/80 ring-2 ring-amber-400/20 shadow-sm'
                        : 'border-slate-200 bg-slate-50/60 hover:bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-black text-slate-900">{p.name}</span>
                      <span className="text-[10px] bg-amber-100 text-amber-800 font-black px-2 py-0.5 rounded-md">
                        {p.time}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 font-medium">{p.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle & Reg details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                  Tata Car Model
                </label>
                <select
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {CARS.map(c => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                  <option value="Older Tata Model">Older Tata Model (Manza, Vista, Indigo)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                  Vehicle Registration No.
                </label>
                <input
                  type="text"
                  placeholder="KA 05 MN 1234"
                  value={regNumber}
                  onChange={(e) => setRegNumber(e.target.value.toUpperCase())}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase tracking-wider"
                />
              </div>
            </div>

            {/* Workshop & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Workshop
                </label>
                <select
                  value={outletId}
                  onChange={(e) => setOutletId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {serviceOutlets.map(o => (
                    <option key={o.id} value={o.id}>{o.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* Pickup & Drop Toggle */}
            <div className="bg-slate-50/90 border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-amber-600" />
                <div>
                  <div className="text-xs font-black text-slate-900">Complimentary Doorstep Pickup & Drop</div>
                  <div className="text-[11px] text-slate-500 font-medium">Available anywhere within 15 km of our workshops</div>
                </div>
              </div>
              <input
                type="checkbox"
                checked={pickupRequired}
                onChange={(e) => setPickupRequired(e.target.checked)}
                className="w-5 h-5 accent-amber-600 rounded cursor-pointer"
              />
            </div>

            {/* Contact Details */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {pickupRequired && (
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Pickup Address in Bangalore
                  </label>
                  <input
                    type="text"
                    placeholder="Apartment name, Area / Landmark"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-700 text-white font-black text-xs sm:text-sm py-4 px-4 rounded-2xl shadow-xl shadow-amber-600/20 transition tracking-wide uppercase hover:-translate-y-0.5"
              >
                Confirm Service Appointment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
