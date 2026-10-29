'use client';

import React, { useState } from 'react';
import { DEALERSHIP } from '@/config/constants';
import { OUTLETS } from '@/data/outlets';
import { SERVICE_TYPES } from '@/data/services';
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
import {
  Wrench,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Truck,
  Sparkles,
  Phone,
  Award,
} from 'lucide-react';

export default function ServicePage() {
  const [carModel, setCarModel] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [outlet, setOutlet] = useState('mysore-road');
  const [serviceType, setServiceType] = useState('periodic');
  const [date, setDate] = useState('');
  const [pickupDrop, setPickupDrop] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const serviceCenters = OUTLETS.filter((o) => o.category === 'service' || o.category === 'both');

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 font-bold px-3 py-1 text-xs">
            Tata Certified Workshops Bangalore
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Authorized Tata Motors Car Service
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Expert diagnostic master technicians, 90-minute express service bays, genuine Tata OEM spare parts, and computerized body paint booths.
          </p>
        </div>
      </section>

      {/* Main Booking Form & Service Hubs */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Features & Types */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <Badge variant="outline" className="border-primary text-primary font-bold">
                  The Key Motors Advantage
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                  Why Service Your Tata at Key Motors?
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  With 7 fully automated workshop facilities across Bengaluru handling over 4,500 cars every month, our team ensures your vehicle retains its factory-new refinement and resale value.
                </p>
              </div>

              {/* Service Types Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICE_TYPES.map((st) => (
                  <div key={st.id} className="p-4 rounded-xl border border-border bg-card space-y-1.5 shadow-sm">
                    <h3 className="font-bold text-sm text-foreground flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-ev shrink-0" />
                      {st.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{st.desc}</p>
                  </div>
                ))}
              </div>

              {/* Direct Helpline Banner */}
              <div className="p-6 rounded-2xl bg-muted/60 border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="font-bold text-sm text-foreground">Need Urgent Emergency Breakdown or Towing?</h4>
                  <p className="text-xs text-muted-foreground">24x7 Key Motors Roadside Assistance across Bengaluru.</p>
                </div>
                <a href={`tel:${DEALERSHIP.contacts.servicePhoneClean}`}>
                  <Button variant="default" className="font-bold gap-2 shrink-0">
                    <Phone className="w-4 h-4" /> {DEALERSHIP.contacts.servicePhone}
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl">
                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-ev/10 text-ev mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Service Booked!</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Thank you, <strong className="text-foreground">{name}</strong>. Your service appointment for{' '}
                      <strong className="text-foreground">{regNumber || carModel}</strong> at{' '}
                      <strong className="text-foreground">{OUTLETS.find((o) => o.id === outlet)?.name || DEALERSHIP.name}</strong> has been logged. Our service advisor will call you to confirm bay timing.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Book Service Appointment</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Select your preferred date, workshop location, and pick-up option.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <Label>Service Type</Label>
                      <Select value={serviceType} onValueChange={setServiceType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICE_TYPES.map((st) => (
                            <SelectItem key={st.id} value={st.id}>
                              {st.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label>Workshop Location</Label>
                      <Select value={outlet} onValueChange={setOutlet}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceCenters.map((sc) => (
                            <SelectItem key={sc.id} value={sc.id}>
                              {sc.name.replace('Key Motors - ', '')}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label>Car Model</Label>
                        <Input
                          required
                          placeholder="e.g. Nexon EV, Curvv, Punch"
                          value={carModel}
                          onChange={(e) => setCarModel(e.target.value)}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <Label>Registration Number</Label>
                        <Input
                          placeholder="KA-05-XX-XXXX"
                          value={regNumber}
                          onChange={(e) => setRegNumber(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label>Your Name</Label>
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

                    <div className="space-y-1.5">
                      <Label>Preferred Service Date</Label>
                      <Input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>

                    {/* Doorstep Valet Pickup Toggle Card */}
                    <div className="space-y-1.5">
                      <Label>Valet Vehicle Pick-up & Drop</Label>
                      <button
                        type="button"
                        onClick={() => setPickupDrop(!pickupDrop)}
                        className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl border transition-all text-left ${
                          pickupDrop
                            ? 'border-accent bg-accent/10 text-foreground'
                            : 'border-border bg-card text-muted-foreground hover:border-accent/40'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                              pickupDrop ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
                            }`}
                          >
                            <Truck className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-bold text-foreground truncate">
                              {pickupDrop ? '✓ Free Doorstep Pick-up & Drop Requested' : 'Self Drop at Workshop'}
                            </div>
                            <div className="text-[10px] sm:text-[11px] text-muted-foreground truncate">
                              {pickupDrop
                                ? 'Complimentary valet driver pickup across Bengaluru'
                                : 'Click to add free doorstep pick-up & drop'}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-2 ${
                            pickupDrop ? 'border-accent bg-accent text-white' : 'border-border'
                          }`}
                        >
                          {pickupDrop && <CheckCircle2 className="w-3.5 h-3.5 fill-current" />}
                        </div>
                      </button>
                    </div>

                    <Button type="submit" size="lg" className="w-full font-bold">
                      Confirm Workshop Booking
                    </Button>
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
