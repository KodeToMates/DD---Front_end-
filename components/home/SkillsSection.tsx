'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, Database, FileSpreadsheet, FileText, Bot, Layers, CheckCircle2, ArrowRight, Sparkles, Cpu } from 'lucide-react';

const skillsCatalog = [
  {
    category: 'Power BI & Visual Analytics',
    icon: BarChart3,
    level: 'Expert / Enterprise Grade',
    skills: ['Advanced DAX Calculations', 'Star-Schema Semantic Modeling', 'On-Premises Data Gateway', 'Mobile Executive Views', 'Row-Level Security (RLS)'],
    badgeColor: 'bg-[#F9F5FF] text-[#7F56D9] border-[#E9D7FE]',
  },
  {
    category: 'SQL & Database Engineering',
    icon: Database,
    level: 'Production Grade',
    skills: ['Microsoft SQL Server & PostgreSQL', 'Dimensional Data Warehousing', 'ETL Batch Pipelines', 'Query Optimization & Indexing', 'Multi-Source Data Hygiene'],
    badgeColor: 'bg-[#EFF8FF] text-[#175CD3] border-[#B2DDFF]',
  },
  {
    category: 'Advanced Excel & Modeling',
    icon: FileSpreadsheet,
    level: 'Advanced Master',
    skills: ['Power Query (M-Code)', 'Custom VBA & Macro Automation', '3-Statement Financial Models', 'Cash Flow Forecast Engines', 'Formula Tamper Protection'],
    badgeColor: 'bg-[#ECFDF3] text-[#027A48] border-[#A6F4C5]',
  },
  {
    category: 'Automated MIS Reporting',
    icon: FileText,
    level: 'Turnkey Solution',
    skills: ['Daily 8:00 AM WhatsApp Flash MIS', 'Executive Board Closing Packs', 'Branch Sales KPI Scorecards', 'Overdue Debtor Aging Schedules', 'Automated Anomaly Alerts'],
    badgeColor: 'bg-[#FDF2FA] text-[#C11574] border-[#FCCEEE]',
  },
  {
    category: 'RPA & Digital Workers',
    icon: Bot,
    level: 'Autonomous',
    skills: ['Vendor Invoice OCR Scraping', 'Multi-Bank Reconciliation Bots', 'Government Portal Scrapers', 'Cross-System Voucher Sync', 'Power Automate & Python Bots'],
    badgeColor: 'bg-[#F8F9FC] text-[#363F72] border-[#D5D9EB]',
  },
  {
    category: 'ERP & System Integrations',
    icon: Cpu,
    level: 'Seamless Sync',
    skills: ['Tally Prime Live ODBC Gateways', 'SAP Business One Connectors', 'Marg & Custom ERP Databases', 'REST API Webhook Sync', 'Zero-Disruption Architecture'],
    badgeColor: 'bg-[#FFF6ED] text-[#C4320A] border-[#F9DBAF]',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-white text-[#101828] border-b border-[#EAECF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9F5FF] border border-[#E9D7FE] text-[#6941C6] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Technical Skills & Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101828] font-display mt-2">
            The Data & Automation Skills We Bring to Your Team
          </h2>
          <p className="text-base text-[#475467] mt-4 leading-relaxed font-body">
            You do not need to hire expensive in-house data architects. Our deep technical mastery covers the entire modern analytics and automation lifecycle.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCatalog.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-[#EAECF0] shadow-xs hover:shadow-xl hover:border-[#D6BBFB] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F9F5FF] text-[#7F56D9] border border-[#E9D7FE] flex items-center justify-center shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-[#101828] mb-4">
                    {item.category}
                  </h3>

                  <ul className="space-y-2.5">
                    {item.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2.5 text-xs text-[#344054] font-body">
                        <CheckCircle2 className="w-4 h-4 text-[#12B76A] shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-[#F2F4F7] flex items-center justify-between">
                  <span className="text-xs text-[#667085] font-body">Production Ready</span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#7F56D9] hover:text-[#6941C6] transition-colors"
                  >
                    <span>Consult on this skill</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

