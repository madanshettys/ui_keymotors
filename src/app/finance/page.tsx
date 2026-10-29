'use client';

import React, { useState } from 'react';
import { EmiCalculator } from '@/components/home/EmiCalculator';
import { DEALERSHIP, FINANCE_DEFAULTS } from '@/config/constants';
import { CARS } from '@/data/cars';
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
import { ShieldCheck, CheckCircle2, Building2, CreditCard, FileText, Zap } from 'lucide-react';

export default function FinancePage() {
  const [carModel, setCarModel] = useState('curvv');
  const [loanAmount, setLoanAmount] = useState('1000000');
  const [tenure, setTenure] = useState('60');
  const [employmentType, setEmploymentType] = useState('Salaried');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const partnerBanks = [
    'Tata Motors Finance',
    'State Bank of India (SBI)',
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'Kotak Mahindra Bank',
    'Bank of Baroda',
    'Canara Bank',
    'Union Bank of India',
    'Punjab National Bank',
    'IndusInd Bank',
    'Yes Bank',
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <Badge variant="outline" className="border-accent text-accent-foreground bg-accent/20 font-bold px-3 py-1 text-xs gap-1">
            <Building2 className="w-3.5 h-3.5" /> 15+ Partner Nationalized & Private Banks
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Tata Motors Car Finance & Bangalore Loan Center
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Fastest loan sanction in Bangalore with minimum documentation, up to 100% on-road funding, and interest rates starting from 7.95% p.a.
          </p>
        </div>
      </section>

      {/* Interactive EMI Calculator Section */}
      <EmiCalculator />

      {/* Partner Banks Grid */}
      <section className="py-16 bg-muted/20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Our Banking & Financing Partners
            </h2>
            <p className="text-sm text-muted-foreground">
              Enjoy spot digital approvals with zero processing fee offers on select models.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {partnerBanks.map((bank, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-border bg-card text-center font-bold text-xs sm:text-sm text-foreground shadow-sm flex items-center justify-center h-16 hover:border-primary transition-colors"
              >
                {bank}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Qualification Application Form */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-10 shadow-xl">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-ev mx-auto" />
                <h3 className="text-xl font-bold text-foreground">Pre-Approval Request Sent!</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-md mx-auto">
                  Thank you, <strong className="text-foreground">{name}</strong>. Our finance manager will coordinate with Tata Motors Finance / preferred bank and share your maximum approved loan amount for <strong className="text-foreground">{CARS.find((c) => c.id === carModel)?.name}</strong> on <strong className="text-foreground">{phone}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center space-y-1 pb-2">
                  <Badge variant="outline" className="border-accent text-accent font-semibold">
                    Spot Eligibility Check
                  </Badge>
                  <h3 className="text-2xl font-bold text-foreground">
                    Check Your Loan Eligibility in 2 Minutes
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Zero impact on CIBIL score. Quick digital verification.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label>Desired Tata Car</Label>
                    <Select value={carModel} onValueChange={setCarModel}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {CARS.map((c) => (
                          <SelectItem key={c.id} value={c.id}>
                            {c.name} ({c.price})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label>Employment Type</Label>
                    <Select value={employmentType} onValueChange={setEmploymentType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Salaried">Salaried (Private / Govt)</SelectItem>
                        <SelectItem value="Self-Employed Professional">Doctor / CA / Lawyer</SelectItem>
                        <SelectItem value="Business Owner">Business Owner / Partner</SelectItem>
                        <SelectItem value="Farmer / Agriculture">Agricultural Income</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label>Required Loan Amount (₹)</Label>
                    <Input
                      placeholder="e.g. 1000000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label>Preferred Tenure</Label>
                    <Select value={tenure} onValueChange={setTenure}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="36">3 Years (36 Months)</SelectItem>
                        <SelectItem value="48">4 Years (48 Months)</SelectItem>
                        <SelectItem value="60">5 Years (60 Months)</SelectItem>
                        <SelectItem value="84">7 Years (84 Months)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label>Your Full Name</Label>
                    <Input
                      required
                      placeholder="Enter full legal name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label>Mobile Number</Label>
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
                  Check Pre-Approved Loan Limits
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
