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
        title: 'Executive Mobile & Desktop Views',
        description: 'Tailored responsive dashboards allowing promoters and CFOs to view cash runway, EBITDA, sales velocity, and collections on their smartphone.',
      },
      {
        title: 'High-Performance DAX Semantic Models',
        description: 'Clean star-schema architectures optimized for fast aggregation across millions of transaction rows without lagging.',
      },
      {
        title: 'Automated Gateway & Scheduled Refreshes',
        description: 'Zero manual data exports. Microsoft On-Premises Data Gateway configured to refresh reports multiple times daily directly from your local servers.',
      },
      {
        title: 'Row-Level Security (RLS) & Governance',
        description: 'Role-based access ensuring regional branch managers only see their branch figures while central leadership sees company-wide consolidated metrics.',
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
        description: 'Consolidate multiple ERP instances, billing databases, and third-party SaaS tools into a structured relational warehouse.',
      },
      {
        title: 'Automated ETL & Staging Pipelines',
        description: 'Scheduled batch pipelines that clean, validate, and normalize raw transaction logs every night with zero human intervention.',
      },
      {
        title: 'Query Tuning & Index Optimization',
        description: 'Resolve database timeouts and lagging reports by analyzing execution plans, defragmenting indexes, and rewriting inefficient joins.',
      },
      {
        title: 'Automated Disaster Recovery & Backups',
        description: 'Hardened point-in-time recovery setups, encrypted cloud backups, and automated integrity validation scripts.',
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
        description: 'One-click data refresh that automatically imports, merges, cleans, and structures data from dozens of source folders.',
      },
      {
        title: 'Custom VBA & Macro Automation',
        description: 'Reliable scripts that automate repetitive tasks: generating customized PDF invoices, sending bulk emails, and formatting monthly packs.',
      },
      {
        title: 'Error-Proof Financial Models',
        description: 'Dynamic 3-statement models, DCF valuations, and cash flow projections with formula protection and audit trails.',
      },
      {
        title: 'Excel-to-Database Connectors',
        description: 'Direct SQL query connections inside Excel so your analysts query live company data without fragile CSV file exports.',
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
        description: 'A crisp, 1-page executive summary sent every morning at 8:00 AM detailing yesterday’s revenue, collections, dispatches, and bank balances.',
      },
      {
        title: 'Departmental KPI Scorecards',
        description: 'Automated weekly scorecards comparing targets against actual performance for Sales, Production, Procurement, and HR.',
      },
      {
        title: 'Automated Month-End MIS Packs',
        description: 'Consolidated P&L, balance sheet trends, debtor aging schedules, and variance explanations compiled automatically within 24 hours of month-end.',
      },
      {
        title: 'Exception & Anomaly Alerts',
        description: 'Instant alerts triggered when key thresholds are breached (e.g., critical inventory stockouts, sudden margin drops, overdue receivables > 90 days).',
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
        description: 'Bots that automatically read incoming PDF invoices from email, extract line items, and create draft purchase entries in your ERP.',
      },
      {
        title: 'Bank & Ledger Reconciliation Bots',
        description: 'Automated bots that download bank statements, match narration and amounts against ledger vouchers, and flag discrepancies.',
      },
      {
        title: 'Portal Scraping & Compliance Bots',
        description: 'Bots that log into vendor portals, GST/tax sites, or carrier logistics platforms to fetch tracking numbers and compliance files.',
      },
      {
        title: 'Cross-System Data Sync Bots',
        description: 'Bridges between legacy systems with no open APIs, simulating human keystrokes to transfer transaction records safely.',
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
        description: 'Establishing standardized, undisputed definitions for critical business metrics (e.g. Gross Margin, Customer Acquisition Cost, Churn, OEE).',
      },
      {
        title: 'Self-Service Analytics Framework',
        description: 'Empowering department heads with secure, governed data models so they can build their own ad-hoc reports without IT bottlenecks.',
      },
      {
        title: 'Data Maturity & Modernization Roadmap',
        description: 'A 12-month phased transition plan moving your enterprise from reactive firefighting to predictive intelligence.',
      },
      {
        title: 'Vendor & Stack Selection Advisory',
        description: 'Unbiased recommendations on cloud databases, BI tools, and data warehousing platforms suited to your exact scale and budget.',
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

