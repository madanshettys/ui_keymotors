'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { OFFERS } from '@/data/offers';
import { DEALERSHIP } from '@/config/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Gift, RefreshCw, Sparkles, Tag, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useModals } from '@/context/ModalContext';

export default function SpecialOffersPage() {
  const { openPrice, openTestDrive } = useModals();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [carInterest, setCarInterest] = useState('Nexon');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <Badge variant="outline" className="border-amber-400/60 text-amber-300 bg-amber-400/15 font-bold px-3.5 py-1 text-xs gap-1.5 backdrop-blur-sm shadow-sm">
            <Gift className="w-3.5 h-3.5" /> Exclusive Monthly Privileges
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Tata Motors Special Offers & Exchange Bonuses
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Get assured trade-in bonuses up to ₹ 1,25,000, zero down payment schemes, corporate savings for IT/Healthcare/Defence professionals, and special scrappage policy incentives across Bangalore.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFERS.map((offer) => (
              <Card key={offer.id} className="overflow-hidden border-border bg-card flex flex-col justify-between hover:shadow-xl transition-all">
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <Image
                      src={offer.bannerImage}
                      alt={offer.carName}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="default" className="font-bold text-xs shadow-md">
                        {offer.badge}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{offer.carName}</h3>
                      <div className="text-2xl font-black text-primary mt-1">
                        Benefits Up To {offer.discountUpTo}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-border text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <RefreshCw className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{offer.exchangeBonus}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{offer.corporateBonus}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{offer.financeScheme}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-5 pt-0">
                  <Button
                    onClick={() => openPrice(offer.modelId)}
                    className="w-full font-bold"
                  >
                    Lock In This Offer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instant Offer Callback Form */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-ev mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Special Offer Locked!</h3>
                <p className="text-xs text-muted-foreground max-w-md mx-auto">
                  Thank you, <strong className="text-foreground">{name}</strong>. Our senior pricing executive will call you at{' '}
                  <strong className="text-foreground">{phone}</strong> with the maximum eligible festive cash discounts and exchange bonuses for {carInterest}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-bold text-foreground">
                    Get Today&apos;s Best On-Road Quote & Corporate Offer
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Submit your details and get an instant official pricing breakdown on WhatsApp.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <Label>Car Model You Are Interested In</Label>
                  <Input
                    required
                    placeholder="e.g. Curvv.ev, Nexon, Safari, Punch"
                    value={carInterest}
                    onChange={(e) => setCarInterest(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label>Your Full Name</Label>
                    <Input
                      required
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label>Mobile Number</Label>
                    <Input
                      required
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full font-bold">
                  Send Me Today&apos;s Lowest Quote
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
