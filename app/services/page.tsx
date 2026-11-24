import React from 'react';
import Image from 'next/image';
import { servicesData } from '@/data/services';
import { FaqItem } from '@/lib/types';
import CtaBanner from '@/components/shared/CtaBanner';
import ServicesScrollDeck from '@/components/services/ServicesScrollDeck';
import FaqSection from '@/components/shared/FaqSection';

export const metadata = {
  title: 'Enterprise Services & Capabilities | DataLive Intelligence',
  description: 'Explore our full spectrum of data engineering, Power BI, SQL database, MIS reporting, and RPA bot automation services.',
};

export default function ServicesPage() {
  const serviceFaqItems: FaqItem[] = servicesData.flatMap((service) =>
    service.faqs.map((faq, idx) => ({
      id: `service-faq-${service.slug}-${idx}`,
      category: service.title,
      question: faq.question,
      answer: faq.answer,
      serviceSlug: service.slug,
      tags: [service.slug, service.title.toLowerCase()],
    }))
  );

  return (
    <>
      {/* Header Banner - Full Bleed Hero with Background Image */}
      <section className="bg-[#080B14] text-white py-20 lg:py-28 border-b border-[#EAECF0] relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/service/sql-database/services-hero.webp"
            alt="Services Capabilities Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dual high-contrast gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080B14]/95 via-[#080B14]/85 to-[#080B14]/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-transparent to-black/40 pointer-events-none" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display mt-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] leading-[1.12]">
            Enterprise Data Engineering & Intelligent Automation
          </h1>
          <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-body drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] font-medium">
            Eliminate reporting lag and manual spreadsheet toil. We build robust, scalable data architectures designed specifically for growing mid-market enterprises.
          </p>
        </div>
      </section>

      {/* Services Sticky Stacking Scroll Deck (Reusing Home Page Smooth Animation) */}
      <ServicesScrollDeck />

      {/* Services FAQ Section */}
      <FaqSection
        items={serviceFaqItems}
        title="Frequently Asked Questions Across All Services"
        subtitle="Direct technical answers on ERP data connectors, cloud security, project timelines, and licensing across our 6 enterprise solutions."
        showSearch={true}
        showCategories={true}
        variant="light"
      />

      <CtaBanner />
    </>
  );
}
