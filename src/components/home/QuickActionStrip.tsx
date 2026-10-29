'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Wrench, Calculator, RefreshCw, MapPin, Zap } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export function QuickActionStrip() {
  const { openTestDrive, openService, openPrice } = useModals();

  const actions = [
    {
      title: 'Book Test Drive',
      desc: 'Free doorstep or showroom',
      icon: Calendar,
      onClick: () => openTestDrive(),
      badge: 'Free',
    },
    {
      title: 'On-Road Price',
      desc: 'Bangalore RTO & insurance',
      icon: Calculator,
      onClick: () => openPrice(),
      badge: 'Instant',
    },
    {
      title: 'Book Service',
      desc: '90-Min express bay',
      icon: Wrench,
      onClick: () => openService(),
      badge: null,
    },
    {
      title: 'Old Car Exchange',
      desc: 'Spot valuation & bonus',
      icon: RefreshCw,
      href: '/exchange-cars',
      badge: 'Bonus',
    },
    {
      title: 'Showroom Locator',
      desc: '8 Bangalore locations',
      icon: MapPin,
      href: '/outlets',
      badge: null,
    },
  ];

  return (
    <section className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="rounded-2xl border border-border bg-card p-3 shadow-xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {actions.map((act, idx) => {
          const Icon = act.icon;
          const inner = (
            <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/70 transition-colors text-left group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-foreground truncate">{act.title}</span>
                  {act.badge && (
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-accent/15 text-accent">
                      {act.badge}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground truncate">{act.desc}</p>
              </div>
            </div>
          );

          if (act.href) {
            return (
              <Link key={idx} href={act.href}>
                {inner}
              </Link>
            );
          }

          return (
            <button key={idx} onClick={act.onClick} className="w-full text-left">
              {inner}
            </button>
          );
        })}
      </div>
    </section>
  );
}
