import { HeroSlider } from '@/components/home/HeroSlider';
import { QuickActionStrip } from '@/components/home/QuickActionStrip';
import { AboutTeaser } from '@/components/home/AboutTeaser';
import { ModelsShowcase } from '@/components/home/ModelsShowcase';
import { EvSavingsCalculator } from '@/components/home/EvSavingsCalculator';
import { EmiCalculator } from '@/components/home/EmiCalculator';
import { OffersSection } from '@/components/home/OffersSection';
import { OutletsSection } from '@/components/home/OutletsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { GallerySection } from '@/components/home/GallerySection';
import { FaqSection } from '@/components/home/FaqSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSlider />
      <QuickActionStrip />
      <AboutTeaser />
      <ModelsShowcase />
      <EvSavingsCalculator />
      <EmiCalculator />
      <OffersSection />
      <OutletsSection />
      <TestimonialsSection />
      <GallerySection />
      <FaqSection />
    </div>
  );
}
