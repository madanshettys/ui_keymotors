'use client';

import React, { useState } from 'react';
import { DEALERSHIP } from '@/config/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShieldCheck, CheckCircle2, Shield, Wrench, Clock, Check } from 'lucide-react';

export default function ExtendedWarrantyPage() {
  const [carModel, setCarModel] = useState('');
  const [year, setYear] = useState('2023');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const coverageItems = [
    { title: 'Engine & Internal Components', desc: 'Cylinder block, cylinder head, pistons, crankshaft, camshaft, oil pump, and turbocharger.' },
    { title: 'Transmission & Gearbox', desc: 'Manual transmission casing, automatic torque converter, DCA dual-clutch actuators, and differential gears.' },
    { title: 'High-Voltage EV Powertrain', desc: 'Power electronics, DC-DC converter, inverter, on-board charger (OBC), and drive unit.' },
    { title: 'Steering & Suspension', desc: 'Electric power steering column (EPS), steering rack, pinion assembly, and front suspension linkages.' },
    { title: 'Braking Systems', desc: 'ABS modulator pump, master cylinder, vacuum booster, and electronic parking brake (EPB) actuators.' },
    { title: 'Electrical & Air Conditioning', desc: 'AC compressor, condenser fan, climate control ECU, alternator, starter motor, and instrument cluster.' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 font-bold px-3 py-1 text-xs gap-1">
            <Shield className="w-3.5 h-3.5" /> 2 + 3 Years Extended Coverage
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Tata Motors Official Extended Warranty
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Drive with complete peace of mind. Extend your standard factory warranty up to 5 Years or 1,50,000 km with pan-India cashless repairs at all authorized Tata dealerships.
          </p>
        </div>
      </section>

      {/* Coverage Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <Badge variant="outline" className="border-primary text-primary font-bold">
              Comprehensive Protection
            </Badge>
            <h2 className="text-3xl font-extrabold text-foreground">
              What Does Extended Warranty Cover?
            </h2>
            <p className="text-sm text-muted-foreground">
              100% genuine Tata OEM replacement parts and certified labor with zero deductible fees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageItems.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-border bg-card space-y-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <h3 className="font-bold text-base text-foreground">{item.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty Quote Form */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-ev mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Warranty Quote Sent!</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Thank you, <strong className="text-foreground">{name}</strong>. The extended warranty plan options and exact pricing for your <strong className="text-foreground">{carModel}</strong> have been shared to <strong className="text-foreground">{phone}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center space-y-1">
                  <h3 className="text-xl font-bold text-foreground">Get Extended Warranty Pricing</h3>
                  <p className="text-xs text-muted-foreground">
                    Available for vehicles currently within standard manufacturer warranty.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label>Car Model & Variant</Label>
                    <Input
                      required
                      placeholder="e.g. Harrier, Nexon, Punch"
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label>Year of Purchase</Label>
                    <Input
                      placeholder="e.g. 2023"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                </div>

                <Button type="submit" size="lg" className="w-full font-bold">
                  Send Extended Warranty Cost
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
