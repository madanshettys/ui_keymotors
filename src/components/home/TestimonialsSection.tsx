'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TESTIMONIALS } from '@/data/testimonials';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ArrowRight } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="outline" className="border-accent text-accent font-semibold">
              Verified Owner Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              What Bangalore Car Buyers Say About Key Motors
            </h2>
            <p className="text-sm text-muted-foreground">
              Real delivery celebrations, transparent paperwork, and dependable after-sales care.
            </p>
          </div>

          <Link href="/customers-testimonial">
            <Button variant="outline" className="font-bold gap-2">
              View All Testimonials <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <Card key={item.id} className="border-border bg-card p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-border flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-primary/20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">{item.name}</h4>
                  <p className="text-xs text-primary font-semibold">{item.car}</p>
                  <p className="text-[10px] text-muted-foreground">{item.outlet} • {item.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from '@/components/ui/button';
