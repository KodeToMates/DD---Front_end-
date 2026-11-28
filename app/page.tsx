import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TechStackCarousel from '@/components/home/TechStackCarousel';
import MetricsBar from '@/components/home/MetricsBar';
import SkillsSection from '@/components/home/SkillsSection';
import ProblemSolutionGrid from '@/components/home/ProblemSolutionGrid';
import Interactive3DCarousel from '@/components/home/Interactive3DCarousel';
import RoiCalculator from '@/components/home/RoiCalculator';
import ServicesMatrix from '@/components/home/ServicesMatrix';
import KodeToMatesPartnerSection from '@/components/home/KodeToMatesPartnerSection';
import FeaturedCaseStudy from '@/components/home/FeaturedCaseStudy';
import Testimonials from '@/components/home/Testimonials';
import FaqSection from '@/components/shared/FaqSection';
import CtaBanner from '@/components/shared/CtaBanner';
import HomeContactSection from '@/components/home/HomeContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStackCarousel />
      {/* <MetricsBar /> */}
      <SkillsSection />
      <ProblemSolutionGrid />
      <Interactive3DCarousel />
      <CtaBanner
        title="Ready to Eliminate Spreadsheet Chaos & See Your Business Live?"
        highlightText="Spreadsheet Chaos"
        subhead="Book a zero-cost 30-minute discovery call with our Principal BI Architect. We review your current bottlenecks and outline a concrete 3-step automation roadmap."
      />
      {/* <RoiCalculator /> */}
      <ServicesMatrix />
      <KodeToMatesPartnerSection />
      {/* <FeaturedCaseStudy /> */}
      {/* <Testimonials /> */}
      <FaqSection
        featuredOnly={true}
        limit={6}
        title="Frequently Asked Questions"
        subtitle="Direct answers on service selection, report automation, system integrations, project timelines, security arrangements, and file ownership."
        showSearch={false}
        showCategories={false}
        variant="light"
      />
      <CtaBanner
        title="Ready to Eliminate Spreadsheet Chaos & See Your Business Live?"
        highlightText="Spreadsheet Chaos"
        subhead="Book a zero-cost 30-minute discovery call with our Principal BI Architect. We review your current bottlenecks and outline a concrete 3-step automation roadmap."
      />
      <HomeContactSection />
    </>
  );
}
