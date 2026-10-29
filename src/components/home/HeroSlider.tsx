'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SLIDERS } from '@/data/sliders';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Shield, Zap } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const { openTestDrive, openPrice } = useModals();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDERS.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDERS[current];

  return (
    <div className="relative w-full overflow-hidden bg-primary text-primary-foreground">
      {/* Banner Viewport */}
      <div className="relative min-h-[460px] sm:min-h-[540px] lg:min-h-[600px] w-full flex items-center">
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={slide.desktopImg}
            alt={slide.title}
            fill
            className="object-cover object-center transition-all duration-700 brightness-[0.85] contrast-[1.05]"
            priority
          />
          {/* Subtle gradient vignette to guarantee text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
          <div className="max-w-xl space-y-4 animate-in fade-in slide-in-from-left-6 duration-500 key={current}">
            {slide.badge && (
              <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 px-3 py-1 font-bold text-xs tracking-wider">
                {slide.badge}
              </Badge>
            )}

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              {slide.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {slide.subtitle}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                onClick={() => openTestDrive(slide.targetModel || slide.primaryCtaModel || null)}
                className="font-bold text-sm shadow-xl"
              >
                <Calendar className="w-4 h-4 mr-2" />
                {slide.ctaText || slide.primaryCtaText || 'Book Test Drive'}
              </Button>

              <Button
                size="lg"
                onClick={() => openPrice(slide.targetModel || slide.primaryCtaModel || null)}
                className="font-bold text-sm bg-white/10 hover:bg-white/25 text-white hover:text-white border border-white/35 backdrop-blur-sm shadow-md transition-all"
              >
                Get On-Road Price <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + SLIDERS.length) % SLIDERS.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setCurrent((prev) => (prev + 1) % SLIDERS.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {SLIDERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 transition-all duration-300 rounded-full ${
                idx === current ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
