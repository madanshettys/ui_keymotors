'use client';

import React, { useState } from 'react';
import { SERVICE_PACKAGES } from '@/data/services';
import { DEALERSHIP } from '@/config/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShieldCheck, CheckCircle2, Wrench, Sparkles, Clock, Check } from 'lucide-react';

export default function ServicePackagesPage() {
  const [selectedPkg, setSelectedPkg] = useState('gold-amc');
  const [carModel, setCarModel] = useState('');
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
          <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 font-bold px-3 py-1 text-xs">
            Tata Motors Value Care
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Annual Maintenance Contracts (AMC)
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Protect your Tata vehicle from inflation and unexpected maintenance expenses with authorized Annual Maintenance Contracts and Value Care packages.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_PACKAGES.map((pkg) => (
              <Card
                key={pkg.id}
                className={`flex flex-col justify-between border-2 transition-all ${
                  pkg.isPopular
                    ? 'border-primary shadow-xl bg-card'
                    : 'border-border bg-card hover:shadow-lg'
                }`}
              >
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{pkg.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{pkg.tagline}</p>
                    </div>
                    {pkg.isPopular && (
                      <Badge variant="default" className="text-[10px] font-bold">
                        Most Popular
                      </Badge>
                    )}
                  </div>

                  <div className="py-2 border-y border-border">
                    <span className="text-[11px] text-muted-foreground block">Starting At</span>
                    <span className="text-2xl font-black text-primary">{pkg.priceStart}</span>
                    <span className="text-[10px] text-muted-foreground block mt-0.5 font-medium">
                      Ideal for: {pkg.recommendedFor}
                    </span>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Inclusions</span>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-ev shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <CardContent className="p-6 pt-0">
                  <Button
                    onClick={() => {
                      setSelectedPkg(pkg.id);
                      document.getElementById('amc-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    variant={pkg.isPopular ? 'default' : 'outline'}
                    className="w-full font-bold text-xs"
                  >
                    Select {pkg.name.split(' ')[0]} AMC
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="amc-form" className="py-16 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-ev mx-auto" />
                <h3 className="text-xl font-bold text-foreground">AMC Inquiry Received!</h3>
                <p className="text-xs text-muted-foreground max-w-md mx-auto">
                  Thank you, <strong className="text-foreground">{name}</strong>. Our service maintenance manager will call you at{' '}
                  <strong className="text-foreground">{phone}</strong> with customized pricing for your {carModel}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-bold text-foreground">
                    Get Customized AMC Quote for Your Car
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Protect your car with authorized Value Care warranty coverage and free doorstep service pickup.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label>Car Model & Fuel Type</Label>
                    <Input
                      required
                      placeholder="e.g. Nexon Diesel, Curvv.ev"
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label>Selected Package</Label>
                    <Input
                      value={SERVICE_PACKAGES.find((p) => p.id === selectedPkg)?.name || 'Gold AMC'}
                      disabled
                      className="bg-muted"
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
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full font-bold">
                  Send Official AMC Quotation
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
