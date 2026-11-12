import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Check, X, ArrowRight, Zap, Trophy, Clock, Sparkles } from 'lucide-react';
import CtaBanner from '@/components/shared/CtaBanner';

export const metadata = {
  title: 'Why Choose DataLive Intelligence | Mid-Market Differentiators',
  description: 'How DataLive Intelligence outperforms generic freelancers and slow legacy IT consultancies.',
};

export default function WhyChooseUsPage() {
  const comparisons = [
    {
      feature: 'Implementation Velocity',
      freelancers: 'Unpredictable, ad-hoc hours',
      bigConsultancy: '6 to 12 months minimum',
      datalive: '14 to 21 business days to live production',
    },
    {
      feature: 'Domain & Local Context',
      freelancers: 'Limited business acumen',
      bigConsultancy: 'Junior offshore analysts assigned',
      datalive: 'Direct senior architect with deep Indian tax, Tally & ERP experience',
    },
    {
      feature: 'Pricing & Transparency',
      freelancers: 'Hourly scope creep',
      bigConsultancy: 'Extravagant retainers & hidden change fees',
      datalive: 'Clear fixed-milestone pricing or transparent SLA',
    },
    {
      feature: 'System Integration',
      freelancers: 'Fragile manual CSV uploads',
      bigConsultancy: 'Demands expensive software migration',
      datalive: 'Seamless zero-disruption integration with existing stack',
    },
    {
      feature: 'Ongoing Reliability & SLA',
      freelancers: 'Ghosting after project completion',
      bigConsultancy: 'Expensive tickets with slow tier-1 support',
      datalive: 'Direct WhatsApp support & 99.9% uptime SLA',
    },
  ];

  return (
    <>
      <section className="bg-white text-[#101828] py-16 lg:py-24 border-b border-[#EAECF0] relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-subtle-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9F5FF] border border-[#E9D7FE] text-[#6941C6] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" /> The DataLive Difference
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] font-display mt-2">
            Why Promoters & CFOs Choose DataLive
          </h1>
          <p className="text-base sm:text-lg text-[#475467] mt-4 leading-relaxed font-body">
            See how our pragmatic, senior-led data engineering model compares directly with generic freelance coders and legacy IT consulting firms.
          </p>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-20 bg-[#F9FAFB] border-b border-[#EAECF0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-3xl shadow-xs border border-[#D6BBFB] overflow-hidden text-left text-sm font-body">
              <thead>
                <tr className="border-b border-[#D6BBFB] bg-[#F9FAFB] text-[#101828] font-bold font-display">
                  <th className="p-5 sm:p-6">Feature / Capability</th>
                  <th className="p-5 sm:p-6 text-[#667085] font-medium font-body">Generic Freelancers</th>
                  <th className="p-5 sm:p-6 text-[#667085] font-medium font-body">Big IT Consultancies</th>
                  <th className="p-5 sm:p-6 bg-[#F9F5FF] text-[#6941C6] border-l border-r border-[#D6BBFB]">DataLive Intelligence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D6BBFB]">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F9FAFB] transition-colors">
                    <td className="p-5 sm:p-6 font-bold text-[#101828] font-display">{row.feature}</td>
                    <td className="p-5 sm:p-6 text-[#475467]">{row.freelancers}</td>
                    <td className="p-5 sm:p-6 text-[#475467]">{row.bigConsultancy}</td>
                    <td className="p-5 sm:p-6 bg-[#F9F5FF]/70 font-semibold text-[#7F56D9] border-l border-r border-[#E9D7FE]">
                      {row.datalive}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
