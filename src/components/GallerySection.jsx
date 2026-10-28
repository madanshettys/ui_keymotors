import React, { useState } from 'react';
import { Camera, Sparkles, X } from 'lucide-react';

export default function GallerySection() {
  const images = [
    { src: '/assets/img/gallery/Customer-1.jpg', title: 'Grand Curvv.ev Handover', tag: 'Electric Era' },
    { src: '/assets/img/gallery/Customer-2.jpg', title: 'Nexon Delivery Celebration', tag: "India's #1 SUV" },
    { src: '/assets/img/gallery/Customer-3.jpg', title: 'Safari Dark Edition Keys', tag: 'Flagship Luxury' },
    { src: '/assets/img/gallery/Customer-4.jpg', title: 'Family Punch Delivery', tag: '5-Star Safety' },
    { src: '/assets/img/gallery/Customer-5.jpg', title: 'Harrier Fearless Handover', tag: 'Born Tough' },
    { src: '/assets/img/gallery/Customer-6.jpg', title: 'Tiago.ev Commute Upgrade', tag: 'Zero Emissions' },
    { src: '/assets/img/gallery/Customer-7.jpg', title: 'Showroom Delivery Smiles', tag: 'Nayandahalli 3S' },
    { src: '/assets/img/gallery/Customer-8.jpg', title: 'Unboxing Life Milestone', tag: 'Key Motors Family' },
  ];

  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-km-blue text-xs font-black tracking-widest uppercase mb-3 border border-blue-200/50 shadow-sm">
            <Camera className="w-4 h-4 text-km-blue" />
            <span>Delivery Celebrations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Moments of Joy at <span className="text-gradient-blue">Key Motorrs</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every car delivery is a monumental life milestone. Here are glimpses of customer celebrations across our Bangalore showrooms.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {images.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActivePhoto(item)}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-black text-amber-300 uppercase tracking-widest">{item.tag}</span>
                <span className="text-sm font-black text-white leading-tight mt-0.5">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
            onClick={() => setActivePhoto(null)}
          >
            <div className="relative max-w-3xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden p-3 border border-white/10 shadow-2xl">
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-h-[75vh] w-auto mx-auto object-contain rounded-2xl"
              />
              <div className="p-4 text-center text-white">
                <span className="text-xs text-amber-400 font-black uppercase tracking-wider">{activePhoto.tag}</span>
                <h3 className="text-lg font-black mt-0.5">{activePhoto.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
