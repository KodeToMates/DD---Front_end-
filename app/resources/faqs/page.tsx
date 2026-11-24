import React from 'react';
import { Metadata } from 'next';
import FaqSection from '@/components/shared/FaqSection';
import CtaBanner from '@/components/shared/CtaBanner';
import { Sparkles, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQs) | DataLive Intelligence',
  description:
    'Clear answers regarding data security, pricing models, deployment timelines, and Power BI & ERP compatibility.',
};

export default function FaqsPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-white text-[#101828] py-16 lg:py-24 border-b border-[#EAECF0] relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-subtle-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0369A1] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" /> 100% Direct Answers & Clarity
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] font-display mt-2 leading-[1.12]">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#475467] mt-4 leading-relaxed font-body">
            Everything you need to know about our engagement models, data security protocols, integration methods, and rollout velocity.
          </p>
        </div>
      </section>

      {/* Main Interactive FAQ Section powered completely by faqs.json */}
      <FaqSection
        title="Explore Frequently Asked Questions"
        subtitle="Search by keywords or filter by category to find immediate answers to common technical, financial, and deployment questions."
        showSearch={true}
        showCategories={true}
        showContactPrompt={true}
        variant="light"
      />

      {/* Creative Common CTA Banner */}
      <CtaBanner
        badge="Direct Architecture Audit"
        title="Have a Custom Architecture Question?"
        highlightText="Architecture Question"
        subhead="Chat directly with our Principal Data Consultant on WhatsApp or schedule a free 30-minute discovery call to review your company data sources."
      />
    </>
  );
}
