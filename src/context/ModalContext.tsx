'use client';

import React, { createContext, useContext, useState } from 'react';
import type { Car } from '@/types';

interface ModalContextType {
  testDriveOpen: boolean;
  selectedModelForTestDrive: string | null;
  openTestDrive: (modelId?: string | null) => void;
  closeTestDrive: () => void;

  serviceOpen: boolean;
  openService: () => void;
  closeService: () => void;

  priceOpen: boolean;
  selectedModelForPrice: string | null;
  openPrice: (modelId?: string | null) => void;
  closePrice: () => void;

  comparedCars: Car[];
  comparisonOpen: boolean;
  toggleCompare: (car: Car) => void;
  clearCompare: () => void;
  openComparison: () => void;
  closeComparison: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [testDriveOpen, setTestDriveOpen] = useState(false);
  const [selectedModelForTestDrive, setSelectedModelForTestDrive] = useState<string | null>(null);

  const [serviceOpen, setServiceOpen] = useState(false);

  const [priceOpen, setPriceOpen] = useState(false);
  const [selectedModelForPrice, setSelectedModelForPrice] = useState<string | null>(null);

  const [comparedCars, setComparedCars] = useState<Car[]>([]);
  const [comparisonOpen, setComparisonOpen] = useState(false);

  const openTestDrive = (modelId: string | null = null) => {
    setSelectedModelForTestDrive(modelId);
    setTestDriveOpen(true);
  };

  const closeTestDrive = () => {
    setTestDriveOpen(false);
  };

  const openService = () => setServiceOpen(true);
  const closeService = () => setServiceOpen(false);

  const openPrice = (modelId: string | null = null) => {
    setSelectedModelForPrice(modelId);
    setPriceOpen(true);
  };

  const closePrice = () => setPriceOpen(false);

  const toggleCompare = (car: Car) => {
    setComparedCars((prev) => {
      const exists = prev.find((c) => c.id === car.id);
      if (exists) {
        return prev.filter((c) => c.id !== car.id);
      }
      if (prev.length >= 2) {
        return [prev[1], car];
      }
      return [...prev, car];
    });
  };

  const clearCompare = () => setComparedCars([]);
  const openComparison = () => setComparisonOpen(true);
  const closeComparison = () => setComparisonOpen(false);

  return (
    <ModalContext.Provider
      value={{
        testDriveOpen,
        selectedModelForTestDrive,
        openTestDrive,
        closeTestDrive,
        serviceOpen,
        openService,
        closeService,
        priceOpen,
        selectedModelForPrice,
        openPrice,
        closePrice,
        comparedCars,
        comparisonOpen,
        toggleCompare,
        clearCompare,
        openComparison,
        closeComparison,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModals() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModals must be used within a ModalProvider');
  }
  return context;
}
