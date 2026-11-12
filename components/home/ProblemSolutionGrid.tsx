'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, ArrowRight, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function ProblemSolutionGrid() {
  const problems = [
    'Reports take 7-10 days post month-end, forcing leadership to make critical decisions on stale figures.',
    'Brittle multi-tab Excel workbooks that crash, contain hidden formula errors, and lack audit trails.',
    'Senior finance and ops managers spend 20+ hours each week copy-pasting numbers across systems.',
    'Disparate data islands: Tally, SAP, legacy billing, and CRM systems that do not talk to each other.',
  ];

  const solutions = [
    'Automated daily flash reports and live Power BI executive dashboards delivered every morning by 8:00 AM.',
    'Centralized, audited SQL data warehouse with single-source-of-truth accuracy and row-level security.',
    'Custom RPA bots and Power Query pipelines eliminate 80% of repetitive data munging routines.',
    'Seamless ODBC and API data integration unifying your branch, plant, and accounting records in real time.',
  ];

  return (
    <section className="py-24 lg:py-32 bg-white text-[#101828] border-b border-[#EAECF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284C7] px-3.5 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD]">
            THE OPERATIONAL SHIFT
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101828] font-display mt-4">
            Why Growing Businesses Outgrow Spreadsheets
          </h2>
          <p className="text-base text-[#475467] mt-4 leading-relaxed font-body">
            Excel is a great calculator, but a dangerous enterprise database. Here is how DataLive Intelligence replaces spreadsheet paralysis with automated, real-time command centers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* The Old Way: Spreadsheet Trap */}
          <div 
            data-aos="fade-right"
            data-aos-duration="700"
            className="p-8 sm:p-10 rounded-3xl bg-[#FEF3F2] border border-[#FECDCA] relative overflow-hidden shadow-xs"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#FEE4E2] text-[#D92D20] border border-[#FECDCA] flex items-center justify-center font-bold">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#B42318]">The Fragile Old Way</span>
                <h3 className="text-xl font-bold font-display text-[#101828]">The Spreadsheet Trap</h3>
              </div>
            </div>

            <ul className="space-y-4">
              {problems.map((prob, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#F04438] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#475467] font-body leading-relaxed">{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The New Way: DataLive Advantage */}
          <div 
            data-aos="fade-left"
            data-aos-duration="700"
            className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#0284C7] shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-[#0284C7] text-white text-[11px] font-mono font-bold tracking-wider uppercase shadow-xs">
              DataLive Standard
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0284C7]">The Autonomous Future</span>
                <h3 className="text-xl font-bold font-display text-[#101828]">The DataLive Advantage</h3>
              </div>
            </div>

            <ul className="space-y-4">
              {solutions.map((sol, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#12B76A] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#344054] font-body font-medium leading-relaxed">{sol}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-[#BAE6FD] flex items-center justify-between">
              <span className="text-xs text-[#667085] font-body">Ready to break the cycle?</span>
              <Link href="/contact" className="text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] flex items-center gap-1.5 transition-colors">
                Book a Free Data Audit &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
