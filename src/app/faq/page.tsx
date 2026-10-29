"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/faq";
import type { FaqItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Search, Phone } from "lucide-react";
import { DEALERSHIP } from "@/config/constants";
import { Button } from "@/components/ui/button";

export default function FaqPage() {
  const [query, setQuery] = useState("");

  const filtered = FAQS.filter(
    (f: FaqItem) =>
      f.question.toLowerCase().includes(query.toLowerCase()) ||
      f.answer.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <Badge
            variant="outline"
            className="border-accent text-accent-foreground bg-accent/20 font-bold px-3 py-1 text-xs gap-1"
          >
            <HelpCircle className="w-3.5 h-3.5" /> Help Center
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about buying a new Tata car, Bangalore
            on-road price components, EV charging infrastructure, service
            intervals, and used car exchange.
          </p>
        </div>
      </section>

      {/* Main Accordion with Search */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Search Input */}
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by keyword (e.g. EV battery, test drive, exchange bonus, service)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 h-12 text-sm rounded-xl"
            />
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            {filtered.length === 0 ? (
              <div className="text-center py-12 text-sm text-muted-foreground">
                No matching answers found for &ldquo;{query}&rdquo;.
              </div>
            ) : (
              <Accordion type="single" collapsible className="w-full">
                {filtered.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-sm sm:text-base font-bold text-foreground hover:no-underline text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>

          {/* Need help footer strip */}
          <div className="p-6 rounded-2xl bg-muted/60 border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h3 className="font-bold text-base text-foreground">
                Still have questions?
              </h3>
              <p className="text-xs text-muted-foreground">
                Our customer concierge desk is available 7 days a week.
              </p>
            </div>
            <a href={`tel:${DEALERSHIP.contacts.primaryPhoneClean}`}>
              <Button className="font-bold gap-2">
                <Phone className="w-4 h-4" /> Call{" "}
                {DEALERSHIP.contacts.primaryPhone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
