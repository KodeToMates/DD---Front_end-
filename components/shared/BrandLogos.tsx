import React from 'react';

interface LogoProps {
  className?: string;
}

export function PowerBiLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="13" width="4" height="8" rx="1.2" fill="#F2C811" />
      <rect x="8.5" y="8" width="4" height="13" rx="1.2" fill="#F2C811" />
      <rect x="14" y="3" width="4" height="18" rx="1.2" fill="#EAA300" />
      <path d="M19.5 7v13c0 .552.448 1 1 1h.5v-14h-.5c-.552 0-1 .448-1 1z" fill="#D39000" />
    </svg>
  );
}

export function SqlServerLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="5.5" rx="8" ry="3" fill="#F25022" fillOpacity="0.25" stroke="#CC292B" strokeWidth="1.8" />
      <path d="M4 5.5v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" stroke="#CC292B" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 10.5v5c0 1.657 3.582 3 8 3s8-1.343 8-3v-5" stroke="#CC292B" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 15.5v3c0 1.657 3.582 3 8 3s8-1.343 8-3v-3" stroke="#CC292B" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ExcelLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
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
}

export function TableauLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      <rect x="10.8" y="7.5" width="2.4" height="9" rx="0.5" fill="#E97627" />
      <rect x="7.5" y="10.8" width="9" height="2.4" rx="0.5" fill="#E97627" />
      <rect x="11.2" y="1" width="1.6" height="5.5" rx="0.4" fill="#5A87B2" />
      <rect x="9.25" y="2.95" width="5.5" height="1.6" rx="0.4" fill="#5A87B2" />
      <rect x="11.2" y="17.5" width="1.6" height="5.5" rx="0.4" fill="#B07AA1" />
      <rect x="9.25" y="19.45" width="5.5" height="1.6" rx="0.4" fill="#B07AA1" />
      <rect x="2.95" y="9.25" width="1.6" height="5.5" rx="0.4" fill="#F28E2B" />
      <rect x="1" y="11.2" width="5.5" height="1.6" rx="0.4" fill="#F28E2B" />
      <rect x="19.45" y="9.25" width="1.6" height="5.5" rx="0.4" fill="#59A14F" />
      <rect x="17.5" y="11.2" width="5.5" height="1.6" rx="0.4" fill="#59A14F" />
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
}

export function PythonLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      <path
        d="M11.9 2c-3.1 0-4.9.4-4.9 1.8v2.7h5v.9H4.8C3.1 7.4 2 9.2 2 11.5s1.3 3.9 3.1 3.9h1.7v-2.3c0-2 1.7-3.7 3.7-3.7h5.1c1.5 0 2.7-1.2 2.7-2.7V4c0-1.4-2.8-2-6.4-2zm-1.8 1.4c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z"
        fill="#3776AB"
      />
      <path
        d="M12.1 22c3.1 0 4.9-.4 4.9-1.8v-2.7h-5v-.9h7.2c1.7 0 2.8-1.8 2.8-4.1s-1.3-3.9-3.1-3.9h-1.7v2.3c0 2-1.7 3.7-3.7 3.7H8.4c-1.5 0-2.7 1.2-2.7 2.7V20c0 1.4 2.8 2 6.4 2zm1.8-1.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z"
        fill="#FFD43B"
      />
    </svg>
  );
}

export function SnowflakeLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
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
  );
}

export function PowerAutomateLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      <path d="M4 14l8-8v6h8l-8 8v-6H4z" fill="#0066FF" />
      <path d="M12 6L4 14h8V6z" fill="#2896FF" />
      <path d="M12 18l8-8h-8v8z" fill="#004FB8" />
    </svg>
  );
}

export function SapLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
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
}

export function TallyLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="18" rx="4" fill="#032B69" />
      <path d="M6 7h12v3h-4.5v7h-3v-7H6V7z" fill="#FFB703" />
      <circle cx="18" cy="17" r="1.5" fill="#FFB703" />
    </svg>
  );
}

export function PostgreSqlLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.48 2 2 6.48 2 12c0 3.32 1.62 6.27 4.13 8.08C6.91 18.23 8 16 9.5 14.5c.87-.87 2-1.5 3-2.5.5-.5.8-1.2.8-1.9 0-1.4-1.1-2.5-2.5-2.5-1.1 0-2.1.7-2.4 1.8-.1.4-.5.7-.9.7h-.2c-.5 0-.9-.5-.8-1 .5-2.1 2.3-3.6 4.3-3.6 2.5 0 4.5 2 4.5 4.5 0 1.2-.5 2.3-1.3 3.1-.9.9-2 1.5-2.8 2.3-.9.9-1.5 2.1-1.8 3.5 1.1.3 2.3.4 3.5.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"
        fill="#336791"
      />
      <circle cx="16" cy="10" r="1.5" fill="#336791" />
    </svg>
  );
}

export function DatabricksLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7.5L12 13L22 7.5L12 2Z" fill="#FF3621" />
      <path d="M2 12L12 17.5L22 12" stroke="#FF3621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 16.5L12 22L22 16.5" stroke="#FF3621" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AzureLogo({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      <path d="M13.2 3.5L5.5 14.2h5.7L4 21.5l14.5-9.8h-6.2L18.5 3.5z" fill="#0089D6" />
    </svg>
  );
}

// -------------------------------------------------------------
// Real Vibrant Industry Icons (Multi-Tone Color Vectors)
// -------------------------------------------------------------

export function ManufacturingIndustryIcon({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      {/* Factory Base & Chimneys */}
      <path d="M2 20h20V9l-5 3V7l-5 3V4H2v16z" fill="#EA580C" fillOpacity="0.2" stroke="#C2410C" strokeWidth="1.8" strokeLinejoin="round" />
      {/* Windows & Doors */}
      <rect x="5" y="14" width="3" height="6" fill="#F97316" />
      <rect x="11" y="14" width="3" height="6" fill="#F97316" />
      <rect x="16" y="14" width="3" height="6" fill="#F97316" />
      {/* Smoke Clouds */}
      <circle cx="5" cy="2" r="1.2" fill="#FB923C" />
      <circle cx="6.5" cy="1" r="1" fill="#FDBA74" />
      {/* Precision Gear */}
      <circle cx="18" cy="6" r="2.5" stroke="#F97316" strokeWidth="1.6" strokeDasharray="1.5 1.5" />
      <circle cx="18" cy="6" r="1" fill="#EA580C" />
    </svg>
  );
}

export function FinanceIndustryIcon({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      {/* Pediment Roof */}
      <path d="M2 8L12 3L22 8H2Z" fill="#15803D" stroke="#166534" strokeWidth="1.8" strokeLinejoin="round" />
      {/* Base Steps */}
      <rect x="2" y="19" width="20" height="2.5" rx="0.5" fill="#15803D" />
      {/* Classical Pillars */}
      <rect x="4" y="9.5" width="2.5" height="8.5" rx="0.5" fill="#22C55E" />
      <rect x="9" y="9.5" width="2.5" height="8.5" rx="0.5" fill="#16A34A" />
      <rect x="14" y="9.5" width="2.5" height="8.5" rx="0.5" fill="#16A34A" />
      <rect x="19" y="9.5" width="2.5" height="8.5" rx="0.5" fill="#22C55E" />
      {/* Gold Coin Badge in Pediment */}
      <circle cx="12" cy="6" r="1.3" fill="#FACC15" stroke="#EAB308" strokeWidth="0.5" />
    </svg>
  );
}

export function HealthcareIndustryIcon({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      {/* Medical Cross Container */}
      <rect x="2" y="4" width="20" height="16" rx="4" fill="#FFE4E6" stroke="#E11D48" strokeWidth="1.8" />
      {/* Hospital Cross */}
      <path d="M12 7v10M7 12h10" stroke="#BE123C" strokeWidth="2.8" strokeLinecap="round" />
      {/* Heart Pulse EKG */}
      <path d="M4 14h3l1.5-3.5 2.5 6 2-4 1.5 1.5H20" stroke="#0284C7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LogisticsIndustryIcon({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      {/* Cargo Trailer */}
      <rect x="2" y="6" width="12" height="10" rx="1" fill="#0284C7" stroke="#0369A1" strokeWidth="1.8" />
      <line x1="6" y1="6" x2="6" y2="16" stroke="#38BDF8" strokeWidth="1" strokeDasharray="1.5 1.5" />
      {/* Truck Cab */}
      <path d="M14 9h4.5l3.5 3.5V16H14V9z" fill="#0284C7" stroke="#0369A1" strokeWidth="1.8" strokeLinejoin="round" />
      {/* Cab Window */}
      <path d="M15 10.5h3.2l2.3 2.5H15v-2.5z" fill="#BAE6FD" />
      {/* Headlight */}
      <circle cx="21" cy="14.5" r="0.8" fill="#FACC15" />
      {/* Wheels */}
      <circle cx="6" cy="17" r="2.2" fill="#1E293B" stroke="#0284C7" strokeWidth="1.5" />
      <circle cx="6" cy="17" r="0.8" fill="#F8FAFC" />
      <circle cx="17.5" cy="17" r="2.2" fill="#1E293B" stroke="#0284C7" strokeWidth="1.5" />
      <circle cx="17.5" cy="17" r="0.8" fill="#F8FAFC" />
    </svg>
  );
}

export function RetailIndustryIcon({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      {/* Bag Body */}
      <rect x="4" y="8" width="16" height="13" rx="2.5" fill="#7C3AED" stroke="#6D28D9" strokeWidth="1.8" />
      {/* Curved Handle */}
      <path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
      {/* Sale Price Tag */}
      <path d="M10 13l2-2h3v3l-2 2H10v-3z" fill="#F43F5E" />
      <circle cx="13.5" cy="12.5" r="0.6" fill="white" />
      {/* Sparkle */}
      <path d="M18 4l.8 1.5L20 6.2l-1.2.7L18 8.5l-.8-1.6L16 6.2l1.2-.7L18 4z" fill="#FACC15" />
    </svg>
  );
}

// -------------------------------------------------------------
// Dynamic Resolvers
// -------------------------------------------------------------

export function getServiceLogo(serviceSlugOrId: string, className = 'w-6 h-6'): React.ReactNode {
  const key = serviceSlugOrId.toLowerCase();

  if (key.includes('power-bi') || key.includes('powerbi') || key.includes('barchart')) {
    return <PowerBiLogo className={className} />;
  }
  if (key.includes('sql') || key.includes('database')) {
    return <SqlServerLogo className={className} />;
  }
  if (key.includes('excel') || key.includes('spreadsheet') || key.includes('financial')) {
    return <ExcelLogo className={className} />;
  }
  if (key.includes('mis') || key.includes('tableau') || key.includes('reporting') || key.includes('filetext')) {
    return <TableauLogo className={className} />;
  }
  if (key.includes('rpa') || key.includes('bot') || key.includes('automate') || key.includes('workflow')) {
    return <PowerAutomateLogo className={className} />;
  }
  if (key.includes('cloud') || key.includes('predictive') || key.includes('linechart') || key.includes('analytics')) {
    return <SnowflakeLogo className={className} />;
  }
  if (key.includes('erp') || key.includes('tally') || key.includes('sap')) {
    return <SapLogo className={className} />;
  }

  return <PowerBiLogo className={className} />;
}

export function getTechToolLogo(techName: string, className = 'w-4 h-4'): React.ReactNode {
  const key = techName.toLowerCase();

  if (key.includes('power bi')) return <PowerBiLogo className={className} />;
  if (key.includes('sql') || key.includes('query')) return <SqlServerLogo className={className} />;
  if (key.includes('excel')) return <ExcelLogo className={className} />;
  if (key.includes('tableau')) return <TableauLogo className={className} />;
  if (key.includes('python')) return <PythonLogo className={className} />;
  if (key.includes('snowflake')) return <SnowflakeLogo className={className} />;
  if (key.includes('databricks')) return <DatabricksLogo className={className} />;
  if (key.includes('tally')) return <TallyLogo className={className} />;
  if (key.includes('sap')) return <SapLogo className={className} />;
  if (key.includes('automate') || key.includes('rpa')) return <PowerAutomateLogo className={className} />;
  if (key.includes('postgres')) return <PostgreSqlLogo className={className} />;
  if (key.includes('azure') || key.includes('cloud')) return <AzureLogo className={className} />;

  return null;
}

// -------------------------------------------------------------
// Real Vibrant About & Resources Icons (Multi-Tone Vectors)
// -------------------------------------------------------------

export function CompanyRealIcon({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      {/* Main Corporate Tower */}
      <rect x="4" y="3" width="11" height="18" rx="1.8" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.7" />
      {/* Side Wing */}
      <path d="M15 9h3.5A1.5 1.5 0 0 1 20 10.5V21h-5V9z" fill="#BAE6FD" stroke="#0369A1" strokeWidth="1.7" strokeLinejoin="round" />
      {/* Lit Office Windows */}
      <rect x="6.5" y="6" width="2" height="2.2" rx="0.4" fill="#F59E0B" />
      <rect x="10.5" y="6" width="2" height="2.2" rx="0.4" fill="#0284C7" />
      <rect x="6.5" y="10" width="2" height="2.2" rx="0.4" fill="#0284C7" />
      <rect x="10.5" y="10" width="2" height="2.2" rx="0.4" fill="#F59E0B" />
      <rect x="16.5" y="12" width="1.8" height="2" rx="0.4" fill="#0369A1" />
      <rect x="16.5" y="15.5" width="1.8" height="2" rx="0.4" fill="#0284C7" />
      {/* Entrance & Ground */}
      <rect x="8" y="15.5" width="3" height="5.5" rx="0.6" fill="#032B69" />
      <path d="M2 21h20" stroke="#0369A1" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ApproachRealIcon({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      {/* Compass Outer Dial */}
      <circle cx="12" cy="12" r="9.5" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="6.8" stroke="#A5B4FC" strokeWidth="1" strokeDasharray="2 2" />
      {/* North Needle (Coral Red) */}
      <path d="M15.8 8.2L10.3 10.3L13.7 13.7L15.8 8.2Z" fill="#E11D48" />
      {/* South Needle (Sky Blue) */}
      <path d="M8.2 15.8L13.7 13.7L10.3 10.3L8.2 15.8Z" fill="#0284C7" />
      {/* Gold Pivot */}
      <circle cx="12" cy="12" r="1.4" fill="#FACC15" stroke="#B45309" strokeWidth="0.8" />
    </svg>
  );
}

export function WhyChooseUsRealIcon({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      {/* Emerald Shield */}
      <path
        d="M12 2.5L4.5 5.8v5.7c0 5 3.2 9.4 7.5 10.5 4.3-1.1 7.5-5.5 7.5-10.5V5.8L12 2.5z"
        fill="#D1FAE5"
        stroke="#059669"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Verified Ribbon / Check */}
      <path d="M8.8 12.2l2.2 2.2 4.4-4.6" stroke="#047857" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Gold Star Accent */}
      <path d="M18.5 3.2l.6 1.2 1.3.5-1.3.5-.6 1.2-.6-1.2-1.3-.5 1.3-.5.6-1.2z" fill="#F59E0B" />
    </svg>
  );
}

export function CaseStudiesRealIcon({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      {/* Handles */}
      <path d="M6 5H3.8a1.3 1.3 0 0 0-1.3 1.3c0 2.5 1.4 4.4 3.5 4.9" stroke="#D97706" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M18 5h2.2a1.3 1.3 0 0 1 1.3 1.3c0 2.5-1.4 4.4-3.5 4.9" stroke="#D97706" strokeWidth="1.7" strokeLinecap="round" />
      {/* Gold Cup */}
      <path d="M6 4h12v5.5a6 6 0 0 1-12 0V4z" fill="#FDE68A" stroke="#D97706" strokeWidth="1.8" strokeLinejoin="round" />
      {/* Star Inside Cup */}
      <path d="M12 6.2l.8 1.6 1.7.3-1.2 1.2.3 1.7-1.6-.8-1.6.8.3-1.7-1.2-1.2 1.7-.3.8-1.6z" fill="#B45309" />
      {/* Stem & Pedestal */}
      <path d="M12 15.5V19" stroke="#B45309" strokeWidth="2" />
      <rect x="7.5" y="19" width="9" height="2.5" rx="0.8" fill="#1E293B" />
    </svg>
  );
}

export function KnowledgeBlogRealIcon({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      {/* Left & Right Book Pages */}
      <path
        d="M2.5 5.5A2.5 2.5 0 0 1 5 3h5.5A1.5 1.5 0 0 1 12 4.5v15a1.5 1.5 0 0 0-1.5-1.5H4a1.5 1.5 0 0 1-1.5-1.5V5.5z"
        fill="#E0F2FE"
        stroke="#0284C7"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 5.5A2.5 2.5 0 0 0 19 3h-5.5A1.5 1.5 0 0 0 12 4.5v15a1.5 1.5 0 0 1 1.5-1.5H20a1.5 1.5 0 0 0 1.5-1.5V5.5z"
        fill="#CCFBF1"
        stroke="#0D9488"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      {/* Content Lines */}
      <path d="M5.5 7.5h3.5M5.5 11h3.5M15 7.5h3.5M15 11h3.5" stroke="#0369A1" strokeWidth="1.4" strokeLinecap="round" />
      {/* Orange Bookmark */}
      <path d="M15.5 3v6.5l1.3-1 1.3 1V3" fill="#F97316" />
    </svg>
  );
}

export function FaqsRealIcon({ className = 'w-6 h-6' }: LogoProps) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none">
      {/* Primary Question Bubble */}
      <path
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v6A2.5 2.5 0 0 1 14.5 14H8l-3.5 3V14H5.5A2.5 2.5 0 0 1 3 11.5v-6z"
        fill="#7C3AED"
        stroke="#6D28D9"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Question Mark */}
      <path d="M8.5 7.2a1.6 1.6 0 1 1 2.4 1.4c-.6.3-.9.7-.9 1.4" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="10" cy="11.9" r="0.8" fill="white" />
      {/* Overlapping Answer Bubble */}
      <path
        d="M11 11.5A2 2 0 0 1 13 9.5h6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v2.3l-2.5-2.3H13a2 2 0 0 1-2-2v-5z"
        fill="#E0F2FE"
        stroke="#0284C7"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 13h4.5M14 15.5h3" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function getAboutRealIcon(aboutKey: string, className = 'w-6 h-6'): React.ReactNode {
  const key = aboutKey.toLowerCase();
  if (key.includes('approach') || key.includes('compass')) {
    return <ApproachRealIcon className={className} />;
  }
  if (key.includes('why') || key.includes('shield')) {
    return <WhyChooseUsRealIcon className={className} />;
  }
  return <CompanyRealIcon className={className} />;
}

export function getResourceRealIcon(resourceKey: string, className = 'w-6 h-6'): React.ReactNode {
  const key = resourceKey.toLowerCase();
  if (key.includes('case') || key.includes('award')) {
    return <CaseStudiesRealIcon className={className} />;
  }
  if (key.includes('faq') || key.includes('help')) {
    return <FaqsRealIcon className={className} />;
  }
  return <KnowledgeBlogRealIcon className={className} />;
}

export function getIndustryRealIcon(industryId: string, className = 'w-6 h-6'): React.ReactNode {
  const key = industryId.toLowerCase();

  if (key.includes('manufactur') || key.includes('factory') || key.includes('industrial')) {
    return <ManufacturingIndustryIcon className={className} />;
  }
  if (key.includes('finance') || key.includes('bank') || key.includes('landmark')) {
    return <FinanceIndustryIcon className={className} />;
  }
  if (key.includes('health') || key.includes('hospital') || key.includes('heart')) {
    return <HealthcareIndustryIcon className={className} />;
  }
  if (key.includes('logistic') || key.includes('truck') || key.includes('supply') || key.includes('fleet')) {
    return <LogisticsIndustryIcon className={className} />;
  }
  if (key.includes('retail') || key.includes('store') || key.includes('shopping') || key.includes('commerce')) {
    return <RetailIndustryIcon className={className} />;
  }

  return <ManufacturingIndustryIcon className={className} />;
}
