'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, HeartHandshake } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export default function GalleryPage() {
  const { openTestDrive } = useModals();

  const allPhotos = [
    { src: '/assets/img/gallery/Customer-1.jpg', title: 'Tata Curvv.ev Grand Delivery', loc: 'Mysore Road Showroom', tag: 'EV Delivery' },
    { src: '/assets/img/gallery/Customer-2.jpg', title: 'Tata Nexon Fearless+ DCA Handover', loc: 'JP Nagar Branch', tag: 'Customer Delivery' },
    { src: '/assets/img/gallery/Customer-3.jpg', title: 'Tata Safari Dark Edition Handover', loc: 'Bannerghatta Road', tag: 'Flagship SUV' },
    { src: '/assets/img/gallery/Customer-4.jpg', title: 'Tata Punch Accomplished iCNG Celebration', loc: 'Nelamangala Highway 3S', tag: 'iCNG Delivery' },
    { src: '/assets/img/gallery/Customer-5.jpg', title: 'Tata Harrier Fearless AT Delivery', loc: 'Magadi Road Showroom', tag: 'Customer Delivery' },
    { src: '/assets/img/gallery/Customer-6.jpg', title: 'Tata Altroz Premium Hatch Handover', loc: 'Jigani Showroom', tag: 'Family Delivery' },
    { src: '/assets/img/gallery/Customer-7.jpg', title: 'Tata Tiago.ev Smart Urban Commuter Delivery', loc: 'Doddaballapura', tag: 'EV Delivery' },
    { src: '/assets/img/gallery/Customer-8.jpg', title: 'Tata Tigor iCNG Dual Cylinder Handover', loc: 'Kanakapura Town', tag: 'iCNG Delivery' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 font-bold px-3 py-1 text-xs gap-1">
            <Sparkles className="w-3.5 h-3.5" /> Celebrations & Smiles
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Key Motors Delivery Gallery
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Celebrating with over 75,000 proud Tata owners. Every vehicle delivery at Key Motors is a grand festival of family memories and joyous milestones.
          </p>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-60 w-full overflow-hidden bg-muted">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="default" className="text-[10px] font-bold">
                      {photo.tag}
                    </Badge>
                  </div>
                </div>

                <div className="p-4 space-y-1">
                  <h3 className="font-bold text-sm text-foreground line-clamp-1">{photo.title}</h3>
                  <p className="text-xs text-muted-foreground">{photo.loc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <Button
              size="lg"
              onClick={() => openTestDrive()}
              className="font-bold gap-2"
            >
              <Calendar className="w-4 h-4" /> Book Your Test Drive Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
