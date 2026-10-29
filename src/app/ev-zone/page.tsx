'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CARS } from '@/data/cars';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { EvSavingsCalculator } from '@/components/home/EvSavingsCalculator';
import { Zap, Shield, BatteryCharging, Leaf, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export default function EvZonePage() {
  const { openTestDrive, openPrice } = useModals();
  const evCars = CARS.filter((c) => c.category === 'EV');

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <Badge variant="ev" className="gap-1 font-bold px-3 py-1 text-xs">
            <Zap className="w-3.5 h-3.5 fill-current" /> India&apos;s #1 Electric Mobility Leader
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Welcome to Tata.ev Zone at Key Motors
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Zero emissions, instant torque, and 0% Karnataka road tax. Explore India&apos;s largest lineup of pure electric vehicles engineered on the multi-award-winning Acti.ev architecture.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              onClick={() => openTestDrive('curvv-ev')}
              className="bg-ev text-ev-foreground hover:bg-ev/90 font-bold shadow-lg"
            >
              Book Doorstep EV Test Drive
            </Button>
            <Button
              size="lg"
              onClick={() => openPrice('curvv-ev')}
              className="bg-white/10 hover:bg-white/20 text-white hover:text-white border border-white/35 font-bold shadow-md backdrop-blur-sm transition-all"
            >
              Get 0% Road Tax Quotation
            </Button>
          </div>
        </div>
      </section>

      {/* EV Lineup Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-1">
            <Badge variant="outline" className="border-ev text-ev font-bold">
              Pure Electric Models
            </Badge>
            <h2 className="text-3xl font-extrabold text-foreground">
              Explore the Tata.ev Family
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {evCars.map((car) => (
              <Card
                key={car.id}
                className="overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="p-4 pb-2 flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{car.name}</h3>
                      <p className="text-xs text-muted-foreground">{car.bodyType}</p>
                    </div>
                    <Badge variant="ev" className="text-[10px]">
                      Electric
                    </Badge>
                  </div>

                  <Link href={`/models/${car.id}`} className="block relative h-40 w-full p-4 flex items-center justify-center">
                    <Image
                      src={car.image}
                      alt={car.name}
                      width={300}
                      height={180}
                      className="max-h-36 w-auto object-contain hover:scale-105 transition-transform"
                    />
                  </Link>

                  <div className="px-4 py-2 mx-4 rounded-xl bg-muted/60 grid grid-cols-2 gap-2 text-center text-xs">
                    <div>
                      <div className="text-[10px] text-muted-foreground">Certified Range</div>
                      <div className="font-bold text-foreground text-xs">{car.range}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground">Battery Pack</div>
                      <div className="font-bold text-foreground text-xs truncate">{car.battery || 'Long Range'}</div>
                    </div>
                  </div>

                  <div className="p-4 pt-3 pb-2">
                    <span className="text-[10px] text-muted-foreground block">Starting Ex-Showroom</span>
                    <span className="text-lg font-black text-primary">{car.price}</span>
                  </div>
                </div>

                <CardContent className="p-4 pt-2 space-y-2 border-t border-border">
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      size="sm"
                      onClick={() => openTestDrive(car.id)}
                      className="w-full text-xs font-bold"
                    >
                      Test Drive
                    </Button>
                    <Link href={`/models/${car.id}`} className="block">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full text-xs font-semibold"
                      >
                        Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Acti.ev Architecture & Warranty Perks */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-foreground">
              Why Tata.ev is India&apos;s Most Trusted Electric Platform
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Backed by Tata Power charging infrastructure and industry-best 8-year warranty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border space-y-3">
              <div className="w-12 h-12 rounded-xl bg-ev/10 text-ev flex items-center justify-center font-bold">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-foreground">8-Year Warranty</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                8 Years or 1,60,000 km warranty on high-voltage battery pack and PMSM electric motor.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border space-y-3">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-foreground">Free Home Charger</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Complimentary 7.2 kW or 3.3 kW AC home wallbox charger with certified installation assistance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border space-y-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-foreground">10,000+ Fast Chargers</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Seamless highway travel with Tata Power EZ Charge network across all Karnataka corridors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border space-y-3">
              <div className="w-12 h-12 rounded-xl bg-ev/10 text-ev flex items-center justify-center font-bold">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-foreground">0% Karnataka Road Tax</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Enjoy complete road tax exemption on electric cars in Karnataka, saving up to ₹ 4,00,000.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Savings Calculator */}
      <EvSavingsCalculator />
    </div>
  );
}
