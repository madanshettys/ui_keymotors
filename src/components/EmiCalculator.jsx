import React, { useState, useMemo } from 'react';
import { CARS } from '../data/cars';
import { Calculator, ArrowRight, ShieldCheck, CheckCircle2, Percent, IndianRupee, Landmark, Sparkles } from 'lucide-react';

export default function EmiCalculator({ onOpenTestDrive }) {
  const [selectedCarId, setSelectedCarId] = useState('curvv');
  const [customPrice, setCustomPrice] = useState(999000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [tenureYears, setTenureYears] = useState(5);
  const [interestRate, setInterestRate] = useState(8.5);

  const handleCarChange = (e) => {
    const carId = e.target.value;
    setSelectedCarId(carId);
    const car = CARS.find(c => c.id === carId);
    if (car && car.priceNum) {
      setCustomPrice(car.priceNum);
    }
  };

  const {
    loanAmount,
    downPaymentAmount,
    monthlyEmi,
    totalInterest,
    totalPayment,
    estimatedRto,
    estimatedInsurance,
    estimatedOnRoad
  } = useMemo(() => {
    const downPayment = Math.round((customPrice * downPaymentPercent) / 100);
    const principal = customPrice - downPayment;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenureYears * 12;

    const emi = principal > 0
      ? Math.round((principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1))
      : 0;

    const totalPay = emi * months;
    const interest = Math.max(0, totalPay - principal);

    const selectedCar = CARS.find(c => c.id === selectedCarId);
    const isEv = selectedCar?.category === 'EV';
    
    const rto = isEv ? Math.round(customPrice * 0.04) : Math.round(customPrice * 0.15);
    const insurance = Math.round(customPrice * 0.038) + 5000;
    const onRoad = customPrice + rto + insurance + 1500;

    return {
      loanAmount: principal,
      downPaymentAmount: downPayment,
      monthlyEmi: emi,
      totalInterest: interest,
      totalPayment: totalPay,
      estimatedRto: rto,
      estimatedInsurance: insurance,
      estimatedOnRoad: onRoad
    };
  }, [customPrice, downPaymentPercent, tenureYears, interestRate, selectedCarId]);

  const principalRatio = totalPayment > 0 ? (loanAmount / totalPayment) * 100 : 0;
  const interestRatio = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0;

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="finance" className="py-20 sm:py-28 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-km-blue text-xs font-black tracking-widest uppercase mb-3 border border-blue-200/50 shadow-sm">
            <Landmark className="w-4 h-4 text-km-blue" />
            <span>Tata Motors Financial Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Interactive <span className="text-gradient-blue">Car Loan & EMI</span> Calculator
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Calculate your customized monthly EMI with real-time interest rates from 15+ partner banks (SBI, HDFC, ICICI, Tata Capital, Axis) with zero prepayment penalties.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-50/80 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-automotive">
            {/* Select Vehicle */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                Select Tata Model
              </label>
              <select
                value={selectedCarId}
                onChange={handleCarChange}
                className="w-full bg-white border border-slate-300/80 rounded-2xl px-4 py-3 text-sm font-extrabold text-slate-900 focus:outline-none focus:ring-2 focus:ring-km-blue shadow-sm"
              >
                {CARS.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name} — {c.price} ({c.fuelType})
                  </option>
                ))}
              </select>
            </div>

            {/* Ex-Showroom Price Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                  Ex-Showroom Price
                </label>
                <span className="text-lg font-black text-km-blue">
                  {formatINR(customPrice)}
                </span>
              </div>
              <input
                type="range"
                min="450000"
                max="3200000"
                step="25000"
                value={customPrice}
                onChange={(e) => setCustomPrice(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-500 mt-1">
                <span>₹ 4.5 Lakh</span>
                <span>₹ 32 Lakh</span>
              </div>
            </div>

            {/* Down Payment Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                  Down Payment ({downPaymentPercent}%)
                </label>
                <span className="text-lg font-black text-emerald-700">
                  {formatINR(downPaymentAmount)}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-500 mt-1">
                <span>10% (Min Downpayment)</span>
                <span>60%</span>
              </div>
            </div>

            {/* Loan Tenure Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                  Loan Tenure
                </label>
                <span className="text-base font-black text-slate-900">
                  {tenureYears} Years ({tenureYears * 12} Months)
                </span>
              </div>
              <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
                {[1, 2, 3, 4, 5, 6, 7].map(yr => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setTenureYears(yr)}
                    className={`py-2.5 rounded-xl text-xs font-black transition-all ${
                      tenureYears === yr
                        ? 'bg-km-blue text-white shadow-md shadow-blue-900/20 scale-102'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {yr}Y
                  </button>
                ))}
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-black uppercase tracking-wider text-slate-700">
                  Interest Rate (p.a.)
                </label>
                <span className="text-base font-black text-slate-900">
                  {interestRate}%
                </span>
              </div>
              <input
                type="range"
                min="7.5"
                max="13.0"
                step="0.25"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-500 mt-1">
                <span>7.5% (Special Key Motors Rate)</span>
                <span>13.0%</span>
              </div>
            </div>
          </div>

          {/* Results Summary Column - Luxury Dark Navy Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-km-navy to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between border border-white/10">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-black tracking-widest uppercase text-blue-300">
                  Estimated Monthly EMI
                </span>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30 font-black">
                  100% Funding Available
                </span>
              </div>

              {/* Big EMI Highlight */}
              <div className="py-2">
                <div className="text-4xl sm:text-5xl font-black text-amber-300 tracking-tight">
                  {formatINR(monthlyEmi)}
                </div>
                <div className="text-xs text-slate-300 mt-1.5 font-medium">
                  for {tenureYears * 12} months @ {interestRate}% p.a.
                </div>
              </div>

              {/* Dual Color Progress Bar */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs text-slate-300 font-bold">
                  <span>Principal: {principalRatio.toFixed(0)}%</span>
                  <span>Interest: {interestRatio.toFixed(0)}%</span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex shadow-inner">
                  <div style={{ width: `${principalRatio}%` }} className="bg-blue-500 transition-all duration-500"></div>
                  <div style={{ width: `${interestRatio}%` }} className="bg-amber-400 transition-all duration-500"></div>
                </div>
              </div>

              {/* Breakdown Details */}
              <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Loan Principal Amount:</span>
                  <span className="font-extrabold text-white">{formatINR(loanAmount)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Total Interest Payable:</span>
                  <span className="font-extrabold text-amber-300">{formatINR(totalInterest)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Total Loan Payment:</span>
                  <span className="font-extrabold text-white">{formatINR(totalPayment)}</span>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <div className="text-[11px] font-black text-blue-200 uppercase tracking-wider mb-1.5">
                    Bangalore Karnataka On-Road Breakdown
                  </div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>RTO & Road Tax:</span>
                    <span>{formatINR(estimatedRto)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Comprehensive Insurance:</span>
                    <span>{formatINR(estimatedInsurance)}</span>
                  </div>
                  <div className="flex justify-between text-white font-black text-sm mt-2 pt-2 border-t border-white/10">
                    <span>Est. Total On-Road:</span>
                    <span className="text-emerald-300">{formatINR(estimatedOnRoad)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8 pt-4 border-t border-white/10">
              <button
                onClick={() => onOpenTestDrive(selectedCarId)}
                className="w-full bg-gradient-to-r from-blue-500 to-km-blue hover:from-blue-400 hover:to-blue-600 text-white font-black text-xs sm:text-sm py-4 px-4 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider hover:-translate-y-0.5"
              >
                <span>Apply for Instant Loan Approval</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-slate-400 text-center mt-2 font-medium">
                *Subject to bank credit approval and documentation. Terms apply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
