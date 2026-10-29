import React from 'react';
import { DEALERSHIP } from '@/config/constants';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Terms & Conditions | ${DEALERSHIP.name}`,
  description: `Official terms of service, vehicle booking conditions, and warranty disclosures of Key Motor Ventures Pvt. Ltd. (Key Motors Tata).`,
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 font-bold px-3 py-1 text-xs">
            Terms of Dealership Service
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-primary-foreground/80">
            Governing all bookings, vehicle deliveries, and service operations at Key Motor Ventures Pvt. Ltd.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 prose prose-slate dark:prose-invert text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">1. Vehicle Bookings & Pricing Disclaimer</h2>
            <p className="text-muted-foreground mt-2">
              Prices displayed on this website are starting ex-showroom estimates and subject to change without prior notice as per Tata Motors Ltd. official price revisions. Final on-road prices are calculated based on Bangalore Karnataka RTO tax brackets, insurance coverage selected, FASTag, and municipal charges applicable on the exact date of billing and registration.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">2. Complimentary Test Drives</h2>
            <p className="text-muted-foreground mt-2">
              Test drives (both doorstep and showroom) are provided free of charge subject to vehicle availability and scheduling confirmation. All drivers must produce a valid Government-issued Indian 4-wheeler driving license prior to operating the test vehicle. Key Motors reserves the right to decline or reschedule test drives in case of adverse weather or licensing non-compliance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">3. Used Car Exchange & Valuation</h2>
            <p className="text-muted-foreground mt-2">
              All trade-in and exchange valuations offered through our online calculator or digital evaluator are provisional until physical inspection of vehicle documentation, engine health, chassis numbers, and VAHAN portal verification. Exchange bonuses are funded in part by manufacturer schemes and apply solely when purchasing an eligible new Tata vehicle.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">4. Financing & Bank Loan Sanctions</h2>
            <p className="text-muted-foreground mt-2">
              Loan eligibility calculations and interest rates provided are indicative estimates. Final interest rate, processing charges, and tenure approval remain at the sole discretion of our partner banks and financial institutions in compliance with RBI guidelines.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">5. Jurisdiction & Legal Governance</h2>
            <p className="text-muted-foreground mt-2">
              Any dispute, claim, or controversy arising out of transactions, deliveries, or services conducted with Key Motor Ventures Pvt. Ltd. shall be governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
