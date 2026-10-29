'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Phone,
  MapPin,
  Calendar,
  Clock,
  ChevronDown,
  Menu,
  X,
  Zap,
  Shield,
  Car,
  Wrench,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { DEALERSHIP, NAVIGATION } from '@/config/constants';
import { CARS } from '@/data/cars';
import { OUTLETS } from '@/data/outlets';
import { useModals } from '@/context/ModalContext';

export function Header() {
  const pathname = usePathname();
  const { openTestDrive, openService, openPrice } = useModals();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modelsOpen, setModelsOpen] = useState(false);
  const [outletsOpen, setOutletsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-xl border-b border-border shadow-sm transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-[11px] sm:text-xs py-2 px-4 border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Authorized Dealership Bangalore */}
          <div className="flex items-center gap-3 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ev opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ev"></span>
              </span>
              <span className="font-bold tracking-wide">{DEALERSHIP.name}</span>
              <span className="text-primary-foreground/75 hidden sm:inline">• Authorized Dealership Bangalore</span>
            </span>
            <span className="hidden lg:inline text-primary-foreground/40">|</span>
            <span className="hidden lg:flex items-center gap-1 text-primary-foreground/80">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>{DEALERSHIP.stats.showroomsCount} Showrooms & {DEALERSHIP.stats.workshopsCount} Workshops across Bengaluru</span>
            </span>
          </div>

          {/* Right: Working Hours, Phone & Tata EV Zone badge */}
          <div className="flex items-center gap-3 text-xs">
            <span className="hidden sm:flex items-center gap-1.5 text-primary-foreground/80 text-[11px]">
              <Clock className="w-3.5 h-3.5" />
              <span>Today: 9:00 AM - 8:00 PM</span>
            </span>

            <a
              href={`tel:${DEALERSHIP.contacts.primaryPhoneClean}`}
              className="flex items-center gap-1.5 font-bold text-accent-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 px-2.5 py-0.5 rounded-full border border-primary-foreground/15 transition-colors"
            >
              <Phone className="w-3 h-3 fill-current" />
              <span>{DEALERSHIP.contacts.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Dealership Logo & Tata Trustmark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-11 w-32 sm:w-36 flex items-center">
            <Image
              src="/assets/img/logo.png"
              alt={DEALERSHIP.name}
              width={144}
              height={44}
              className="max-h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <div className="h-7 w-[1px] bg-border hidden sm:block"></div>
          <div className="hidden sm:flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">TATA MOTORS</span>
            <span className="text-[9px] text-muted-foreground font-semibold">PASSENGER & EV</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            href="/"
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              pathname === '/' ? 'text-primary bg-primary/10' : 'text-foreground/80 hover:text-primary hover:bg-muted'
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              pathname === '/about' ? 'text-primary bg-primary/10' : 'text-foreground/80 hover:text-primary hover:bg-muted'
            }`}
          >
            About Us
          </Link>

          {/* Models Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setModelsOpen(true)}
            onMouseLeave={() => setModelsOpen(false)}
          >
            <Link
              href="/models"
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1 ${
                pathname.startsWith('/models') ? 'text-primary bg-primary/10' : 'text-foreground/80 hover:text-primary hover:bg-muted'
              }`}
            >
              <span>Our Models</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${modelsOpen ? 'rotate-180' : ''}`} />
            </Link>

            {modelsOpen && (
              <div className="absolute top-full left-0 w-[520px] bg-card border border-border rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-2 animate-in fade-in-0 zoom-in-95 duration-150 z-50">
                <div className="col-span-2 pb-2 mb-1 border-b border-border flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Select a Model</span>
                  <Link href="/models" className="text-xs font-bold text-accent hover:underline flex items-center gap-1">
                    View All {CARS.length} Models <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                {CARS.slice(0, 8).map((car) => (
                  <Link
                    key={car.id}
                    href={`/models/${car.id}`}
                    onClick={() => setModelsOpen(false)}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <div className="w-12 h-8 relative flex-shrink-0 flex items-center justify-center">
                      <Image
                        src={car.image}
                        alt={car.name}
                        width={48}
                        height={32}
                        className="max-h-8 w-auto object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-xs font-bold text-foreground group-hover:text-primary truncate">{car.name}</div>
                      <div className="text-[10px] text-muted-foreground">{car.price}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Dedicated EV Zone Link */}
          <Link
            href="/ev-zone"
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 ${
              pathname === '/ev-zone' ? 'bg-ev/15 text-ev font-extrabold' : 'text-ev hover:bg-ev/10'
            }`}
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>EV Zone</span>
          </Link>

          {/* Special Offers */}
          <Link
            href="/special-offers"
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
              pathname === '/special-offers' ? 'text-primary bg-primary/10' : 'text-foreground/80 hover:text-primary hover:bg-muted'
            }`}
          >
            Special Offers
          </Link>

          {/* Outlets Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOutletsOpen(true)}
            onMouseLeave={() => setOutletsOpen(false)}
          >
            <Link
              href="/outlets"
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1 ${
                pathname.startsWith('/outlets') ? 'text-primary bg-primary/10' : 'text-foreground/80 hover:text-primary hover:bg-muted'
              }`}
            >
              <span>Outlets</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${outletsOpen ? 'rotate-180' : ''}`} />
            </Link>

            {outletsOpen && (
              <div className="absolute top-full left-0 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 animate-in fade-in-0 zoom-in-95 duration-150 z-50 space-y-1">
                <Link
                  href="/outlets"
                  onClick={() => setOutletsOpen(false)}
                  className="block px-3 py-2 text-xs font-bold text-accent hover:bg-muted rounded-lg"
                >
                  All Bangalore Branches ({OUTLETS.length})
                </Link>
                {OUTLETS.map((out) => (
                  <Link
                    key={out.id}
                    href={`/outlets/${out.id}`}
                    onClick={() => setOutletsOpen(false)}
                    className="block px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted hover:text-primary rounded-lg truncate"
                  >
                    {out.name.replace('Key Motors - ', '')}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/service"
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1 ${
                pathname.startsWith('/service') || pathname.startsWith('/exchange-cars') || pathname.startsWith('/finance')
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground/80 hover:text-primary hover:bg-muted'
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </Link>

            {servicesOpen && (
              <div className="absolute top-full right-0 w-64 bg-card border border-border rounded-xl shadow-2xl p-2 animate-in fade-in-0 zoom-in-95 duration-150 z-50 space-y-1">
                <Link
                  href="/service"
                  onClick={() => setServicesOpen(false)}
                  className="block px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted hover:text-primary rounded-lg"
                >
                  Book Certified Service
                </Link>
                <Link
                  href="/service-packages"
                  onClick={() => setServicesOpen(false)}
                  className="block px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted hover:text-primary rounded-lg"
                >
                  Value Care AMC Packages
                </Link>
                <Link
                  href="/exchange-cars"
                  onClick={() => setServicesOpen(false)}
                  className="block px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted hover:text-primary rounded-lg"
                >
                  Assurance Old Car Exchange
                </Link>
                <Link
                  href="/finance"
                  onClick={() => setServicesOpen(false)}
                  className="block px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted hover:text-primary rounded-lg"
                >
                  Finance & Loan EMI
                </Link>
                <Link
                  href="/insurance"
                  onClick={() => setServicesOpen(false)}
                  className="block px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted hover:text-primary rounded-lg"
                >
                  Car Insurance & Claims
                </Link>
                <Link
                  href="/extended-warranty"
                  onClick={() => setServicesOpen(false)}
                  className="block px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted hover:text-primary rounded-lg"
                >
                  Extended Warranty Plans
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => openService()}
            className="text-xs font-bold gap-1.5"
          >
            <Wrench className="w-3.5 h-3.5 text-primary" /> Service
          </Button>

          <Button
            size="sm"
            onClick={() => openTestDrive()}
            className="text-xs font-bold gap-1.5 shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" /> Book Test Drive
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            size="sm"
            onClick={() => openTestDrive()}
            className="text-xs font-bold sm:hidden px-2.5 h-8"
          >
            Test Drive
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px] overflow-y-auto">
              <SheetHeader className="pb-4 border-b border-border">
                <SheetTitle className="text-left font-bold text-lg text-primary">
                  {DEALERSHIP.name}
                </SheetTitle>
              </SheetHeader>

              <div className="py-4 space-y-1">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-muted"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-muted"
                >
                  About Us
                </Link>
                <Link
                  href="/models"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-muted"
                >
                  All Tata Models
                </Link>
                <Link
                  href="/ev-zone"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold text-ev rounded-lg hover:bg-ev/10 flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-current" /> Tata.ev Zone
                </Link>
                <Link
                  href="/special-offers"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-muted"
                >
                  Special Offers
                </Link>
                <Link
                  href="/outlets"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-muted"
                >
                  Showrooms & Workshops
                </Link>
                <Link
                  href="/service"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-muted"
                >
                  Book Service
                </Link>
                <Link
                  href="/service-packages"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-muted"
                >
                  Service Packages & AMC
                </Link>
                <Link
                  href="/exchange-cars"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-muted"
                >
                  Old Car Exchange
                </Link>
                <Link
                  href="/finance"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-muted"
                >
                  Finance & EMI Calculator
                </Link>
                <Link
                  href="/insurance"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-muted"
                >
                  Insurance & Renewal
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-muted"
                >
                  Celebration Gallery
                </Link>
                <Link
                  href="/customers-testimonial"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-muted"
                >
                  Customer Reviews
                </Link>
                <Link
                  href="/faq"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-muted"
                >
                  FAQs
                </Link>
                <Link
                  href="/careers"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-muted"
                >
                  Careers
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold rounded-lg hover:bg-muted"
                >
                  Contact Us
                </Link>
              </div>

              <div className="pt-4 border-t border-border space-y-2">
                <Button
                  className="w-full font-bold"
                  onClick={() => {
                    setMobileOpen(false);
                    openTestDrive();
                  }}
                >
                  Book Free Test Drive
                </Button>
                <Button
                  variant="outline"
                  className="w-full font-bold"
                  onClick={() => {
                    setMobileOpen(false);
                    openService();
                  }}
                >
                  Book Service Appointment
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
