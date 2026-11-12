import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Target, HeartHandshake, Zap, ArrowRight, BarChart3, Users, Award, Sparkles } from 'lucide-react';
import CtaBanner from '@/components/shared/CtaBanner';

export const metadata = {
  title: 'About Our Company | DataLive Intelligence',
  description: 'Our founding vision, values, leadership ethos, and mission to demystify enterprise data for mid-market business leaders.',
};

export default function CompanyPage() {
  const values = [
    {
      title: 'Precision Over Fluff',
      desc: 'We do not sell theoretical AI buzzwords. We build mathematical, verified pipelines and clean Power BI models that reflect true business reality.',
      icon: Target,
    },
    {
      title: 'Zero Technical Disruption',
      desc: 'We never ask you to replace your operational accounting or ERP system. We augment your existing stack with non-intrusive pipelines and automated gateways.',
      icon: ShieldCheck,
    },
    {
      title: 'Speed of Tangible ROI',
      desc: 'Our standard sprint cycle delivers the first executive dashboard or automated flash report within 21 days, ensuring immediate cost and time recovery.',
      icon: Zap,
    },
    {
      title: 'Client Data Sovereignty',
      desc: 'Your data stays in your tenant. We enforce row-level security, encrypted connections, and sign strict NDAs before inspecting any company figures.',
      icon: HeartHandshake,
    },
  ];

  return (
    <>
      <section className="bg-white text-[#101828] py-16 lg:py-24 border-b border-[#EAECF0] relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-subtle-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0369A1] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Founding Mission
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] font-display mt-2">
            Demystifying Data for Ambitious Business Leaders
          </h1>
          <p className="text-base sm:text-lg text-[#475467] mt-4 leading-relaxed font-body">
            DataLive Intelligence was founded on a simple observation: mid-market enterprises are sitting on oceans of operational data, but leadership remains trapped in spreadsheet chaos.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-white border-b border-[#EAECF0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-[#475467] leading-relaxed text-base sm:text-lg font-body">
          <h2 className="text-3xl font-bold text-[#101828] tracking-tight font-display">
            Built by Practitioners, Not Sales Pitchers
          </h2>
          <p>
            For years, mid-market business owners and CFOs have been caught between two unsatisfactory choices: hire expensive global IT consultancies that quote 9-month timelines and million-dollar budgets, or rely on internal finance teams to manually copy-paste data across hundreds of fragile Excel sheets.
          </p>
          <p>
            DataLive Intelligence exists to bridge that gap. We operate as your elite data engineering unit—architecting unified SQL data warehouses, automated daily MIS reports, and high-performance Power BI command centers that empower business promoters to make decisions with absolute speed and clarity.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#F9FAFB] border-b border-[#EAECF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284C7]">Our Code</span>
            <h2 className="text-3xl font-bold text-[#101828] font-display mt-2">The Principles That Guide Every Build</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="p-8 rounded-2xl bg-white border border-[#BAE6FD] shadow-xs hover:border-[#0284C7] transition-colors space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101828] font-display">{v.title}</h3>
                  <p className="text-sm text-[#475467] leading-relaxed font-body">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
