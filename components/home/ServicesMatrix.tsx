'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, Database, FileSpreadsheet, FileText, Bot, LineChart, ArrowRight, Check, Sparkles } from 'lucide-react';
import { servicesData } from '@/data/services';

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  Database,
  FileSpreadsheet,
  FileText,
  Bot,
  LineChart,
};

export default function ServicesMatrix() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 lg:py-32 bg-[#F9FAFB] text-[#101828] border-b border-[#EAECF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div 
            data-aos="fade-up"
            className="max-w-2xl"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284C7] px-3.5 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD]">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101828] font-display mt-4">
              Enterprise Data Engineering & Intelligent Automation
            </h2>
            <p className="text-base text-[#475467] mt-4 leading-relaxed font-body">
              From raw ERP databases to automated executive WhatsApp scorecards, explore our specialized services designed to scale your operational velocity.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-body font-semibold text-[#0284C7] hover:text-[#0369A1] shrink-0 transition-colors"
          >
            <span>Compare All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Untitled UI Style Bento Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || BarChart3;
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                className={`group p-8 rounded-3xl bg-white border border-[#BAE6FD] shadow-xs hover:shadow-xl hover:border-[#0284C7] transition-all flex flex-col justify-between relative overflow-hidden ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white to-[#F0F9FF]/50 border-2 border-[#0284C7]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD] flex items-center justify-center group-hover:scale-105 transition-transform shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    {isFeatured && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0F9FF] text-[#0369A1] border border-[#BAE6FD] text-xs font-mono font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" /> FLAGSHIP OFFERING
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold font-display text-[#101828] group-hover:text-[#0284C7] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#475467] font-body mt-3 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#F2F4F7] space-y-2">
                    {service.deliverables.slice(0, isFeatured ? 3 : 2).map((del, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#344054] font-body">
                        <Check className="w-4 h-4 text-[#12B76A] shrink-0 mt-0.5" />
                        <span><strong>{del.title}:</strong> {del.description.slice(0, 70)}...</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-[#F2F4F7] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#667085]">
                    {service.techStack[0]} &bull; {service.techStack[1]}
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
