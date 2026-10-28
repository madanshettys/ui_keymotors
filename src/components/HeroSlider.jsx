import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, ShieldCheck, Zap, Compass } from 'lucide-react';
import { SLIDERS } from '../data/sliders';

export default function HeroSlider({ onOpenTestDrive, onSelectModel, onOpenPrice }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDERS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDERS.length) % SLIDERS.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDERS.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 60) nextSlide();
    if (touchStartX.current - touchEndX.current < -60) prevSlide();
  };

  const currentSlide = SLIDERS[currentIndex];

  return (
    <div 
      className="relative w-full overflow-hidden bg-slate-950 group select-none border-b border-slate-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide Image Container */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.45/1] max-h-[660px] min-h-[380px] sm:min-h-[480px] overflow-hidden">
        {SLIDERS.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'
            }`}
          >
            {/* Responsive Picture */}
            <picture>
              <source media="(max-width: 640px)" srcSet={slide.mobileImg} />
              <img
                src={slide.desktopImg}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  if (e.target.src !== slide.desktopImg) {
                    e.target.src = slide.desktopImg;
                  }
                }}
              />
            </picture>

            {/* Premium Cinema Vignette & Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30"></div>
          </div>
        ))}

        {/* Slide Content Overlay with Glass Backing */}
        <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl lg:max-w-2xl pointer-events-auto space-y-4">
              {/* Badge with ambient glow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/30 text-blue-200 text-xs font-black tracking-widest uppercase backdrop-blur-xl border border-blue-400/30 shadow-[0_0_20px_rgba(2,132,199,0.3)] animate-pulse-slow">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{currentSlide.badge}</span>
              </div>

              {/* Title with sharp typography */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-lg">
                {currentSlide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-200/90 font-normal leading-relaxed drop-shadow max-w-lg">
                {currentSlide.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenTestDrive(currentSlide.targetModel)}
                  className="bg-gradient-to-r from-blue-600 to-km-blue hover:from-blue-500 hover:to-blue-700 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-xl shadow-blue-900/40 hover:shadow-2xl transition-all duration-300 flex items-center gap-2 tracking-wide uppercase hover:-translate-y-0.5"
                >
                  <Compass className="w-4 h-4 text-blue-200" />
                  <span>Book Test Drive</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {currentSlide.targetModel && (
                  <button
                    onClick={() => onSelectModel(currentSlide.targetModel)}
                    className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-2xl backdrop-blur-xl border border-white/20 transition-all duration-300 flex items-center gap-2 hover:-translate-y-0.5"
                  >
                    <span>View Specifications</span>
                  </button>
                )}

                <button
                  onClick={() => onOpenPrice(currentSlide.targetModel)}
                  className="hidden sm:inline-flex bg-slate-900/80 hover:bg-slate-900 text-amber-300 font-bold text-xs sm:text-sm px-4 py-3.5 rounded-2xl border border-amber-400/30 backdrop-blur-md transition-all items-center gap-1.5 hover:-translate-y-0.5"
                >
                  <span>On-Road Price</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-2xl bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/15 transition-all duration-300 opacity-60 group-hover:opacity-100 hover:scale-105 shadow-xl"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-2xl bg-black/40 hover:bg-black/80 text-white backdrop-blur-md border border-white/15 transition-all duration-300 opacity-60 group-hover:opacity-100 hover:scale-105 shadow-xl"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicators with Active Progress */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-black/50 px-4 py-2 rounded-full backdrop-blur-xl border border-white/15 shadow-2xl">
          {SLIDERS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === currentIndex ? 'w-10 bg-gradient-to-r from-blue-400 to-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]' : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
