'use client';

import React from 'react';
import { Phone, Calendar, Wrench, MessageCircle } from 'lucide-react';
import { DEALERSHIP } from '@/config/constants';
import { useModals } from '@/context/ModalContext';

export function FloatingActions() {
  const { openTestDrive, openService } = useModals();

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <aside 
        aria-label="Direct WhatsApp Contact"
        className="fixed bottom-6 right-6 z-30 hidden sm:flex items-center"
      >
        <a
          href={DEALERSHIP.social.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-xs"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Action Strip */}
      <aside 
        aria-label="Mobile quick actions"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-card border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-2 px-3 grid grid-cols-4 gap-1.5"
      >
        <a
          href={DEALERSHIP.social.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1 rounded-lg text-emerald-600 hover:bg-muted"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span className="text-[10px] font-bold mt-1">WhatsApp</span>
        </a>

        <a
          href={`tel:${DEALERSHIP.contacts.primaryPhoneClean}`}
          className="flex flex-col items-center justify-center p-1 rounded-lg text-foreground hover:bg-muted"
        >
          <Phone className="w-4 h-4" />
          <span className="text-[10px] font-bold mt-1">Call Now</span>
        </a>

        <button
          onClick={() => openService()}
          className="flex flex-col items-center justify-center p-1 rounded-lg text-primary hover:bg-muted"
        >
          <Wrench className="w-4 h-4" />
          <span className="text-[10px] font-bold mt-1">Service</span>
        </button>

        <button
          onClick={() => openTestDrive()}
          className="flex flex-col items-center justify-center p-1 rounded-lg bg-primary text-primary-foreground font-bold shadow-sm"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-[10px] font-bold mt-1">Test Drive</span>
        </button>
      </aside>
    </>
  );
}
