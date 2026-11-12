'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { caseStudiesData } from '@/data/case-studies';

export default function Testimonials() {
  const reviews = caseStudiesData.slice(0, 3).map((cs) => cs.quote);

  return (
    <section className="py-24 lg:py-32 bg-white text-[#101828] border-b border-[#EAECF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          data-aos="fade-up"
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101828] font-display">
            Trusted by Promoters, CFOs & Operations Leaders
          </h2>
          <p className="text-base text-[#475467] mt-4 leading-relaxed font-body">
            See how mid-market decision-makers eliminated spreadsheet paralysis and achieved measurable ROI with DataLive Intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="p-8 rounded-3xl bg-[#F9FAFB] border border-[#BAE6FD] shadow-xs hover:shadow-md hover:border-[#0284C7] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-5 text-[#FDB022]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-[#0284C7] mb-3 opacity-60" />
                <p className="text-sm text-[#344054] leading-relaxed italic font-body">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#BAE6FD]">
                <strong className="text-base font-bold text-[#101828] block font-display">{rev.author}</strong>
                <span className="text-xs text-[#667085] font-body">{rev.role}</span>
                <span className="text-xs font-semibold text-[#0284C7] block mt-1 font-body">{rev.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
