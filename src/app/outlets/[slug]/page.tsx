'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { OUTLETS } from '@/data/outlets';
import { DEALERSHIP } from '@/config/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Wrench,
} from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export default function OutletDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const outlet = OUTLETS.find((o) => o.id === slug);

  const { openTestDrive, openService } = useModals();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [requestType, setRequestType] = useState<'test-drive' | 'service'>('test-drive');
  const [submitted, setSubmitted] = useState(false);

  if (!outlet) {
    notFound();
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb */}
      <div className="bg-muted/40 border-b border-border py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/outlets" className="hover:text-foreground">Outlets</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-bold text-foreground">{outlet.name.replace('Key Motors - ', '')}</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 font-bold">
              {outlet.type}
            </Badge>
            {outlet.isFlagship && (
              <Badge variant="secondary" className="font-bold">
                Flagship Branch
              </Badge>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {outlet.name}
          </h1>

          <p className="text-sm sm:text-base text-primary-foreground/85 max-w-2xl leading-relaxed">
            Authorized sales showroom, certified Tata service center, genuine parts depot, and electric vehicle charging hub in Bengaluru.
          </p>
        </div>
      </section>

      {/* Main Content Details & Form */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Outlet Information & Facilities */}
            <div className="lg:col-span-7 space-y-8">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
                <h2 className="text-xl font-bold text-foreground">Location & Operating Hours</h2>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block">Complete Address</span>
                      <p className="leading-relaxed">{outlet.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block">Working Hours</span>
                      <p>{outlet.timings}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block">Direct Phone Lines</span>
                      <p>
                        Sales:{' '}
                        <a href={`tel:${outlet.phone.replace(/\s+/g, '')}`} className="text-primary font-bold hover:underline">
                          {outlet.phone}
                        </a>
                      </p>
                      {outlet.servicePhone && (
                        <p>
                          Service:{' '}
                          <a href={`tel:${outlet.servicePhone.replace(/\s+/g, '')}`} className="text-accent font-bold hover:underline">
                            {outlet.servicePhone}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block">Email</span>
                      <a href={`mailto:${outlet.email}`} className="text-primary hover:underline">
                        {outlet.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={outlet.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Button variant="outline" className="font-bold gap-2">
                      <ExternalLink className="w-4 h-4" /> Open in Google Maps
                    </Button>
                  </a>
                </div>
              </div>

              {/* Branch Amenities */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-foreground">Facility Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {outlet.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2 rounded-lg bg-muted/50 text-xs font-semibold text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-ev shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Direct Branch Lead / Appointment Form */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl sticky top-28">
                {submitted ? (
                  <div className="py-8 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-ev mx-auto" />
                    <h3 className="text-xl font-bold text-foreground">Request Received!</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Thank you, <strong className="text-foreground">{name}</strong>. The branch manager at{' '}
                      <strong className="text-foreground">{outlet.name}</strong> will contact you at{' '}
                      <strong className="text-foreground">{phone}</strong> within 15 minutes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Connect with this Branch</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Book a test drive or schedule service directly at {outlet.name.replace('Key Motors - ', '')}.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        type="button"
                        variant={requestType === 'test-drive' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setRequestType('test-drive')}
                        className="text-xs font-bold gap-1.5"
                      >
                        <Calendar className="w-3.5 h-3.5" /> Test Drive
                      </Button>
                      <Button
                        type="button"
                        variant={requestType === 'service' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setRequestType('service')}
                        className="text-xs font-bold gap-1.5"
                      >
                        <Wrench className="w-3.5 h-3.5" /> Book Service
                      </Button>
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
                        placeholder="10-digit mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full font-bold">
                      {requestType === 'test-drive' ? 'Book Test Drive Here' : 'Schedule Service Here'}
                    </Button>

                    <p className="text-[11px] text-center text-muted-foreground">
                      Free doorstep test drives available across Bangalore • Instant confirmation
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
