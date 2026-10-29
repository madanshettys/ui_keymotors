import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DEALERSHIP } from '@/config/constants';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, ShieldCheck, HeartHandshake, MapPin, Users, Wrench, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About Us | ${DEALERSHIP.name}`,
  description: `Learn about Key Motors (Key Motor Ventures Pvt. Ltd.), an authorized Tata Motors dealership in Bangalore with 20+ years of automotive leadership, 8 showrooms, and 7 workshops.`,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="bg-primary text-primary-foreground py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 font-bold px-3 py-1">
            20+ Years of Automotive Excellence
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            About {DEALERSHIP.name}
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Leading the transformation of Bangalore&apos;s personal mobility landscape with India&apos;s safest 5-Star BNCAP cars and electric vehicles.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src="/assets/img/home/home-abt-2.jpg"
                  alt="Key Motors Journey"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <Badge variant="outline" className="border-accent text-accent font-semibold">
                Our Journey
              </Badge>
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
                From a Single Showroom to Bangalore&apos;s Leading Tata Dealership
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Founded under <strong className="text-foreground">{DEALERSHIP.legalName}</strong>, Key Motors began its journey with a simple promise: complete transparency, genuine care, and dependable service for every customer. Over the past two decades, that commitment has earned us the privilege of delivering more than <strong className="text-foreground">{DEALERSHIP.stats.happyCustomers} Tata cars</strong> across Bengaluru.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Today, our network spans <strong className="text-foreground">{DEALERSHIP.stats.showroomsCount} modern showrooms</strong> and <strong className="text-foreground">{DEALERSHIP.stats.workshopsCount} automated service centers</strong> strategically positioned on Mysore Road, JP Nagar, Bannerghatta Road, Nelamangala, Magadi Road, Jigani, Doddaballapura, and Kanakapura.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-foreground">Dedicated Tata.ev Experience Centre</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-foreground">40-Bay Mega Bodyshop & Paint Booth</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-foreground">15-Minute Computerized Exchange</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-foreground">90-Minute Express Service Lounge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center space-y-2">
            <Badge variant="outline" className="border-accent text-accent font-semibold">
              Visionary Leadership
            </Badge>
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
              Meet the Directors Steering Key Motors
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Driven by customer obsession, ethical dealership governance, and sustainable electric mobility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Paramesh */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-md flex flex-col items-center text-center space-y-4">
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <Image
                  src="/assets/img/about/Paramesh-2025.jpg"
                  alt="Paramesh - Key Motors"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Paramesh</h3>
                <p className="text-xs font-semibold text-primary">Founder & Chairman</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Pioneered the dealership&apos;s expansion across Bengaluru, establishing customer trust, high ethical standards, and long-standing partnership with Tata Motors.
                </p>
              </div>
            </div>

            {/* Nikkita */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-md flex flex-col items-center text-center space-y-4">
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <Image
                  src="/assets/img/about/Nikkita-2025.jpg"
                  alt="Nikkita - Key Motors"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Nikkita</h3>
                <p className="text-xs font-semibold text-primary">Managing Director</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Leading digital transformation, EV customer experience, and modernized service bay operations to ensure unmatched owner satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
              Our Guiding Principles
            </h2>
            <p className="text-sm text-muted-foreground">The pillars that make Key Motors the benchmark in automotive retailing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-border bg-card space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-foreground">100% Price Transparency</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Zero hidden charges, clear Bangalore RTO breakdown, official invoices, and manufacturer-endorsed festive exchange discounts.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-ev/10 text-ev flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-foreground">Customer Relationship for Life</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                From your initial test drive to milestone scheduled services, insurance renewals, and trade-in upgrades, we walk with you every kilometer.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-foreground">State-of-the-Art Workshops</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Certified Master Technicians, high-voltage EV diagnostic tools, computerized laser wheel alignment, and genuine OEM Tata spare parts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
