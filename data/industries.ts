import { Industry } from '@/lib/types';

export const industriesData: Industry[] = [
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    title: 'Manufacturing & Industrial',
    tagline: 'Real-Time Plant Floor Visibility from Raw Material to Despatch',
    heroHeadline: 'Eliminate Shop-Floor Blindspots with Real-Time Manufacturing Intelligence',
    iconName: 'Factory',
    challenges: [
      {
        problem: 'Unknown Machine Downtime & Production Delays',
        impact: 'Plant heads only discover breakdown patterns days after the shift, leading to cascading delivery failures.',
      },
      {
        problem: 'BOM (Bill of Materials) & Scrap Leakage',
        impact: 'Material consumption variance goes undetected, directly eroding gross profit margins by 3-6% annually.',
      },
      {
        problem: 'Fragmented Shift Handover MIS',
        impact: 'Plant supervisors spend 2 hours at the end of each shift manually compiling Excel log sheets.',
      },
    ],
    solutionStrategy: 'We connect directly to machine PLC logs, weighing scales, and plant ERP databases to stream live production, scrap rates, and Overall Equipment Effectiveness (OEE) straight to the management dashboard.',
    trackedKpis: [
      { name: 'Overall Equipment Effectiveness (OEE)', target: '> 85%', frequency: 'Hourly Live' },
      { name: 'Scrap & Rejection Rate', target: '< 1.8%', frequency: 'Per Shift' },
      { name: 'Bill-of-Materials (BOM) Cost Variance', target: '< 0.5%', frequency: 'Daily Batch' },
      { name: 'On-Time Dispatch Rate (OTD)', target: '> 98%', frequency: 'Daily' },
    ],
    caseStudyHighlight: {
      clientType: '₹120 Cr Precision Auto-Components Manufacturer (Pune)',
      metrics: '40 Hours/Week Saved on Shift MIS | 14% Reduction in Scrap',
      summary: 'Replaced manual paper logs and end-of-day Excel entries with an automated SQL pipeline and live Power BI shop-floor displays, giving plant managers real-time bottleneck alerts.',
    },
  },
  {
    id: 'finance',
    slug: 'finance',
    title: 'Finance & Banking / NBFCs',
    tagline: 'Automate Reconciliation, Debtor Aging & Regulatory Cash Flow Visibility',
    heroHeadline: 'Flawless Financial Reconciliations & Real-Time Cash Flow Intelligence',
    iconName: 'Landmark',
    challenges: [
      {
        problem: 'Tedious Multi-Bank Reconciliation',
        impact: 'Finance teams waste 3-5 days every month manually matching bank statements against Tally vouchers.',
      },
      {
        problem: 'Late Debtor Aging & Cash Flow Blindspots',
        impact: 'Overdue receivables (>90 days) slip through the cracks, severely straining working capital limits.',
      },
      {
        problem: 'Time-Consuming Board MIS Compilation',
        impact: 'Compiling multi-entity consolidated P&L, balance sheets, and statutory schedules takes 10+ days post month-end.',
      },
    ],
    solutionStrategy: 'We deploy automated reconciliation bots and multi-dimensional Power BI financial models that pull live vouchers from accounting systems, delivering audited P&L, debtor aging, and 90-day cash flow projections daily.',
    trackedKpis: [
      { name: 'Days Sales Outstanding (DSO)', target: '< 45 Days', frequency: 'Daily' },
      { name: 'Bank Reconciliation Turnover', target: '< 2 Hours', frequency: 'Daily Automated' },
      { name: 'Working Capital Coverage Ratio', target: '> 1.5x', frequency: 'Weekly' },
      { name: 'Collection Efficiency Rate', target: '> 95%', frequency: 'Daily' },
    ],
    caseStudyHighlight: {
      clientType: 'Regional NBFC & Loan Syndication Firm (Mumbai)',
      metrics: '100% Automated Multi-Bank Reconciliation | Zero Excel Formula Errors',
      summary: 'Engineered an automated SQL data warehouse that consolidates loan disbursement records and bank payment feeds, cutting monthly financial closing from 12 days to 36 hours.',
    },
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    title: 'Healthcare & Hospitals',
    tagline: 'Optimize Bed Occupancy, Doctor Yield & Patient Flow Analytics',
    heroHeadline: 'Data-Driven Healthcare Operations for Superior Patient Care & Yield',
    iconName: 'HeartPulse',
    challenges: [
      {
        problem: 'Bed Occupancy & Discharge Delays',
        impact: 'Lack of real-time discharge tracking creates artificial bed shortages and extends emergency room wait times.',
      },
      {
        problem: 'Insurance TPA Claim Settlement Lag',
        impact: 'Unreconciled medical claim queries delay cash settlements by 45 to 90 days, locking up hospital working capital.',
      },
      {
        problem: 'Pharmacy & Consumables Expiry Waste',
        impact: 'Suboptimal stock rotation leads to expired high-value injectable medications and stockouts during procedures.',
      },
    ],
    solutionStrategy: 'We integrate Hospital Information Systems (HIS), electronic medical billing, and pharmacy inventories into real-time Power BI command centers for Medical Directors and Hospital Administrators.',
    trackedKpis: [
      { name: 'Bed Occupancy Rate (BOR)', target: '80% - 88%', frequency: 'Live Hourly' },
      { name: 'Average Length of Stay (ALOS)', target: '< 3.8 Days', frequency: 'Daily' },
      { name: 'Insurance TPA Claim Velocity', target: '< 14 Days', frequency: 'Weekly' },
      { name: 'Pharmacy Near-Expiry Stock Value', target: '< ₹50,000', frequency: 'Weekly Alert' },
    ],
    caseStudyHighlight: {
      clientType: '250-Bed Multi-Specialty Hospital Network (Bangalore)',
      metrics: '22% Faster Insurance Claim Realization | Real-Time ICU & Bed Tracking',
      summary: 'Connected legacy HIS databases into an automated executive command center, slashing discharge approval times by 50 minutes and delivering automated daily revenue and occupancy reports.',
    },
  },
  {
    id: 'logistics',
    slug: 'logistics',
    title: 'Logistics & Supply Chain',
    tagline: 'Turnaround Time (TAT) Tracking, Fuel Audit & OTIF Delivery Optimization',
    heroHeadline: 'Real-Time Fleet Intelligence & Supply Chain Cost Optimization',
    iconName: 'Truck',
    challenges: [
      {
        problem: 'Excessive Fleet Turnaround Time (TAT)',
        impact: 'Vehicles remain idle at loading docks for hours without management visibility, degrading fleet asset productivity.',
      },
      {
        problem: 'Uncontrolled Freight & Fuel Cost Variances',
        impact: 'Discrepancies between driver fuel logs, toll FASTag receipts, and billable kilometer routes drain operating margins.',
      },
      {
        problem: 'Late Delivery Penalties (OTIF Failures)',
        impact: 'Delayed customer consignments trigger heavy contractual SLA penalties from corporate clients.',
      },
    ],
    solutionStrategy: 'We ingest GPS telematics, FASTag tolls, ERP consignments, and warehouse dock timestamps into unified analytical dashboards that track every rupee per kilometer and vehicle utilization rate.',
    trackedKpis: [
      { name: 'On-Time In-Full Delivery (OTIF)', target: '> 96%', frequency: 'Daily' },
      { name: 'Fleet Utilization Rate', target: '> 88%', frequency: 'Daily' },
      { name: 'Freight Cost Per Ton-Km', target: 'Benchmarked', frequency: 'Trip-Level' },
      { name: 'Warehouse Loading Dock Turnaround', target: '< 90 Mins', frequency: 'Live' },
    ],
    caseStudyHighlight: {
      clientType: 'Pan-India 3PL Freight Carrier (Delhi NCR)',
      metrics: '18% Fuel Discrepancy Reduction | Live Fastag & Trip Cost Reconciliation',
      summary: 'Built an automated Python reconciliation bot and Power BI fleet dashboard that correlates GPS mileage with diesel bills, recovering over ₹32 Lakhs in annual unverified fuel leakages.',
    },
  },
  {
    id: 'retail',
    slug: 'retail',
    title: 'Retail & Multi-Store E-commerce',
    tagline: 'Inventory Aging Alerts, Store Sales vs Target & Basket Margin Optimization',
    heroHeadline: 'Master Store-Level Profitability & Eliminate Dead Inventory Waste',
    iconName: 'ShoppingBag',
    challenges: [
      {
        problem: 'Dead Stock & Inventory Aging Blindspots',
        impact: 'Slow-moving merchandise sits in remote store backrooms until it must be liquidated at steep losses.',
      },
      {
        problem: 'Fragmented Multi-Store POS Visibility',
        impact: 'Store owners receive daily sales updates via manual WhatsApp texts with no centralized margin analysis.',
      },
      {
        problem: 'Stockout of High-Margin SKUs',
        impact: 'Top-selling products run out of stock during peak weekends while slow SKUs occupy prime shelf space.',
      },
    ],
    solutionStrategy: 'We aggregate multi-store POS software, warehouse stocks, and online channels into automated retail dashboards that track Gross Margin Return on Investment (GMROI), basket sizes, and replenishment alerts.',
    trackedKpis: [
      { name: 'Gross Margin Return on Investment (GMROI)', target: '> 3.2x', frequency: 'Weekly' },
      { name: 'Inventory Sell-Through Rate', target: '> 75%', frequency: 'Monthly' },
      { name: 'Average Transaction Value (ATV)', target: '+12% YoY', frequency: 'Daily' },
      { name: 'Stockout Rate for Top 20% SKUs', target: '< 1.5%', frequency: 'Daily Alert' },
    ],
    caseStudyHighlight: {
      clientType: '35-Store Lifestyle & Apparel Retail Chain (Hyderabad)',
      metrics: '28% Reduction in Dead Stock | Automated Daily 9:00 PM Store MIS',
      summary: 'Centralized 35 POS databases into a unified SQL repository, sending automated sales scorecards and auto-replenishment purchase recommendations to store managers every evening.',
    },
  },
];

