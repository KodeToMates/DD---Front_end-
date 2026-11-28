import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/data/services';
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Layers, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import CtaBanner from '@/components/shared/CtaBanner';
import FaqSection from '@/components/shared/FaqSection';
import { CONTACT_INFO } from '@/data/contact';
import { getTechToolLogo } from '@/components/shared/BrandLogos';
import PowerBiCrowdHero from '@/components/services/PowerBiCrowdHero';

const defaultDeliverableImages: string[] = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
];

const serviceHeroImages: Record<string, string> = {
  'sql-database': '/service/sql-database/sql-database-hero.jpg',
  'excel-automation': '/service/sql-database/exel-sheet-hero.jpg',
  'mis-reporting': '/service/sql-database/mis-reporting-hero.jpg',
  'rpa-development': '/service/sql-database/rpa-development-hero.jpg',
  'business-intelligence': '/service/sql-database/business-intelligence-hero.jpg',
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | DataLive Intelligence`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const fullTechStack = Array.from(
    new Set([
      ...service.techStack,
      'Microsoft Power BI',
      'SQL Server',
      'Tally Prime ODBC',
      'SAP ERP',
      'Microsoft Excel 365',
      'Azure Data Factory',
      'PostgreSQL',
      'Python',
    ])
  );

  const heroBgImage = serviceHeroImages[slug] || null;

  return (
    <>
      {/* Service Hero */}
      {slug === 'power-bi' ? (
        <PowerBiCrowdHero />
      ) : (
        <section
          className={`pt-14 pb-20 lg:pt-20 lg:pb-28 border-b border-[#EAECF0] relative overflow-hidden ${
            heroBgImage ? 'bg-[#080B14] text-white' : 'bg-white text-[#101828]'
          }`}
        >
          {/* Background Image if available */}
          {heroBgImage && (
            <div className="absolute inset-0 z-0">
              <Image
                src={heroBgImage}
                alt={`${service.title} Background`}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center lg:object-[center_right]"
              />
              {/* High-contrast gradient overlays for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#080B14]/95 via-[#080B14]/85 to-[#080B14]/40 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-transparent to-black/30 pointer-events-none" />
            </div>
          )}

          {!heroBgImage && (
            <div className="absolute inset-0 bg-hero-subtle-glow pointer-events-none" />
          )}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div
              className={`flex items-center gap-2 text-xs mb-6 font-body ${
                heroBgImage ? 'text-slate-400' : 'text-[#667085]'
              }`}
            >
              <Link href="/" className={heroBgImage ? 'hover:text-white' : 'hover:text-[#101828]'}>
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/services" className={heroBgImage ? 'hover:text-white' : 'hover:text-[#101828]'}>
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className={heroBgImage ? 'text-[#38BDF8] font-medium' : 'text-[#0284C7] font-medium'}>
                {service.title}
              </span>
            </div>

            <div className="max-w-3xl space-y-6">
              <span
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
                  heroBgImage
                    ? 'bg-white/10 backdrop-blur-md border border-white/20 text-[#38BDF8]'
                    : 'bg-[#F0F9FF] border border-[#BAE6FD] text-[#0369A1]'
                }`}
              >
                {service.category === 'data-engineering' ? 'Data Engineering Architecture' : 'Automation & Reporting'}
              </span>

              <h1
                className={`text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-display leading-[1.12] ${
                  heroBgImage ? 'text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]' : 'text-[#101828]'
                }`}
              >
                {service.heroHeadline}
              </h1>

              <p
                className={`text-base sm:text-lg leading-relaxed font-body ${
                  heroBgImage ? 'text-slate-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] font-medium' : 'text-[#475467]'
                }`}
              >
                {service.heroSubhead}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm shadow-lg shadow-[#0284C7]/30 transition-all hover:scale-[1.01]"
                >
                  <span>Book Free 30-Min Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={CONTACT_INFO.getWhatsAppUrl(`Hi DataLive, I would like to consult about ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                    heroBgImage
                      ? 'bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white'
                      : 'bg-white hover:bg-[#F9FAFB] border border-[#D0D5DD] text-[#344054]'
                  }`}
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Deliverables Section: 1 Card Per Deliverable with Alternating (Swapped) Image & Content */}
      <section className="py-20 lg:py-28 bg-[#F9FAFB] border-b border-[#EAECF0] relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-[700px] h-[500px] bg-gradient-to-b from-[#BAE6FD]/20 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#101828] font-display tracking-[-0.03em] leading-tight">
              What We Build & Deliver
            </h2>
            <p className="text-base text-[#475467] leading-relaxed font-body">
              Every deliverable is engineered for audit-grade reliability, sub-second query performance, self-service maintenance, and enterprise row-level security.
            </p>
          </div>

          {/* Deliverables: 1 Full Card Per Deliverable with Swapped Alternating Layout */}
          <div className="space-y-8 lg:space-y-12">
            {service.deliverables.map((del, idx) => {
              const isEven = idx % 2 === 0;
              const imageUrl = del.image || defaultDeliverableImages[idx % defaultDeliverableImages.length];

              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#BAE6FD] hover:border-[#0284C7] shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

                    {/* Image Column: Swapped alternatingly (Card 1: Image Left, Card 2: Image Right, Card 3: Image Left, etc.) */}
                    <div className={`lg:col-span-5 flex flex-col ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative h-[300px] sm:h-[360px] lg:h-full min-h-[300px] lg:min-h-[440px] w-full rounded-2xl overflow-hidden bg-[#080B14] border border-[#EAECF0] shadow-md group-hover:shadow-lg transition-all">
                        <Image
                          src={imageUrl}
                          alt={del.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#080B14]/85 via-[#080B14]/20 to-transparent pointer-events-none" />

                        {/* Top Badge on Image */}
                        {del.tag && (
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0284C7] font-semibold text-xs shadow-md border border-white/60">
                              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                              <span>{del.tag}</span>
                            </span>
                          </div>
                        )}

                        {/* Bottom Overlay Badge on Image */}
                        {del.badge && (
                          <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#BAE6FD] shadow-md flex items-center justify-between text-xs">
                            <span className="font-bold text-[#101828] font-display flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4 text-[#12B76A]" />
                              <span>{del.badge}</span>
                            </span>
                            <span className="font-mono font-bold text-[#0284C7]">0{idx + 1}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content Column: Swapped alternatingly (Card 1: Content Right, Card 2: Content Left, Card 3: Content Right, etc.) */}
                    <div className={`lg:col-span-7 flex flex-col justify-between py-1 space-y-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#F0F9FF] group-hover:bg-[#0284C7] text-[#0284C7] group-hover:text-white border border-[#BAE6FD] flex items-center justify-center font-mono font-extrabold text-sm transition-colors shrink-0">
                            0{idx + 1}
                          </div>
                          <span className="text-xs font-mono font-bold text-[#0284C7] uppercase tracking-wider">
                            Deliverable Spec 0{idx + 1}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-[#101828] font-display tracking-[-0.03em] leading-snug">
                          {del.title}
                        </h3>

                        <p className="text-sm sm:text-base text-[#475467] leading-relaxed font-body">
                          {del.description}
                        </p>
                      </div>

                      {/* Detailed Capabilities / Feature Checklist */}
                      {del.points && del.points.length > 0 && (
                        <div className="pt-3 border-t border-[#F2F4F7] space-y-2.5">
                          {del.points.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-[#344054] font-body leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Architectural Impact Box */}
                      {del.impact && (
                        <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#F0F9FF] to-[#E0F2FE]/60 border border-[#BAE6FD] flex items-center gap-3 text-xs sm:text-[13px] text-[#0369A1] font-body">
                          <div className="w-8 h-8 rounded-lg bg-[#0284C7] text-white flex items-center justify-center shrink-0 shadow-xs">
                            <Zap className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#0284C7] block font-bold mb-0.5">
                              Architectural & Business Benchmark
                            </span>
                            <span className="font-semibold text-[#0C4A6E]">{del.impact}</span>
                          </div>
                        </div>
                      )}

                      {/* Stack Components & Reassurance Footer */}
                      <div className="pt-2 border-t border-[#F2F4F7] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        {del.techChips && del.techChips.length > 0 ? (
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="text-[11px] font-mono font-bold text-[#667085] uppercase tracking-wider mr-1">
                              Stack:
                            </span>
                            {del.techChips.map((chip, cIdx) => (
                              <span
                                key={cIdx}
                                className="px-2.5 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[#334155] text-[11px] font-mono font-medium hover:border-[#BAE6FD] hover:text-[#0284C7] transition-colors"
                              >
                                {chip}
                              </span>
                            ))}
                          </div>
                        ) : <div />}

                        <div className="flex items-center gap-1.5 text-xs text-[#667085] font-body shrink-0">
                          <ShieldCheck className="w-4 h-4 text-[#12B76A]" />
                          <span className="font-medium">100% Client IP Handover</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Quick Callout Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#BAE6FD] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 mt-12">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-bold text-[#0284C7] uppercase tracking-wider font-mono">
                Need Custom Data Architecture?
              </div>
              <div className="text-base sm:text-lg text-[#101828] font-bold font-display">
                We adapt directly to your ERP, custom ODBC drivers, and database schema.
              </div>
              <p className="text-xs text-[#667085] font-body">
                Turnkey sprints delivered in under 21 days with 100% IP ownership and zero ERP downtime.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-bold shadow-md shadow-[#0284C7]/20 transition-all hover:scale-[1.02]"
            >
              <span>Book Free Discovery Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4-Step Pipeline Flow */}
      <section className="py-20 bg-white border-b border-[#EAECF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284C7]">
              Sprint Execution
            </span>
            <h2 className="text-3xl font-bold text-[#101828] font-display mt-2">
              Our 4-Step Implementation Process
            </h2>
            <p className="text-sm text-[#475467] mt-2 font-body">
              From source data discovery to live scheduled dispatch, our sprints average under 21 days with zero downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.pipelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F9FAFB] border border-[#BAE6FD] shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-extrabold text-[#0284C7] font-mono block mb-3">
                    {step.step}
                  </span>
                  <h4 className="text-base font-bold text-[#101828] font-display mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#475467] leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#BAE6FD] text-[11px] font-semibold text-[#0284C7]">
                  Phase Guaranteed
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Banner with Infinite Marquee Scroll */}
      <section className="py-16 bg-[#F9FAFB] border-b border-[#EAECF0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center sm:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#101828] font-display tracking-[-0.02em]">
              Enterprise-Grade Tools & Integrations
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#667085] font-body max-w-md">
            Direct, certified connectors engineered for zero ERP disruption, high throughput, and automatic failover.
          </p>
        </div>

        {/* Continuous Infinite Marquee with Gradient Fade Edges */}
        <div className="relative w-full overflow-hidden">
          {/* Left Gradient Fade Mask */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-[#F9FAFB] via-[#F9FAFB]/80 to-transparent z-20"
          />

          {/* Right Gradient Fade Mask */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-[#F9FAFB] via-[#F9FAFB]/80 to-transparent z-20"
          />

          {/* The Infinite Marquee Track (Seamless 50% loop) */}
          <div className="animate-marquee-infinite flex items-center gap-4 sm:gap-5 py-2">
            {/* Set 1 */}
            {fullTechStack.map((tech, idx) => (
              <div
                key={`tech-1-${idx}`}
                className="flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-2xl bg-white border border-[#BAE6FD] hover:border-[#0284C7] shadow-xs hover:shadow-md transition-all duration-300 group cursor-default shrink-0 hover:-translate-y-0.5"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F9FAFB] border border-[#EAECF0] flex items-center justify-center p-1.5 shrink-0 group-hover:border-[#BAE6FD] transition-colors">
                  {getTechToolLogo(tech, 'w-5 h-5')}
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-sm text-[#101828] whitespace-nowrap">
                    {tech}
                  </span>
                  <span className="text-[10px] font-mono font-medium text-[#667085] leading-tight">
                    Verified Connector
                  </span>
                </div>
              </div>
            ))}

            {/* Set 2 (Duplicated for seamless infinite loop) */}
            {fullTechStack.map((tech, idx) => (
              <div
                key={`tech-2-${idx}`}
                className="flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-2xl bg-white border border-[#BAE6FD] hover:border-[#0284C7] shadow-xs hover:shadow-md transition-all duration-300 group cursor-default shrink-0 hover:-translate-y-0.5"
              >
                <div className="w-9 h-9 rounded-xl bg-[#F9FAFB] border border-[#EAECF0] flex items-center justify-center p-1.5 shrink-0 group-hover:border-[#BAE6FD] transition-colors">
                  {getTechToolLogo(tech, 'w-5 h-5')}
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display font-bold text-sm text-[#101828] whitespace-nowrap">
                    {tech}
                  </span>
                  <span className="text-[10px] font-mono font-medium text-[#667085] leading-tight">
                    Verified Connector
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific FAQs powered by JSON */}
      <FaqSection
        serviceSlug={service.slug}
        title={`Frequently Asked Questions: ${service.title}`}
        subtitle={`Direct answers on source system connectors, deployment options, licensing considerations, and support for our ${service.title} service.`}
        showSearch={false}
        showCategories={false}
        variant="light"
      />

      <CtaBanner
        title={`Ready to Automate Your ${service.title}?`}
        highlightText={service.title}
        subhead="Book your free 30-minute discovery session with our Principal Architect to review your existing data sources and get an implementation quote."
      />
    </>
  );
}
