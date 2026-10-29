'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DEALERSHIP } from '@/config/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShieldCheck, CheckCircle2, Award, Zap, Phone, ArrowRight, FileCheck } from 'lucide-react';

export default function InsurancePage() {
  const [carReg, setCarReg] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const addOns = [
    { title: 'Zero Depreciation (Bumper-to-Bumper)', desc: '100% claim payout on fibre, metal, rubber, and glass parts with zero deduction.' },
    { title: 'Engine & Gearbox Protector', desc: 'Coverage for hydrostatic lock damage caused by water logging during Bangalore monsoons.' },
    { title: 'Return to Invoice (RTI)', desc: 'In case of total loss or theft, reimbursement of the full original invoice price including road tax.' },
    { title: 'Consumables Cover', desc: 'Covers cost of engine oils, coolant, AC refrigerant, nut bolts, and bearings during accidental repairs.' },
    { title: 'Key & Lock Replacement', desc: 'Reimbursement for high-tech smart key replacement and lock cylinder re-coding.' },
    { title: 'Roadside Assistance & Towing', desc: '24x7 pan-India breakdown assistance, flat tyre change, battery jumpstart, and free flatbed towing.' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 font-bold px-3 py-1 text-xs gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Cashless Claims Across 7 Bangalore Workshops
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Tata Motors Authorized Car Insurance
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Protect your vehicle with Tata Motors Insurance Broking. Enjoy hassle-free cashless claims, genuine spare parts replacement, and zero out-of-pocket delays.
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <Link href="/insurance-renewal">
              <Button size="lg" className="font-bold">
                Renew Existing Policy Online
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Add-ons Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <Badge variant="outline" className="border-primary text-primary font-bold">
              Comprehensive Protection
            </Badge>
            <h2 className="text-3xl font-extrabold text-foreground">
              Essential Add-On Covers for Bangalore Drivers
            </h2>
            <p className="text-sm text-muted-foreground">
              Tailored protection against Bangalore traffic, unexpected monsoon waterlogging, and vandalism.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((add, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-border bg-card space-y-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <h3 className="font-bold text-base text-foreground">{add.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-7">{add.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instant Insurance Quote Form */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-ev mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Insurance Quote Dispatched!</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Thank you, <strong className="text-foreground">{name}</strong>. Our dedicated insurance relationship manager will share the policy quote for <strong className="text-foreground">{carReg}</strong> on <strong className="text-foreground">{phone}</strong> via WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center space-y-1">
                  <h3 className="text-xl font-bold text-foreground">Get Instant Insurance Quote</h3>
                  <p className="text-xs text-muted-foreground">
                    New policy or transfer with maximum No-Claim-Bonus (NCB) protection.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <Label>Vehicle Registration Number / Model</Label>
                  <Input
                    required
                    placeholder="KA-05-XX-XXXX or New Tata Car"
                    value={carReg}
                    onChange={(e) => setCarReg(e.target.value)}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label>Your Full Name</Label>
                  <Input
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label>Mobile Number</Label>
                  <Input
                    required
                    type="tel"
                    placeholder="10-digit number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full font-bold">
                  Send Me Best Insurance Premium Quote
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
