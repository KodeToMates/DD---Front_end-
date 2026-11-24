'use client';

import React from 'react';

interface ToolItem {
  name: string;
  category: string;
  accentColor: string;
  icon: React.ReactNode;
}

const TOOLS: ToolItem[] = [
  {
    name: 'Tableau',
    category: 'Visual BI & Dashboards',
    accentColor: '#E97627',
    icon: (
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
    ),
  },
  {
    name: 'Microsoft SQL Server',
    category: 'Enterprise Relational DB',
    accentColor: '#CC292B',
    icon: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="5.5" rx="8" ry="3" fill="#F25022" fillOpacity="0.2" stroke="#CC292B" strokeWidth="1.8" />
        <path d="M4 5.5v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" stroke="#CC292B" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 10.5v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" stroke="#CC292B" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 15.5v3c0 1.657 3.582 3 8 3s8-1.343 8-3v-3" stroke="#CC292B" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Microsoft Excel',
    category: 'Advanced Financial Modeling',
    accentColor: '#107C41',
    icon: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="3" fill="#107C41" />
        <rect x="9" y="4" width="12" height="16" rx="2" fill="#21A366" />
        {/* Table grid lines */}
        <line x1="12" y1="4" x2="12" y2="20" stroke="#107C41" strokeWidth="0.8" />
        <line x1="16" y1="4" x2="16" y2="20" stroke="#107C41" strokeWidth="0.8" />
        <line x1="9" y1="8" x2="21" y2="8" stroke="#107C41" strokeWidth="0.8" />
        <line x1="9" y1="12" x2="21" y2="12" stroke="#107C41" strokeWidth="0.8" />
        <line x1="9" y1="16" x2="21" y2="16" stroke="#107C41" strokeWidth="0.8" />
        {/* Excel Badge */}
        <rect x="3" y="6" width="9" height="12" rx="1.5" fill="#107C41" stroke="#21A366" strokeWidth="0.6" />
        <path d="M5.5 8.5L9.5 15.5M9.5 8.5L5.5 15.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Microsoft Power BI',
    category: 'DAX & Semantic Modeling',
    accentColor: '#F2C811',
    icon: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="13" width="4" height="8" rx="1.2" fill="#F2C811" />
        <rect x="8.5" y="8" width="4" height="13" rx="1.2" fill="#F2C811" />
        <rect x="14" y="3" width="4" height="18" rx="1.2" fill="#EAA300" />
        <path d="M19.5 7v13c0 .552.448 1 1 1h.5v-14h-.5c-.552 0-1 .448-1 1z" fill="#D39000" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    category: 'Advanced SQL Database',
    accentColor: '#336791',
    icon: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.48 2 2 6.48 2 12c0 3.32 1.62 6.27 4.13 8.08C6.91 18.23 8 16 9.5 14.5c.87-.87 2-1.5 3-2.5.5-.5.8-1.2.8-1.9 0-1.4-1.1-2.5-2.5-2.5-1.1 0-2.1.7-2.4 1.8-.1.4-.5.7-.9.7h-.2c-.5 0-.9-.5-.8-1 .5-2.1 2.3-3.6 4.3-3.6 2.5 0 4.5 2 4.5 4.5 0 1.2-.5 2.3-1.3 3.1-.9.9-2 1.5-2.8 2.3-.9.9-1.5 2.1-1.8 3.5 1.1.3 2.3.4 3.5.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"
          fill="#336791"
        />
        <circle cx="16" cy="10" r="1.5" fill="#336791" />
      </svg>
    ),
  },
  {
    name: 'Python',
    category: 'Automated ETL & Scripting',
    accentColor: '#3776AB',
    icon: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
        <path
          d="M11.9 2c-3.1 0-4.9.4-4.9 1.8v2.7h5v.9H4.8C3.1 7.4 2 9.2 2 11.5s1.3 3.9 3.1 3.9h1.7v-2.3c0-2 1.7-3.7 3.7-3.7h5.1c1.5 0 2.7-1.2 2.7-2.7V4c0-1.4-2.8-2-6.4-2zm-1.8 1.4c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
          fill="#3776AB"
        />
        <path
          d="M12.1 22c3.1 0 4.9-.4 4.9-1.8v-2.7h-5v-.9h7.2c1.7 0 2.8-1.8 2.8-4.1s-1.3-3.9-3.1-3.9h-1.7v2.3c0 2-1.7 3.7-3.7 3.7H8.4c-1.5 0-2.7 1.2-2.7 2.7V20c0 1.4 2.8 2 6.4 2zm1.8-1.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    name: 'Snowflake',
    category: 'Cloud Data Warehouse',
    accentColor: '#29B5E8',
    icon: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"
          stroke="#29B5E8"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M12 5l-2 2M12 5l2 2M12 19l-2-2M12 19l2-2M5 12l2-2M5 12l2 2M19 12l-2-2M19 12l2 2"
          stroke="#29B5E8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="2" fill="#29B5E8" />
      </svg>
    ),
  },
  {
    name: 'Databricks',
    category: 'Lakehouse & Spark Engine',
    accentColor: '#FF3621',
    icon: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7.5L12 13L22 7.5L12 2Z" fill="#FF3621" />
        <path d="M2 12L12 17.5L22 12" stroke="#FF3621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 16.5L12 22L22 16.5" stroke="#FF3621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Tally Prime',
    category: 'ODBC Live Gateway & Sync',
    accentColor: '#032B69',
    icon: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="18" rx="4" fill="#032B69" />
        <path d="M6 7h12v3h-4.5v7h-3v-7H6V7z" fill="#FFB703" />
        <circle cx="18" cy="17" r="1.5" fill="#FFB703" />
      </svg>
    ),
  },
  {
    name: 'SAP ERP',
    category: 'Enterprise Core Integration',
    accentColor: '#008FD3',
    icon: (
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
    ),
  },
  {
    name: 'Power Automate',
    category: 'Autonomous RPA Bots',
    accentColor: '#0066FF',
    icon: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M4 14l8-8v6h8l-8 8v-6H4z" fill="#0066FF" />
        <path d="M12 6L4 14h8V6z" fill="#2896FF" />
        <path d="M12 18l8-8h-8v8z" fill="#004FB8" />
      </svg>
    ),
  },
  {
    name: 'Google BigQuery',
    category: 'Serverless Analytics Cloud',
    accentColor: '#4285F4',
    icon: (
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#4285F4" strokeWidth="2.2" fill="#E8F0FE" />
        <path d="M16 16l5 5" stroke="#4285F4" strokeWidth="2.8" strokeLinecap="round" />
        <rect x="7" y="8" width="8" height="2" rx="0.5" fill="#4285F4" />
        <rect x="7" y="11" width="5.5" height="2" rx="0.5" fill="#4285F4" />
        <rect x="7" y="14" width="7" height="2" rx="0.5" fill="#4285F4" />
      </svg>
    ),
  },
];

export default function TechStackCarousel() {
  return (
    <section
      aria-label="Enterprise Data Platforms and Tools We Master"
      className="relative w-full bg-[#FFFFFF] border-y border-[#EAECF0] py-6 sm:py-7 overflow-hidden"
    >
      {/* Background Micro Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(2, 132, 199, 0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Marquee Wrapper with Progressive Edge Blur */}
      <div className="relative w-full overflow-hidden group/marquee">
        {/* Left Progressive Gradient Fade Mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20"
        />

        {/* Right Progressive Gradient Fade Mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20"
        />

        {/* The Continuous Infinite Marquee Track (Duplicated list for seamless 50% loop) */}
        <div className="animate-marquee-infinite flex items-center gap-4 sm:gap-6 py-1">
          {/* First set of tools */}
          {TOOLS.map((tool, idx) => (
            <div
              key={`tool-1-${idx}`}
              className="flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-2xl bg-white border border-[#BAE6FD] hover:border-[#0284C7] shadow-[0_1px_3px_rgba(16,24,40,0.04)] hover:shadow-md transition-all duration-300 group/item cursor-default shrink-0 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F9FAFB] border border-[#EAECF0] flex items-center justify-center p-1.5 shrink-0 group-hover/item:scale-105 group-hover/item:border-[#BAE6FD] transition-transform">
                {tool.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-sm sm:text-base text-[#101828] leading-snug tracking-tight">
                  {tool.name}
                </span>
                <span className="text-[11px] font-medium text-[#667085] leading-tight font-body">
                  {tool.category}
                </span>
              </div>
            </div>
          ))}

          {/* Second duplicate set of tools for 100% gapless loop */}
          {TOOLS.map((tool, idx) => (
            <div
              key={`tool-2-${idx}`}
              className="flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-2xl bg-white border border-[#BAE6FD] hover:border-[#0284C7] shadow-[0_1px_3px_rgba(16,24,40,0.04)] hover:shadow-md transition-all duration-300 group/item cursor-default shrink-0 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F9FAFB] border border-[#EAECF0] flex items-center justify-center p-1.5 shrink-0 group-hover/item:scale-105 group-hover/item:border-[#BAE6FD] transition-transform">
                {tool.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display font-bold text-sm sm:text-base text-[#101828] leading-snug tracking-tight">
                  {tool.name}
                </span>
                <span className="text-[11px] font-medium text-[#667085] leading-tight font-body">
                  {tool.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
