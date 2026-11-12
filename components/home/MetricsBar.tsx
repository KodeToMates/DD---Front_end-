'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Clock, Zap } from 'lucide-react';

export default function MetricsBar() {
  const metrics = [
    {
      value: '500+',
      label: 'Automated Reports Delivered',
      sub: 'Power BI & MIS pipelines',
      icon: Layers,
    },
    {
      value: '99.8%',
      label: 'Data Pipeline Accuracy',
      sub: 'Audited star-schema models',
      icon: ShieldCheck,
    },
    {
      value: '15,000+',
      label: 'Manual Hours Eliminated',
      sub: 'Spreadsheet tasks replaced',
      icon: Clock,
    },
    {
      value: '< 21 Days',
      label: 'Average Deployment Sprints',
      sub: 'Rapid business time-to-value',
      icon: Zap,
    },
  ];

  return (
    <section id="metrics" className="bg-white text-[#101828] py-16 border-y border-[#EAECF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="p-6 rounded-2xl bg-white border border-[#BAE6FD] shadow-xs hover:shadow-md hover:border-[#0284C7] transition-all flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD] flex items-center justify-center mb-4 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101828] font-display">
                  {m.value}
                </span>
                <span className="text-sm font-semibold text-[#344054] mt-1.5 font-body">
                  {m.label}
                </span>
                <span className="text-xs text-[#667085] mt-0.5 font-body">
                  {m.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
