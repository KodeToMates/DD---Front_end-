import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Compass, RefreshCw, Sparkles } from 'lucide-react';
import CtaBanner from '@/components/shared/CtaBanner';

export const metadata = {
  title: 'Our Approach | DataLive Intelligence',
  description: 'The 4-Step zero-disruption data enablement methodology for mid-market enterprises.',
};

export default function OurApproachPage() {
  const steps = [
    {
      step: '01',
      title: 'Zero-Disruption Data Audit (Days 1–3)',
      desc: 'We map your existing spreadsheets, Tally/SAP/ERP databases, and reporting workflows without interrupting daily business operations. We identify data quality gaps, duplicated records, and bottleneck formulas.',
      deliverables: ['Data Source Architecture Map', 'Gap Analysis Report', 'Prioritized KPI Roadmap'],
    },
    {
      step: '02',
      title: 'Data Modeling & Pipeline Engineering (Days 4–10)',
      desc: 'We construct clean dimensional star-schemas in SQL and Power BI. We write automated ETL scripts that scrub dirty data, standardize product codes, and establish audit trails.',
      deliverables: ['Audited Star-Schema Model', 'Automated Daily Refresh Gateway', 'Row-Level Security (RLS) Rules'],
    },
    {
      step: '03',
      title: 'Executive Dashboard & Bot Deployment (Days 11–20)',
      desc: 'We engineer intuitive, mobile-optimized Power BI dashboards and automated Python/WhatsApp flash reporting bots. We conduct rigorous reconciliation against historical accounts.',
      deliverables: ['Live Executive BI Command Center', 'Mobile PWA Dashboard View', 'Automated 8:00 AM WhatsApp Flash Bot'],
    },
    {
      step: '04',
      title: 'Handover, Training & Ongoing SLA (Days 21–30)',
      desc: 'We train your internal department heads, record customized video SOPs, and establish an active monitoring SLA ensuring 99.9% data pipeline uptime and ongoing support.',
      deliverables: ['Recorded Video Documentation & SOPs', 'Internal Team Training Workshop', 'Quarterly Metric Review & SLA Guarantee'],
    },
  ];

  return (
    <>
      <section className="bg-white text-[#101828] py-16 lg:py-24 border-b border-[#EAECF0] relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-subtle-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0369A1] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Engineering Methodology
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] font-display mt-2">
            The 4-Step Zero-Disruption Framework
          </h1>
          <p className="text-base sm:text-lg text-[#475467] mt-4 leading-relaxed font-body">
            We understand the fear of operational downtime. Our methodology is engineered to run in parallel with your current processes until the new system is 100% verified.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#BAE6FD] shadow-xs hover:border-[#0284C7] transition-colors grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              <div className="md:col-span-3">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#0284C7] font-mono block">
                  {st.step}
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#667085] mt-1 block">
                  Sprint Milestone
                </span>
              </div>

              <div className="md:col-span-9 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#101828] font-display">
                  {st.title}
                </h2>
                <p className="text-sm sm:text-base text-[#475467] leading-relaxed font-body">
                  {st.desc}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#667085] block mb-2">
                    Key Outputs & Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {st.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#344054] font-body">
                        <CheckCircle2 className="w-4 h-4 text-[#12B76A] shrink-0" />
                        <span className="font-medium">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
