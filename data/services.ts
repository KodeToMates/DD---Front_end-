import { Service } from '@/lib/types';

export const servicesData: Service[] = [
  {
    id: 'power-bi',
    slug: 'power-bi',
    title: 'Power BI Solutions',
    shortDescription: 'Enterprise Power BI dashboards, advanced DAX calculations, automated scheduled refreshes, and mobile layouts for leadership on the move.',
    heroHeadline: 'Transform Scattered Spreadsheets into Real-Time Power BI Dashboards',
    heroSubhead: 'Stop waiting 10 days for monthly financial and operational reviews. We architect interactive, single-pane Power BI dashboards directly integrated into your Tally, ERP, and database systems.',
    iconName: 'BarChart3',
    category: 'data-engineering',
    metricsBanner: {
      metric: '85% Faster',
      label: 'Decision-making speed reported by enterprise clients',
    },
    deliverables: [
      {
        title: 'Executive Mobile & Desktop Command Centers',
        tag: 'C-Suite Ready',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
        badge: 'Interactive Drill-Down • Mobile Responsive',
        description:
          'Tailored responsive dashboards engineered specifically for business promoters, CFOs, and operational heads. Delivers single-pane visibility over cash runway, working capital cycles, operating EBITDA, and revenue run-rates directly on desktop monitors and mobile smartphones without opening spreadsheets.',
        points: [
          'Two-click drill-downs from executive consolidated P&L down to voucher-level ledger and journal entries',
          'Multi-entity benchmarking across subsidiaries, regional branches, and manufacturing plant divisions',
          'Native iOS & Android Power BI app layouts formatted with high-contrast KPI cards for rapid review',
          'Dynamic time intelligence sliders comparing YoY, MoM, MTD, QTD, and rolling 12-month trailing actuals',
        ],
        impact: 'Decision Velocity: Accelerates C-suite monthly review cycles from 10 days down to real-time',
        techChips: ['Power BI Mobile', 'Executive Canvases', 'KPI Scorecards', 'Multi-Device Sync'],
      },
      {
        title: 'High-Performance DAX Semantic Models (Star-Schema)',
        tag: 'Sub-Second Speed',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
        badge: 'Star-Schema • <1.2s Calculation Latency',
        description:
          'Audit-grade dimensional data modeling that eliminates messy flat files and replaces them with an optimized star-schema architecture. Facts (sales transactions, ledger entries, production batches) and Dimensions (customers, items, chart-of-accounts) are cleanly isolated to ensure instantaneous calculations across 10M+ rows.',
        points: [
          'Optimized DAX measures utilizing CALCULATE, KEEPFILTERS, and virtual tables to eliminate memory bloat',
          'Automated debtor aging buckets (0-30, 31-60, 61-90, 90+ days) calculated dynamically on the fly',
          'Pre-aggregated summary tables with direct relationship integrity, eliminating circular calculation traps',
          'Advanced inventory turnover and safety-stock runout algorithms with automated reorder flags',
        ],
        impact: 'Query Performance: Sub-second report rendering across 10M+ transaction rows with zero lag',
        techChips: ['DAX Studio', 'Star Schema', 'Tabular Models', 'Memory Optimization'],
      },
      {
        title: 'Automated Gateway & Multi-Daily Scheduled Sync',
        tag: 'Zero Manual Export',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
        badge: 'Microsoft On-Premises Gateway • 99.98% SLA',
        description:
          'Completely eliminates manual data exports and human copy-paste errors. We deploy and configure enterprise-grade Microsoft On-Premises Data Gateway clusters that connect your cloud Power BI tenant directly to local Tally Prime, SAP ERP, SQL Server, and legacy ERP servers with encrypted high-speed tunneling.',
        points: [
          'Automated scheduled refreshes up to 8x to 48x daily without human intervention or manual CSV imports',
          'Direct ODBC and REST API connectors reading operational data without placing heavy locks on production databases',
          'Automated heartbeat health monitoring and failover sync alert protocols notifying IT of connection anomalies',
          'Incremental data refresh policies that only ingest newly modified records, reducing server overhead by 80%',
        ],
        impact: 'Time Saved: Eliminates 20+ hours of weekly manual reporting and reconciliation tasks',
        techChips: ['On-Premises Gateway', 'ODBC Connectors', 'Incremental Refresh', 'DirectQuery'],
      },
      {
        title: 'Row-Level Security (RLS) & Granular Access Control',
        tag: 'Enterprise Security',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
        badge: 'Entra ID SSO • Multi-Branch Isolation',
        description:
          'Strict, role-based data governance guaranteeing that sensitive figures remain strictly confidential. Regional sales heads, plant managers, and branch supervisors only view their designated territory metrics, while central executive leadership retains company-wide consolidated visibility in a single shared dashboard.',
        points: [
          'Dynamic row-level security (RLS) filters mapped directly to user email addresses and organization hierarchies',
          'Granular column masking protecting sensitive executive payroll, confidential product margins, and customer discount tiers',
          'Microsoft Entra ID (Azure AD) Single Sign-On (SSO) integration with multi-factor authentication (MFA)',
          'Comprehensive audit logging and export restriction policies preventing unauthorized Excel downloads',
        ],
        impact: 'Zero Data Leakage: 100% compliance with corporate governance, GDPR, and SOC-2 data standards',
        techChips: ['Dynamic RLS', 'Entra ID SSO', 'Audit Logging', 'Data Governance'],
      },
      {
        title: 'Automated 8:00 AM WhatsApp & Email Digest Triggers',
        tag: 'Morning Flash MIS',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80',
        badge: '8:00 AM Daily Broadcast • Anomaly Alerts',
        description:
          'Brings critical decision intelligence directly to where executives spend their mornings. Python and Power BI automation bots extract daily closing metrics, generate crisp snapshot cards, and deliver them directly to executive WhatsApp accounts and email inboxes every single morning before business hours begin.',
        points: [
          'Daily revenue, dispatch figures, debtor collections, and plant OEE delivered automatically by 8:00 AM',
          'Instant threshold alerts when plant scrap rates spike, gross margins drop, or credit limits are breached',
          'Crisp, mobile-optimized visual snapshot cards designed for rapid C-suite review in under 60 seconds',
          'Executive drill-through links embedded in messages allowing instant deep-dive into full Power BI models',
        ],
        impact: 'Instant Action: Real-time exception notifications dispatched within 3 minutes of data refresh',
        techChips: ['WhatsApp Cloud API', 'Automated Email Bot', 'Power Automate', 'Threshold Triggers'],
      },
      {
        title: '100% IP Handover, Source Code & Analyst Training',
        tag: 'Full Ownership',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
        badge: 'Raw .pbix Source • Zero Vendor Lock-In',
        description:
          'We believe in total client self-sufficiency. Unlike agencies that trap clients in proprietary lock-in, DataLive transfers complete intellectual property ownership upon project completion. You receive all uncompiled raw .pbix files, Power Query M transformation scripts, DAX calculation formulas, and comprehensive training.',
        points: [
          'Complete IP transfer of raw .pbix architecture, ETL scripts, and database schema staging documentation',
          'Exhaustive data dictionary documenting all KPI definitions, measure logic, and business calculation rules',
          'Hands-on masterclass training sessions enabling your internal finance and MIS teams to build custom reports',
          '30 days of post-deployment hypercare support ensuring seamless operational transition and user adoption',
        ],
        impact: 'Zero Vendor Lock-In: 100% in-house autonomy with full architectural documentation',
        techChips: ['Raw .PBIX Handover', 'ETL M-Code', 'Data Dictionary', 'Hypercare Support'],
      },
    ],
    pipelineSteps: [
      {
        step: '01',
        title: 'Data Discovery & Source Audit',
        description: 'We map out your Tally Prime, SAP, SQL databases, and Excel archives to identify primary data entities.',
      },
      {
        step: '02',
        title: 'Data Modeling & ETL Pipeline',
        description: 'Power Query and SQL transformation scripts clean dirty records, eliminate duplicates, and construct robust dimension/fact tables.',
      },
      {
        step: '03',
        title: 'Executive Dashboard Engineering',
        description: 'UX-optimized report canvases with intuitive drill-downs, dynamic date sliders, and conditional alert highlights.',
      },
      {
        step: '04',
        title: 'Deployment & Gateway Setup',
        description: 'Publishing to Power BI Service, configuring automated scheduled refreshes, and training key department stakeholders.',
      },
    ],
    techStack: ['Microsoft Power BI', 'DAX Studio', 'Power Query M', 'SQL Server', 'Tally Prime ODBC', 'Azure Data Factory'],
    faqs: [
      {
        question: 'Can Power BI pull data directly from our customized Tally Prime setup?',
        answer: 'Yes. We utilize direct ODBC gateways, automated XML exports, or SQL staging mirrors to fetch real-time vouchers, ledger balances, and inventory movements with zero manual copy-pasting.',
      },
      {
        question: 'Do we need expensive enterprise Microsoft licenses to get started?',
        answer: 'No. Most mid-market companies start effectively with Power BI Pro licenses (~$10/user/month). We design the deployment to minimize licensing overhead while maximizing distribution across your leadership team.',
      },
      {
        question: 'How secure is our financial data when hosted on Power BI Service?',
        answer: 'Your data is encrypted in transit (TLS 1.3) and at rest within Microsoft Azure’s enterprise cloud. We implement strict Row-Level Security (RLS) and multi-factor authentication (MFA).',
      },
    ],
  },
  {
    id: 'sql-database',
    slug: 'sql-database',
    title: 'SQL & Database Solutions',
    shortDescription: 'Enterprise data warehousing, relational database schema design, high-throughput ETL pipelines, and indexing optimization for sub-second queries.',
    heroHeadline: 'Scalable SQL Architectures to Power High-Growth Business Intelligence',
    heroSubhead: 'Escape the limitations of single-user desktop spreadsheets. We engineer centralized, reliable SQL databases that aggregate disparate branch, billing, and inventory data into a single verified source of truth.',
    iconName: 'Database',
    category: 'data-engineering',
    metricsBanner: {
      metric: '99.9% Uptime',
      label: 'Reliability across enterprise ETL and database pipelines',
    },
    deliverables: [
      {
        title: 'Centralized Data Warehouse Setup',
        tag: 'Single Source of Truth',
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1000&q=80',
        badge: 'Enterprise Star Schema • Zero Latency',
        description:
          'Consolidate multiple ERP instances, billing databases, legacy servers, and third-party SaaS tools into a single structured relational data warehouse. Engineered to aggregate disparate branch and ledger logs into an audit-grade source of truth.',
        points: [
          'Unified dimensional data models (Fact & Dimension tables) engineered for rapid analytical querying',
          'Automated data validation constraints preventing duplicate records, NULL traps, and orphaned foreign keys',
          'High-throughput table partitioning across 50M+ transaction logs ensuring instantaneous date-range slicing',
          'Centralized role-based access control (RBAC) isolating sensitive payroll, margins, and branch figures',
        ],
        impact: 'Query Speed: 90% reduction in report generation latency across multi-branch transactional ledgers',
        techChips: ['PostgreSQL', 'SQL Server', 'Azure SQL', 'Partitioning'],
      },
      {
        title: 'Automated ETL & Staging Pipelines',
        tag: 'Scheduled Pipelines',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
        badge: 'Nightly Delta Sync • 99.9% Uptime',
        description:
          'Scheduled batch pipelines that clean, validate, and normalize raw transaction logs every night with zero human intervention. Extracts delta changes from production databases without causing CPU spikes or table locking.',
        points: [
          'High-efficiency change data capture (CDC) pipelines capturing newly updated records in near real-time',
          'Automated data cleansing algorithms normalizing addresses, tax codes, and item descriptions',
          'Built-in retry logic, failure alerting, and email health logs dispatched directly to system admins',
          'Incremental data loading protocols slashing nightly sync windows from 4 hours down to 12 minutes',
        ],
        impact: 'Zero Manual Work: Eliminates overnight manual database dumps and CSV consolidation scripts',
        techChips: ['Python ETL', 'SSIS', 'Azure Data Factory', 'Cron Pipelines'],
      },
      {
        title: 'Query Tuning & Index Optimization',
        tag: 'Performance Engineering',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
        badge: 'Sub-Second Response • Index Rebuild',
        description:
          'Resolve database timeouts and lagging reports by analyzing query execution plans, defragmenting indexes, rewriting inefficient joins, and designing targeted non-clustered indexes for mission-critical operations.',
        points: [
          'Deep execution plan profiling isolating expensive table scans, missing indexes, and Cartesian joins',
          'Design of filtered and covering non-clustered indexes optimizing high-volume search and filter operations',
          'Stored procedure restructuring with parameter sniffing mitigations and tempdb memory optimization',
          'Automated weekly index defragmentation and statistics updates to prevent gradual performance decay',
        ],
        impact: 'Sub-Second SLA: 10x query speedup with zero hardware upgrades or cloud tier increases',
        techChips: ['Execution Profiler', 'Index Optimization', 'Stored Procedures', 'Query Refactoring'],
      },
      {
        title: 'Automated Disaster Recovery & Backups',
        tag: 'Data Resilience',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
        badge: 'Point-In-Time Recovery • AES-256 Encrypted',
        description:
          'Hardened point-in-time recovery setups, encrypted cloud backups, and automated integrity validation scripts. Guarantees business continuity against ransomware, disk failures, or catastrophic accidental data deletions.',
        points: [
          'Automated differential and transaction log backup schedules providing sub-15-minute Recovery Point Objective (RPO)',
          'End-to-end AES-256 backup encryption with geo-redundant replication to offsite cloud object storage',
          'Scheduled automated restore tests ensuring backup integrity and valid checksum verification',
          'Clear disaster recovery runbooks enabling rapid failover restoration in under 60 minutes',
        ],
        impact: 'Zero Data Loss: 99.99% data safety SLA with automated geo-redundant cloud archives',
        techChips: ['Point-in-Time Recovery', 'AES-256', 'Cloud Storage Replication', 'Automated Checksums'],
      },
    ],
    pipelineSteps: [
      {
        step: '01',
        title: 'Database Schema Audit',
        description: 'Comprehensive review of tables, normalization levels, indexing bottlenecks, and cross-system relationships.',
      },
      {
        step: '02',
        title: 'Warehouse Architecture Design',
        description: 'Building dimensional data models (Fact & Dimension tables) tailored specifically for lightning-fast BI reporting.',
      },
      {
        step: '03',
        title: 'Automated Data Pipeline Build',
        description: 'Writing robust stored procedures, SSIS/Python pipelines, and error-handling logging mechanisms.',
      },
      {
        step: '04',
        title: 'Performance Testing & Tuning',
        description: 'Stress-testing queries against millions of historical records to guarantee sub-second dashboard response times.',
      },
    ],
    techStack: ['Microsoft SQL Server', 'PostgreSQL', 'MySQL', 'Azure SQL Database', 'Python', 'SSIS'],
    faqs: [
      {
        question: 'We currently store data across 10 different Excel files. Can you migrate that to SQL?',
        answer: 'Absolutely. We build automated data ingestion scripts that validate, clean, deduplicate, and migrate historical spreadsheet records into a robust relational database schema.',
      },
      {
        question: 'How do you handle queries that currently take 10 minutes to run in our ERP?',
        answer: 'We analyze query execution plans, identify missing non-clustered indexes, partition large transaction tables, and build pre-aggregated reporting views to reduce execution times to seconds.',
      },
    ],
  },
  {
    id: 'excel-automation',
    slug: 'excel-automation',
    title: 'Excel Automation & Modeling',
    shortDescription: 'Supercharge your existing spreadsheets with automated Power Query pipelines, robust VBA macros, and bulletproof financial modeling.',
    heroHeadline: 'Eliminate 80% of Manual Spreadsheet Work Without Leaving Microsoft Excel',
    heroSubhead: 'Your team does not have to spend hours copy-pasting numbers between workbooks. We transform vulnerable, manual Excel sheets into push-button automated reporting engines.',
    iconName: 'FileSpreadsheet',
    category: 'reporting-automation',
    metricsBanner: {
      metric: '20+ Hrs/Week',
      label: 'Average manual spreadsheet labor eliminated per finance team',
    },
    deliverables: [
      {
        title: 'Push-Button Power Query Workflows',
        tag: 'One-Click ETL',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
        badge: 'Automated Ingestion • Zero Copy-Paste',
        description:
          'One-click data refresh that automatically imports, merges, cleans, and structures data from dozens of source folders, ERP exports, and vendor files. Eliminates painful manual copy-paste routines and vlookup formula corruption forever.',
        points: [
          'Automated multi-folder consolidation appending hundreds of regional branch Excel files in seconds',
          'Intelligent schema standardization repairing inconsistent column headers, date formats, and numeric types',
          'Self-documenting M-code pipelines that execute reproducibly on every single workbook refresh',
          'Direct refresh buttons configured on the ribbon allowing non-technical analysts to run updates instantly',
        ],
        impact: 'Time Saved: Eliminates 15+ hours weekly spent combining and cleaning raw Excel spreadsheets',
        techChips: ['Power Query', 'M-Code', 'Folder Ingestion', 'Automated Cleansing'],
      },
      {
        title: 'Custom VBA & Macro Automation',
        tag: 'Workflow Automation',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
        badge: 'Hardened VBA • Error Handlers',
        description:
          'Reliable, hardened VBA scripts and Office Scripts that automate repetitive back-office tasks: generating customized PDF invoices, dispatching bulk departmental emails, formatting monthly packs, and generating audit-ready variance reports.',
        points: [
          'Automated batch PDF generation and email dispatch tailored to individual customer and vendor accounts',
          'Robust structured code with comprehensive error trapping and explicit dynamic range references',
          'Custom ribbon buttons, shortcut keys, and user-friendly dialogue forms for seamless internal operation',
          'Backward-compatible architecture thoroughly tested across Microsoft 365, Excel 2019, and Excel 2021',
        ],
        impact: 'Operational Velocity: Generates and distributes 500+ customized reports in under 3 minutes',
        techChips: ['VBA Macros', 'Office Scripts', 'PDF Dispatch Bot', 'Dynamic Ranges'],
      },
      {
        title: 'Error-Proof Financial Models',
        tag: 'Institutional Grade',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
        badge: 'Dynamic 3-Statement • Formula Audit',
        description:
          'Dynamic 3-statement models (P&L, Balance Sheet, Cash Flow), DCF valuations, and rolling 13-week cash projections with formula protection, dynamic sensitivity tables, scenario toggle switches, and automated integrity checks.',
        points: [
          'Integrated 3-statement financial modeling linking working capital, CapEx, debt schedules, and tax provisions',
          'Automated balancing checks and circularity-free debt repayment waterfalls with sensitivity toggles',
          'Strict sheet and formula protection preventing junior staff from inadvertently overwriting critical logic',
          'Interactive scenario managers allowing executive leadership to test bull, base, and bear operating cases',
        ],
        impact: 'Zero Calculation Errors: 100% audit-tested formulas with automated debit-credit integrity flags',
        techChips: ['3-Statement Modeling', 'Cash Flow Runways', 'Sensitivity Tables', 'Scenario Analysis'],
      },
      {
        title: 'Excel-to-Database Connectors',
        tag: 'Direct Data Feeds',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
        badge: 'SQL ODBC • Real-Time Queries',
        description:
          'Direct SQL Server, PostgreSQL, and ERP database query connections embedded inside Excel workbooks. Your financial analysts query live company data directly with native Pivot Tables and formulas, completely bypassing fragile CSV dumps.',
        points: [
          'High-speed ODBC and OLE DB query connections pulling live transactional data directly into Excel Pivot Tables',
          'Parameter-driven queries allowing analysts to change dates or branch codes to filter millions of rows in seconds',
          'Encrypted credential management ensuring database passwords are never exposed in open spreadsheet formulas',
          'Scheduled background data cache refreshes guaranteeing instant file opening without network lag',
        ],
        impact: 'Instant Freshness: Real-time transactional data access without waiting for IT manual database exports',
        techChips: ['Direct SQL ODBC', 'Power Pivot', 'OLE DB Connectors', 'Parameterized Queries'],
      },
    ],
    pipelineSteps: [
      {
        step: '01',
        title: 'Workflow Pain Point Mapping',
        description: 'Shadowing your analysts to document repetitive manual keystrokes, copy-paste routines, and file merge delays.',
      },
      {
        step: '02',
        title: 'M-Code & Power Query Architecture',
        description: 'Replacing manual data munging with fully reproducible, self-documenting Power Query transformation steps.',
      },
      {
        step: '03',
        title: 'Macro Development & UI Controls',
        description: 'Engineering clean user interface buttons, data validation dropdowns, and automated error-handling routines.',
      },
      {
        step: '04',
        title: 'Team Training & Documentation',
        description: 'Hands-on SOPs and video walkthroughs ensuring your internal team can operate and maintain the automated workbooks.',
      },
    ],
    techStack: ['Microsoft Excel 365', 'Power Query (M-Code)', 'VBA / Visual Basic for Applications', 'Office Scripts', 'Power Pivot'],
    faqs: [
      {
        question: 'Will these automated workbooks work across different computers and Excel versions?',
        answer: 'Yes. We build backward-compatible Power Query and VBA modules designed to run consistently across Microsoft 365, Excel 2019, and Excel 2021 environments.',
      },
      {
        question: 'Our current macros crash often. Why will yours be different?',
        answer: 'Most internal macros are created using the basic macro recorder, which hardcodes brittle cell coordinates. We write clean, structured code with explicit dynamic ranges, error handling, and data validation.',
      },
    ],
  },
  {
    id: 'mis-reporting',
    slug: 'mis-reporting',
    title: 'MIS Reporting Systems',
    shortDescription: 'Automated daily flash reports, weekly sales scorecards, and monthly executive MIS packs delivered directly to leadership via Email and WhatsApp.',
    heroHeadline: 'Daily Executive Flash Reports Delivered Before Your Morning Coffee',
    heroSubhead: 'Never wait until the 15th of next month to find out if your business was profitable. We build automated MIS pipelines that deliver daily performance snapshots and department scorecards.',
    iconName: 'FileText',
    category: 'reporting-automation',
    metricsBanner: {
      metric: 'Zero Delays',
      label: 'Automated delivery every morning by 8:00 AM',
    },
    deliverables: [
      {
        title: 'Morning Flash Reports via WhatsApp & Email',
        tag: '8:00 AM Daily Dispatch',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
        badge: 'Automated Broadcast • C-Suite MIS',
        description:
          'A crisp, high-impact 1-page executive summary sent every morning at 8:00 AM detailing yesterday’s revenue, bank collections, factory dispatches, inventory burn, and net cash balances directly to executive WhatsApp accounts and email inboxes.',
        points: [
          'Instant closing revenue, receivables collected, order backlog, and bank balances summarized in under 60 seconds',
          'Automated WhatsApp Cloud API broadcast dispatched before 8:00 AM without human intervention or manual compilation',
          'Executive mobile-first graphic snapshots formatted for easy review on smartphones without opening heavy files',
          'Deep-dive hyperlinks embedded directly into messages allowing immediate drill-down to voucher details',
        ],
        impact: 'Decision Speed: Promoters start every business morning with verified financial closing numbers',
        techChips: ['WhatsApp Business API', 'Python Dispatcher', 'Automated Email Bot', 'Morning Flash'],
      },
      {
        title: 'Departmental KPI Scorecards',
        tag: 'Operational Rhythm',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
        badge: 'Variance vs Target • Multi-Dept',
        description:
          'Automated weekly and monthly performance scorecards comparing targets against actual performance across Sales, Production, Procurement, and HR. Keeps department managers accountable to bottom-line profitability and operational targets.',
        points: [
          'Automated target vs. actual variance tracking for sales teams, factory plants, and procurement divisions',
          'Color-coded RAG (Red/Amber/Green) status indicators highlighting underperforming product lines or regions',
          'Plant OEE (Overall Equipment Effectiveness), scrap percentage, and downtime analysis calculated automatically',
          'Automated scheduled distribution to department heads every Monday morning with weekly action items',
        ],
        impact: 'Accountability: 100% visibility over departmental target vs actual performance variance',
        techChips: ['KPI Scorecards', 'OEE Tracking', 'Variance Analysis', 'Automated Scheduling'],
      },
      {
        title: 'Automated Month-End MIS Packs',
        tag: 'Financial Closes',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
        badge: '24-Hour Month-End • Audit Ready',
        description:
          'Consolidated P&L, balance sheet trends, debtor aging schedules, inventory valuation, and variance explanations compiled automatically within 24 hours of month-end closing, eliminating weeks of painful accounting crunch.',
        points: [
          'Instant generation of board-ready PDF presentation decks and multi-tab executive financial workbooks',
          'Automated debtor aging buckets with customer-level overdue analysis and collection probability scoring',
          'Working capital cycle breakdown tracking DSO (Days Sales Outstanding) and DPO trends across quarters',
          'Standardized accounting reconciliations eliminating manual month-end copy-pasting across subsidiaries',
        ],
        impact: 'Close Cycle: Accelerates month-end executive MIS pack delivery from 15 days down to 24 hours',
        techChips: ['Month-End Close', 'Debtor Aging', 'Working Capital', 'Board Packs'],
      },
      {
        title: 'Exception & Anomaly Alerts',
        tag: 'Real-Time Protection',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
        badge: 'Trigger Alerts • Zero Revenue Leakage',
        description:
          'Instant proactive alerts triggered the moment key operational or financial thresholds are breached: critical raw material stockouts, sudden gross margin drops on major orders, overdue receivables crossing 90 days, or abnormal scrap spikes.',
        points: [
          'Customizable threshold rules monitoring unusual voucher entries, negative cash balances, or discount overrides',
          'Real-time SMS and WhatsApp urgent dispatch to plant heads and CFOs when critical metrics cross limits',
          'Automated customer credit hold triggers preventing sales dispatch to chronic defaulting accounts',
          'Audit trail logging documenting all threshold exceptions and management acknowledgment timestamps',
        ],
        impact: 'Risk Mitigation: Catches margin leaks and inventory stockouts before they affect quarterly EBITDA',
        techChips: ['Threshold Triggers', 'Anomaly Detection', 'Credit Alerts', 'Instant Notification'],
      },
    ],
    pipelineSteps: [
      {
        step: '01',
        title: 'KPI Definition & Metric Alignment',
        description: 'Working with founders and C-suite to isolate the top 10 north-star metrics that actually drive enterprise profitability.',
      },
      {
        step: '02',
        title: 'Automated Data Extraction',
        description: 'Configuring daily scheduled queries pulling directly from accounting, warehouse, CRM, and plant systems.',
      },
      {
        step: '03',
        title: 'Report Layout & Template Engineering',
        description: 'Designing high-readability visual formats optimized for quick mobile viewing by busy promoters.',
      },
      {
        step: '04',
        title: 'Automated Dispatch Triggers',
        description: 'Setting up automated mail servers and WhatsApp Business webhooks to dispatch PDFs and summary cards without human intervention.',
      },
    ],
    techStack: ['Python Reporting Engines', 'SQL Server', 'Power BI Paginated Reports', 'WhatsApp Business API', 'SendGrid / SMTP'],
    faqs: [
      {
        question: 'Can the daily flash report be sent directly to our WhatsApp group?',
        answer: 'Yes! We configure secure webhooks using WhatsApp Business API to deliver concise text summaries and PDF attachments directly to management groups every morning.',
      },
      {
        question: 'What if yesterday’s data is not entered into the system on time?',
        answer: 'Our reporting engine includes built-in data completeness checks. If a branch fails to enter vouchers by cutoff time, an automated reminder is triggered to the branch manager.',
      },
    ],
  },
  {
    id: 'rpa-development',
    slug: 'rpa-development',
    title: 'RPA Development & Digital Workers',
    shortDescription: 'Custom robotic software bots that handle repetitive, rules-based tasks: invoice processing, government portal scraping, and cross-system data entry.',
    heroHeadline: 'Deploy 24/7 Digital Workers to Automate Repetitive Back-Office Tasks',
    heroSubhead: 'Stop wasting talented human staff on mindless data entry. We build resilient RPA bots that extract data from vendor PDFs, reconcile bank statements, and sync entries across portals with 100% accuracy.',
    iconName: 'Bot',
    category: 'reporting-automation',
    metricsBanner: {
      metric: '100% Accuracy',
      label: 'Zero human transcription and typing errors across bot runs',
    },
    deliverables: [
      {
        title: 'Vendor Invoice & OCR Data Extraction',
        tag: 'AI Document Vision',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
        badge: 'Automated Ingestion • 99.8% Extraction Accuracy',
        description:
          'Intelligent software bots that automatically monitor incoming accounts payable inboxes, extract invoice line items, tax numbers, and dates from complex PDF formats, and post draft purchase vouchers directly into your ERP system.',
        points: [
          'Automated inbox monitoring detecting new PDF, TIFF, and scanned vendor bills in real time',
          'AI-powered optical character recognition (OCR) extracting line items, PO numbers, GSTINs, and totals',
          'Automated three-way matching against purchase orders and goods receipt notes (GRN)',
          'Instant flagging of discrepancies, tax miscalculations, or duplicate invoices for human sign-off',
        ],
        impact: 'Processing Speed: Slashes vendor invoice entry time from 15 minutes down to 10 seconds per bill',
        techChips: ['Azure AI Vision', 'Tesseract OCR', 'Python Playwright', 'ERP Voucher Sync'],
      },
      {
        title: 'Bank & Ledger Reconciliation Bots',
        tag: 'Automated Clearing',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
        badge: 'Multi-Bank Sync • Daily Reconciliation',
        description:
          'Digital workers that securely download daily bank statements from multiple corporate bank portals, parse transaction narrations, match amounts against pending ERP ledger vouchers, and flag unallocated entries with zero manual effort.',
        points: [
          'Automated 2FA-compliant login and encrypted download of daily multi-bank statement feeds',
          'Intelligent fuzzy matching algorithms linking bank transaction narrations to customer account ledgers',
          'Automated creation of debit/credit clearing vouchers for verified matching transactions',
          'Daily exception reconciliation reports dispatched to finance managers highlighting unmapped deposits',
        ],
        impact: 'Zero Reconciliation Backlog: 100% daily bank reconciliation completed before start of business',
        techChips: ['Bank Portal RPA', 'Fuzzy Narration Match', 'Auto Clearing', 'Ledger Sync'],
      },
      {
        title: 'Portal Scraping & Compliance Bots',
        tag: 'Government & Vendor Sites',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
        badge: 'Headless Browser • 24/7 Scraping',
        description:
          'Resilient bots that navigate vendor portals, GST/tax compliance sites, e-way bill platforms, and carrier logistics dashboards to fetch tracking numbers, compliance certificates, and billing acknowledgments without tying up employees.',
        points: [
          'Headless browser automation handling dynamic Javascript forms, dropdowns, and download triggers',
          'Automated bulk e-way bill generation and GST portal 2B vs purchase register reconciliation',
          'Scheduled carrier portal queries tracking shipment milestones and updating internal ERP status',
          'Automated capture and archiving of compliance filing acknowledgments and receipt tokens',
        ],
        impact: 'Compliance SLA: 100% on-time statutory portal filings with zero late fees or penalties',
        techChips: ['Selenium / Playwright', 'Portal Automation', 'GST 2B Matcher', 'Logistics Scraper'],
      },
      {
        title: 'Cross-System Data Sync Bots',
        tag: 'API-Free Integration',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
        badge: 'Legacy Bridge • Zero Human Error',
        description:
          'Bridges between legacy desktop systems and modern web applications that have no native APIs. Bots simulate human operator keystrokes and UI navigation to transfer transaction records between software with complete accuracy.',
        points: [
          'Seamless record synchronization between legacy desktop ERPs, billing portals, and modern CRMs',
          'Simulated UI inputs with dynamic delay safeguards and error-retry recovery logic',
          'Full transaction audit logs capturing screenshots and state dumps on rare application crashes',
          'Runs silently in scheduled background headless worker instances 24 hours a day, 7 days a week',
        ],
        impact: 'Zero Re-Keying: Eliminates 40+ hours per week of manual dual-entry across disconnected software',
        techChips: ['Desktop Automation', 'Power Automate Desktop', 'Error Recovery', 'Audit Logger'],
      },
    ],
    pipelineSteps: [
      {
        step: '01',
        title: 'Process Mining & Feasibility',
        description: 'Identifying repetitive, rule-based tasks with high volume and clear decision trees for rapid automation.',
      },
      {
        step: '02',
        title: 'Bot Scripting & Exception Rules',
        description: 'Engineering robust bot workflows with comprehensive edge-case handling for missing fields and unexpected popups.',
      },
      {
        step: '03',
        title: 'Staging Environment Dry Runs',
        description: 'Testing the bot against hundreds of historical real-world documents to tune OCR accuracy and execution speed.',
      },
      {
        step: '04',
        title: 'Production Deployment & Bot Monitoring',
        description: 'Deploying the bot with audit logs, screen recordings on failure, and automatic notification alerts on completion.',
      },
    ],
    techStack: ['Python Playwright & Selenium', 'Microsoft Power Automate', 'Tesseract / Azure AI Vision OCR', 'Pandas', 'Windows Task Scheduler'],
    faqs: [
      {
        question: 'Do we need to buy expensive RPA platform licenses like UiPath?',
        answer: 'Not necessarily! For most mid-market requirements, we build tailored, license-free Python digital workers or leverage Microsoft Power Automate Desktop, saving you thousands of dollars in recurring software fees.',
      },
      {
        question: 'What happens if a vendor changes their invoice layout?',
        answer: 'Our OCR bots employ intelligent key-value matching and machine learning models that locate invoice numbers, dates, GSTINs, and totals even if the layout shifts.',
      },
    ],
  },
  {
    id: 'business-intelligence',
    slug: 'business-intelligence',
    title: 'Business Intelligence Strategy',
    shortDescription: 'Comprehensive data roadmap design, metric governance, KPI dictionary creation, and self-service analytics architecture for scaling enterprises.',
    heroHeadline: 'Architect a Unified Data Strategy to Power Your Next Phase of Growth',
    heroSubhead: 'Business Intelligence is more than pretty graphs. We align your data architecture with strategic company goals, building governance frameworks and single sources of truth that scale with your enterprise.',
    iconName: 'LineChart',
    category: 'data-engineering',
    metricsBanner: {
      metric: '3x - 5x ROI',
      label: 'Measurable annual return generated through optimized capital & inventory',
    },
    deliverables: [
      {
        title: 'Enterprise KPI Dictionary & Governance',
        tag: 'Metric Integrity',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
        badge: 'Unified Definitions • Audit Governance',
        description:
          'Establish unambiguous, organization-wide formulas for critical financial and operational metrics: EBITDA, Gross Margin, CAC, Debtor Dwell Time, Inventory Turnover, and OEE. Eliminates departmental arguments over conflicting figures forever.',
        points: [
          'Exhaustive documentation of metric calculations, rounding rules, data sources, and business owners',
          'Elimination of conflicting definitions between accounting, sales operations, and plant management',
          'Central data catalog mapping business terms to exact underlying database tables and column names',
          'Automated data validation tests flagging discrepancies before metrics reach the board of directors',
        ],
        impact: 'Single Truth: 100% executive consensus on financial KPI calculations across board meetings',
        techChips: ['Data Governance', 'KPI Dictionary', 'Data Catalog', 'Formula Validation'],
      },
      {
        title: 'Self-Service Analytics Framework',
        tag: 'Empowered Teams',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
        badge: 'Governed Semantics • Zero IT Tickets',
        description:
          'Empower business heads and functional managers to build their own ad-hoc reports safely. We construct pre-calculated, enterprise-governed semantic models so teams slice and dice data without opening IT tickets or risking data corruption.',
        points: [
          'Pre-aggregated semantic models with certified dimensions, facts, and business measures',
          'Role-based sandboxes allowing analysts to explore ad-hoc scenarios without affecting production data',
          'Intuitive drag-and-drop report builders with standardized corporate theme templates and color palettes',
          'Comprehensive training masterclasses upskilling internal business analysts to independent proficiency',
        ],
        impact: 'Analyst Autonomy: 85% drop in routine ad-hoc report request tickets sent to central IT teams',
        techChips: ['Semantic Modeling', 'Self-Service BI', 'Certified Datasets', 'Analyst Sandboxes'],
      },
      {
        title: 'Data Maturity & Modernization Roadmap',
        tag: '12-Month Strategy',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
        badge: 'Phased Sprints • High ROI Focus',
        description:
          'A clear, prioritized 12-month phased transition roadmap moving your enterprise from reactive, backward-looking spreadsheet firefighting to proactive real-time analytics, automated alerts, and predictive business intelligence.',
        points: [
          'Current-state data maturity audit evaluating infrastructure, data hygiene, and team capability gaps',
          'High-ROI quick-win identification prioritizing projects that unlock measurable cash within 30 days',
          'Phased architectural evolution plan mapping legacy ERP modernization to cloud data warehouses',
          'Quarterly milestone deliverables with clear budget estimates and return-on-investment benchmarks',
        ],
        impact: 'Strategic Clarity: Prioritizes data initiatives delivering proven 3x to 5x annual capital ROI',
        techChips: ['Data Maturity Audit', 'Modernization Roadmap', 'ROI Prioritization', 'Architecture Design'],
      },
      {
        title: 'Vendor & Stack Selection Advisory',
        tag: 'Unbiased Advisory',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
        badge: 'Cost-Optimized • Zero Vendor Lock-In',
        description:
          'Vendor-agnostic technical advisory helping leadership select the right database, cloud lakehouse, ETL, and BI visualization platforms for their exact scale, transaction volume, internal talent, and budget without expensive shelfware.',
        points: [
          'Objective total-cost-of-ownership (TCO) comparisons between Microsoft, AWS, Snowflake, and open-source stacks',
          'Right-sizing compute and storage tiers to prevent unexpected recurring cloud licensing bills',
          'Evaluation of ERP compatibility (Tally, SAP, Oracle, Dynamics) against required reporting speed',
          'Negotiation support and license optimization ensuring your business only pays for what it actually uses',
        ],
        impact: 'Cost Efficiency: Saves 30% to 50% on recurring cloud software and data licensing overhead',
        techChips: ['Vendor Evaluation', 'TCO Modeling', 'License Optimization', 'Cloud Architecture'],
      },
    ],
    pipelineSteps: [
      {
        step: '01',
        title: 'Executive Stakeholder Interviews',
        description: 'Engaging board members, promoters, and department leaders to understand strategic business objectives.',
      },
      {
        step: '02',
        title: 'Data Landscape Assessment',
        description: 'Auditing existing databases, data quality, security policies, and team capabilities.',
      },
      {
        step: '03',
        title: 'Target Architecture Blueprint',
        description: 'Designing end-to-end data pipeline architectures that integrate all current and planned operational tools.',
      },
      {
        step: '04',
        title: 'Phased Implementation Sprints',
        description: 'Delivering incremental value in 30-day sprint cycles with rapid user adoption and training.',
      },
    ],
    techStack: ['Data Governance Frameworks', 'Star Schema Data Modeling', 'Power BI Enterprise', 'SQL Data Lakehouses', 'Azure / AWS Cloud Data Platforms'],
    faqs: [
      {
        question: 'How long does a full BI Strategy engagement take?',
        answer: 'Our initial Data Audit & Strategy Roadmap is delivered in just 2 to 3 weeks, including the full KPI dictionary, architectural blueprint, and prioritized implementation plan.',
      },
      {
        question: 'Can you work alongside our existing internal IT and accounting team?',
        answer: 'Yes! We act as specialized data architects who elevate and train your internal staff rather than replacing them, leaving your team with self-sufficient capabilities.',
      },
    ],
  },
];

