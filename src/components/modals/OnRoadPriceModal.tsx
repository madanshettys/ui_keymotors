'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CARS } from '@/data/cars';
import { FINANCE_DEFAULTS } from '@/config/constants';
import { formatInr } from '@/lib/utils';
import { Calculator, CheckCircle2, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

interface OnRoadPriceModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedModelId?: string | null;
  onOpenTestDrive?: (modelId?: string) => void;
}

export function OnRoadPriceModal({
  isOpen,
  onClose,
  preselectedModelId,
  onOpenTestDrive,
}: OnRoadPriceModalProps) {
  const [modelId, setModelId] = useState<string>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedModelId) {
      setModelId(preselectedModelId);
    } else if (CARS.length > 0 && !modelId) {
      setModelId(CARS[0].id);
    }
  }, [preselectedModelId]);

  const car = CARS.find((c) => c.id === modelId) || CARS[0];

  // Calculate Bangalore RTO & On-road price
  const exShowroom = car.priceNum;
  const isEv = car.category === 'EV' || car.fuelType.toLowerCase().includes('electric');

  let rtoTax = 0;
  if (isEv) {
    rtoTax = 0; // 0% in Karnataka
  } else {
    const slab = FINANCE_DEFAULTS.rtoSlabs.find((s) => exShowroom <= s.maxPrice) || FINANCE_DEFAULTS.rtoSlabs[FINANCE_DEFAULTS.rtoSlabs.length - 1];
    rtoTax = Math.round(exShowroom * slab.rate);
  }

  const insurance = Math.round(exShowroom * FINANCE_DEFAULTS.insuranceRate);
  const fastagReg = FINANCE_DEFAULTS.registrationFee + FINANCE_DEFAULTS.fastagTcsMisc;
  const totalOnRoad = exShowroom + rtoTax + insurance + fastagReg;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[calc(100vw-2rem)] sm:max-w-[580px] p-4 sm:p-6 overflow-x-hidden min-w-0">
        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-ev/10 text-ev mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Official Price Quote Sent!
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-foreground">{name}</span>. The detailed official on-road price break-up with active dealer festive discounts for{' '}
              <span className="font-semibold text-primary">{car.name}</span> has been dispatched to{' '}
              <span className="font-semibold text-foreground">{phone}</span> via WhatsApp & SMS.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
              <Button onClick={handleReset} variant="outline" className="w-full sm:w-auto">
                Close
              </Button>
              {onOpenTestDrive && (
                <Button
                  onClick={() => {
                    handleReset();
                    onOpenTestDrive(car.id);
                  }}
                  className="w-full sm:w-auto gap-2"
                >
                  Book Free Test Drive <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        ) : (
          <>
            <DialogHeader className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="border-primary text-primary font-semibold text-xs">
                  Bangalore RTO Compliant
                </Badge>
                {isEv && (
                  <Badge variant="ev" className="gap-1 text-xs">
                    <Zap className="w-3 h-3 fill-current" /> 0% Karnataka Road Tax
                  </Badge>
                )}
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-bold">
                Bangalore On-Road Price Estimator
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm">
                Accurate quotation with RTO life-time tax, comprehensive insurance, and festive savings.
              </DialogDescription>
            </DialogHeader>

            {/* Model Selector */}
            <div className="space-y-1.5 pt-1">
              <Label>Select Car Model</Label>
              <Select value={modelId} onValueChange={setModelId}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CARS.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {c.name} — {c.price} ({c.fuelType})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Breakdown Card */}
            <div className="rounded-xl border border-border bg-muted/40 p-3 sm:p-4 space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between items-center gap-2">
                <span className="text-muted-foreground">Ex-Showroom Price</span>
                <span className="font-semibold text-foreground shrink-0">{formatInr(exShowroom)}</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-muted-foreground flex items-center gap-1.5 min-w-0">
                  <span className="truncate">Karnataka RTO Road Tax</span>
                  {isEv && (
                    <span className="text-[10px] text-ev font-bold uppercase tracking-wider bg-ev/10 px-1.5 py-0.5 rounded shrink-0">
                      Zero Tax
                    </span>
                  )}
                </span>
                <span className={`font-semibold shrink-0 ${isEv ? 'text-ev' : 'text-foreground'}`}>
                  {isEv ? '₹ 0 (100% Tax Free)' : formatInr(rtoTax)}
                </span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-muted-foreground truncate">Comprehensive Insurance (1+3 Yr)</span>
                <span className="font-semibold text-foreground shrink-0">{formatInr(insurance)}</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="text-muted-foreground truncate">Registration, FASTag & Plate Charges</span>
                <span className="font-semibold text-foreground shrink-0">{formatInr(fastagReg)}</span>
              </div>

              <Separator />

              <div className="flex justify-between items-center text-sm sm:text-base pt-1 gap-2">
                <span className="font-bold text-foreground">Est. Total On-Road Price</span>
                <span className="font-extrabold text-primary text-base sm:text-lg shrink-0">
                  {formatInr(totalOnRoad)}
                </span>
              </div>
            </div>

            {/* Lead capture form for exact quote */}
            <form onSubmit={handleSubmit} className="space-y-3 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>Your Name</Label>
                  <Input
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label>WhatsApp / Phone Number</Label>
                  <Input
                    required
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full font-bold shadow-md h-auto py-3 px-4 text-xs sm:text-sm whitespace-normal leading-snug">
                Get Instant WhatsApp Quotation & Dealer Offers
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
