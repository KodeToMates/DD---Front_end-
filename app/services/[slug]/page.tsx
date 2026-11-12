import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Layers, ShieldCheck, Zap } from 'lucide-react';
import CtaBanner from '@/components/shared/CtaBanner';

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

  return (
    <>
      {/* Service Hero - Untitled UI Style */}
      <section className="bg-white text-[#101828] pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-[#EAECF0] relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-subtle-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#667085] mb-6 font-body">
            <Link href="/" className="hover:text-[#101828]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-[#101828]">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#7F56D9] font-medium">{service.title}</span>
          </div>

          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F9F5FF] border border-[#E9D7FE] text-[#6941C6] text-xs font-semibold uppercase tracking-wider">
              {service.category === 'data-engineering' ? 'Data Engineering Architecture' : 'Automation & Reporting'}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] font-display leading-[1.12]">
              {service.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-[#475467] leading-relaxed font-body">
              {service.heroSubhead}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#7F56D9] hover:bg-[#6941C6] text-white font-semibold text-sm shadow-xs transition-all"
              >
                <span>Book Free 30-Min Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(
                  `Hi DataLive, I would like to consult about ${service.title}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-[#F9FAFB] border border-[#D0D5DD] text-[#344054] font-semibold text-sm transition-all"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-[#F9FAFB] border-b border-[#EAECF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7F56D9]">
              Scope of Delivery
            </span>
            <h2 className="text-3xl font-bold text-[#101828] font-display mt-2">
              What We Build & Deliver
            </h2>
            <p className="text-sm text-[#475467] mt-2 font-body">
              Every deliverable is engineered for audit-grade reliability, self-service maintenance, and enterprise security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.deliverables.map((del, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-[#D6BBFB] hover:border-[#9E77ED] shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F9F5FF] text-[#7F56D9] border border-[#E9D7FE] flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#101828] font-display">{del.title}</h3>
                </div>
                <p className="text-sm text-[#475467] leading-relaxed pl-11 font-body">
                  {del.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Pipeline Flow */}
      <section className="py-20 bg-white border-b border-[#EAECF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7F56D9]">
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
                className="p-6 rounded-2xl bg-[#F9FAFB] border border-[#D6BBFB] shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-extrabold text-[#7F56D9] font-mono block mb-3">
                    {step.step}
                  </span>
                  <h4 className="text-base font-bold text-[#101828] font-display mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#475467] leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D6BBFB] text-[11px] font-semibold text-[#7F56D9]">
                  Phase Guaranteed
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="py-14 bg-[#F9FAFB] border-b border-[#EAECF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#667085]">Supported Technology Stack</span>
            <h3 className="text-xl font-bold text-[#101828] font-display mt-1">Enterprise-Grade Tools & Integrations</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech, idx) => (
              <span key={idx} className="px-3.5 py-1.5 rounded-xl bg-white text-[#344054] text-xs font-semibold border border-[#D6BBFB] shadow-2xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific FAQs */}
      <section className="py-20 bg-white border-b border-[#EAECF0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7F56D9]">Direct Answers</span>
            <h2 className="text-3xl font-bold text-[#101828] font-display mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F9FAFB] border border-[#D6BBFB]">
                <h4 className="text-base font-bold text-[#101828] font-display mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#7F56D9] shrink-0 mt-0.5" />
                  {faq.question}
                </h4>
                <p className="text-sm text-[#475467] leading-relaxed pl-7.5 font-body">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Ready to Automate Your ${service.title}?`}
        subhead="Book your free 30-minute discovery session with our Principal Architect to review your existing data sources and get an implementation quote."
      />
    </>
  );
}
