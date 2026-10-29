'use client';

import React, { useState } from 'react';
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
import { OUTLETS } from '@/data/outlets';
import { SERVICE_TYPES } from '@/data/services';
import { DEALERSHIP } from '@/config/constants';
import { Wrench, CheckCircle2, Truck, Clock } from 'lucide-react';

interface ServiceBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceBookingModal({ isOpen, onClose }: ServiceBookingModalProps) {
  const [serviceType, setServiceType] = useState('periodic');
  const [outlet, setOutlet] = useState('mysore-road');
  const [pickupDrop, setPickupDrop] = useState(true);
  const [carModel, setCarModel] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceDate, setServiceDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const serviceCenters = OUTLETS.filter((o) => o.category === 'service' || o.category === 'both');

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[calc(100vw-2rem)] sm:max-w-[550px] p-4 sm:p-6 overflow-x-hidden min-w-0 grid-cols-1">
        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-ev/10 text-ev mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Service Appointment Scheduled!
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-foreground">{name}</span>. Your service booking for vehicle{' '}
              <span className="font-semibold text-primary">{regNumber || carModel || 'Tata Vehicle'}</span> at our{' '}
              <span className="font-semibold text-primary">{OUTLETS.find((o) => o.id === outlet)?.name || DEALERSHIP.name}</span> service center has been logged. Our service advisor will call you at{' '}
              <span className="font-semibold text-foreground">{phone}</span> to confirm bay allocation and pickup logistics.
            </p>
            <div className="pt-4">
              <Button onClick={handleReset} className="w-full sm:w-auto">
                Done & Return
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="border-accent text-accent font-semibold text-xs">
                  Authorized Tata Workshop
                </Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-accent" /> 90-Min Express Bays
                </span>
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-bold">
                Book Tata Certified Car Service
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm">
                State-of-the-art diagnostic bays, genuine OEM spare parts, and computerized paint booths across Bangalore.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2 min-w-0 w-full overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 min-w-0 w-full">
                <div className="space-y-1.5 min-w-0 w-full">
                  <Label>Service Type</Label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger className="w-full min-w-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_TYPES.map((st) => (
                        <SelectItem key={st.id} value={st.id}>
                          {st.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5 min-w-0 w-full">
                  <Label>Preferred Workshop</Label>
                  <Select value={outlet} onValueChange={setOutlet}>
                    <SelectTrigger className="w-full min-w-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceCenters.map((sc) => (
                        <SelectItem key={sc.id} value={sc.id}>
                          {sc.name.replace('Key Motors - ', '')}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 min-w-0 w-full">
                <div className="space-y-1.5 min-w-0 w-full">
                  <Label>Car Model / Variant</Label>
                  <Input
                    required
                    placeholder="e.g. Nexon EV, Harrier, Punch"
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    className="w-full min-w-0"
                  />
                </div>

                <div className="space-y-1.5 min-w-0 w-full">
                  <Label>Vehicle Registration Number</Label>
                  <Input
                    placeholder="KA-05-XX-XXXX"
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                    className="w-full min-w-0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 min-w-0 w-full">
                <div className="space-y-1.5 min-w-0 w-full">
                  <Label>Your Name</Label>
                  <Input
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full min-w-0"
                  />
                </div>

                <div className="space-y-1.5 min-w-0 w-full">
                  <Label>Contact Phone Number</Label>
                  <Input
                    required
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full min-w-0"
                  />
                </div>
              </div>

              <div className="space-y-1.5 min-w-0 w-full">
                <Label>Preferred Service Date</Label>
                <Input
                  type="date"
                  value={serviceDate}
                  onChange={(e) => setServiceDate(e.target.value)}
                  className="w-full min-w-0"
                />
              </div>

              {/* Doorstep Valet Pickup Toggle Card */}
              <div className="space-y-1.5 min-w-0 w-full">
                <Label>Valet Vehicle Pick-up & Drop</Label>
                <button
                  type="button"
                  onClick={() => setPickupDrop(!pickupDrop)}
                  className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl border transition-all text-left min-w-0 overflow-hidden ${
                    pickupDrop
                      ? 'border-accent bg-accent/10 text-foreground'
                      : 'border-border bg-card text-muted-foreground hover:border-accent/40'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        pickupDrop ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <Truck className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-bold text-foreground truncate">
                        {pickupDrop ? '✓ Free Doorstep Pick-up & Drop' : 'Self Drop at Workshop'}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-muted-foreground truncate">
                        {pickupDrop
                          ? 'Complimentary valet driver pickup across Bengaluru'
                          : 'Click to add free doorstep pick-up & drop'}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ml-2 ${
                      pickupDrop ? 'border-accent bg-accent text-white' : 'border-border'
                    }`}
                  >
                    {pickupDrop && <CheckCircle2 className="w-3.5 h-3.5 fill-current" />}
                  </div>
                </button>
              </div>

              <Button type="submit" size="lg" className="w-full mt-2 font-bold shadow-md h-auto py-3 px-4 text-xs sm:text-sm whitespace-normal leading-snug min-w-0">
                Confirm Service Appointment
              </Button>

              <p className="text-[11px] text-center text-muted-foreground break-words">
                Genuine Tata Motors parts • Transparent computerized estimates • Cashless insurance
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
