import React from 'react';
import Link from 'next/link';
import { caseStudiesData } from '@/data/case-studies';
import { Award, ArrowRight, Quote, TrendingUp, CheckCircle2, Sparkles } from 'lucide-react';
import CtaBanner from '@/components/shared/CtaBanner';

export const metadata = {
  title: 'Client Case Studies & ROI Benchmarks | DataLive Intelligence',
  description: 'Verified real-world case studies demonstrating quantified ROI, hours saved, and data transformation across Manufacturing, Finance, Retail, and Logistics.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-white text-[#101828] py-16 lg:py-24 border-b border-[#EAECF0] relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-subtle-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0369A1] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Verified Transformations
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] font-display mt-2">
            Real Proof. Real Numbers. Real ROI.
          </h1>
          <p className="text-base sm:text-lg text-[#475467] mt-4 leading-relaxed font-body">
            Discover how mid-market leaders eliminated hundreds of hours of manual reporting and recovered lakhs in annual operating expenses.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {caseStudiesData.map((study) => (
            <div
              key={study.id}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-[#BAE6FD] shadow-xs hover:border-[#0284C7] transition-all grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7]">
                    {study.clientIndustry.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#F2F4F7] text-[#475467]">
                    {study.serviceUsed.replace('-', ' ').toUpperCase()}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#101828] tracking-tight leading-tight">
                  {study.title}
                </h2>

                <div className="space-y-3 text-sm text-[#475467] leading-relaxed font-body">
                  <p>
                    <strong className="text-[#101828]">The Challenge:</strong> {study.challenge}
                  </p>
                  <p>
                    <strong className="text-[#101828]">The DataLive Solution:</strong> {study.solution}
                  </p>
                </div>

                {/* Quote */}
                <div className="p-5 rounded-2xl bg-[#F9FAFB] border border-[#BAE6FD] relative">
                  <Quote className="w-5 h-5 text-[#0284C7] mb-2 opacity-80" />
                  <p className="text-xs sm:text-sm italic text-[#344054] leading-relaxed font-body">
                    &ldquo;{study.quote.text}&rdquo;
                  </p>
                  <div className="mt-2 text-xs">
                    <strong className="text-[#101828] block font-display">{study.quote.author}</strong>
                    <span className="text-[#667085]">{study.quote.role}, {study.quote.company}</span>
                  </div>
                </div>
              </div>

              {/* Quantified Results Grid */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {study.quantifiedResults.map((res, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-[#F9FAFB] border border-[#BAE6FD] flex flex-col justify-between">
                    <div>
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#0284C7] font-mono tracking-tight block">
                        {res.metric}
                      </span>
                      <span className="text-xs font-bold text-[#101828] block mt-0.5 font-display">
                        {res.value}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#667085] mt-3 leading-snug font-body">
                      {res.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
