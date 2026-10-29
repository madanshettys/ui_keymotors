'use client';

import React from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { Car } from '@/types';
import { Shield, Zap, Check, ArrowRight } from 'lucide-react';

interface CarComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  comparedCars: Car[];
  onOpenTestDrive?: (modelId?: string) => void;
}

export function CarComparisonModal({
  isOpen,
  onClose,
  comparedCars,
  onOpenTestDrive,
}: CarComparisonModalProps) {
  if (comparedCars.length === 0) return null;

  const car1 = comparedCars[0];
  const car2 = comparedCars[1] || null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[calc(100vw-2rem)] sm:max-w-[850px] p-4 sm:p-6 max-h-[90vh] overflow-y-auto overflow-x-hidden min-w-0">
        <DialogHeader className="space-y-1.5">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-accent text-accent font-semibold text-xs">
              Vehicle Comparison
            </Badge>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-bold">
            {car2 ? `${car1.name} vs ${car2.name}` : `Comparing ${car1.name}`}
          </DialogTitle>
        </DialogHeader>

        {/* Visual Heads-Up */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 pt-2">
          {/* Car 1 */}
          <div className="rounded-xl border border-border bg-muted/30 p-2.5 sm:p-4 text-center space-y-2 sm:space-y-3">
            <div className="relative h-20 sm:h-28 w-full flex items-center justify-center">
              <Image
                src={car1.image}
                alt={car1.name}
                width={200}
                height={120}
                className="max-h-20 sm:max-h-28 w-auto object-contain hover:scale-105 transition-transform"
              />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-base text-foreground truncate">{car1.name}</h4>
              <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{car1.bodyType} • {car1.fuelType}</p>
              <p className="text-xs sm:text-base font-extrabold text-primary mt-1">{car1.price}</p>
            </div>
            {onOpenTestDrive && (
              <Button
                size="sm"
                className="w-full text-[11px] sm:text-xs font-semibold h-auto py-2 px-2 whitespace-normal leading-tight"
                onClick={() => {
                  onClose();
                  onOpenTestDrive(car1.id);
                }}
              >
                Test Drive {car1.name.replace('Tata ', '')}
              </Button>
            )}
          </div>

          {/* Car 2 or Empty State */}
          {car2 ? (
            <div className="rounded-xl border border-border bg-muted/30 p-2.5 sm:p-4 text-center space-y-2 sm:space-y-3">
              <div className="relative h-20 sm:h-28 w-full flex items-center justify-center">
                <Image
                  src={car2.image}
                  alt={car2.name}
                  width={200}
                  height={120}
                  className="max-h-20 sm:max-h-28 w-auto object-contain hover:scale-105 transition-transform"
                />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-base text-foreground truncate">{car2.name}</h4>
                <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{car2.bodyType} • {car2.fuelType}</p>
                <p className="text-xs sm:text-base font-extrabold text-primary mt-1">{car2.price}</p>
              </div>
              {onOpenTestDrive && (
                <Button
                  size="sm"
                  className="w-full text-[11px] sm:text-xs font-semibold h-auto py-2 px-2 whitespace-normal leading-tight"
                  onClick={() => {
                    onClose();
                    onOpenTestDrive(car2.id);
                  }}
                >
                  Test Drive {car2.name.replace('Tata ', '')}
                </Button>
              )}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-border flex flex-col items-center justify-center p-4 sm:p-6 text-center text-muted-foreground">
              <p className="text-xs sm:text-sm font-semibold">Select 1 more car to compare</p>
              <p className="text-[11px] sm:text-xs mt-1">Click &quot;Compare&quot; on any car card.</p>
            </div>
          )}
        </div>

        {/* Comparison Specs Table */}
        <div className="rounded-xl border border-border overflow-x-auto text-xs sm:text-sm mt-4">
          <div className="bg-muted px-3 sm:px-4 py-2 font-bold text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground min-w-[280px]">
            Key Specifications & Powertrain
          </div>
          <div className="divide-y divide-border min-w-[280px]">
            {[
              { label: 'Safety Rating', v1: car1.safety, v2: car2?.safety },
              { label: 'Power', v1: car1.power, v2: car2?.power },
              { label: 'Torque', v1: car1.torque, v2: car2?.torque },
              { label: 'Range / Mileage', v1: car1.range || 'N/A', v2: car2?.range || 'N/A' },
              { label: 'Seating Capacity', v1: car1.seating, v2: car2?.seating },
              { label: 'Boot Space', v1: car1.bootSpace, v2: car2?.bootSpace },
              { label: 'Transmission', v1: car1.transmission, v2: car2?.transmission },
              { label: 'Battery / Engine', v1: car1.battery || car1.engine || 'N/A', v2: car2?.battery || car2?.engine || 'N/A' },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 px-3 sm:px-4 py-2 sm:py-2.5 items-center gap-2">
                <span className="font-medium text-muted-foreground text-[11px] sm:text-xs break-words">{row.label}</span>
                <span className="font-semibold text-foreground text-[11px] sm:text-sm break-words">{row.v1}</span>
                <span className="font-semibold text-foreground text-[11px] sm:text-sm break-words">{row.v2 || '—'}</span>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
