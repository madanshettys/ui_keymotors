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
import { CARS } from '@/data/cars';
import { OUTLETS } from '@/data/outlets';
import { DEALERSHIP } from '@/config/constants';
import { Calendar, CheckCircle2, Shield, MapPin, Sparkles } from 'lucide-react';

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedModelId?: string | null;
}

export function TestDriveModal({
  isOpen,
  onClose,
  preselectedModelId,
}: TestDriveModalProps) {
  const [model, setModel] = useState<string>('');
  const [outlet, setOutlet] = useState<string>('mysore-road');
  const [driveType, setDriveType] = useState<'doorstep' | 'showroom'>('doorstep');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 12:00 PM');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedModelId) {
      setModel(preselectedModelId);
    } else if (CARS.length > 0 && !model) {
      setModel(CARS[0].id);
    }
  }, [preselectedModelId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const selectedCar = CARS.find((c) => c.id === model);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[calc(100vw-2rem)] sm:max-w-[550px] p-4 sm:p-6 overflow-x-hidden min-w-0">
        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-ev/10 text-ev mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Test Drive Confirmed!
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-foreground">{name}</span>. Our senior test drive specialist from{' '}
              <span className="font-semibold text-primary">{OUTLETS.find((o) => o.id === outlet)?.name || DEALERSHIP.name}</span> will contact you at{' '}
              <span className="font-semibold text-foreground">{phone}</span> to coordinate your{' '}
              <span className="font-semibold text-primary">{selectedCar?.name || 'Tata Car'}</span> {driveType === 'doorstep' ? 'doorstep' : 'showroom'} drive.
            </p>
            <div className="pt-4">
              <Button onClick={handleReset} className="w-full sm:w-auto">
                Close & Return
              </Button>
            </div>
          </div>
        ) : (
          <>
            <DialogHeader className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="border-accent text-accent font-semibold text-xs">
                  Free Doorstep Available
                </Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-ev" /> 5-Star Safety
                </span>
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-bold">
                Book Your Tata Test Drive
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm">
                Experience the refinement and safety of new Tata vehicles at your doorstep or nearest Bangalore showroom.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>Select Tata Model</Label>
                  <Select value={model} onValueChange={setModel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a model" />
                    </SelectTrigger>
                    <SelectContent>
                      {CARS.map((car) => (
                        <SelectItem key={car.id} value={car.id}>
                          {car.name} ({car.fuelType})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label>Preferred Location</Label>
                  <Select value={outlet} onValueChange={setOutlet}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Outlet" />
                    </SelectTrigger>
                    <SelectContent>
                      {OUTLETS.map((out) => (
                        <SelectItem key={out.id} value={out.id}>
                          {out.name.replace('Key Motors - ', '')}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Doorstep vs Showroom toggle */}
              <div className="space-y-1.5">
                <Label>Drive Preference</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Button
                    type="button"
                    variant={driveType === 'doorstep' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setDriveType('doorstep')}
                    className="justify-center sm:justify-start gap-2 h-auto py-2.5 px-3 text-xs font-semibold whitespace-normal text-left"
                  >
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>Free Doorstep Test Drive</span>
                  </Button>
                  <Button
                    type="button"
                    variant={driveType === 'showroom' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setDriveType('showroom')}
                    className="justify-center sm:justify-start gap-2 h-auto py-2.5 px-3 text-xs font-semibold whitespace-normal text-left"
                  >
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>Showroom Experience</span>
                  </Button>
                </div>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>Preferred Date</Label>
                  <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label>Preferred Time Slot</Label>
                  <Select value={timeSlot} onValueChange={setTimeSlot}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10:00 AM - 12:00 PM">Morning (10 AM - 12 PM)</SelectItem>
                      <SelectItem value="12:00 PM - 03:00 PM">Afternoon (12 PM - 3 PM)</SelectItem>
                      <SelectItem value="03:00 PM - 06:00 PM">Evening (3 PM - 6 PM)</SelectItem>
                      <SelectItem value="06:00 PM - 08:00 PM">Late Evening (6 PM - 8 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {driveType === 'doorstep' && (
                <div className="space-y-1.5">
                  <Label>Doorstep Address in Bangalore</Label>
                  <Input
                    placeholder="House/Office address, Area name (e.g. Indiranagar, HSR)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              )}

              <Button type="submit" size="lg" className="w-full mt-2 font-bold shadow-md h-auto py-3 px-4 text-xs sm:text-sm whitespace-normal leading-snug">
                Confirm Free Test Drive Booking
              </Button>

              <p className="text-[11px] text-center text-muted-foreground">
                No booking fee required • Free doorstep vehicle sanitation • Transparent pricing
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
