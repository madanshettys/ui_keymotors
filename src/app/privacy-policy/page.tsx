import React from 'react';
import { DEALERSHIP } from '@/config/constants';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Privacy Policy | ${DEALERSHIP.name}`,
  description: `Privacy policy and customer data protection standards of Key Motor Ventures Pvt. Ltd. (Key Motors Tata).`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 font-bold px-3 py-1 text-xs">
            Legal Compliance
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-primary-foreground/80">
            Last Updated: March 2025 • Key Motor Ventures Pvt. Ltd.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 prose prose-slate dark:prose-invert text-sm leading-relaxed space-y-6">
          <div>
            <h2 className="text-xl font-bold text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground mt-2">
              Key Motor Ventures Pvt. Ltd. (&quot;Key Motors&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to respecting and protecting the privacy of our website visitors, car buyers, and service clients. This Privacy Policy details how we collect, handle, store, and safeguard your personal details when you access our website ({DEALERSHIP.name}), register for a test drive, request price quotations, or schedule vehicle service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">2. Information We Collect</h2>
            <p className="text-muted-foreground mt-2">
              We collect information that you voluntarily provide to us when expressing an interest in obtaining information about our Tata Motors vehicle lineup, booking test drives, or requesting customer support. This includes:
            </p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
              <li>Contact data such as full name, email address, mobile phone number, and residential/office address for doorstep demonstrations.</li>
              <li>Vehicle data including current car make, model, year of manufacture, and registration number when applying for used car valuation or service check-in.</li>
              <li>Financial preferences for auto loan calculations and insurance premium estimates.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mt-2">
              The information collected is used exclusively to deliver authorized dealership services, including:
            </p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1 mt-2">
              <li>Scheduling and confirming doorstep or showroom vehicle test drives.</li>
              <li>Dispatching official Bangalore RTO on-road price quotations and active manufacturer offers.</li>
              <li>Facilitating vehicle service appointments, pick-up logistics, and warranty claims.</li>
              <li>Sharing updates on vehicle delivery status, insurance renewals, and roadside assistance.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">4. Data Sharing & Security</h2>
            <p className="text-muted-foreground mt-2">
              We never sell, rent, or trade your personal information to third-party commercial marketing agencies. Information is shared strictly with Tata Motors Passenger Vehicles Ltd., authorized financing partner banks, and insurance underwriters solely to execute your purchase or service request.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">5. Contact Our Privacy Officer</h2>
            <p className="text-muted-foreground mt-2">
              If you have any questions or concerns regarding this policy, please write to us at{' '}
              <a href={`mailto:${DEALERSHIP.contacts.email}`} className="text-primary font-bold hover:underline">
                {DEALERSHIP.contacts.email}
              </a>{' '}
              or visit our head office at {DEALERSHIP.address.headOffice}.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
