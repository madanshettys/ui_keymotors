import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageSquare, Car, Wrench, Compass } from 'lucide-react';

export default function FloatingActions({ onOpenTestDrive, onOpenService, onOpenPrice }) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = 'https://wa.me/919590000055?text=Hi%20Key%20Motors%20Tata,%20I%20am%20interested%20in%20exploring%20Tata%20cars%20and%20booking%20a%20test%20drive.';

  return (
    <>
      {/* Desktop Floating Right Action Bubbles */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="pointer-events-auto w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 ring-4 ring-emerald-400/30 group relative shadow-[0_4px_25px_rgba(37,211,102,0.4)]"
        >
          <img
            src="/assets/img/icon/whatsapp.webp"
            alt="WhatsApp"
            className="w-8 h-8 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-950 text-white text-xs font-black px-3.5 py-1.5 rounded-2xl whitespace-nowrap shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:block border border-white/10">
            Chat on WhatsApp
          </span>
        </a>

        {/* Call Helpline */}
        <a
          href="tel:+919590000055"
          aria-label="Call Key Motors"
          className="pointer-events-auto w-13 h-13 p-3.5 rounded-full bg-gradient-to-r from-km-blue to-km-blue-light hover:from-blue-600 hover:to-blue-800 text-white shadow-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 ring-4 ring-blue-400/30 group relative shadow-[0_4px_25px_rgba(0,51,102,0.35)]"
        >
          <Phone className="w-5 h-5 fill-white" />
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-950 text-white text-xs font-black px-3.5 py-1.5 rounded-2xl whitespace-nowrap shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:block border border-white/10">
            Helpline: +91 95900 00055
          </span>
        </a>

        {/* Scroll To Top Button */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="pointer-events-auto w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white shadow-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 backdrop-blur-md border border-white/15"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Mobile Sticky Quick Action Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200/80 p-2.5 sm:hidden shadow-2xl flex items-center justify-around gap-2">
        <a
          href="tel:+919590000055"
          className="flex-1 bg-slate-100 text-slate-800 font-extrabold py-2.5 px-2 rounded-2xl text-xs flex items-center justify-center gap-1.5 text-center shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-600" />
          <span>Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 bg-emerald-50 text-emerald-800 font-extrabold py-2.5 px-2 rounded-2xl text-xs flex items-center justify-center gap-1.5 text-center border border-emerald-200 shadow-sm"
        >
          <img src="/assets/img/icon/whatsapp.webp" alt="WA" className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenTestDrive}
          className="flex-1 bg-gradient-to-r from-km-blue to-km-blue-light text-white font-black py-2.5 px-2 rounded-2xl text-xs flex items-center justify-center gap-1.5 text-center shadow-md uppercase tracking-wider"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Test Drive</span>
        </button>
      </div>
    </>
  );
}
