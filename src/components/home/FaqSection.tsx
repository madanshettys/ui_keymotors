'use client';

import React from 'react';
import Link from 'next/link';
import { FAQS } from '@/data/faq';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, ArrowRight } from 'lucide-react';

export function FaqSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2">
          <Badge variant="outline" className="border-accent text-accent font-semibold gap-1">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Have Questions About Buying or Servicing a Tata Car?
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about booking, Bangalore RTO registration, home EV charging, warranty, and assured trade-in.
          </p>
        </div>

        {/* Accordion */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.slice(0, 6).map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-sm sm:text-base font-bold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <Link href="/faq">
            <Button variant="outline" className="font-bold gap-2">
              Browse All FAQs <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
