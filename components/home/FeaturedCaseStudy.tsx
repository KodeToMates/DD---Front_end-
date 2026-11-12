'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Quote } from 'lucide-react';
import { caseStudiesData } from '@/data/case-studies';

export default function FeaturedCaseStudy() {
  const featured = caseStudiesData[0];

  return (
    <section className="py-24 lg:py-32 bg-white text-[#101828] border-b border-[#EAECF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0369A1] text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" /> FEATURED TRANSFORMATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101828] font-display">
            Real Proof. Real Numbers. Zero Theory.
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-[#F9FAFB] border border-[#BAE6FD] p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          {/* Left Summary (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold text-[#0284C7] uppercase tracking-widest block">
              {featured.clientProfile}
            </span>

            <h3 className="text-2xl sm:text-4xl font-bold font-display text-[#101828] leading-tight">
              {featured.title}
            </h3>

            <p className="text-sm sm:text-base text-[#475467] leading-relaxed font-body">
              {featured.challenge}
            </p>

            {/* Testimonial Quote */}
            <div className="p-6 rounded-2xl bg-white border border-[#BAE6FD] shadow-xs relative">
              <Quote className="w-6 h-6 text-[#0284C7] mb-2 opacity-70" />
              <p className="text-xs sm:text-sm italic text-[#344054] leading-relaxed font-body">
                &ldquo;{featured.quote.text}&rdquo;
              </p>
              <div className="mt-3 text-xs">
                <strong className="text-[#101828] block font-display">{featured.quote.author}</strong>
                <span className="text-[#667085] font-body text-[11px]">{featured.quote.role}, {featured.quote.company}</span>
              </div>
            </div>

            <div>
              <Link
                href="/resources/case-studies"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors"
              >
                <span>Read All Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Metrics Grid (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {featured.quantifiedResults.map((res, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#BAE6FD] shadow-xs hover:border-[#0284C7] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl sm:text-4xl font-extrabold text-[#0284C7] tracking-tight font-display">
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
        </motion.div>
      </div>
    </section>
  );
}
