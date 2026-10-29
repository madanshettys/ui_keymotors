'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CARS } from '@/data/cars';
import type { Car, CarCategory } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Shield, Zap, Scale, ArrowRight, Eye, Sparkles, Search } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export function ModelsShowcase() {
  const [filter, setFilter] = useState<'All' | 'EV' | 'SUV' | 'Hatch & Sedan'>('All');
  const [search, setSearch] = useState('');
  const { openTestDrive, openPrice, toggleCompare, comparedCars } = useModals();

  const filteredCars = CARS.filter((car) => {
    const matchesTab =
      filter === 'All'
        ? true
        : filter === 'EV'
        ? car.category === 'EV'
        : filter === 'SUV'
        ? car.category === 'SUV'
        : car.category === 'Hatch & Sedan';

    const matchesSearch =
      car.name.toLowerCase().includes(search.toLowerCase()) ||
      car.bodyType.toLowerCase().includes(search.toLowerCase()) ||
      car.fuelType.toLowerCase().includes(search.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <section id="models-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="outline" className="border-primary text-primary font-semibold">
              Explore Tata Portfolio
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              India&apos;s Safest & Most Progressive Cars
            </h2>
            <p className="text-sm text-muted-foreground">
              Featuring 5-Star BNCAP crash safety, cutting-edge dual-cylinder iCNG, and long-range Acti.ev platforms.
            </p>
          </div>

          {/* Category Filter Tabs & Search Input */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Tabs value={filter} onValueChange={(v) => setFilter(v as any)} className="w-full sm:w-auto">
              <TabsList className="w-full sm:w-auto justify-start overflow-x-auto">
                <TabsTrigger value="All">All ({CARS.length})</TabsTrigger>
                <TabsTrigger value="EV" className="gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-ev fill-current" /> Tata.ev
                </TabsTrigger>
                <TabsTrigger value="SUV">SUVs</TabsTrigger>
                <TabsTrigger value="Hatch & Sedan">Hatch & Sedan</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search Curvv, Nexon, EV..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-11 rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Empty state if search has no results */}
        {filteredCars.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-border rounded-2xl p-8 space-y-3">
            <p className="text-base font-bold text-foreground">No vehicles found matching &ldquo;{search}&rdquo;</p>
            <p className="text-xs text-muted-foreground">Try searching by model name like &apos;Curvv&apos;, &apos;Nexon&apos;, &apos;Punch&apos;, or reset search.</p>
            <Button size="sm" variant="outline" onClick={() => setSearch('')}>
              Clear Search
            </Button>
          </div>
        ) : (
          /* Cars Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCars.map((car) => {
            const isCompared = comparedCars.some((c) => c.id === car.id);
            const isEv = car.category === 'EV';

            return (
              <Card key={car.id} className="group overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 border-border bg-card">
                <div>
                  {/* Card Header & Badges */}
                  <div className="p-4 pb-2 flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {car.name}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-1">{car.tagline}</p>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      {isEv ? (
                        <Badge variant="ev" className="text-[10px] px-2 py-0.5">
                          Electric
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-[10px] px-2 py-0.5">
                          {car.bodyType}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Car Image Preview */}
                  <Link href={`/models/${car.id}`} className="block relative h-44 w-full p-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src={car.image}
                      alt={car.name}
                      width={320}
                      height={200}
                      className="max-h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-108"
                    />
                  </Link>

                  {/* Highlights Specs Strip */}
                  <div className="px-4 py-2 mx-4 rounded-xl bg-muted/50 grid grid-cols-3 gap-2 text-center text-xs">
                    <div>
                      <div className="text-[10px] text-muted-foreground font-semibold">Safety</div>
                      <div className="font-bold text-foreground text-[11px] truncate flex items-center justify-center gap-1">
                        <Shield className="w-3 h-3 text-ev" /> 5-Star
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground font-semibold">
                        {isEv ? 'Range' : 'Power'}
                      </div>
                      <div className="font-bold text-foreground text-[11px] truncate">
                        {isEv ? car.range : car.power.split('/')[0]}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground font-semibold">Fuel</div>
                      <div className="font-bold text-foreground text-[11px] truncate">
                        {isEv ? 'Pure EV' : car.fuelType.split('/')[0]}
                      </div>
                    </div>
                  </div>

                  {/* Price Banner */}
                  <div className="p-4 pt-3 pb-2 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] text-muted-foreground block">Starting Ex-Showroom</span>
                      <span className="text-lg font-black text-primary">{car.price}</span>
                    </div>

                    <button
                      onClick={() => toggleCompare(car)}
                      className={`text-xs flex items-center gap-1 font-semibold px-2.5 py-1 rounded-md transition-colors ${
                        isCompared
                          ? 'bg-accent text-accent-foreground font-bold'
                          : 'bg-muted text-muted-foreground hover:text-foreground'
                      }`}
                      title="Compare specs with another car"
                    >
                      <Scale className="w-3 h-3" />
                      <span>{isCompared ? 'Comparing' : 'Compare'}</span>
                    </button>
                  </div>
                </div>

                {/* Card Actions */}
                <CardContent className="p-4 pt-2 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      size="sm"
                      onClick={() => openTestDrive(car.id)}
                      className="w-full text-xs font-bold"
                    >
                      Test Drive
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => openPrice(car.id)}
                      className="w-full text-xs font-semibold"
                    >
                      On-Road Price
                    </Button>
                  </div>

                  <Link href={`/models/${car.id}`} className="block">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-full text-xs font-bold text-primary hover:text-primary gap-1"
                    >
                      <span>Explore Specifications & 360</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
        )}
      </div>
    </section>
  );
}
