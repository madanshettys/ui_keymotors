'use client';

import React from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/data/testimonials';
import { DEALERSHIP } from '@/config/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, MessageSquareQuote, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export default function TestimonialPage() {
  const { openTestDrive } = useModals();

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 font-bold px-3 py-1 text-xs gap-1">
            <Star className="w-3.5 h-3.5 fill-current" /> {DEALERSHIP.stats.googleRating} ★ Verified Google Rating
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Customer Testimonials & Reviews
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Read authentic experiences from Bangalore families and business professionals who purchased and serviced their Tata cars at Key Motors.
          </p>
        </div>
      </section>

      {/* Ratings Stats Bar */}
      <section className="bg-muted/40 py-8 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-card border border-border">
            <div className="text-3xl font-black text-primary">{DEALERSHIP.stats.googleRating} / 5</div>
            <div className="text-xs text-muted-foreground font-semibold mt-1">Average Google Rating</div>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <div className="text-3xl font-black text-accent">{DEALERSHIP.stats.reviewsCount}</div>
            <div className="text-xs text-muted-foreground font-semibold mt-1">Verified Customer Reviews</div>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <div className="text-3xl font-black text-ev">98.4%</div>
            <div className="text-xs text-muted-foreground font-semibold mt-1">On-Time Delivery Rate</div>
          </div>
          <div className="p-4 rounded-xl bg-card border border-border">
            <div className="text-3xl font-black text-foreground">{DEALERSHIP.stats.happyCustomers}</div>
            <div className="text-xs text-muted-foreground font-semibold mt-1">Happy Deliveries</div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((review) => (
              <Card key={review.id} className="border-border bg-card p-6 flex flex-col justify-between hover:shadow-xl transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-[10px] text-muted-foreground">
                      Verified Purchase
                    </Badge>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-border flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-primary/20 bg-muted">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">{review.name}</h4>
                    <p className="text-xs text-primary font-semibold">{review.car}</p>
                    <p className="text-[10px] text-muted-foreground">{review.outlet} • {review.date}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="pt-8 text-center">
            <Button size="lg" onClick={() => openTestDrive()} className="font-bold">
              Join Our Family of 75,000+ Happy Owners
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
