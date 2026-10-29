'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { OFFERS } from '@/data/offers';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Tag, ArrowRight, RefreshCw, Gift } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export function OffersSection() {
  const { openPrice, openTestDrive } = useModals();

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="outline" className="border-amber-500/50 text-amber-700 bg-amber-500/10 font-bold px-3 py-1 text-xs gap-1.5">
              <Gift className="w-3.5 h-3.5 text-amber-600" /> Limited Period Festive Privileges
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Exclusive Key Motors Benefits & Assured Exchange
            </h2>
            <p className="text-sm text-muted-foreground">
              Maximum savings, spot trade-in evaluation, and lowest interest rates across Bangalore.
            </p>
          </div>

          <Link href="/special-offers">
            <Button variant="outline" className="font-bold gap-2">
              View All Offers <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFERS.map((offer) => (
            <Card key={offer.id} className="overflow-hidden border-border bg-card flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div>
                {/* Banner Thumbnail */}
                <div className="relative h-44 w-full overflow-hidden bg-muted">
                  <Image
                    src={offer.bannerImage}
                    alt={offer.carName}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="default" className="font-bold text-xs shadow-md">
                      {offer.badge}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-foreground">
                    {offer.validTill}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{offer.carName}</h3>
                    <div className="text-xl font-black text-primary mt-1">
                      Benefits Up To {offer.discountUpTo}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-border text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{offer.exchangeBonus}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{offer.corporateBonus}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{offer.financeScheme}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-5 pt-0">
                <Button
                  onClick={() => openPrice(offer.modelId)}
                  className="w-full font-bold text-xs"
                >
                  Claim Offer & Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
