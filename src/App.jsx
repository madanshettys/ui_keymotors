import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import QuickActionStrip from './components/QuickActionStrip';
import AboutSection from './components/AboutSection';
import ModelsShowcase from './components/ModelsShowcase';
import EmiCalculator from './components/EmiCalculator';
import EvSavingsCalculator from './components/EvSavingsCalculator';
import OffersSection from './components/OffersSection';
import OutletsSection from './components/OutletsSection';
import TestimonialsSection from './components/TestimonialsSection';
import GallerySection from './components/GallerySection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

import TestDriveModal from './components/TestDriveModal';
import ServiceBookingModal from './components/ServiceBookingModal';
import OnRoadPriceModal from './components/OnRoadPriceModal';
import CarDetailModal from './components/CarDetailModal';
import CarComparisonModal from './components/CarComparisonModal';
import { Scale, Zap, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [testDriveOpen, setTestDriveOpen] = useState(false);
  const [selectedModelForTestDrive, setSelectedModelForTestDrive] = useState(null);

  const [serviceOpen, setServiceOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [selectedModelForPrice, setSelectedModelForPrice] = useState(null);

  const [detailCarId, setDetailCarId] = useState(null);

  const [comparedCars, setComparedCars] = useState([]);
  const [comparisonOpen, setComparisonOpen] = useState(false);

  // Handlers
  const handleOpenTestDrive = (modelId = null) => {
    setSelectedModelForTestDrive(modelId);
    setTestDriveOpen(true);
  };

  const handleOpenPrice = (modelId = null) => {
    setSelectedModelForPrice(modelId);
    setPriceOpen(true);
  };

  const handleSelectModel = (modelId) => {
    setDetailCarId(modelId);
  };

  const handleToggleCompare = (car) => {
    const exists = comparedCars.find(c => c.id === car.id);
    if (exists) {
      setComparedCars(comparedCars.filter(c => c.id !== car.id));
    } else {
      if (comparedCars.length >= 2) {
        setComparedCars([comparedCars[1], car]);
      } else {
        setComparedCars([...comparedCars, car]);
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Global Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
          else scrollToSection(tab);
        }}
        onOpenTestDrive={() => handleOpenTestDrive(null)}
        onOpenService={() => setServiceOpen(true)}
        onOpenPrice={() => handleOpenPrice(null)}
        onSelectModel={handleSelectModel}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* Hero Slider */}
        <HeroSlider
          onOpenTestDrive={handleOpenTestDrive}
          onSelectModel={handleSelectModel}
          onOpenPrice={handleOpenPrice}
        />

        {/* Quick Action Strip */}
        <QuickActionStrip
          onOpenTestDrive={() => handleOpenTestDrive(null)}
          onOpenService={() => setServiceOpen(true)}
          onOpenPrice={() => handleOpenPrice(null)}
          onGoOutlets={() => scrollToSection('outlets')}
          onOpenEmi={() => scrollToSection('finance')}
        />

        {/* About Key Motors Section */}
        <AboutSection
          onOpenTestDrive={() => handleOpenTestDrive(null)}
          onGoOutlets={() => scrollToSection('outlets')}
        />

        {/* All Tata Models Showcase */}
        <ModelsShowcase
          onSelectModel={handleSelectModel}
          onOpenTestDrive={handleOpenTestDrive}
          onToggleCompare={handleToggleCompare}
          comparedCars={comparedCars}
        />

        {/* Interactive Tata EV vs Petrol Savings Calculator */}
        <EvSavingsCalculator
          onSelectModel={handleSelectModel}
          onOpenTestDrive={handleOpenTestDrive}
        />

        {/* Interactive Car Loan & Bangalore RTO EMI Calculator */}
        <EmiCalculator
          onOpenTestDrive={handleOpenTestDrive}
        />

        {/* Special Festive Offers & Assured Exchange */}
        <OffersSection
          onOpenPrice={() => handleOpenPrice(null)}
          onOpenTestDrive={() => handleOpenTestDrive(null)}
        />

        {/* Bangalore Outlets & Showrooms Explorer */}
        <OutletsSection
          onOpenTestDrive={handleOpenTestDrive}
          onOpenService={() => setServiceOpen(true)}
        />

        {/* Verified Customer Testimonials */}
        <TestimonialsSection />

        {/* Celebrations & Delivery Gallery */}
        <GallerySection />

        {/* Interactive FAQs */}
        <FaqSection />
      </main>

      {/* Floating Compare Bar (when user has selected 1 or more cars) */}
      {comparedCars.length > 0 && (
        <div className="fixed bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 text-white backdrop-blur-md px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-4 animate-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-bold">
              Comparing {comparedCars.length} {comparedCars.length === 1 ? 'Car' : 'Cars'}:
            </span>
            <span className="text-xs text-blue-300 font-semibold truncate max-w-[200px]">
              {comparedCars.map(c => c.name.replace('Tata ', '')).join(' vs ')}
            </span>
          </div>

          <button
            onClick={() => setComparisonOpen(true)}
            className="bg-km-blue hover:bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow"
          >
            Open Compare
          </button>

          <button
            onClick={() => setComparedCars([])}
            className="text-xs text-slate-400 hover:text-white"
          >
            Clear
          </button>
        </div>
      )}

      {/* Modals */}
      <TestDriveModal
        isOpen={testDriveOpen}
        onClose={() => setTestDriveOpen(false)}
        preselectedModelId={selectedModelForTestDrive}
      />

      <ServiceBookingModal
        isOpen={serviceOpen}
        onClose={() => setServiceOpen(false)}
      />

      <OnRoadPriceModal
        isOpen={priceOpen}
        onClose={() => setPriceOpen(false)}
        preselectedModelId={selectedModelForPrice}
        onOpenTestDrive={handleOpenTestDrive}
      />

      <CarDetailModal
        carId={detailCarId}
        onClose={() => setDetailCarId(null)}
        onOpenTestDrive={handleOpenTestDrive}
      />

      <CarComparisonModal
        isOpen={comparisonOpen}
        onClose={() => setComparisonOpen(false)}
        comparedCars={comparedCars}
        onOpenTestDrive={handleOpenTestDrive}
      />

      {/* Footer */}
      <Footer
        onOpenTestDrive={() => handleOpenTestDrive(null)}
        onOpenService={() => setServiceOpen(true)}
        onSelectModel={handleSelectModel}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
          else scrollToSection(tab);
        }}
      />

      {/* Floating Action Buttons */}
      <FloatingActions
        onOpenTestDrive={() => handleOpenTestDrive(null)}
        onOpenService={() => setServiceOpen(true)}
        onOpenPrice={() => handleOpenPrice(null)}
      />
    </div>
  );
}

