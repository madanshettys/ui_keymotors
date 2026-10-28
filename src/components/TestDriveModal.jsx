import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, MapPin, Car, Phone, Mail, User, ShieldCheck, Compass } from 'lucide-react';
import { CARS } from '../data/cars';
import { OUTLETS } from '../data/outlets';

export default function TestDriveModal({ isOpen, onClose, preselectedModelId }) {
  if (!isOpen) return null;

  const [modelId, setModelId] = useState(preselectedModelId || 'curvv');
  const [testDriveType, setTestDriveType] = useState('doorstep');
  const [outletId, setOutletId] = useState('mysore-road');
  const [preferredDate, setPreferredDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('11:00 AM - 01:00 PM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const selectedCar = CARS.find(c => c.id === modelId) || CARS[0];
  const selectedOutlet = OUTLETS.find(o => o.id === outletId) || OUTLETS[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    const ref = 'KM-TD-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);

    const booking = {
      id: ref,
      car: selectedCar.name,
      type: testDriveType,
      outlet: selectedOutlet.name,
      date: preferredDate,
      timeSlot,
      name,
      phone,
      email,
      address,
      createdAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem('km_testdrives') || '[]');
      existing.unshift(booking);
      localStorage.setItem('km_testdrives', JSON.stringify(existing));
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 ring-1 ring-slate-900/10">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-km-navy to-km-blue text-white p-5 sm:p-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center">
              <Compass className="w-5 h-5 text-blue-300" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black tracking-tight">Book a TATA Test Drive</h2>
              <p className="text-xs text-blue-200 font-medium">Free Doorstep or Showroom Test Drive in Bangalore</p>
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
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>

            <div className="inline-block bg-blue-50 text-km-blue text-xs font-black px-3.5 py-1 rounded-full border border-blue-200">
              Booking Reference: {bookingRef}
            </div>

            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Test Drive Scheduled Successfully!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto font-medium">
              Thank you, <span className="font-black text-slate-900">{name}</span>! Our customer relationship advisor from Key Motors will contact you at <span className="font-black text-slate-900">{phone}</span> to coordinate your test drive slot.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Vehicle Selected:</span>
                <span className="font-black text-slate-900">{selectedCar.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Test Drive Mode:</span>
                <span className="font-black text-slate-900">
                  {testDriveType === 'doorstep' ? 'Free Doorstep (At Home/Office)' : selectedOutlet.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Date & Slot:</span>
                <span className="font-black text-emerald-700">{preferredDate} | {timeSlot}</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="bg-km-blue hover:bg-km-blue-light text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-2xl transition shadow-lg shadow-blue-900/20"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Mode: Doorstep vs Showroom */}
            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                Preferred Test Drive Experience
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTestDriveType('doorstep')}
                  className={`p-3.5 rounded-2xl border text-xs font-black transition flex items-center justify-center gap-2 ${
                    testDriveType === 'doorstep'
                      ? 'border-km-blue bg-blue-50/80 text-km-blue ring-2 ring-blue-500/20 shadow-sm'
                      : 'border-slate-200 bg-slate-50/60 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Free Doorstep Visit</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTestDriveType('showroom')}
                  className={`p-3.5 rounded-2xl border text-xs font-black transition flex items-center justify-center gap-2 ${
                    testDriveType === 'showroom'
                      ? 'border-km-blue bg-blue-50/80 text-km-blue ring-2 ring-blue-500/20 shadow-sm'
                      : 'border-slate-200 bg-slate-50/60 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Car className="w-4 h-4 text-blue-600" />
                  <span>Visit Showroom</span>
                </button>
              </div>
            </div>

            {/* Select Car */}
            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                Choose TATA Model
              </label>
              <select
                value={modelId}
                onChange={(e) => setModelId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm font-extrabold text-slate-900 focus:outline-none focus:ring-2 focus:ring-km-blue"
              >
                {CARS.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name} — {c.fuelType} ({c.price})
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Showroom */}
            <div>
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Bangalore Dealership Branch
              </label>
              <select
                value={outletId}
                onChange={(e) => setOutletId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-km-blue"
              >
                {OUTLETS.map(o => (
                  <option key={o.id} value={o.id}>
                    {o.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date and Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-km-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1.5">
                  Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 font-semibold focus:outline-none focus:ring-2 focus:ring-km-blue"
                >
                  <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                  <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                  <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                  <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
                  <option value="06:00 PM - 07:30 PM">06:00 PM - 07:30 PM</option>
                </select>
              </div>
            </div>

            {/* Customer Details */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-km-blue"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-km-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-km-blue"
                  />
                </div>
              </div>

              {testDriveType === 'doorstep' && (
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-1">
                    Bangalore Delivery Address / Location
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Apartment, Street name, Area, Pincode"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-km-blue"
                  ></textarea>
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-km-blue to-km-blue-light hover:from-blue-600 hover:to-blue-800 text-white font-black text-xs sm:text-sm py-4 px-4 rounded-2xl shadow-xl shadow-blue-900/20 transition tracking-wide uppercase hover:-translate-y-0.5"
              >
                Confirm Test Drive Booking
              </button>
              <p className="text-[10px] text-slate-500 text-center mt-2.5 flex items-center justify-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your contact info is strictly confidential and protected by Key Motors.</span>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
