import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import MetricsBar from '@/components/home/MetricsBar';
import SkillsSection from '@/components/home/SkillsSection';
import ProblemSolutionGrid from '@/components/home/ProblemSolutionGrid';
import Interactive3DCarousel from '@/components/home/Interactive3DCarousel';
import RoiCalculator from '@/components/home/RoiCalculator';
import ServicesMatrix from '@/components/home/ServicesMatrix';
import FeaturedCaseStudy from '@/components/home/FeaturedCaseStudy';
import Testimonials from '@/components/home/Testimonials';
import CtaBanner from '@/components/shared/CtaBanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <MetricsBar /> */}
      <SkillsSection />
      <ProblemSolutionGrid />
      <Interactive3DCarousel />
      <RoiCalculator />
      <ServicesMatrix />
      {/* <FeaturedCaseStudy /> */}
      {/* <Testimonials /> */}
      <CtaBanner />
    </>
  );
}
