import React from 'react';
import { PageTransition } from '../components/common/MotionPrimitives';
import { HeroSection } from '../components/home/HeroSection';
import { AboutPreviewSection } from '../components/home/AboutPreviewSection';
import { ServicesPreviewSection } from '../components/home/ServicesPreviewSection';
import { FeaturedProjectsSection } from '../components/home/FeaturedProjectsSection';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CTASection } from '../components/common/CTASection';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const HomePage: React.FC = () => {
  useDocumentTitle(
    'Architecture, Construction & Interior Design',
    'Atelier Forma — Building Your Vision. Designing Your Future. Architectural planning, residential & commercial construction, interior design, and 3D visualisation.'
  );

  return (
    <PageTransition>
      <HeroSection />
      <AboutPreviewSection />
      <ServicesPreviewSection />
      <FeaturedProjectsSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
};

