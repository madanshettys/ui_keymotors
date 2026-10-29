'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { OUTLETS } from '@/data/outlets';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Clock, ArrowRight, ExternalLink, Search } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export default function OutletsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'showroom' | 'service'>('all');
  const [search, setSearch] = useState('');
  const { openTestDrive, openService } = useModals();

  const filtered = OUTLETS.filter((out) => {
    const matchesTab =
      activeTab === 'all'
        ? true
        : activeTab === 'showroom'
        ? out.category === 'showroom' || out.category === 'both'
        : out.category === 'service' || out.category === 'both';

    const matchesSearch =
      out.name.toLowerCase().includes(search.toLowerCase()) ||
      out.address.toLowerCase().includes(search.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 font-bold px-3 py-1 text-xs">
            Bangalore Dealership Network
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Find Key Motors Showrooms & Workshops
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Visit your nearest authorized Tata Motors sales lounge, certified service center, or high-speed EV charging station in Bangalore.
          </p>
        </div>
      </section>

      {/* Directory Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="w-full md:w-auto">
            <TabsList className="w-full sm:w-auto flex sm:inline-flex overflow-x-auto justify-start sm:justify-center p-1">
              <TabsTrigger value="all" className="flex-1 sm:flex-initial text-xs sm:text-sm px-2.5 sm:px-3.5 py-1.5 sm:py-2">
                All <span className="hidden sm:inline">Locations</span> ({OUTLETS.length})
              </TabsTrigger>
              <TabsTrigger value="showroom" className="flex-1 sm:flex-initial text-xs sm:text-sm px-2.5 sm:px-3.5 py-1.5 sm:py-2">
                Showrooms
              </TabsTrigger>
              <TabsTrigger value="service" className="flex-1 sm:flex-initial text-xs sm:text-sm px-2.5 sm:px-3.5 py-1.5 sm:py-2">
                Workshops <span className="hidden sm:inline">& Body Repair</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search JP Nagar, Mysore Rd..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((outlet) => (
            <Card key={outlet.id} className="border-border bg-card flex flex-col justify-between hover:shadow-xl transition-all">
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

                <div className="flex flex-wrap gap-1 pt-1">
                  {outlet.features.map((feat, idx) => (
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
                    Branch Page <ArrowRight className="w-3.5 h-3.5" />
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
    </div>
  );
}
