'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';

interface CtaBannerProps {
  title?: string;
  subhead?: string;
}

export default function CtaBanner({
  title = 'Ready to eliminate spreadsheet chaos & see your business live?',
  subhead = 'Book a zero-cost 30-minute discovery call with our Principal BI Architect. We review your current bottleneck and outline a concrete 3-step automation roadmap.',
}: CtaBannerProps) {
  return (
    <section className="py-24 bg-[#F9FAFB] text-[#101828] relative overflow-hidden border-t border-[#EAECF0]">
      {/* Subtle Purple Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#9E77ED]/12 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E9D7FE] text-[#6941C6] text-xs font-semibold uppercase tracking-wider shadow-2xs">
            Zero-Disruption &bull; Rapid ROI &bull; Guaranteed Sprint
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#101828] font-display leading-[1.12]">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-[#475467] leading-relaxed max-w-2xl mx-auto font-body">
            {subhead}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#7F56D9] hover:bg-[#6941C6] text-white font-body font-semibold text-sm shadow-xs hover:shadow-md active:scale-98 transition-all"
            >
              <span>Book 30-Min Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/919876543210?text=${encodeURIComponent(
                'Hi DataLive team, I would like to book a 30-minute strategy call.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-[#F9FAFB] border border-[#D0D5DD] text-[#344054] font-body font-semibold text-sm shadow-xs transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Direct Chat</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#667085] font-body">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#12B76A]" /> Direct Principal Architect Consultation
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#12B76A]" /> Non-Disclosure Agreement (NDA) Protected
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#12B76A]" /> 100% Practical Insights, No Sales Fluff
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
