'use client';

import React, { useState } from 'react';
import { DEALERSHIP } from '@/config/constants';
import { CARS } from '@/data/cars';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RefreshCw, ShieldCheck, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export default function ExchangeCarsPage() {
  const [makeModel, setMakeModel] = useState('');
  const [year, setYear] = useState('2019');
  const [km, setKm] = useState('45000');
  const [regNo, setRegNo] = useState('');
  const [upgradeTo, setUpgradeTo] = useState('curvv');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 font-bold px-3 py-1 text-xs gap-1">
            <RefreshCw className="w-3.5 h-3.5" /> Tata Motors Assured Exchange
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Exchange Any Car for a New Tata
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Trade in any brand, model, or year. Receive transparent 15-minute digital evaluation, top market valuation, and up to ₹ 1,25,000 manufacturer exchange bonuses.
          </p>
        </div>
      </section>

      {/* Main Content & Evaluation Form */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: 4-Step Assured Exchange Process */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <Badge variant="outline" className="border-primary text-primary font-bold">
                  Hassle-Free Trade-In
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                  The Tata Assured 4-Step Valuation Guarantee
                </h2>
                <p className="text-sm text-muted-foreground">
                  Say goodbye to lowball broker offers and tedious transfer paperwork.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl border border-border bg-card space-y-2 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-sm">
                    1
                  </div>
                  <h3 className="font-bold text-base text-foreground">Doorstep Digital Evaluation</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Our certified vehicle evaluator inspects your car at your doorstep or showroom across Bangalore with computerized diagnostic tablets.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-border bg-card space-y-2 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-sm">
                    2
                  </div>
                  <h3 className="font-bold text-base text-foreground">Guaranteed Highest Quote</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Transparent market-driven valuation matching real transaction prices, not arbitrary dealer markdowns.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-border bg-card space-y-2 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-sm">
                    3
                  </div>
                  <h3 className="font-bold text-base text-foreground">Manufacturer Exchange Bonus</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Additional factory exchange bonus up to ₹ 1,25,000 credited directly towards your new Tata car on-road price.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-border bg-card space-y-2 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-sm">
                    4
                  </div>
                  <h3 className="font-bold text-base text-foreground">Safe RTO Name Transfer</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    100% legal immunity with official delivery note, RC transfer guarantee, and complete liability clearance.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Valuation Request Form */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl">
                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-ev mx-auto" />
                    <h3 className="text-xl font-bold text-foreground">Evaluation Booked!</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Thank you, <strong className="text-foreground">{name}</strong>. Our senior Tata Assured used car manager will call you at{' '}
                      <strong className="text-foreground">{phone}</strong> within 15 minutes to provide an initial valuation estimate for your {makeModel} and schedule your free inspection.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Instant Used Car Valuation</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Submit details of your existing vehicle for an instant quote.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <Label>Your Existing Car (Make, Model, Variant)</Label>
                      <Input
                        required
                        placeholder="e.g. 2018 Maruti Swift VXi, Hyundai i20"
                        value={makeModel}
                        onChange={(e) => setMakeModel(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label>Manufacturing Year</Label>
                        <Select value={year} onValueChange={setYear}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012].map((y) => (
                              <SelectItem key={y} value={y.toString()}>
                                {y}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-1.5">
                        <Label>Kilometers Driven</Label>
                        <Input
                          placeholder="e.g. 45000"
                          value={km}
                          onChange={(e) => setKm(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label>Desired New Tata Model to Upgrade</Label>
                      <Select value={upgradeTo} onValueChange={setUpgradeTo}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {CARS.map((c) => (
                            <SelectItem key={c.id} value={c.id}>
                              {c.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
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
                      Get Highest Exchange Valuation
                    </Button>

                    <p className="text-[11px] text-center text-muted-foreground">
                      Free doorstep evaluation • Instant cash / exchange bonus credit
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
