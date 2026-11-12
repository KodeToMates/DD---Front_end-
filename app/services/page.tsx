import React from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { ArrowRight, CheckCircle2, BarChart3, Database, FileSpreadsheet, FileText, Bot, LineChart, Sparkles } from 'lucide-react';
import CtaBanner from '@/components/shared/CtaBanner';

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  Database,
  FileSpreadsheet,
  FileText,
  Bot,
  LineChart,
};

export const metadata = {
  title: 'Enterprise Services & Capabilities | DataLive Intelligence',
  description: 'Explore our full spectrum of data engineering, Power BI, SQL database, MIS reporting, and RPA bot automation services.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Header Banner - Untitled UI Style */}
      <section className="bg-white text-[#101828] py-16 lg:py-24 border-b border-[#EAECF0] relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-subtle-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0369A1] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Capabilities & Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#101828] font-display mt-2">
            Enterprise Data Engineering & Intelligent Automation
          </h1>
          <p className="text-base sm:text-lg text-[#475467] mt-4 leading-relaxed font-body">
            Eliminate reporting lag and manual spreadsheet toil. We build robust, scalable data architectures designed specifically for growing mid-market enterprises.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || BarChart3;

            return (
              <div
                key={service.id}
                id={service.slug}
                data-aos="fade-up"
                className="p-8 sm:p-12 rounded-3xl bg-white border border-[#BAE6FD] shadow-xs hover:shadow-lg hover:border-[#0284C7] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] text-xs font-mono font-bold uppercase tracking-wider">
                    <Icon className="w-4 h-4" /> {service.category === 'data-engineering' ? 'Data Engineering' : 'Automation & Reporting'}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#101828] tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#475467] leading-relaxed font-body">
                    {service.heroSubhead}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#344054] font-body">
                        <CheckCircle2 className="w-4 h-4 text-[#12B76A] shrink-0 mt-0.5" />
                        <span><strong>{d.title}:</strong> {d.description.slice(0, 75)}...</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all"
                    >
                      <span>Deep Dive Specs</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0284C7] hover:text-[#0369A1]"
                    >
                      Book Consultation &rarr;
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#F0F9FF] border border-[#BAE6FD] rounded-2xl p-6 sm:p-8 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#BAE6FD]">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0369A1]">Proven Benchmark</span>
                    <span className="text-xs font-semibold text-[#027A48] bg-[#ECFDF3] border border-[#A6F4C5] px-2.5 py-0.5 rounded-full">Audited Impact</span>
                  </div>

                  <div>
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0284C7] font-display tracking-tight">
                      {service.metricsBanner.metric}
                    </span>
                    <p className="text-xs text-[#475467] mt-1 font-body">
                      {service.metricsBanner.label}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#BAE6FD]">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#667085] block mb-2">Supported Stack:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech, idx) => (
                        <span key={idx} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white border border-[#BAE6FD] text-[#344054]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
