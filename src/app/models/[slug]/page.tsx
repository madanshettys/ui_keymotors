'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { CARS } from '@/data/cars';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Shield,
  Zap,
  Download,
  Calendar,
  Calculator,
  Scale,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export default function ModelDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const car = CARS.find((c) => c.id === slug);

  const { openTestDrive, openPrice, toggleCompare, comparedCars } = useModals();

  if (!car) {
    notFound();
  }

  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const colors = car.colors || [];
  const activeColor = colors[selectedColorIdx] || null;
  const isCompared = comparedCars.some((c) => c.id === car.id);
  const isEv = car.category === 'EV';

  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumbs */}
      <div className="bg-muted/40 border-b border-border py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/models" className="hover:text-foreground">Models</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-bold text-foreground">{car.name}</span>
        </div>
      </div>

      {/* Hero Showcase & Interactive Color Customizer */}
      <section className="relative py-12 lg:py-16 bg-gradient-to-b from-muted/30 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Car Title, Badges & Price */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                {isEv ? (
                  <Badge variant="ev" className="gap-1 font-bold">
                    <Zap className="w-3 h-3 fill-current" /> Tata.ev
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="font-semibold">
                    {car.bodyType}
                  </Badge>
                )}
                <Badge variant="outline" className="border-ev text-ev font-bold gap-1">
                  <Shield className="w-3 h-3" /> {car.safety}
                </Badge>
              </div>

              <div>
                <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight">
                  {car.name}
                </h1>
                <p className="text-base text-muted-foreground mt-1 font-medium">{car.tagline}</p>
              </div>

              <div className="pt-2">
                <span className="text-xs text-muted-foreground block font-medium">Starting Ex-Showroom</span>
                <span className="text-3xl font-black text-primary">{car.price}</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <Button
                  size="lg"
                  onClick={() => openTestDrive(car.id)}
                  className="font-bold shadow-md gap-2"
                >
                  <Calendar className="w-4 h-4" /> Book Doorstep Test Drive
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => openPrice(car.id)}
                  className="font-semibold gap-2"
                >
                  <Calculator className="w-4 h-4" /> Bangalore On-Road Price
                </Button>

                <a
                  href={car.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button size="lg" variant="secondary" className="gap-2 font-semibold">
                    <Download className="w-4 h-4" /> Brochure
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Color Selector & Big Vehicle Render */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center space-y-6">
              <div className="relative h-64 sm:h-80 w-full flex items-center justify-center">
                <Image
                  src={activeColor?.img || car.banner || car.image}
                  alt={`${car.name} ${activeColor?.name || ''}`}
                  width={650}
                  height={380}
                  className="max-h-72 sm:max-h-80 w-auto object-contain transition-all duration-300 drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Color Swatches */}
              {colors.length > 0 && (
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-xs font-bold text-foreground">
                    Color: <span className="text-muted-foreground">{activeColor?.name}</span>
                  </span>
                  <div className="flex items-center gap-2 p-1.5 rounded-full bg-card border border-border shadow-sm">
                    {colors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColorIdx(idx)}
                        className={`w-7 h-7 rounded-full border-2 transition-transform duration-200 ${
                          idx === selectedColorIdx
                            ? 'scale-125 border-primary shadow-md'
                            : 'border-transparent hover:scale-110'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                        aria-label={`Select ${color.name}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights & Features Gallery */}
      {car.features && car.features.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="space-y-1">
              <Badge variant="outline" className="border-accent text-accent font-semibold">
                Cutting-Edge Innovations
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Key Features & Technologies
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {car.features.map((feat, idx) => (
                <Card key={idx} className="overflow-hidden border-border bg-card hover:shadow-lg transition-all">
                  <div className="relative h-44 w-full bg-muted">
                    <Image
                      src={feat.img}
                      alt={feat.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4 space-y-1">
                    <h3 className="font-bold text-sm text-foreground">{feat.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technical Specifications */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="space-y-1 text-center">
            <Badge variant="outline" className="border-primary text-primary font-semibold">
              Engineering Excellence
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Technical Specifications
            </h2>
          </div>

          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="divide-y divide-border text-sm">
              <div className="grid grid-cols-3 px-6 py-3.5">
                <span className="font-semibold text-muted-foreground text-xs uppercase">Powertrain</span>
                <span className="col-span-2 font-bold text-foreground">{car.engine || car.battery || car.fuelType}</span>
              </div>
              <div className="grid grid-cols-3 px-6 py-3.5">
                <span className="font-semibold text-muted-foreground text-xs uppercase">Power Output</span>
                <span className="col-span-2 font-bold text-foreground">{car.power}</span>
              </div>
              <div className="grid grid-cols-3 px-6 py-3.5">
                <span className="font-semibold text-muted-foreground text-xs uppercase">Peak Torque</span>
                <span className="col-span-2 font-bold text-foreground">{car.torque}</span>
              </div>
              <div className="grid grid-cols-3 px-6 py-3.5">
                <span className="font-semibold text-muted-foreground text-xs uppercase">Range / Fuel Economy</span>
                <span className="col-span-2 font-bold text-foreground">{car.range || 'Class Leading'}</span>
              </div>
              <div className="grid grid-cols-3 px-6 py-3.5">
                <span className="font-semibold text-muted-foreground text-xs uppercase">Transmission</span>
                <span className="col-span-2 font-bold text-foreground">{car.transmission}</span>
              </div>
              <div className="grid grid-cols-3 px-6 py-3.5">
                <span className="font-semibold text-muted-foreground text-xs uppercase">Safety Rating</span>
                <span className="col-span-2 font-bold text-foreground flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-ev" /> {car.safety}
                </span>
              </div>
              <div className="grid grid-cols-3 px-6 py-3.5">
                <span className="font-semibold text-muted-foreground text-xs uppercase">Seating Capacity</span>
                <span className="col-span-2 font-bold text-foreground">{car.seating}</span>
              </div>
              <div className="grid grid-cols-3 px-6 py-3.5">
                <span className="font-semibold text-muted-foreground text-xs uppercase">Boot Capacity</span>
                <span className="col-span-2 font-bold text-foreground">{car.bootSpace}</span>
              </div>
              {car.charging && (
                <div className="grid grid-cols-3 px-6 py-3.5">
                  <span className="font-semibold text-muted-foreground text-xs uppercase">Fast Charging</span>
                  <span className="col-span-2 font-bold text-ev flex items-center gap-1.5">
                    <Zap className="w-4 h-4 fill-current" /> {car.charging}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Bottom CTAs */}
          <div className="p-6 rounded-2xl bg-primary text-primary-foreground text-center space-y-4 shadow-xl">
            <h3 className="text-xl font-bold text-white">Ready to experience the {car.name}?</h3>
            <p className="text-xs text-primary-foreground/80 max-w-md mx-auto">
              Our sales advisors will bring the {car.name} right to your residence or office for a free test drive across Bangalore.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button
                size="lg"
                onClick={() => openTestDrive(car.id)}
                className="bg-white text-primary hover:bg-slate-100 font-bold"
              >
                Schedule Free Doorstep Drive
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => openPrice(car.id)}
                className="border-white/30 text-white hover:bg-white/10 font-semibold"
              >
                Get Bangalore Price Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
