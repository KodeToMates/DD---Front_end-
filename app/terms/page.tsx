import React from 'react';
import type { Metadata } from 'next';
import LegalPageLayout, { type LegalSection } from '@/components/shared/LegalPageLayout';
import { CONTACT_INFO } from '@/data/contact';

export const metadata: Metadata = {
  title: 'Terms of Engagement | DataLive Intelligence',
  description:
    'Terms governing website access, discovery consultations, intellectual property ownership, NDAs, and BI engineering engagements with DataLive Intelligence.',
  alternates: {
    canonical: 'https://dataliveintelligence.com/terms',
  },
};

const TERMS_SECTIONS: LegalSection[] = [
  {
    id: 'acceptance',
    title: 'Acceptance of Terms',
    paragraphs: [
      'By accessing or using https://dataliveintelligence.com ("the Website"), operated by DataLive Intelligence ("DataLive", "we", "our", or "us"), you agree to these Terms of Engagement and our Privacy Policy.',
      'If you do not agree with these terms, please discontinue using the Website.',
    ],
  },
  {
    id: 'website-scope',
    title: 'Informational Website & Service Scope',
    paragraphs: [
      'This Website presents information regarding DataLive Intelligence’s consulting and automation offerings — including Power BI Solutions, SQL Database Engineering, Excel Automation, Automated MIS Reporting, RPA Bots, and System Integrations.',
      'Case studies, turnaround examples (such as 21-day sprint benchmarks), and technical blog articles reflect typical workflows and are provided for informational evaluation rather than guaranteed outcomes for every environment.',
    ],
  },
  {
    id: 'discovery-and-sow',
    title: 'Consultations, Proposals & Client Engagements',
    paragraphs: [
      'Submitting a contact form, booking a 30-minute discovery call, or initiating a WhatsApp message does not establish a binding service contract.',
      'All paid BI, SQL, or RPA engagements are governed exclusively by a separately executed Statement of Work (SOW), Master Services Agreement, and Mutual Non-Disclosure Agreement (NDA) specifying exact deliverables, timelines, milestones, and fees.',
    ],
  },
  {
    id: 'ip-ownership',
    title: 'Intellectual Property & Deliverable Ownership',
    paragraphs: [
      'All public Website materials — including DataLive branding, graphics, visual layout, copy, and technical articles — are the intellectual property of DataLive Intelligence or its licensors and may not be republished or mirrored without permission.',
      'For contracted client projects, upon full settlement of agreed fees under an executed SOW, clients receive 100% ownership of custom-built Power BI (.pbix) files, SQL scripts, and dedicated reporting workflows engineered specifically for their engagement, excluding pre-existing DataLive utility libraries.',
    ],
    note: 'You retain full control over your source files and databases — we do not lock clients into proprietary SaaS subscriptions to view their own Power BI dashboards.',
  },
  {
    id: 'nda-confidentiality',
    title: 'Confidentiality & Mutual Non-Disclosure',
    paragraphs: [
      'Before accessing any client ERP, Tally, database, or financial export, DataLive Intelligence requires a signed Mutual NDA.',
      'Please avoid sending confidential production credentials, database passwords, or sensitive customer PII through unencrypted public website inquiry forms.',
    ],
  },
  {
    id: 'acceptable-use',
    title: 'Acceptable Website Use',
    paragraphs: [
      'Visitors agree not to misuse the Website or its contact endpoints. Prohibited actions include:',
    ],
    bullets: [
      {
        label: 'Automated Spam or Scraping',
        text: 'Submitting automated bot inquiries or scraping Website content at scale.',
      },
      {
        label: 'Security Interference',
        text: 'Probing, attacking, or attempting unauthorized access to our contact APIs or hosting environment.',
      },
    ],
  },
  {
    id: 'third-party-platforms',
    title: 'Third-Party Tools & External Links',
    paragraphs: [
      'Our solutions integrate with enterprise software ecosystems (such as Microsoft Power BI, SQL Server, Tally, SAP, and UiPath) that remain subject to your organization’s respective third-party software licenses.',
      'Links to external websites (including WhatsApp and partner websites such as KodeToMates) lead to independent platforms outside DataLive Intelligence’s control.',
    ],
  },
  {
    id: 'liability',
    title: 'Disclaimer & Limitation of Liability',
    paragraphs: [
      'This public Website and its educational articles are provided "as is" without warranties of uninterrupted availability or fitness for a specific commercial purpose.',
      'To the maximum extent permitted by law, DataLive Intelligence shall not be liable for indirect, incidental, or consequential damages arising from general use of this public informational Website. Liability for contracted client work is governed solely by the executed SOW.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law & Jurisdiction',
    paragraphs: [
      'These Terms of Engagement are governed by the laws of India. Any disputes relating to the Website shall fall under the jurisdiction of the competent courts in Coimbatore, Tamil Nadu, India.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact Information',
    paragraphs: [
      `For engagement inquiries, NDA requests, or legal notices, contact us at ${CONTACT_INFO.email} or ${CONTACT_INFO.phoneDisplay} (${CONTACT_INFO.address}).`,
    ],
  },
];

export default function TermsOfEngagementPage() {
  return (
    <LegalPageLayout
      eyebrow="Terms & Governance"
      titleStart="Terms of"
      titleAccent="Engagement"
      subtitle="Clear rules covering website usage, NDA-first discovery calls, SOW governance, and 100% client ownership of custom BI deliverables."
      lastUpdated="November 28, 2026"
      effectiveDate="November 28, 2026"
      activeDoc="terms"
      highlights={[
        'Paid projects require a signed Mutual NDA and written Statement of Work (SOW).',
        'Clients receive 100% ownership of custom Power BI (.pbix) and SQL deliverables.',
        'Governed by the laws of India (Coimbatore, Tamil Nadu jurisdiction).',
      ]}
      sections={TERMS_SECTIONS}
    />
  );
}
