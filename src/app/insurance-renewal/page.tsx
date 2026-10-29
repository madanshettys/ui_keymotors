'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DEALERSHIP } from '@/config/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ShieldCheck, CheckCircle2, Clock, Phone, Award, Zap } from 'lucide-react';

export default function InsuranceRenewalPage() {
  const [regNumber, setRegNumber] = useState('');
  const [prevInsurer, setPrevInsurer] = useState('Tata AIG');
  const [ncb, setNcb] = useState('50%');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
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
          <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 font-bold px-3 py-1 text-xs gap-1">
            <Clock className="w-3.5 h-3.5" /> 2-Minute Instant Renewal
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Tata Car Insurance Policy Renewal
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Renew your expiring car insurance policy instantly without physical inspection. Retain up to 50% No Claim Bonus (NCB) and enjoy continuous cashless claim coverage.
          </p>
        </div>
      </section>

      {/* Main Renewal Form */}
      <section className="py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-ev mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Renewal Quote Dispatched!</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Thank you, <strong className="text-foreground">{name}</strong>. The instant renewal policy quote with maximum eligible NCB discount for vehicle{' '}
                  <strong className="text-foreground">{regNumber}</strong> has been shared to{' '}
                  <strong className="text-foreground">{phone}</strong>. Our policy renewal officer will assist you with the one-click online payment link.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center space-y-1 pb-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    Instant Online Policy Renewal
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Zero paperwork required for active and recently expired policies.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <Label>Vehicle Registration Number</Label>
                  <Input
                    required
                    placeholder="KA-01-XX-XXXX"
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label>Current / Previous Insurer</Label>
                    <Select value={prevInsurer} onValueChange={setPrevInsurer}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Tata AIG">Tata AIG General Insurance</SelectItem>
                        <SelectItem value="ICICI Lombard">ICICI Lombard</SelectItem>
                        <SelectItem value="Bajaj Allianz">Bajaj Allianz</SelectItem>
                        <SelectItem value="HDFC ERGO">HDFC ERGO</SelectItem>
                        <SelectItem value="United India">United India Insurance</SelectItem>
                        <SelectItem value="New India Assurance">New India Assurance</SelectItem>
                        <SelectItem value="Other">Other Insurer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label>Existing No Claim Bonus (NCB)</Label>
                    <Select value={ncb} onValueChange={setNcb}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50%">50% (Max Discount)</SelectItem>
                        <SelectItem value="45%">45%</SelectItem>
                        <SelectItem value="35%">35%</SelectItem>
                        <SelectItem value="25%">25%</SelectItem>
                        <SelectItem value="20%">20%</SelectItem>
                        <SelectItem value="0% / Claim Made">0% / Claim Made Last Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label>Your Full Name</Label>
                    <Input
                      required
                      placeholder="Enter policyholder name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label>Mobile Number (for WhatsApp Quote)</Label>
                    <Input
                      required
                      type="tel"
                      placeholder="10-digit number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full font-bold">
                  Calculate Instant Renewal Premium
                </Button>

                <p className="text-[11px] text-center text-muted-foreground">
                  Instant policy issuance • No vehicle inspection required for unexpired policies
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
