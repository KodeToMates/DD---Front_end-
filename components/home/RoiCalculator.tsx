'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { formatCurrencyINR } from '@/lib/utils';

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState<number>(4);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(14);
  const [avgSalary, setAvgSalary] = useState<number>(55000);

  // Calculations
  const totalHoursSpentYearly = teamSize * hoursPerWeek * 50;
  const hoursSavedYearly = Math.round(totalHoursSpentYearly * 0.82); // 82% efficiency gain
  const hourlyRate = avgSalary / 160;
  const annualCostSaved = Math.round(hoursSavedYearly * hourlyRate);

  return (
    <section className="py-24 lg:py-32 bg-white text-[#101828] border-b border-[#EAECF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F9F5FF] border border-[#E9D7FE] text-[#6941C6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" /> INTERACTIVE ROI ESTIMATOR
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101828] font-display">
            Calculate What Manual Reporting Costs Your Business
          </h2>
          <p className="text-base text-[#475467] mt-4 leading-relaxed font-body">
            Adjust the sliders below to estimate the annual hours and executive payroll your company can reclaim by automating MIS and Power BI workflows.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#D6BBFB] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Sliders (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Slider 1: Team Size */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold mb-2">
                <span className="text-[#344054] font-body">Staff members compiling manual reports:</span>
                <span className="text-[#6941C6] font-mono font-bold text-sm px-3 py-1 rounded-lg bg-[#F9F5FF] border border-[#E9D7FE]">
                  {teamSize} {teamSize === 1 ? 'person' : 'analysts'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-[#7F56D9] h-2 bg-[#EAECF0] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#667085] mt-1">
                <span>1 analyst</span>
                <span>25 analysts</span>
              </div>
            </div>

            {/* Slider 2: Hours Per Week */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold mb-2">
                <span className="text-[#344054] font-body">Hours spent per person weekly on manual data:</span>
                <span className="text-[#6941C6] font-mono font-bold text-sm px-3 py-1 rounded-lg bg-[#F9F5FF] border border-[#E9D7FE]">
                  {hoursPerWeek} hrs/week
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="35"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full accent-[#7F56D9] h-2 bg-[#EAECF0] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#667085] mt-1">
                <span>4 hrs</span>
                <span>35 hrs</span>
              </div>
            </div>

            {/* Slider 3: Monthly Salary */}
            <div>
              <div className="flex justify-between items-center text-sm font-semibold mb-2">
                <span className="text-[#344054] font-body">Average monthly analyst/finance salary:</span>
                <span className="text-[#6941C6] font-mono font-bold text-sm px-3 py-1 rounded-lg bg-[#F9F5FF] border border-[#E9D7FE]">
                  ₹{avgSalary.toLocaleString('en-IN')}/mo
                </span>
              </div>
              <input
                type="range"
                min="25000"
                max="150000"
                step="5000"
                value={avgSalary}
                onChange={(e) => setAvgSalary(Number(e.target.value))}
                className="w-full accent-[#7F56D9] h-2 bg-[#EAECF0] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#667085] mt-1">
                <span>₹25,000</span>
                <span>₹1,50,000</span>
              </div>
            </div>
          </div>

          {/* Results Card (5 Cols) - Untitled UI Style */}
          <div className="lg:col-span-5 bg-[#F9F5FF] rounded-2xl p-6 sm:p-7 border border-[#D6BBFB] text-center space-y-5 shadow-xs relative overflow-hidden">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6941C6] font-bold block">
              ESTIMATED ANNUAL RECOVERY
            </span>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight font-display">
                {formatCurrencyINR(annualCostSaved)}
              </div>
              <span className="text-xs text-[#027A48] font-mono font-semibold flex items-center justify-center gap-1.5 mt-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#12B76A]" /> Reclaimable Payroll Capital
              </span>
            </div>

            <div className="pt-3 border-t border-[#E9D7FE] text-left space-y-2 text-xs text-[#475467] font-mono">
              <div className="flex justify-between">
                <span className="flex items-center gap-1.5 text-[#667085]">
                  <Clock className="w-3.5 h-3.5 text-[#7F56D9]" /> Annual Hours Saved:
                </span>
                <strong className="text-[#101828]">{hoursSavedYearly.toLocaleString('en-IN')} hrs</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-[#667085]">Reporting Turnaround:</span>
                <strong className="text-[#027A48]">&lt; 24 Hours</strong>
              </div>
            </div>

            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#7F56D9] hover:bg-[#6941C6] text-white text-xs sm:text-sm font-body font-semibold shadow-xs transition-all"
            >
              <span>Claim This Time Back</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
