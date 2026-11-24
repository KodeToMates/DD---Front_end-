'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const PowerBiLogo = () => (
  <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="13" width="4" height="8" rx="1.2" fill="#F2C811" />
    <rect x="8.5" y="8" width="4" height="13" rx="1.2" fill="#F2C811" />
    <rect x="14" y="3" width="4" height="18" rx="1.2" fill="#EAA300" />
    <path d="M19.5 7v13c0 .552.448 1 1 1h.5v-14h-.5c-.552 0-1 .448-1 1z" fill="#D39000" />
  </svg>
);

const SqlServerLogo = () => (
  <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="5.5" rx="8" ry="3" fill="#F25022" fillOpacity="0.25" stroke="#CC292B" strokeWidth="1.8" />
    <path d="M4 5.5v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" stroke="#CC292B" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M4 10.5v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" stroke="#CC292B" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M4 15.5v3c0 1.657 3.582 3 8 3s8-1.343 8-3v-3" stroke="#CC292B" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const ExcelLogo = () => (
  <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="18" height="16" rx="3" fill="#107C41" />
    <rect x="9" y="4" width="12" height="16" rx="2" fill="#21A366" />
    <line x1="12" y1="4" x2="12" y2="20" stroke="#107C41" strokeWidth="0.8" />
    <line x1="16" y1="4" x2="16" y2="20" stroke="#107C41" strokeWidth="0.8" />
    <line x1="9" y1="8" x2="21" y2="8" stroke="#107C41" strokeWidth="0.8" />
    <line x1="9" y1="12" x2="21" y2="12" stroke="#107C41" strokeWidth="0.8" />
    <line x1="9" y1="16" x2="21" y2="16" stroke="#107C41" strokeWidth="0.8" />
    <rect x="3" y="6" width="9" height="12" rx="1.5" fill="#107C41" stroke="#21A366" strokeWidth="0.6" />
    <path d="M5.5 8.5L9.5 15.5M9.5 8.5L5.5 15.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TableauLogo = () => (
  <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
    {/* Center */}
    <rect x="10.8" y="7.5" width="2.4" height="9" rx="0.5" fill="#E97627" />
    <rect x="7.5" y="10.8" width="9" height="2.4" rx="0.5" fill="#E97627" />
    {/* Top */}
    <rect x="11.2" y="1" width="1.6" height="5.5" rx="0.4" fill="#5A87B2" />
    <rect x="9.25" y="2.95" width="5.5" height="1.6" rx="0.4" fill="#5A87B2" />
    {/* Bottom */}
    <rect x="11.2" y="17.5" width="1.6" height="5.5" rx="0.4" fill="#B07AA1" />
    <rect x="9.25" y="19.45" width="5.5" height="1.6" rx="0.4" fill="#B07AA1" />
    {/* Left */}
    <rect x="2.95" y="9.25" width="1.6" height="5.5" rx="0.4" fill="#F28E2B" />
    <rect x="1" y="11.2" width="5.5" height="1.6" rx="0.4" fill="#F28E2B" />
    {/* Right */}
    <rect x="19.45" y="9.25" width="1.6" height="5.5" rx="0.4" fill="#59A14F" />
    <rect x="17.5" y="11.2" width="5.5" height="1.6" rx="0.4" fill="#59A14F" />
    {/* Diagonal dots */}
    <rect x="5.2" y="5.2" width="1.4" height="3.2" rx="0.3" fill="#E15759" />
    <rect x="4.3" y="6.1" width="3.2" height="1.4" rx="0.3" fill="#E15759" />
    <rect x="17.4" y="5.2" width="1.4" height="3.2" rx="0.3" fill="#76B7B2" />
    <rect x="16.5" y="6.1" width="3.2" height="1.4" rx="0.3" fill="#76B7B2" />
    <rect x="5.2" y="15.6" width="1.4" height="3.2" rx="0.3" fill="#EDC948" />
    <rect x="4.3" y="16.5" width="3.2" height="1.4" rx="0.3" fill="#EDC948" />
    <rect x="17.4" y="15.6" width="1.4" height="3.2" rx="0.3" fill="#BAB0AC" />
    <rect x="16.5" y="16.5" width="3.2" height="1.4" rx="0.3" fill="#BAB0AC" />
  </svg>
);

const PowerAutomateLogo = () => (
  <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M4 14l8-8v6h8l-8 8v-6H4z" fill="#0066FF" />
    <path d="M12 6L4 14h8V6z" fill="#2896FF" />
    <path d="M12 18l8-8h-8v8z" fill="#004FB8" />
  </svg>
);

const SapLogo = () => (
  <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="2" fill="#008FD3" />
    <text
      x="12"
      y="15.5"
      textAnchor="middle"
      fill="white"
      fontSize="9.5"
      fontFamily="system-ui, -apple-system, sans-serif"
      fontWeight="900"
      letterSpacing="0.8px"
    >
      SAP
    </text>
  </svg>
);

interface SkillItem {
  category: string;
  icon: React.ReactNode;
  level: string;
  skills: string[];
  badgeColor: string;
  iconBg: string;
}

const skillsCatalog: SkillItem[] = [
  {
    category: 'Power BI & Visual Analytics',
    icon: <PowerBiLogo />,
    iconBg: 'bg-[#FEFCE8] border-[#FEF08A]',
    level: 'Expert / Enterprise Grade',
    skills: ['Advanced DAX Calculations', 'Star-Schema Semantic Modeling', 'On-Premises Data Gateway', 'Mobile Executive Views', 'Row-Level Security (RLS)'],
    badgeColor: 'bg-[#F0F9FF] text-[#0284C7] border-[#BAE6FD]',
  },
  {
    category: 'SQL & Database Engineering',
    icon: <SqlServerLogo />,
    iconBg: 'bg-[#FEF2F2] border-[#FECACA]',
    level: 'Production Grade',
    skills: ['Microsoft SQL Server & PostgreSQL', 'Dimensional Data Warehousing', 'ETL Batch Pipelines', 'Query Optimization & Indexing', 'Multi-Source Data Hygiene'],
    badgeColor: 'bg-[#EFF8FF] text-[#175CD3] border-[#B2DDFF]',
  },
  {
    category: 'Advanced Excel & Modeling',
    icon: <ExcelLogo />,
    iconBg: 'bg-[#ECFDF3] border-[#A6F4C5]',
    level: 'Advanced Master',
    skills: ['Power Query (M-Code)', 'Custom VBA & Macro Automation', '3-Statement Financial Models', 'Cash Flow Forecast Engines', 'Formula Tamper Protection'],
    badgeColor: 'bg-[#ECFDF3] text-[#027A48] border-[#A6F4C5]',
  },
  {
    category: 'Automated MIS & Tableau BI',
    icon: <TableauLogo />,
    iconBg: 'bg-[#F0F9FF] border-[#BAE6FD]',
    level: 'Turnkey Solution',
    skills: ['Daily 8:00 AM WhatsApp Flash MIS', 'Executive Board Closing Packs', 'Tableau & Power BI Scorecards', 'Overdue Debtor Aging Schedules', 'Automated Anomaly Alerts'],
    badgeColor: 'bg-[#FDF2FA] text-[#C11574] border-[#FCCEEE]',
  },
  {
    category: 'RPA & Digital Workers',
    icon: <PowerAutomateLogo />,
    iconBg: 'bg-[#EFF8FF] border-[#B2DDFF]',
    level: 'Autonomous',
    skills: ['Vendor Invoice OCR Scraping', 'Multi-Bank Reconciliation Bots', 'Government Portal Scrapers', 'Cross-System Voucher Sync', 'Power Automate & Python Bots'],
    badgeColor: 'bg-[#F8F9FC] text-[#363F72] border-[#D5D9EB]',
  },
  {
    category: 'ERP & System Integrations',
    icon: <SapLogo />,
    iconBg: 'bg-[#F0F9FF] border-[#BAE6FD]',
    level: 'Seamless Sync',
    skills: ['Tally Prime Live ODBC Gateways', 'SAP Business One Connectors', 'Marg & Custom ERP Databases', 'REST API Webhook Sync', 'Zero-Disruption Architecture'],
    badgeColor: 'bg-[#FFF6ED] text-[#C4320A] border-[#F9DBAF]',
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-white text-[#101828] border-b border-[#EAECF0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#101828] font-display">
            The Data & Automation Skills We Bring to Your Team
          </h2>
          <p className="text-base text-[#475467] mt-4 leading-relaxed font-body">
            You do not need to hire expensive in-house data architects. Our deep technical mastery covers the entire modern analytics and automation lifecycle.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCatalog.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="p-8 rounded-3xl bg-white border border-[#BAE6FD] shadow-xs hover:shadow-xl hover:border-[#0284C7] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl ${item.iconBg} border flex items-center justify-center shadow-2xs`}>
                    {item.icon}
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
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0284C7] hover:text-[#0369A1] transition-colors"
                >
                  <span>Consult on this skill</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

