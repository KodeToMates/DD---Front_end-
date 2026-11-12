import React from 'react';
import Link from 'next/link';
import { faqsData } from '@/data/faqs';
import { HelpCircle, ChevronRight, MessageSquare, Sparkles } from 'lucide-react';
import CtaBanner from '@/components/shared/CtaBanner';

export const metadata = {
  title: 'Frequently Asked Questions (FAQs) | DataLive Intelligence',
  description: 'Clear answers regarding data security, pricing models, deployment timelines, and Power BI & ERP compatibility.',
};

export default function FaqsPage() {
  const categories = Array.from(new Set(faqsData.map((f) => f.category)));

  return (
    <>
      <section className="bg-white text-[#101828] py-16 lg:py-24 border-b border-[#EAECF0] relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-subtle-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0369A1] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Direct Answers
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] font-display mt-2">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#475467] mt-4 leading-relaxed font-body">
            Everything you need to know about our engagement models, data security protocols, integration methods, and rollout velocity.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {categories.map((cat) => {
            const items = faqsData.filter((f) => f.category === cat);
            return (
              <div key={cat} className="space-y-4">
                <h2 className="text-lg font-bold font-display uppercase tracking-wider text-[#0284C7] pb-2 border-b border-[#EAECF0]">
                  {cat}
                </h2>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-6 rounded-2xl bg-white border border-[#BAE6FD] hover:border-[#0284C7] shadow-xs transition-colors space-y-2"
                    >
                      <h3 className="text-base sm:text-lg font-bold font-display text-[#101828] flex items-start gap-2.5">
                        <HelpCircle className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                        {item.question}
                      </h3>
                      <p className="text-sm text-[#475467] leading-relaxed pl-7.5 font-body">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner
        title="Have a Custom Architecture Question?"
        subhead="Chat directly with our Principal Data Consultant on WhatsApp or schedule a free 30-minute discovery call."
      />
    </>
  );
}
