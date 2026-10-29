'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

export function GallerySection() {
  const deliveryPhotos = [
    { src: '/assets/img/gallery/Customer-1.jpg', title: 'Tata Curvv.ev Grand Delivery', loc: 'Mysore Road Flagship' },
    { src: '/assets/img/gallery/Customer-2.jpg', title: 'Tata Nexon Fearless Handover', loc: 'JP Nagar' },
    { src: '/assets/img/gallery/Customer-3.jpg', title: 'Tata Safari Dark Edition Celebration', loc: 'Bannerghatta Road' },
    { src: '/assets/img/gallery/Customer-4.jpg', title: 'Tata Punch iCNG Keys Handover', loc: 'Nelamangala' },
    { src: '/assets/img/gallery/Customer-5.jpg', title: 'Tata Harrier Fearless AT Family Moment', loc: 'Magadi Road' },
    { src: '/assets/img/gallery/Customer-6.jpg', title: 'Tata Altroz Premium Hatch Delivery', loc: 'Jigani' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <Badge variant="outline" className="border-primary text-primary font-semibold">
              Delivery Celebrations
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Moments of Joy & Grand Celebrations
            </h2>
            <p className="text-sm text-muted-foreground">
              Every car delivery is treated with royal celebration and memories to cherish for life.
            </p>
          </div>

          <Link href="/gallery">
            <Button variant="outline" className="font-bold gap-2">
              View All Photos <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {deliveryPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="group relative h-48 rounded-2xl overflow-hidden border border-border shadow-sm bg-muted"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
                <span className="text-[11px] font-bold line-clamp-1">{photo.title}</span>
                <span className="text-[9px] text-white/80">{photo.loc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
