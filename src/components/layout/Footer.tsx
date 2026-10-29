'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { DEALERSHIP, NAVIGATION } from '@/config/constants';
import { Button } from '@/components/ui/button';
import { useModals } from '@/context/ModalContext';

export function Footer() {
  const { openTestDrive, openService } = useModals();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10 pt-16 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Feature Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-primary-foreground/10 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 text-accent">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-primary-foreground">{DEALERSHIP.stats.yearsOfTrust}+ Years Trusted</h4>
              <p className="text-xs text-primary-foreground/70">Over {DEALERSHIP.stats.happyCustomers} Happy Tata Owners</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 text-ev">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-primary-foreground">Exclusive Tata.ev Zone</h4>
              <p className="text-xs text-primary-foreground/70">Fast DC Chargers & Specialist Team</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 text-accent">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-primary-foreground">{DEALERSHIP.stats.showroomsCount} Showrooms & {DEALERSHIP.stats.workshopsCount} Workshops</h4>
              <p className="text-xs text-primary-foreground/70">Across Strategic Bangalore Hubs</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-2xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 text-primary-foreground">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-primary-foreground">5-Star Safety Assured</h4>
              <p className="text-xs text-primary-foreground/70">Highest BNCAP & GNCAP Ratings</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="bg-card p-2 rounded-xl inline-block shadow-sm">
              <Image
                src="/assets/img/logo.png"
                alt={DEALERSHIP.name}
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-primary-foreground/75 leading-relaxed max-w-sm">
              {DEALERSHIP.legalName} is Bangalore&apos;s foremost authorized dealership for Tata Motors passenger and electric vehicles. Offering guaranteed transparent on-road pricing, quick doorstep test drives, and computerized express service bays.
            </p>
            <div className="space-y-2 text-xs text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{DEALERSHIP.address.headOffice}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={`tel:${DEALERSHIP.contacts.primaryPhoneClean}`} className="hover:underline">
                  Sales: {DEALERSHIP.contacts.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-ev shrink-0" />
                <a href={`tel:${DEALERSHIP.contacts.servicePhoneClean}`} className="hover:underline">
                  Service: {DEALERSHIP.contacts.servicePhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href={`mailto:${DEALERSHIP.contacts.email}`} className="hover:underline">
                  {DEALERSHIP.contacts.email}
                </a>
              </div>
            </div>
          </div>

          {/* Models Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/90">Tata Lineup</h4>
            <ul className="space-y-2 text-xs text-primary-foreground/75">
              {NAVIGATION.footerLinks.models.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary-foreground hover:underline transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/90">Services & Support</h4>
            <ul className="space-y-2 text-xs text-primary-foreground/75">
              {NAVIGATION.footerLinks.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary-foreground hover:underline transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bangalore Outlets Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/90">Bangalore Outlets</h4>
            <ul className="space-y-2 text-xs text-primary-foreground/75">
              {NAVIGATION.footerLinks.showrooms.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary-foreground hover:underline transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60 text-center md:text-left">
          <p>© {new Date().getFullYear()} {DEALERSHIP.name} ({DEALERSHIP.legalName}). All rights reserved. Authorized Dealer for Tata Motors.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/privacy-policy" className="hover:text-primary-foreground hover:underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-primary-foreground hover:underline">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/careers" className="hover:text-primary-foreground hover:underline">
              Careers
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-primary-foreground hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
