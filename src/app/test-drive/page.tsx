'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CARS } from '@/data/cars';
import { OUTLETS } from '@/data/outlets';
import { DEALERSHIP } from '@/config/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar, MapPin, Sparkles, Shield, CheckCircle2 } from 'lucide-react';

function TestDriveForm() {
  const searchParams = useSearchParams();
  const initialModelParam = searchParams?.get('model');

  const [model, setModel] = useState<string>('curvv-ev');
  const [outlet, setOutlet] = useState<string>('mysore-road');
  const [driveType, setDriveType] = useState<'doorstep' | 'showroom'>('doorstep');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 12:00 PM');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialModelParam) {
      const match = CARS.find(
        (c) =>
          c.id.toLowerCase() === initialModelParam.toLowerCase() ||
          c.name.toLowerCase().includes(initialModelParam.toLowerCase())
      );
      if (match) {
        setModel(match.id);
      }
    }
  }, [initialModelParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const selectedCar = CARS.find((c) => c.id === model) || CARS[0];

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6">
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-xl">
        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-ev/10 text-ev mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Test Drive Scheduled!
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              Thank you, <strong className="text-foreground">{name}</strong>. Our test drive specialist from{' '}
              <strong className="text-primary">{OUTLETS.find((o) => o.id === outlet)?.name || DEALERSHIP.name}</strong> will contact you at{' '}
              <strong className="text-foreground">{phone}</strong> to confirm your{' '}
              <strong className="text-primary">{selectedCar.name}</strong> {driveType === 'doorstep' ? 'doorstep' : 'showroom'} drive on{' '}
              <strong className="text-foreground">{date || 'selected date'}</strong> ({timeSlot}).
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <Badge variant="outline" className="border-accent text-accent font-semibold">
                Complimentary Service
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Book a Free Doorstep or Showroom Test Drive
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Pick your desired Tata car and preferred date. Our sales consultant will bring the sanitized car right to your home or office anywhere in Bengaluru.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Select Tata Model</Label>
                <Select value={model} onValueChange={setModel}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CARS.map((car) => (
                      <SelectItem key={car.id} value={car.id}>
                        {car.name} ({car.fuelType})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label>Nearest Key Motors Branch</Label>
                <Select value={outlet} onValueChange={setOutlet}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {OUTLETS.map((out) => (
                      <SelectItem key={out.id} value={out.id}>
                        {out.name.replace('Key Motors - ', '')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Doorstep vs Showroom toggle */}
            <div className="space-y-1.5">
              <Label>Drive Preference</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Button
                  type="button"
                  variant={driveType === 'doorstep' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setDriveType('doorstep')}
                  className="justify-center sm:justify-start gap-2 h-auto py-2.5 px-3 text-xs font-semibold whitespace-normal text-left"
                >
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Free Doorstep Test Drive</span>
                </Button>
                <Button
                  type="button"
                  variant={driveType === 'showroom' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setDriveType('showroom')}
                  className="justify-center sm:justify-start gap-2 h-auto py-2.5 px-3 text-xs font-semibold whitespace-normal text-left"
                >
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>Showroom Experience</span>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Your Full Name</Label>
                <Input
                  required
                  placeholder="Enter full name"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Preferred Date</Label>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="space-y-1.5">
                <Label>Preferred Time Slot</Label>
                <Select value={timeSlot} onValueChange={setTimeSlot}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10:00 AM - 12:00 PM">Morning (10:00 AM - 12:00 PM)</SelectItem>
                    <SelectItem value="12:00 PM - 03:00 PM">Afternoon (12:00 PM - 03:00 PM)</SelectItem>
                    <SelectItem value="03:00 PM - 06:00 PM">Evening (03:00 PM - 06:00 PM)</SelectItem>
                    <SelectItem value="06:00 PM - 08:00 PM">Late Evening (06:00 PM - 08:00 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {driveType === 'doorstep' && (
              <div className="space-y-1.5">
                <Label>Doorstep Address in Bangalore</Label>
                <Input
                  placeholder="Complete Address, Landmark, Pin code"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            )}

            <Button type="submit" size="lg" className="w-full font-bold shadow-md">
              Confirm Test Drive Booking
            </Button>

            <p className="text-[11px] text-center text-muted-foreground">
              Zero booking charges • Sanitized demonstration vehicle • Valid driver&apos;s license required
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default function TestDrivePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 font-bold px-3 py-1 text-xs gap-1">
            <Calendar className="w-3.5 h-3.5" /> Free Across Bengaluru
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Book a Free Tata Test Drive
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Experience 5-Star crash safety, dual-cylinder iCNG refinement, and long-range electric acceleration at your convenience.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <Suspense fallback={<div className="text-center py-12 text-sm text-muted-foreground">Loading test drive portal...</div>}>
          <TestDriveForm />
        </Suspense>
      </section>
    </div>
  );
}
