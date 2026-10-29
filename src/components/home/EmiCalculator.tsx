'use client';

import React, { useState } from 'react';
import { FINANCE_DEFAULTS } from '@/config/constants';
import { CARS } from '@/data/cars';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatInr } from '@/lib/utils';
import { Calculator, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export function EmiCalculator() {
  const [carPrice, setCarPrice] = useState(1200000); // 12 Lakhs
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [tenureMonths, setTenureMonths] = useState(60);
  const [interestRate, setInterestRate] = useState(8.75);
  const { openPrice, openTestDrive } = useModals();

  // Calculations
  const downPayment = Math.round((carPrice * downPaymentPercent) / 100);
  const loanAmount = carPrice - downPayment;

  // Monthly EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1)
  );

  const totalPayable = emi * tenureMonths;
  const totalInterest = totalPayable - loanAmount;

  return (
    <section id="finance-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Inputs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <Badge variant="outline" className="border-accent text-accent font-semibold">
                  Transparent Finance
                </Badge>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  Tata Car Loan & Bangalore EMI Estimator
                </h2>
                <p className="text-sm text-muted-foreground">
                  Partnered with 15+ leading nationalized & private banks including Tata Motors Finance, SBI, HDFC, and ICICI with instant spot approvals.
                </p>
              </div>

              {/* Vehicle Price Slider */}
              <div className="space-y-2.5 p-4 rounded-2xl bg-muted/40 border border-border">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Car Value</span>
                  <span className="text-lg font-bold text-foreground">{formatInr(carPrice)}</span>
                </div>
                <Slider
                  value={[carPrice]}
                  onValueChange={(val) => setCarPrice(val[0])}
                  min={550000}
                  max={3000000}
                  step={25000}
                />
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>₹ 5.5 Lakh (Tiago)</span>
                  <span>₹ 15 Lakh (Curvv/Nexon)</span>
                  <span>₹ 30 Lakh (Safari/EV)</span>
                </div>
              </div>

              {/* Down Payment Slider */}
              <div className="space-y-2.5 p-4 rounded-2xl bg-muted/40 border border-border">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Down Payment</span>
                  <span className="text-lg font-bold text-foreground">
                    {downPaymentPercent}% ({formatInr(downPayment)})
                  </span>
                </div>
                <Slider
                  value={[downPaymentPercent]}
                  onValueChange={(val) => setDownPaymentPercent(val[0])}
                  min={10}
                  max={60}
                  step={5}
                />
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>10% (Min Downpayment)</span>
                  <span>20% (Standard)</span>
                  <span>60%</span>
                </div>
              </div>

              {/* Tenure Selection */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Loan Tenure
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {FINANCE_DEFAULTS.tenureOptions.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => setTenureMonths(t.value)}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all border ${
                        tenureMonths === t.value
                          ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                          : 'bg-muted/50 border-border text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {t.label.split(' ')[0]} {t.label.split(' ')[1]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Calculated Summary */}
            <div className="lg:col-span-5 bg-muted/60 border border-border rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="text-center space-y-1 pb-4 border-b border-border">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Estimated Monthly EMI
                </span>
                <div className="text-4xl sm:text-5xl font-black text-primary">
                  {formatInr(emi)}
                </div>
                <span className="text-xs text-muted-foreground block">
                  at {interestRate}% interest p.a. for {tenureMonths / 12} years
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Principal Loan Amount:</span>
                  <span className="font-bold text-foreground text-sm">{formatInr(loanAmount)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Interest Payable:</span>
                  <span className="font-bold text-foreground text-sm">{formatInr(totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Repayment (Loan + Interest):</span>
                  <span className="font-bold text-foreground text-sm">{formatInr(totalPayable)}</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <Button
                  size="lg"
                  onClick={() => openPrice()}
                  className="w-full font-bold shadow-md"
                >
                  Apply For Instant Loan Pre-Approval
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => openTestDrive()}
                  className="w-full text-xs font-semibold"
                >
                  Book Doorstep Test Drive While Waiting
                </Button>
              </div>

              <div className="text-[11px] text-center text-muted-foreground">
                *Subject to bank credit approval. Processing fees & taxes as applicable.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
