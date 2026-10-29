'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { OUTLETS } from '@/data/outlets';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Phone, Clock, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export function OutletsSection() {
  const [filter, setFilter] = useState<'all' | 'showroom' | 'service'>('all');
  const { openTestDrive, openService } = useModals();

  const filteredOutlets = OUTLETS.filter((out) => {
    if (filter === 'all') return true;
    if (filter === 'showroom') return out.category === 'showroom' || out.category === 'both';
    if (filter === 'service') return out.category === 'service' || out.category === 'both';
    return true;
  });

  return (
    <section id="outlets-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="outline" className="border-accent text-accent font-semibold">
              Bangalore Network
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              8 Showrooms & 7 Certified Workshops Across Bangalore
            </h2>
            <p className="text-sm text-muted-foreground">
              Conveniently located near major tech corridors, metro stations, and national highways.
            </p>
          </div>

          <Tabs value={filter} onValueChange={(v) => setFilter(v as any)} className="w-full sm:w-auto">
            <TabsList className="w-full sm:w-auto flex sm:inline-flex overflow-x-auto justify-start sm:justify-center p-1">
              <TabsTrigger value="all" className="flex-1 sm:flex-initial text-xs sm:text-sm px-2.5 sm:px-3.5 py-1.5 sm:py-2">
                All <span className="hidden sm:inline">Locations</span> ({OUTLETS.length})
              </TabsTrigger>
              <TabsTrigger value="showroom" className="flex-1 sm:flex-initial text-xs sm:text-sm px-2.5 sm:px-3.5 py-1.5 sm:py-2">
                Showrooms
              </TabsTrigger>
              <TabsTrigger value="service" className="flex-1 sm:flex-initial text-xs sm:text-sm px-2.5 sm:px-3.5 py-1.5 sm:py-2">
                Service Centers
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredOutlets.map((outlet) => (
            <Card key={outlet.id} className="border-border bg-card flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div className="p-5 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="secondary" className="text-[10px]">
                      {outlet.type.split('&')[0]}
                    </Badge>
                    {outlet.isFlagship && (
                      <Badge variant="default" className="text-[10px] font-bold">
                        Flagship
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-bold text-base text-foreground pt-1">
                    {outlet.name.replace('Key Motors - ', '')}
                  </h3>
                </div>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <p className="line-clamp-2">{outlet.address}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground shrink-0" />
                    <span>{outlet.timings}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a href={`tel:${outlet.phone.replace(/\s+/g, '')}`} className="font-semibold text-foreground hover:underline">
                      {outlet.phone}
                    </a>
                  </div>
                </div>

                {/* Features pills */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {outlet.features.slice(0, 3).map((feat, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium bg-muted text-muted-foreground px-2 py-0.5 rounded-md"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <CardContent className="p-5 pt-2 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    size="sm"
                    variant="default"
                    onClick={() => openTestDrive()}
                    className="w-full text-xs font-bold"
                  >
                    Test Drive
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => openService()}
                    className="w-full text-xs font-semibold"
                  >
                    Service
                  </Button>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <Link
                    href={`/outlets/${outlet.id}`}
                    className="text-primary font-bold hover:underline flex items-center gap-1"
                  >
                    Branch Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={outlet.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-[11px]"
                  >
                    Directions <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
