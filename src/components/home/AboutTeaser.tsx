'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DEALERSHIP } from '@/config/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, ShieldCheck, Users, MapPin, ArrowRight } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export function AboutTeaser() {
  const { openTestDrive } = useModals();

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Imagery Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <Image
                src="/assets/img/home/home-abt-1.jpg"
                alt="Key Motors Showroom Bangalore"
                width={550}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-card border border-border p-4 rounded-2xl shadow-2xl flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-extrabold text-xl">
                20+
              </div>
              <div>
                <div className="text-xs font-bold text-foreground">Years of Trust</div>
                <div className="text-[11px] text-muted-foreground">Delivering Smiles across Bangalore</div>
              </div>
            </div>
          </div>

          {/* Right Editorial */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <Badge variant="outline" className="border-accent text-accent font-semibold">
                About Key Motorrs TATA
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                Bangalore&apos;s Preferred Authorized Dealership for Over Two Decades
              </h2>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Under the visionary leadership of Key Motor Ventures Pvt. Ltd., Key Motors has grown into one of South India&apos;s premier Tata Motors dealership networks. With {DEALERSHIP.stats.showroomsCount} expansive showrooms, {DEALERSHIP.stats.workshopsCount} state-of-the-art service workshops, and dedicated Tata.ev experience hubs, we have delivered happiness to more than {DEALERSHIP.stats.happyCustomers} families.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-card border border-border">
                <div className="text-2xl font-black text-primary">{DEALERSHIP.stats.happyCustomers}</div>
                <div className="text-xs text-muted-foreground font-medium">Cars Delivered</div>
              </div>
              <div className="p-3.5 rounded-xl bg-card border border-border">
                <div className="text-2xl font-black text-ev">{DEALERSHIP.stats.evDelivered}</div>
                <div className="text-xs text-muted-foreground font-medium">Electric Vehicles</div>
              </div>
              <div className="p-3.5 rounded-xl bg-card border border-border col-span-2 sm:col-span-1">
                <div className="text-2xl font-black text-foreground">{DEALERSHIP.stats.googleRating} ★</div>
                <div className="text-xs text-muted-foreground font-medium">Google Rating ({DEALERSHIP.stats.reviewsCount})</div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link href="/about">
                <Button variant="default" className="font-bold gap-2">
                  Read Our Story <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Button
                variant="outline"
                onClick={() => openTestDrive()}
                className="font-bold"
              >
                Book Doorstep Test Drive
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
