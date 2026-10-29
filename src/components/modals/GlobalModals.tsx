'use client';

import React from 'react';
import { useModals } from '@/context/ModalContext';
import { TestDriveModal } from './TestDriveModal';
import { ServiceBookingModal } from './ServiceBookingModal';
import { OnRoadPriceModal } from './OnRoadPriceModal';
import { CarComparisonModal } from './CarComparisonModal';
import { Button } from '@/components/ui/button';
import { Scale, X } from 'lucide-react';

export function GlobalModals() {
  const {
    testDriveOpen,
    selectedModelForTestDrive,
    closeTestDrive,
    serviceOpen,
    closeService,
    priceOpen,
    selectedModelForPrice,
    closePrice,
    openTestDrive,
    comparedCars,
    comparisonOpen,
    openComparison,
    closeComparison,
    clearCompare,
  } = useModals();

  return (
    <>
      <TestDriveModal
        isOpen={testDriveOpen}
        onClose={closeTestDrive}
        preselectedModelId={selectedModelForTestDrive}
      />

      <ServiceBookingModal
        isOpen={serviceOpen}
        onClose={closeService}
      />

      <OnRoadPriceModal
        isOpen={priceOpen}
        onClose={closePrice}
        preselectedModelId={selectedModelForPrice}
        onOpenTestDrive={(id) => openTestDrive(id)}
      />

      <CarComparisonModal
        isOpen={comparisonOpen}
        onClose={closeComparison}
        comparedCars={comparedCars}
        onOpenTestDrive={(id) => openTestDrive(id)}
      />

      {/* Floating Compare Bar */}
      {comparedCars.length > 0 && (
        <aside 
          aria-label="Vehicle comparison bar"
          className="fixed bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-card/95 text-card-foreground backdrop-blur-md px-5 py-3 rounded-2xl shadow-2xl border border-border flex items-center gap-4 animate-in slide-in-from-bottom-4 duration-300"
        >
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-accent" />
            <span className="text-xs font-bold">
              Comparing {comparedCars.length} {comparedCars.length === 1 ? 'Car' : 'Cars'}:
            </span>
            <span className="text-xs text-muted-foreground font-semibold truncate max-w-[200px]">
              {comparedCars.map((c) => c.name.replace('Tata ', '')).join(' vs ')}
            </span>
          </div>

          <Button
            size="sm"
            onClick={openComparison}
            className="text-xs font-bold"
          >
            Open Compare
          </Button>

          <button
            onClick={clearCompare}
            className="text-xs text-muted-foreground hover:text-foreground p-1"
            title="Clear comparison"
          >
            <X className="w-4 h-4" />
          </button>
        </aside>
      )}
    </>
  );
}
